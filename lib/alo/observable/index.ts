// Originally created by dongwoo-kim (https://github.com/dongwoo-kim)
// https://github.com/nhn/tui.grid/blob/55278fba5303fcef928715cbb003aeed0964dd29/src/helper/observable.ts

import { Dictionary } from "../util/types";
import {
  ObserverInfo,
  ObservableInfo,
  Observable,
  BooleanSet,
  ObserveFn,
  AvoidFn
} from "./types";
import { isPlainObject } from "../util/isPlainObject";

const generateObserverId = (() => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return `@observer${lastId}`;
  };
})();

const generateObservableId = (() => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return `@observable${lastId}`;
  };
})();

// store all observer info
const observerInfoMap: Dictionary<ObserverInfo> = {};

const observableInfoMap: Dictionary<ObservableInfo<any>> = {};

// observerId stack for managing recursive observing calls
const observerIdStack: string[] = [];

function isObservable<T>(resultObj: T): resultObj is Observable<T> {
  return (
    resultObj !== null &&
    typeof resultObj === "object" &&
    resultObj["__observableId"] != null
  );
}

let observerAvoid = false;
const avoid: AvoidFn = function() {
  if (observerAvoid) {
    return;
  }

  observerAvoid = true;
  observerIdStack.pop();
};

function callObserver(observerId: string) {
  observerAvoid = false;
  observerIdStack.push(observerId);

  const observerInfo = observerInfoMap[observerId];

  if (observerInfo.running) {
    console.error("Bad observer", observerInfo.fn);
    throw new Error(`Bad recursion detected in observer`);
  }

  observerInfo.running = true;
  observerInfo.fn(avoid);
  observerInfo.running = false;

  if (!observerAvoid) {
    observerIdStack.pop();
  }
  observerAvoid = false;
}

function setValue<T, K extends keyof T>(
  storage: T,
  observerIdSet: BooleanSet,
  key: keyof T,
  value: T[K]
) {
  if (storage[key] !== value) {
    storage[key] = value;
    notifyObservers(observerIdSet);
  }
}

export function observe(
  fn: ObserveFn,
  notifyInBatches: string | boolean = false
) {
  const observerId = generateObserverId();
  observerInfoMap[observerId] = {
    running: false,
    notifyInBatches,
    fn,
    targetObserverIdSets: []
  };
  callObserver(observerId);

  // return unobserve function
  return () => {
    observerInfoMap[observerId].targetObserverIdSets.forEach(idSet => {
      delete idSet[observerId];
    });
  };
}

export const removeProp = function<
  T extends Observable<any>,
  K extends keyof T
>(obj: T, key: K) {
  const { storage, propObserverIdSetMap } = observableInfoMap[
    obj.__observableId
  ];
  delete storage[key];
  delete obj[key];
  delete propObserverIdSetMap[key as any];
};

export const setProp = function<T extends Observable<any>, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K],
  deep = false
) {
  const { storage, propObserverIdSetMap } = observableInfoMap[
    obj.__observableId
  ];
  const observerIdSet: BooleanSet = (propObserverIdSetMap[key as any] =
    propObserverIdSetMap[key as any] || {});

  if (deep) {
    const isObject = value !== null && typeof value === "object";
    if (isObject) {
      if (Array.isArray(value)) {
        for (const itemKey of Object.keys(value)) {
          var itemValue = value[itemKey];
          if (!isPlainObject(itemValue)) {
            continue;
          }

          value[itemKey] = observable(itemValue);
        }
      } else {
        value = observable(value);
      }
    }
  }

  if (storage[key] !== undefined && obj[key] !== undefined) {
    console.log("already existing");
    setValue(storage, observerIdSet, key, value);
    return;
  }

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      const observerId = observerIdStack[observerIdStack.length - 1];
      if (observerId && !observerIdSet[observerId]) {
        observerIdSet[observerId] = true;
        observerInfoMap[observerId].targetObserverIdSets.push(observerIdSet);
      }
      return storage[key];
    }
  });

  (storage as any)[key] = value;
  Object.defineProperty(obj, key, {
    set(value) {
      setValue(storage, observerIdSet, key, value);
    }
  });
};

export function observable<T extends Dictionary<any>>(
  obj: T,
  deep: boolean = true
): Observable<T> {
  if (isObservable(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    throw new Error("Array object cannot be Reactive");
  }

  const observableId = generateObservableId();
  const resultObj = {} as T;

  observableInfoMap[observableId] = {
    storage: {},
    propObserverIdSetMap: {}
  };

  Object.defineProperty(resultObj, "__observableId", {
    value: observableId
  });

  for (const key of Object.keys(obj)) {
    setProp(resultObj, key, obj[key], deep);
  }

  return resultObj as Observable<T>;
}

// Used to optimize observer-to-observer calls:
// For nested notifyObservers calls, the observers will be called only once in the most outward notifyObservers call
const plannedObserverCalls = {};
let nextPlanIdx = 0;
const notifyObservers = function(observerIdSet) {
  let planIdx = nextPlanIdx++;

  let notify = true;
  if (batchInfo.count > 0) {
    notify = false;
  }

  const observerIds = Object.keys(observerIdSet);
  for (const observerId of observerIds) {
    if (plannedObserverCalls[observerId] != null) {
      continue;
    }

    plannedObserverCalls[observerId] = planIdx;
  }
  for (const observerId of observerIds) {
    const notifyInBatches = observerInfoMap[observerId].notifyInBatches;
    if (
      notify ||
      notifyInBatches === true ||
      notifyInBatches === batchInfo.batchId
    ) {
      if (plannedObserverCalls[observerId] !== planIdx) {
        continue;
      }
      callObserver(observerId);
    } else {
      if (batchInfo.observerIds.indexOf(observerId) >= 0) continue;
      batchInfo.observerIds.push(observerId);
    }

    delete plannedObserverCalls[observerId];
  }
};

export function notify<T extends Observable<any>, K extends keyof T>(
  obj: T,
  key: K
) {
  if (isObservable(obj)) {
    const propObserverIdSetMap =
      observableInfoMap[obj.__observableId].propObserverIdSetMap[key as string];
    notifyObservers(propObserverIdSetMap);
  }
}

const batchInfo: { count: number; observerIds: string[]; batchId: any } = {
  count: 0,
  observerIds: [],
  batchId: null
};
export const batch = function(fn: () => void) {
  batchStart();
  fn();
  batchEnd();
};

export const batchStart = function() {
  batchInfo.count++;
};

export const batchEnd = function() {
  if (batchInfo.count === 0) return;

  batchInfo.count--;
  if (batchInfo.count === 0) {
    let observerIds = batchInfo.observerIds;
    batchInfo.observerIds = [];
    for (const observerId of observerIds) {
      callObserver(observerId);
    }
  }
};

export function getOriginObject<T>(obj: Observable<T>) {
  const result = {} as T;
  const storage = observableInfoMap[obj.__observableId].storage;
  for (const key of Object.keys(storage)) {
    const value = storage[key];
    result[key] = isObservable(value) ? getOriginObject(value) : value;
  }

  return result;
}

let computedPropsBatchIdx = 0;
export const computedProps = function<
  P extends {
    [key: string]: (
      obj: any,
      value: any,
      key: any,
      avoid: AvoidFn,
      init: boolean
    ) => any;
  }
>(propsObj: P, batch: boolean = true): { [K in keyof P]: ReturnType<P[K]> } {
  const batchId = "computed-props-" + computedPropsBatchIdx++;

  let obj = {};
  const objKeys = Object.keys(propsObj);
  for (const key of objKeys) {
    obj[key] = null;
  }

  obj = observable(obj, false);

  for (const key of objKeys) {
    let init = true;
    observe(function(avoid) {
      let prevBatchId = batchInfo.batchId;
      if (batch) {
        batchStart();
        batchInfo.batchId = batchId;
      }

      const value = propsObj[key](
        obj,
        observableInfoMap[obj["__observableId"]].storage[key],
        key,
        avoid,
        init
      );
      avoid();
      obj[key] = value;

      if (batch) {
        batchEnd();
        batchInfo.batchId = prevBatchId;
      }
    }, batchId);
    init = false;
  }

  return obj as any;
};

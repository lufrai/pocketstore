import { el, list } from "@lufrai/redom";
import { CREATE_ACTION_LIST_ITEM } from "./item";
import { STORE, setSelectedActionId } from "../store";
import { BlueprintEntity, createBlueprint } from "wald";
import { ObservingComponent } from "../../redom";
import { GLOBAL_DEVTOOLS_STATE } from "../ioc";

export const ACTION_LIST = createBlueprint({
  create: ({ ioc }) =>
    new ActionList({
      store: ioc.get({ blueprint: STORE }),
      globalState: ioc.get({ blueprint: GLOBAL_DEVTOOLS_STATE }),
      createItem: ioc.get({ blueprint: CREATE_ACTION_LIST_ITEM })
    })
});

export class ActionList extends ObservingComponent {
  actionCountCache = 0;
  store: BlueprintEntity<typeof STORE>;
  globalState: BlueprintEntity<typeof GLOBAL_DEVTOOLS_STATE>;
  createItem: BlueprintEntity<typeof CREATE_ACTION_LIST_ITEM>;

  listEl = list(
    el("ul", { style: { margin: "0", padding: "0" } }),
    (() => {
      return this.createItem(this.onSelectItem);
    }) as any,
    "id"
  );

  el = el(
    "div",
    {
      style: {
        height: "100%",
        "overflow-y": "auto"
      }
    },
    this.listEl
  );

  constructor({
    store,
    globalState,
    createItem
  }: {
    store;
    globalState;
    createItem: BlueprintEntity<typeof CREATE_ACTION_LIST_ITEM>;
  }) {
    super();

    this.store = store;
    this.globalState = globalState;
    this.createItem = createItem;

    this.observe(() => {
      const selectedStore = this.store.getState().selectedStore;
      const timemachine = this.globalState.timemachines[selectedStore];
      if (!timemachine) return;

      const timemachineState = timemachine.getStore().getState();

      const sortedTrackedActions = Object.values(timemachineState.actions).sort(
        (a, b) => {
          return a.order - b.order;
        }
      );
      this.listEl.update(sortedTrackedActions);

      const sortedTrackedActionsLength = sortedTrackedActions.length;
      if (this.actionCountCache != sortedTrackedActionsLength) {
        this.el.scrollTop = this.el.scrollHeight;
      }
      this.actionCountCache = sortedTrackedActionsLength;
    });
  }

  onSelectItem = (e, actionId) => {
    this.store.dispatch(setSelectedActionId(actionId));
  };
}

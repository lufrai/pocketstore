/* global describe, it */

var Alo = require('./../../main/alo.js')
import ObjectRelation from './../../lib/util/object-relation.js'

var alo = new Alo()
var u = alo.util
var assert = require('assert')

describe('ObjectRelation', function () {
  var objectRelation1 = new ObjectRelation('tree', 'leaf', function (leaf) {
    return (leaf instanceof Leaf)
  })
  var objectRelation2 = new ObjectRelation('leaf', 'tree', function (tree) {
    return (tree instanceof Tree)
  })
  var Tree = function Tree () {
    objectRelation1.constructParent(this)
  }
  Tree.prototype.getId = null
  objectRelation1.registerParentPrototype(Tree.prototype)
  var Leaf = function Leaf () {
    objectRelation2.constructParent(this)
  }
  Leaf.prototype.getId = null
  objectRelation2.registerParentPrototype(Leaf.prototype)
  describe('addFunction', function () {
    describe('with valid object', function () {
      it('should register that object', function () {
        var tree = new Tree()
        var leaf = new Leaf()
        tree.addLeaf(leaf)
        assert.equal(1, u.values(tree._leafRelations).length)
      })
    })
  })
  describe('removeFunction', function () {
    describe('without argument', function () {
      it('should remove all objects', function () {
        var tree = new Tree()
        var leaf = new Leaf()
        tree.addLeaf(leaf)
        tree.removeLeaf()
        assert.equal(0, u.values(tree._leafRelations).length)
      })
    })
  })
  describe('relatedToFunction', function () {
    it('should return true for related objects', function () {
      var store = alo.createStore()
      var sub = store.createSubscription()
      assert.equal(true, store.relatedToSubscription(sub))
      assert.equal(true, store.relatedToSubscription(sub.getId()))
    })
    it('should return false for unrelated objects', function () {
      var store = alo.createStore()
      var sub = alo.createSubscription()
      assert.equal(false, store.relatedToSubscription(sub))
      assert.equal(false, store.relatedToSubscription(sub.getId()))
    })
  })
  describe('index functions', function () {
    describe('indexOf', function () {
      it('should return the correct index', function () {
        var store = alo.createStore()
        var sub1 = store.createSubscription()
        var sub2 = store.createSubscription()
        var sub3 = store.createSubscription()
        assert.equal(1, store.indexOfSubscription(sub2.getId()))
        assert.equal(2, store.indexOfSubscription(sub3))
      })
    })
    describe('setIndexOf', function () {
      it('should set a new index', function () {
        var store = alo.createStore()
        var sub1 = store.createSubscription()
        var sub2 = store.createSubscription()
        var sub3 = store.createSubscription()
        store.setIndexOfSubscription(sub3, 1)
        assert.equal(1, store.indexOfSubscription(sub3))
        assert.equal(2, store.indexOfSubscription(sub2.getId()))
        assert.equal(-1, store.indexOfSubscription('test'))
      })
    })
  })
})

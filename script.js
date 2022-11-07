/**
 * With Constructor approach
 */
function itemsCollection() {
  this.items = [];
  this.add = function (name) {
    if (this.items.indexOf(name) === -1) {
      this.items.push(name);
    }
  };

  this.remove = function (name) {
    let index = this.items.indexOf(name);
    if (index) {
      this.items.splice(index, 1);
    }
  };

  this.getNames = function () {
    return this.items;
  };
}
function itemsBehaviors() {}
itemsBehaviors.prototype = new itemsCollection();
var itemsInstance = new itemsBehaviors();
console.log(itemsInstance.items);
itemsInstance.add("shoaib");
itemsInstance.add("temp");
console.log(itemsInstance.getNames());
itemsInstance.add("ahmad");
console.log(itemsInstance.getNames());
itemsInstance.remove("temp");
console.log(itemsInstance.getNames());
console.log("==========================");

/**
 * Without Constructor approach
 * @returns
 */
function itemsCollection() {
  let items = [];
  let obj = {};
  obj.add = function (name) {
    if (items.indexOf(name) === -1) {
      items.push(name);
    }
  };

  obj.remove = function (name) {
    let index = items.indexOf(name);
    if (index) {
      items.splice(index, 1);
    }
  };

  obj.getNames = function () {
    return items;
  };

  return obj;
}
var itemsInstance = itemsCollection();
console.log(itemsInstance.items);
itemsInstance.add("shoaib");
itemsInstance.add("temp");
console.log(itemsInstance.getNames());
itemsInstance.add("ahmad");
console.log(itemsInstance.getNames());
itemsInstance.remove("temp");
console.log(itemsInstance.getNames());

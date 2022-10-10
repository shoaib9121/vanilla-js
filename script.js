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
console.log(itemsInstance.add("shoaib"));
console.log(itemsInstance.add("temp"));

console.log(itemsInstance.getNames());
console.log(itemsInstance.add("ahmad"));
console.log(itemsInstance.getNames());
console.log(itemsInstance.remove("temp"));
console.log(itemsInstance.getNames());


var Queue = function  () {
  // this = Object.create(Person.prototype)
  var root = this;

  root = {
    front: 0,
    back: 0,
    storage: {}
  };
  // return this

};

Queue.prototype.methods = {

  enqueue: function(value) {
    if(typeof value !== 'undefined') {
      this.storage[this.back] = value;
      this.back += 1;
    }
  },

  dequeue: function() {
    if(this.front !== this.back) {
      var temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return temp;
    }
  },

  size: function() {
    return this.back-this.front;
  }


};









// var Queue = function() {
//   var bigQueue = Object.create(Queue.queueMethods);
//   return bigQueue;
// };

// Queue.queueMethods = {

// //properties
//   front: 0,
//   back: 0,
//   storage: {},

//   enqueue: function(value) {
//     if(typeof value !== 'undefined') {
//       this.storage[this.back] = value;
//       this.back += 1;
//     }
//   },

//   dequeue: function() {
//     if(this.front !== this.back) {
//       var temp = this.storage[this.front];
//       delete this.storage[this.front];
//       this.front += 1;
//       return temp;
//     }
//   },

//   size: function() {
//     return this.back-this.front;
//   }

// };
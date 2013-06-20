var Queue = function  () {
  // this = Object.create(Queue.prototype)
    this.front = 0;
    this.back = 0;
    this.storage = {};
  // return this
};

Queue.prototype = {

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
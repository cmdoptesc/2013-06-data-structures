var Queue = function() {
  var bigQueue = Object.create(Queue.queueMethods);
  bigQueue.front = 0;
  bigQueue.back = 0;
  bigQueue.storage = {};
  // THESE ARE NO LONGER NEEDED B/C THEY'RE DELAGATED ABOVE (by using Object.create)
  // bigQueue.enqueue = makeQueue.queueMethods.enqueue,
  // bigQueue.dequeue = makeQueue.queueMethods.dequeue,
  // bigQueue.size = makeQueue.queueMethods.size;
  return bigQueue;
};

Queue.queueMethods = {

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
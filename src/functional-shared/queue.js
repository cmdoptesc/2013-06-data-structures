var makeQueue = function(){
  var queue = {
    front: 0,
    back: 0,
    storage: {},
    enqueue: makeQueue.queueMethods.enqueue,
    dequeue: makeQueue.queueMethods.dequeue,
    size: makeQueue.queueMethods.size
  };

  // assigning the properties individually rather than using _.extend
  return queue;
};


makeQueue.queueMethods = {

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
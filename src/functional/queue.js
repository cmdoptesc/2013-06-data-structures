var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  // to keep track of relative ends of the queue (like human-centipede ))<>(()
  var front = 0;
  var back = 0;

  queue.enqueue = function(value){
    if(typeof value !== 'undefined') {
      storage[back] = value;
      back += 1;
    }
  };

  queue.dequeue = function(){
    if(front !== back) {
      var temp = storage[front];
      delete storage[front];
      front += 1;
      return temp;
    }
  };

  queue.size = function(){
    return back-front;
  };

  return queue;
};

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
    storage[back] = value;
    back += 1;
    console.log("enqueue:front: " , front);
    console.log("enqueue:back: " , back);
  };

  queue.dequeue = function(){
    var temp = storage[front];
    delete storage[front];
    /*delete storage[front]; // this is wrong and will iterate before the deletioun*/
    if(front !== back) { front += 1; }
    console.log("dequeue:front: " , front);
    console.log("dequeue:back: " , back);
    return temp;
  };

  queue.size = function(){
    return back-front;
  };

  // queue.front = front;
  // queue.back = back;
  queue.storage = storage;

  return queue;
};

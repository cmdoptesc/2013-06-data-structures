var makeQueue = function () {
  var storage = {};
  var size;
  var front = 0;
  var back = 0;

  var queue = {
    enqueue: function (value) {
      if (typeof value !== 'undefined') {
        storage[back] = value;
        back += 1;
      }
    },

    dequeue: function () {
      if (front !== back) {
        var temp = storage[front];
        delete storage[front];
        front += 1;
        return temp;
      }
    },

    size: function () {
      return back - front;
    }
  };

  return queue;
};
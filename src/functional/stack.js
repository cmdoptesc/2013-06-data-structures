var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    storage[size] = value;
    size += 1;
  };

  stack.pop = function(){
    var temp = storage[size-1];
    delete storage[size-1];
    size -= 1;
    return temp;
  };

  stack.size = function(){
    return size;
  };



  return stack;
};
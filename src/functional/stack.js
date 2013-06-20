var makeStack = function(){
  var storage = {};

  var size = 0;

  var stack = {
    push : function(value){
      if (typeof value !== 'undefined') {
        storage[size] = value;
        size += 1;
      }
    },

    pop : function(){
      var temp = storage[size-1];
      delete storage[size-1];
      if(size>0) { size -= 1; }
      return temp;
    },

    size : function(){
      return size;
    }
  };

  return stack;
};
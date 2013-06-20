var makeStack = function(){
  var stack = {
    push: makeStack.stackMethods.push,
    pop: makeStack.stackMethods.pop,
    size: makeStack.stackMethods.size,
    storage: {},
    bigMoneySize: 0
  };

  return stack;
};

makeStack.stackMethods = {

  push: function(value){
    if (typeof value !== 'undefined') {
      this.storage[this.bigMoneySize] = value;
      this.bigMoneySize += 1;
    }
  },

  pop: function(){
    var temp = this.storage[this.bigMoneySize-1];
    delete this.storage[this.bigMoneySize-1];
    if(this.bigMoneySize>0) { this.bigMoneySize -= 1; }
    return temp;
  },

  size: function(){
    return this.bigMoneySize;
  }

};
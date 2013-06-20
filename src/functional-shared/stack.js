var makeStack = function(){
  var stack = {
    storage:{},
    bigMoneySize:0
  };
  // using _.extend rather than assigning the properties individually
  // also, be mindful of the order of passing arguments
  return _.extend(stack, makeStack.stackMethods);
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
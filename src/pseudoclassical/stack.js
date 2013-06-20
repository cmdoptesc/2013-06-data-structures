var Stack = function() {
  this._storage = {};
  this._bigMoneySize = 0;
};

Stack.prototype = {
  push : function(value){
    if (typeof value !== 'undefined') {
      this._storage[this._bigMoneySize] = value;
      this._bigMoneySize += 1;
    }
  },

  pop : function() {
    var temp = this._storage[this._bigMoneySize-1];
    delete this._storage[this._bigMoneySize-1];
    if(this._bigMoneySize>0) { this._bigMoneySize -= 1; }
    return temp;
  },

  size : function() {
    return this._bigMoneySize;
  }
};
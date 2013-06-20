describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should add pushed items to the top of the stack', function() {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).to.equal(3);
    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(1);
  });

  it('size should not increase if push is called with no arguments', function() {
    stack.push();
    expect(stack.size()).to.equal(0);
  });

  it('size should increase by 1 when push is called with valid arguments', function() {
    stack.push(1);
    expect(stack.size()).to.equal(1);
    stack.push(1);
    expect(stack.size()).to.equal(2);
    stack.push(1);
    expect(stack.size()).to.equal(3);
  });

  it('should only accept one argument for push', function() {
    expect(stack['push'].length).to.equal(1);
  });

  it('should remove popped items from the top of the stack', function() {
    stack.push("a");
    stack.push("b");
    stack.push(12);
    expect(stack.pop()).to.equal(12);
  });

// size should dec by 1 with every pop

it('should push and pop multiple items in the right order (LIFO)', function() {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).to.equal(3);
  stack.push(3);
  expect(stack.pop()).to.equal(3);
  expect(stack.pop()).to.equal(2);
  expect(stack.pop()).to.equal(1);
});

it('size should not be less than zero when popping from an empty stack', function() {
  stack.pop();
  expect(stack.size()).to.equal(0);
});

it('size should decrease by one for each valid call to pop()', function() {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.size()).to.equal(3);
  stack.pop();
  expect(stack.size()).to.equal(2);
  stack.pop();
  expect(stack.size()).to.equal(1);
  stack.pop();
  expect(stack.size()).to.equal(0);
  stack.pop();
  expect(stack.size()).to.equal(0);
  stack.pop();
  expect(stack.size()).to.equal(0);
});


it('should not error when popping from an empty stack', function() {
  expect(stack.pop()).to.equal(undefined);
});



  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly
});

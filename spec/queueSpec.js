describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('should add enqueue items to the end of the queue', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    // debugger;
    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
  });

  it('should remove dequeue items from the front of the queue', function() {
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue(12);
    expect(queue.dequeue()).to.equal("a");
    expect(queue.dequeue()).to.equal("b");
    expect(queue.dequeue()).to.equal(12);
  });

  it('should enqueue and dequeue multiple items in the right order (FIFO)', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).to.equal(1);
    queue.enqueue(3);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.equal(3);
  });

  it('should not error when dequeueing from an empty queue', function() {
    queue.enqueue(1);
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).to.equal(undefined);
    expect(queue.size()).to.equal(0);
  });


  it('size should not increase if enqueue is called with no arguments', function() {
    queue.enqueue();
    expect(queue.size()).to.equal(0);
  });

  it('size should increase by 1 when enqueue is called with valid arguments', function() {
    queue.enqueue();
    expect(queue.size()).to.equal(0);
    queue.enqueue(1);
    expect(queue.size()).to.equal(1);
    queue.enqueue(19);
    expect(queue.size()).to.equal(2);
  });

  it('should only accept one argument for enqueue', function() {
    expect(queue['enqueue'].length).to.equal(1);
  });


  it('size should not be less than zero when dequeue()-ing from an empty queue', function() {
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  });

  it('size should decrease by one for each valid call to dequeue()', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    // debugger;
    expect(queue.size()).to.equal(3);
    queue.dequeue();
    expect(queue.size()).to.equal(2);
    queue.dequeue();
    expect(queue.size()).to.equal(1);
  });
});

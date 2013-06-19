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

  // Hey! Add tests here that thoroughly test the functionality of your queue
});

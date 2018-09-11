describe('Memoize', () => {
  let add;
  let memo;

  beforeEach(() => {
    add = sinon.spy((a, b) => a + b)
    memo = memoize(add)
  })

  it('returns a function', () => {
    expect(memo).to.be.a('function')
  })

  it('adds two numbers', () => {
    expect(memo(1, 3)).to.equal(4)

    sinon.assert.calledOnce(add)
    sinon.assert.calledWith(add, 1, 3)
  })

  it('caches result', () => {
    expect(memo(1, 3)).to.equal(4)
    expect(memo(1, 3)).to.equal(4)

    sinon.assert.calledOnce(add)
  })

  it('caches result when sum is 0', () => {
    expect(memo(1, -1)).to.equal(0)
    expect(memo(1, -1)).to.equal(0)

    sinon.assert.calledOnce(add)
  })

  it('caches values distinctly', () => {
    expect(memo(1, 3)).to.equal(4)
    expect(memo(2, 3)).to.equal(5)
    expect(memo(3, 1)).to.equal(4)

    sinon.assert.calledThrice(add)
  })

  it('optimizes recursive functions', () => {
    memo = memoize(n => n < 2 ? n : memo(n - 1) + memo(n - 2))

    const t0 = performance.now()
    const fib45 = memo(45)
    const t1 = performance.now()

    expect(memo(45)).to.equal(1134903170)
    expect(t1 - t0).to.be.below(2000)
  })
})

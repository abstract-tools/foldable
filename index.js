function fold (iter, init, fun) {
  let acc = init

  for (const value of iter) {
    acc = fun(acc, value)
  }

  return acc
}

module.exports = fold

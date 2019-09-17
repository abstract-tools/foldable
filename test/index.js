const fold = require('../index')
const test = require('tape')

const testStr = 'abcdef'
const testArr = [1, 2, 3]
const testObj = { a: 1, b: 2, c: 3 }
const testMap = new Map([[1, 2], [3, 4], [5, 6]])
const testSet = new Set([1, 2, 3])

test('fold', t => {
  const sumArrResult = fold(testArr, 0, (acc, value) => {
    return acc + value
  })

  t.same(sumArrResult, 6)

  const countStrResult = fold(testStr, 0, acc => {
    return acc + 1
  })

  t.same(countStrResult, 6)

  const mapObjResult = fold(Object.entries(testObj), {}, (acc, [key, value]) => ({
    ...acc,
    [key]: value + 1
  }))

  t.same(mapObjResult, { a: 2, b: 3, c: 4 })

  const concatMapResult = fold(testMap, [], (acc, [key, value]) => {
    return acc.concat([key, value])
  })

  t.same(concatMapResult, [1, 2, 3, 4, 5, 6])

  const mapSetResult = fold(testSet, [], (acc, value) => {
    acc.push(value + 1)
    return acc
  })

  t.same(mapSetResult, [2, 3, 4])

  t.end()
})

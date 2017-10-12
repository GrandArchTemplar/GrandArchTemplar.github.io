'use strict'

function sTop ([x]) {
  return x
}

function nextSTop ([ignored, y]) {
  return y
}

function add (xs, x) {
  return [x, ...xs]
}

function remove ([ignored, ...xs]) {
  return xs
}
function breakout(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == stopValue)
      break
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 10) {
      continue
    }

    scores[i]++
  }
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}

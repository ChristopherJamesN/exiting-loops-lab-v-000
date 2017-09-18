function breakout(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
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
  for (let i = 0; i < mostlyOne.length; i++) {
    if (mostlyOne[i] !== 1) {
      notOne = mostlyOne[i]
      break
    }
  }
}

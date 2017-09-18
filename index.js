function find(array, criteriaFunc) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
  }
}

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 10) {
    continue
  }

  scores[i]++
}

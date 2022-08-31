function smartJoin(array, joiner = ",", conjunction = "and") {
  array = [...array]
  if (array.length === 1) return array[0]
  else if (array.length === 2) return array.join(` ${conjunction} `)
  else {
    let str = ''
    while (array.length > 1) {
      str += array.shift() + joiner + ' '
    }
    str += conjunction + array[0]
  }
}
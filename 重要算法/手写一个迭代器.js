const createIterator = items => {
  const keys = Object.keys(items)
  // console.log(keys);
  const len = keys.length
  let pointer = 0

  return {
    next() {
      const done = pointer >= len
      const value = !done ? items[keys[pointer++]] : undefined
      return {
        value, done
      }
    }
  }
}

let list = [1, 5, 6, 8]
// console.log(Object.keys(list));

let iter = createIterator(list)
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
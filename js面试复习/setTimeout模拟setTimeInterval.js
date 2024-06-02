function newInterval(func, millseconds) {
  function inside() {
    func()
    setTimeout(inside, millseconds)
  }

  setTimeout(inside, millseconds)
}

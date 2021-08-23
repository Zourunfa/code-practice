function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {

  if (!l1 || !l2) {
    return l1 || l2
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2, l2.next)
    return l2
  }

};


// let l1 = new ListNode(1)

// l1.next = 2
// console.log(l1);
// l1.next.next = 2
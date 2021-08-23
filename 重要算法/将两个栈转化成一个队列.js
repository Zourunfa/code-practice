
var stack1 = []
var stack2 = []

function push(node) {
    // write code here
    //     假设推入1,2,3,4这几个元素进栈，那么栈顶元素是4,栈底是1
    if (node) {
        stack1.push(node)
    }
    return stack1
}

function pop() {
    // write code here
    // 将stack1的所有元素推到stack2中，此时stack2中的栈顶是1，栈底是4。
    while (stack1.length > 0) {
        //   debugger
        stack2.push(stack1.pop())
        // console.log(stack1,stack2);
    }
    //     此时将stack2的1 pop出来，刚好就满足了队列元素的先进先出的特性
    var res = stack2.pop()
    //     最后将stack2的退回到stack1
    while (stack2.length > 0) {
        stack1.push(stack2.pop())
        // console.log(stack1,stack2);
    }
    return res

}


// push(1);
// push(2);
// push(3);

// console.log(pop());
// console.log(pop());

// push(4)
// console.log(pop());
// push(5)

// console.log(pop());
// console.log(pop());

let map = new Map()
map.set('b', 2)

map['a'] = 1
map[1] = 's'
console.log(map.size);
console.log(map);
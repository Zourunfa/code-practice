// class Subject{
//   constructor(){
//     this.state = 1
//     this.observers = [] //能够被这个数组里面的多个观察者被观察
//   }
//   addObserver(observer){
//     this.observers.push(observer)
//   }
//   setState(state){
//     this.state = state
//     this.notifyAllObservers()
//   }
//   notifyAllObservers(){
//     this.observers.forEach((observer)=>{
//       observer.update()
//     })
//   }
// }

// class Observer{
//   constructor(name,subject){
//     this.name = name
//     this.subject = subject
//     this.subject.addObserver(this) //将自己添加到Subject中去才能观察它的状态
//   }
//   update(){
//     console.log(`${this.name} update state ${this.subject.state}`);
//   }
// }
// const sub = new Subject()
// const o1 = new Observer('observer1',sub)
// const o2 = new Observer('observer2',sub)
// const o3 = new Observer('observer3',sub)

// sub.setState(5)



class Subject {
  constructor(name) {
    this.name = name
    this.observers = []
    this.state = 1
  }
  addObserver(observer) {
    this.observers.push(observer)

  }
  noticeAllObservers() {
    this.observers.forEach((ob) => {
      ob.update()
    })
  }
  setState(state) {
    this.state = state
    this.noticeAllObservers()
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.addObserver(this)
  }
  update() {
    console.log(`${this.name} observer this state of ${this.subject.name} turn into ${this.subject.state}`);
  }
}
const sub = new Subject('sub')

const obj1 = new Observer('obj1', sub);
const obj2 = new Observer('obj2', sub);
const obj3 = new Observer('obj3', sub);

sub.setState(2)
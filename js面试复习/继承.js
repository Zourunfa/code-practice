// 构造方法继承
// 优点：1，可以传参给父类利用call的参数列表传递 2，避免了所有属性被实例共享
// 缺点：1,每创建一个实例  就要创造一个方法 2,只能继承父类的实例属性和方法，不能继承原型的属性和方法



// function Parent(name) {
//   this.name = name || 'default_name';

//   this.getInfo = function () {
//     return this.name
//   }
// }

// Parent.prototype.say = function () {
//   console.log('hello');
// }

// function Child(name) {
//   Parent.call(this, name)
// }

// var child1 = new Child(['a']);
// console.log(child1.name);// ["a"]
// // console.log(child1);
// // child1.say(); //报错 只能继承父类的实例属性和方法，不能继承原型的属性和方法
// // child1.name.push('Bob')
// console.log(child1.getInfo()); // ["a"]

// var child2 = new Child();
// console.log(child2.getInfo());//["default_name"]








// 原型链继承
// 特点：所有实例共享属性和方法

// function Parent(){
//   this.name = ['sartre']
// }

// Parent.prototype.getName = function(){
//   return this.name;
// }

// function Child(){

// }

// Child.prototype = new Parent()

// var child1 = new Child();
// console.log(child1.name); //["sartre"]

// child1.name.push('mark') 
// console.log(child1.name); // ["sartre", "mark"]

// var child2 = new Child();
// console.log(child2.name); // ["sartre", "mark"]











// 组合继承：融合前两者的有点，既可以共享原型方法而且不存在应用属性共享的问题
//   生成的实例既是子类的实例，优势父类的实例

// function Parent(name) {
//   this.name = name;
//   this.hobbies = ['guitar', 'run', 'ball'];
// }

// Parent.prototype.getName = function () {
//   console.log(this.name);
// }

// function Child(name, age) {
//   Parent.call(this, name);
//   this.age = age || 20;
// }

// // 弄懂原型和原型链的关系图 一下就能理解了
// Child.prototype = new Parent(); // 其实将这句话改成 Child.prototype = Object.create(Parent.prototype)
// 组合继承就变成寄生组合继承了
// child.prototype.constructor = Child;

// var child1 = new Child('sartre', '20');

// child1.hobbies.push('swim')

// console.log(child1.name);
// console.log(child1.age);
// console.log(child1.hobbies);

// var child2 = new Child('mark');

// console.log(child1.name);
// console.log(child1.age);
// console.log(child1.hobbies);


// 4，原型式继承

// function createObj(o){
//   function F(){
//   }

//   F.prototype = o;
//   return new F();
// }

// // 就是 ES5 Object.create 的模拟实现 将传入的对象作为创建的对象的原型

// // 缺点：
// // 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样

// var person = {
//   name:'kevin',
//   friends:['daisy','kelly']
// }

// var person1 = createObj(person);
// var person2 = createObj(person)

// person1.name = 'person1';
// console.log(person2.name); //kevin 这里不是引用类型所以 person2.name 没有改变

// person1.friends.push('taylor');

// console.log(person2.friends); // ["daisy", "kelly", "taylor"]






// 寄生式继承

// 这种方式的继承和构造函数继承的方式一样


// function createObj(o){
//   var clone = Object.create(o);
//   clone.sayName = function(){
//     console.log('hi');
//   }
//   return clone;
// }



// 寄生组合式继承

// 这种继承方法是组合继承的进一步改进
// 前面的组合继承的缺点就是：会调用两次父构造函数
//    第一次是设置子类型实例的原型的时候  Child.prototype = new Parent()
//    第二次是在创建子类型实例的时候    var child1 = new Child('kevin',18); 这里执行了new方法 那么就会
//      执行 Parent.call(this,name) 调用了 Parent构造函数

// 寄生组合继承也是有缺点的，如果想要继承的子构造函数上有原型方法，那么它继承
// 之后这些方法拿不到了，因为原型被重写了


// function inhert(parent, child) {
//   // 创建对象 创建父类原型的一个副本
//   var prototype = Object.create(parent.prototype)
//   // 增强对象，弥补因重写原型而失去的默认的constructor属性
//   prototype.constructor = child

//   child.prototype = prototype
// }


// function Parent(name) {
//   this.name = name
// }

// function Child(age) {
//   Parent.call(this, age)
//   this.age = age
// }
// inhert(Parent, Child)



function inherit(Parent, Child) {
  const prototype = Object.create(Parent.prototype)
  Child.prototype = prototype
  prototype.constructor = child
}

// // ES6 继承
// class Animal {
//   constructor(props) {
//     this.name = props.name || 'Bob'
//   }
//   eat() {
//     console.log(this.name + 'will eat pests');
//   }

// }

// class Bird extends Animal {
//   constructor(props, myAttr) {
//     super(props) //相当于获得父类的this指向
//     this.type = props.type || 'UnKnow'
//     this.attr = myAttr  // 自己的私有属性
//   }
//   //私有方法
//   flu() {
//     console.log(this.name + "are friendly to people");
//   }
//   // 私有方法
//   myAttrShow() {
//     console.log(this.type + '----' + this.attr);
//   }
// }
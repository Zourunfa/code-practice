
// 工厂模式是我们最常用的实例化对象模式了，
// 是用工厂方法代替new操作的一种模式，工厂模式就相当于创建实例对象的new
/**
 * 工厂模式的构造函数和创建者分离，符合开放封闭的原则
 */
class Creator{
  create(name){
    return new Productor(name)
  }
}

class Productor{
  constructor(name){
    this.name = name
  }
  init(){
    console.log(`this product was produced,its name is ${this.name}`);
  }
  usefor(application){
    console.log(`${this.name} is used for ${application}`);
  }
  quality(){
    console.log('it is good');
  }
}
let creator = new Creator()

let ball = creator.create('basketBall')
ball.init()
ball.usefor('篮球比赛')
ball.quality()

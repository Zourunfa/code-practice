class Circle{
  draw(){
      console.log("画一个圆");
  }
}

class Decorator{
  constructor(circle){
      this.circle = circle
  }
  setRedBorder(){
      this.circle.draw()
      // console.log(this.circle);
      this.redBorder(this.circle)
  }
  redBorder(circle){
    
      console.log(`加上红色边界`);
  }

}

const circle = new Circle()
circle.draw()
console.log('--------------------------');
const decoratedCircle = new Decorator(circle)
decoratedCircle.setRedBorder()
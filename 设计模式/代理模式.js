class Realimg{
  constructor(fileName){
    this.fileName = fileName
    this.load()
  }
  display(){
    console.log(`this is ${this.fileName}`);
  }
  load(){
    console.log(`loading.... ${this.fileName}`);
  }
}

class ProxyImg{
  constructor(){
    this.proxy = new Realimg(fileName)
  }
  display(){
    this.proxy.display()
  }
}

const proxyImg = new ProxyImg('libi.png')
proxyImg.display()


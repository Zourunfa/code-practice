let imgOnload = function () {
  let imgs = document.querySelectorAll('img')
  // console.log(img);
  imgs.forEach(img => {
    // console.log(img.dataset.src);
    // 获取
    // console.log(img.getBoundingClientRect().top);
    // window.innerHeiight 整个视口的高度
    // img.getBoundingClientRect().top 元素距离视口的高度
    // console.log(window.innerHeight);
    if (img.getBoundingClientRect().top < window.innerHeight) {
      img.src = img.dataset.src
    }
  })
}

function scollImg(fn) {
  let timer = null
  let context = this
  let args = arguments
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, 200)
  }
}

// 会在网页加载完毕之后立刻执行的操作，即当html加载完毕后
// 立即执行某个方法
window.onload = imgOnload
// onscroll事件 会在元素滚动时 执行函数
window.onscroll = scollImg(imgOnload)
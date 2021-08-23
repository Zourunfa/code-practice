function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(JSON.parse(this.response));
      } else {
        reject(this);
      }
    };
  });
}

ajax("http://localhost:8888/php/user.php?name=向军")
  .then(user => ajax(`http://localhost:8888/php/houdunren.php?id=${user["id"]}`))
  .then(lesson => {
    console.log(lesson);
  });




let quickSort = function (arr, left, right) {
  let point = Math.floor((left + right) / 2);
  let i = left,
    j = right;

  while (left < right) {
    while (arr[i] < point) {
      i++;
    }
    while (arr[j] > point) {
      j--;
    }

    if (left < right) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
    if (i < right) quickSort(arr, i, right);
    if (left < j) quickSort(arr, left, j);
  }
};

let a = [1, 2, 8, 5, 7, 9];
quickSort(a, 0, a.length - 1);
console.log(a);

// let quickSort = function (arr, left, right) {
//   let point = Math.floor((left + right) / 2);
//   let i = left,
//     j = right;

//   while (left < right) {
//     while (arr[i] < point) {
//       i++;
//     }
//     while (arr[j] > point) {
//       j--;
//     }

//     if (left < right) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j--;
//     }
//     if (i < right) quickSort(arr, i, right);
//     if (left < j) quickSort(arr, left, j);
//   }
// };

// let a = [1, 2, 8, 5, 7, 9];
// quickSort(a, 0, a.length - 1);
// console.log(a);



// ============ 你原代码的问题分析 ============
/*
你的代码有以下问题：
1. point 应该是基准值 arr[Math.floor((left + right) / 2)]，而不是索引
2. while 循环条件应该是 i <= j，而不是 left < right
3. 交换条件应该是 i <= j，而不是 left < right
4. 递归调用的位置不对，应该在 while 循环外面

这些问题会导致排序失败或死循环
*/

// ============ 正确的快速排序实现（带详细注释）============

/**
 * 快速排序函数
 * @param {Array} arr - 需要排序的数组
 * @param {number} left - 左边界索引
 * @param {number} right - 右边界索引
 */
function quickSortCorrect(arr, left, right) {
  // 递归终止条件：如果左边界大于等于右边界，说明区间内只有0个或1个元素，无需排序
  if (left >= right) return
  
  // 选择基准值（pivot）：取中间位置的元素作为基准
  // 注意：这里取的是元素的值，不是索引
  let pivot = arr[Math.floor((left + right) / 2)]
  
  // 定义两个指针：i 从左边开始，j 从右边开始
  let i = left
  let j = right
  
  // 分区过程：将小于基准的元素放左边，大于基准的元素放右边
  while (i <= j) {  // 注意：这里是 i <= j，不是 left < right
    
    // 从左向右找到第一个大于等于基准值的元素
    while (arr[i] < pivot) {
      i++  // 如果当前元素小于基准值，继续向右移动
    }
    
    // 从右向左找到第一个小于等于基准值的元素
    while (arr[j] > pivot) {
      j--  // 如果当前元素大于基准值，继续向左移动
    }
    
    // 如果 i 还在 j 的左边或相等，说明找到了需要交换的一对元素
    if (i <= j) {
      // 交换 arr[i] 和 arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]]
      
      // 交换后，两个指针都向中间移动一位
      i++
      j--
    }
  }
  // 此时 i 和 j 已经交错，数组被分成了两部分
  // 左边部分：[left, j]，都小于等于基准值
  // 右边部分：[i, right]，都大于等于基准值
  
  // 递归排序左半部分
  if (left < j) {
    quickSortCorrect(arr, left, j)
  }
  
  // 递归排序右半部分
  if (i < right) {
    quickSortCorrect(arr, i, right)
  }
}

// ============ 测试代码 ============
let testArr = [3, 7, 8, 5, 2, 1, 9, 5, 4]
console.log('排序前:', testArr)
quickSortCorrect(testArr, 0, testArr.length - 1)
console.log('排序后:', testArr)

// ============ 更简洁的快速排序写法 ============
function quickSortSimple(arr) {
  // 递归终止条件
  if (arr.length <= 1) return arr
  
  // 选择基准值（这里选择中间元素）
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr[pivotIndex]
  
  // 分成三部分：小于基准、等于基准、大于基准
  const left = []
  const middle = []
  const right = []
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      middle.push(arr[i])
    }
  }
  
  // 递归排序左右两部分，然后合并
  return [...quickSortSimple(left), ...middle, ...quickSortSimple(right)]
}

// 测试简洁版本
let testArr2 = [3, 7, 8, 5, 2, 1, 9, 5, 4]
console.log('简洁版排序前:', testArr2)
console.log('简洁版排序后:', quickSortSimple(testArr2))




function quickSort(arr){
  let pointIndex = Math.floor(arr.length/2)
  let point = arr[pointIndex]

  let left = []
  let right = []
  let middle = []

  for(let i=0; i<arr.length;i++){
    if(arr[i]<point){
      left.push(arr[i])
    }else if(arr[j]>point){
      right.push(arr[j])
    }else{
      middle.push(arr[i])
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)]
}
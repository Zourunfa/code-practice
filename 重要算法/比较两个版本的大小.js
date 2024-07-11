function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

compareVersion('1.0.3', '1.0.5') // 返回 -1
compareVersion('1.0.7', '1.0.5') // 返回 1
compareVersion('1.1.3', '1.0.5') // 返回 1
console.log(compareVersion('1.0.3', '1.0.5'))
console.log(compareVersion('1.0.7', '1.0.5'))
console.log(compareVersion('1.1.3', '1.0.5'))

const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];

function unique(arr) {
  const res = arr.reduce((pres, cur) => {
    console.log(pres);
    const ids = pres.map(item => item.id)
    return ids.includes(cur.id) ? pres : [...pres, cur]
  }, [])
  return res;
}
console.log(unique(responseList));
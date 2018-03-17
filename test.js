

let arr = [];
let d = others.datajson;
if (d && d !== '') {
  let type = self.$tool.getType(d);
  if (type === 'array' && d.length > 0)
    for (let k in d[0]) arr.push({
      label: k,
      value: k
    });
}
setting.options = arr;
console.log(arr);
if (cb) cb();

//深拷贝
const deepClone = (initalObj) => {
  const obj = {};
  if (typeof initalObj !== "object") {
    return initalObj;
  }
  for (const key in initalObj) {
    if (typeof initalObj[key] === "object") {
      //对数组特殊处理
      if (Array.isArray(initalObj[key])) {
        //用map方法返回新数组，将数组中的元素递归
        obj[key] = initalObj[key].map((item) => this.deepClone(item));
      } else {
        //递归返回新的对象
        obj[key] = this.deepClone(initalObj[key]);
      }
    } else if (typeof initalObj[key] === "function") {
      //返回新函数
      obj[key] = initalObj[key].bind(obj);
    } else {
      //基本类型直接返回
      obj[key] = initalObj[key];
    }
  }
  return obj;
};

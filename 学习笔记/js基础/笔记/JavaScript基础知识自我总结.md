# 一、javaScript基础知识自我总结

### 1.continue和break

- continue：跳出本次循环，不再执行下面的代码，直接开始下一个循环
- break：直接结束循环

```javascript
for (let i = 0; i < 10; i++) {
  //如果为真，跳过循环体的剩余部分。
  if (i % 2 == 0) continue;
  alert(i); // 1，然后 3，5，7，9
}
```



### 2.alert,prompt,confirm（返回值的问题）

- confirm：返回值为true/false

```javascript
let result = confirm("yes or no"); //返回值为true/false
```

- prompt:显示信息要求用户输入文本，类型为字符串。点击确定返回文本，点击取消或按下 Esc 键返回 null。

- 用法：

  - result = prompt(title, [default]);

    ——title 显示给用户的文本

     ——default 可选的第二个参数，指定 input 框的初始值。（中括号代表可选）

- ```javascript
  //点确定则返回输入的值，取消则返回null,不输入则返回空字符串
  let result = prompt("请确认", "jing");
  alert(result);
  console.log(result === "");
  ```

- 注意：模态窗口的确切位置由浏览器决定。通常在页面中心。窗口的确切外观也取决于浏览器。我们不能修改它。

### 3.数据类型转换

1. 字符串转换 
   - 转换发生在输出内容的时候，也可以通过 String(value) 进行显式转换。

2. 数字型转换

   - 转换发生在进行算术操作时，也可以通过 Number(value) 进行显式转换。

   - ```javascript
     Number(undefined) = NAN
     Number('skldjgfoi') = NAN(任意字符串)//无法识别的字符串
     Number(null) = 0
     Number('123') = 123
     Number('') = 0
     ```

3. 布尔值转换

   - 为false的值：null,undefined,'',0      （'0','null','undefined','  '为true）

4. 有 8 种数据类型：

   - Number
   - bigInt
   - String
   - boolean
   - null
   - undefined
   - object和symbol

5. `typeof` 运算符返回值的类型，但有两个例外：

   ```javascript
   typeof null == "object" // JavaScript 编程语言的设计错误
   typeof function(){} == "function" // 函数被特殊对待
   ```

   

### 4. if判断是否为空

1. if (…) 语句会计算圆括号内的表达式，并将计算结果转换为布尔型。

- 数字 0、空字符串 ""、null、undefined 和 NaN 都会被转换成 false。因为他们被称为 “falsy” 值。

  其他值被转换为 true，所以它们被称为 “truthy”。

- 数字0是false,字符串‘0’是true

- ```javascript
  //判断数组[]
  let list = []; //返回值是true,所以数组应该用length是否为0来考虑
  if (list) {
    console.log(true);
  } else {
    console.log(false);
  }
  ```

- ```javascript
  //判断对象{},使用objece.keys()函数转换成数组
  let obj = {}; //返回值是true，所以空对象不能这么用
  if (obj) {
    console.log("obj是", true);
  } else {
    console.log("obj是", true);
  }
  /* 
  let data = {};
  let arr = Object.keys(data);
  alert(arr.length == 0);//true
   */
  ```

### 5.运算符

1. +号用于两个字符串

- 只要其中一个运算元是字符串，那么另一个运算元也将被转化为字符串

  ```javascript
  */
  let a = "jiang";
  let b = "Su";
  let c = a + b;
  console.log(c); //'jiangSu'
  /* =========================== */
  a = "1";
  b = 2;
  c = a + b;
  console.log(c); //'12'
  /* =========================== */
  c = 1 + 2 + "3";
  console.log(c); //'33'
  /* =========================== */
  a = "1" + 2 + 3;
  console.log(a); //'123'
  ```

2.+号作为一元运算符

- 放在变量前面，它的效果和 Number(...) 相同，但是更加简短。

  ```javascript
  let a = "23424";
  console.log(typeof a, a);//string 23424
  a = +a;
  console.log(typeof a, a);//number 23424
  ```

### 3.自增运算符

```javascript
let a = 0;
let b = a++;
console.log(a); //1
console.log(b); //0
```

### 4.减法只能做数学运算

```javascript
let a;
a = "" + 1 + 0;
console.log("test1:", a); //10

a = "" - 1 + 0;
console.log("test2", a); //-1,减法 -（像大多数数学运算一样）只能用于数字，它会使空字符串 "" 转换为 0

a = " -9  " - 5;
console.log("test3", a); //-14

a = "jing" - 5;
console.log("test4", a); // NaN
```

# 二、函数

### 1.默认参数

- 方式一：直接给默认值

  ```javascript
  function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  showMessage("Ann"); // Ann: no text given
  ```

- 方法二：间接判断

  ```javascript
  function showMessage(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
    alert( from + ": " + text );
  }
  
  function showMessage(from, text) {
    // 如果 text 能转为 false，那么 text 会得到“默认”值
    text = text || 'no text given';
    ...
  }
  ```

### 2. return返回值

- 指令 `return` 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码（分配给上述代码中的 `result`）。

- 只使用 `return` 但没有返回值也是可行的。但这会导致函数立即退出。

- **空值的** `return` **或没有** `return` **的函数返回值为** `undefined`

  ```javascript
  //函数没有return关键字
  function doNothing() { /* 没有代码 */ }
  alert( doNothing() === undefined ); // true
  
  //函数没有return的值
  function doNothing() {
    return;
  }
  alert( doNothing() === undefined ); // true
  ```

### 3.函数表达式(函数后有没有括号含义完全不同)

```javascript
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行（为什么不行呢）
```

(1)行声明创建了函数，并把它放入到变量 sayHi`。

(2) 行将 `sayHi` 复制到了变量 `func`。请注意：`sayHi` 后面没有括号。如果有括号，`func = sayHi()` 会把 `sayHi()` 的调用结果写进`func`，而不是 `sayHi` **函数** 本身。` 

(3)现在函数可以通过 `sayHi()` 和 `func()` 两种方式进行调用。

### 4.
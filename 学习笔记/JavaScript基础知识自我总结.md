



# 一、代码风格

### 1.嵌套层级

- for循环嵌套条件语句

```javascript
//例子一
for (let i = 0; i < 10; i++) {
  if (cond) {
    ... // <- 又一层嵌套
  }
} 
//修改
for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  ...  // <- 没有额外的嵌套
}
  
//例子二
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}
//修改
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```



# 二、javaScript基础知识自我总结

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

# 三、函数

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

# 四、对象

### 1. 方括号

- 基础使用

  ```javascript
  let user = {
    name: "John",
    age: 30,
  };
  user.name === user['name']//true
  ```

- 进阶使用

  ```javascript
  let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // 访问变量
  alert( user[key] ); // John（如果输入 "name"）
  ```

### 2.属性存在性测试与“in” 操作符

- 基础方法：对象的一个显著的特点就是其所有的属性都是可访问的。如果某个属性不存在也不会报错！访问一个不存在的属性只是会返回 `undefined`。这提供了一种普遍的用于检查属性是否存在的方法 —— 获取值来与 undefined 比较：

  ```javascript
  let user = {};
  
  alert( user.noSuchProperty === undefined ); // true 意思是没有这个属性
  ```

- in操作符

  - 语法：`"key" in object`

  - ```javascript
    let user = { name: "John", age: 30 };
    
    alert( "age" in user ); // true，user.age 存在
    alert( "blabla" in user ); // false，user.blabla 不存在。
    ```

  - 注意：`in` 的左边必须是 **属性名**。通常是一个带引号的字符串。

    如果我们省略引号，则意味着将测试包含实际名称的变量。（类似于vue中的冒号绑定）

    ```javascript
    let user = { age: 30 };
    
    let key = "age";
    alert( key in user ); // true，从 key 获取属性名并检查这个属性
    ```

  - 通常，检查属性是否存在时，使用严格比较 `"=== undefined"` 就够了。但在一种特殊情况下，这种方式会失败，而 `"in"` 却可以正常工作。

    那就是属性存在，但是存储值为 `undefined`：

    ```javascript
    let obj = {
      test: undefined
    };
    
    alert( obj.test ); // 显示 undefined，所以属性不存在？
    
    alert( "test" in obj ); // true，属性存在！
    ```

### 3.“for…in” 循环

### 4.复制和合并，Object.assign

- 复制一个对象变量会创建指向此对象的另一个引用。

  那如果我们需要复制一个对象呢？创建一份独立的拷贝，一份克隆？

  这也是可行的，但是有一点麻烦，因为 JavaScript 中没有支持这种操作的内置函数。实际上，我们很少这么做。在大多数时候，复制引用都很好用。

  但如果我们真想这么做，就需要创建一个新的对象，然后遍历现有对象的属性，在原始级别的状态下复制给新的对象。

  像这样:

  ```javascript
  let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // 新的空对象
  
  // 复制所有的属性值
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // 现在的复制是独立的了
  clone.name = "Pete"; // 改变它的值
  
  alert( user.name ); // 原对象属性值不变
  ```

- 用 [Object.assign](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 来实现

  - 语法：Object.assign(dest,[ src1, src2, src3...])

  - 参数 `dest` 和 `src1, ..., srcN`（你需要多少就可以设置多少，没有限制）是对象。

  - 这个方法将 `src1, ..., srcN` 这些所有的对象复制到 `dest`。换句话说，从第二个参数开始，所有对象的属性都复制给了第一个参数对象，然后返回 `dest`。

    ```javascript
    let user = { name: "John" };
    
    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };
    
    // 把 permissions1 和 permissions2 的所有属性都拷贝给 user
    Object.assign(user, permissions1, permissions2);
    
    // 现在 user = { name: "John", canView: true, canEdit: true }
    ```

  - 如果用于接收的对象（`user`）已经有了同样属性名的属性，已有的则会被覆盖：

    ```javascript
    let user = { name: "John" };
    
    // 覆盖 name，增加 isAdmin
    Object.assign(user, { name: "Pete", isAdmin: true });
    
    // 现在 user = { name: "Pete", isAdmin: true }
    ```

  - 我们可以用 `Object.assign` 来替代循环赋值进行简单的克隆操作：

    ```javascript
    let user = {
      name: "John",
      age: 30
    };
    
    let clone = Object.assign({}, user);
    ```

### 5.检查空对象

- 写一个 `isEmpty(obj)` 函数，当对象没有属性的时候返回 `true`，否则返回 `false`。

  ```javascript
  let schedule = {};
  
  alert( isEmpty(schedule) ); // true
  
  schedule["8:30"] = "get up";
  
  alert( isEmpty(schedule) ); // false
  ```

  

### 6.总结

- 删除属性：`delete obj.prop`。

- 检查是否存在给定键的属性：`"key" in obj`。

- 遍历对象：`for(let key in obj)` 循环。

- 其他：对象是通过引用被赋值或复制的。换句话说，变量存储的不是“对象的值”，而是值的“引用”（内存地址）。所以复制这样的变量或者将其作为函数参数进行传递时，复制的是引用，而不是对象。基于复制的引用（例如添加/删除属性）执行的所有的操作，都是在同一个对象上执行的。

  我们可以使用 `Object.assign` 或者 [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep) 进行“真正的复制”（一个克隆）。

  我们在这一章学习的叫做“基本对象”，或者就叫对象。

  JavaScript 中还有很多其他类型的对象：

  - `Array` 用于存储有序数据集合，
  - `Date` 用于存储时间日期，
  - `Error` 用于存储错误信息。
  - ……等等。
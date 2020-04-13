### 一、基本语法

#### 1.v-once

- 该指令后面不需要跟任何表达式(比如之前的v-for后面是由跟表达式的)

- 该指令表示元素和组件(组件后面才会学习)只渲染一次，不会随着数据的改变而改变。

#### 2.v-pre

- v-pre用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法

- {{msg}可以正常显示，而不是被解析为vue的插值语法

  ```
  <p>{{msg}}</p>
  <p v-pre>{{msg}}</p>
  ```

#### 3.v-cloak

- cloak: 斗篷，在某些情况下，我们浏览器可能会直接显然出未编译的Mustache标签。

  ```
  <style scoped>
  [v-cloak]{
    display: none;
  }
  </style>
  
  <p v-cloak>{{msg}}</p>
  ```

#### 4.v-on传参问题

- 当通过methods中定义方法，以供@click调用时，需要**注意参数问题**：

- 情况一：如果该方法不需要额外参数，那么方法后的()可以不添加。

  - 但是注意：如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去

- 情况二：如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件。

  

  ```
  情况一：
  <p @click="first">{{msg}}</p>
  first(event){
          console.log(event);//取得event对象
        },
  
  情况二：
  
  <p @click="second(10,$event)">{{msg}}</p>
  
  second(n,event){
          console.log(event);//取得event对象
        }
  ```

  

#### 5.登录切换的input复用的问题

- 2019最全视频--34

- 解决方法：给DOM元素增加key属性

#### 6.v-for

​	v-for迭代数字时，是从1开始

#### 7.v-model

1. radio，v-model获取的是radio绑定的value值，不是布尔值；

2. checkbox:复选框分为两种情况：单个勾选框和多个勾选框

   - 单个勾选框：

     v-model即为布尔值，此时input的value并不影响v-model的值。

   - 多个复选框：

     当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组。

     当选中某一个时，就会将input的value添加到数组中。

3. select

   - 单选：只能选中一个值。

     v-model绑定的是一个值，当我们选中option中的一个时，会将它对应的value赋值到v-model绑定的变量中

   - 多选：可以选中多个值。

     v-model绑定的是一个数组，当选中多个值时，就会将选中的option对应的value添加到-model绑定的变量中

#### 8.v-model的修饰符

- lazy修饰符：

  默认情况下，v-model默认是在input事件中同步输入框的数据的，也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变。

  lazy修饰符可以让数据在失去焦点或者回车时才会更新

- number修饰符

  默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理。但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字处理。

  number修饰符可以让在输入框中输入的内容自动转成数字类型

- trim修饰符

  如果输入的内容首尾有很多空格，通常我们希望将其去除

  trim修饰符可以过滤内容左右两边的空格

  ![1568949730702](C:\Users\86188\AppData\Roaming\Typora\typora-user-images\1568949730702.png)

### 二、组件

#### 1.props

```
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
  
  type 可以是下面原生构造器：
String
Number
Boolean
Array
Object
Date
Function
Symbol
```

#### 2.this.$emit()

```
父组件传值：
<Child :psg="msg" @fuc="first"></Child>

子组件调用：
test(event){
        this.$emit('fuc',event)
      }
```

#### 3. day 02--04 组件化开发--**父子组件的访问方式：** $children
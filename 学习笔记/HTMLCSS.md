# 一、HTML

### 1.

# 二、CSS

### 1. 选择器



### 2. 属性继承



### 3. 块元素与内联元素

#### 3.1 块级元素

- 总是占据一行
- **高度，行高和外边距和内边距都是可以的控制的。宽度是它的容器的100%**，但是可以通过css样式来改变。
- 可以容纳内联元素和其他元素。

#### 3.2 内联元素：

- 和其他元素在同一行的，并不自己占据一行。
- **高度、行高不可以控制的，外边距margin只有左右能起作用,内边距可以起作用。宽度就是它的文字或者是它图片的大小。不可改变**。
- 只能容纳文本或者其他内联元素。

#### 3.3 width属性

- 设置的是一个元素内容区的宽度，不包括padding，border和margin；

- 所以一个元素的宽度是width+padding+border+margin



### 4. 文本

#### 4.1 text-align

- text-align会对块元素中的所有内联内容对齐，包括img元素
- text-align只能在块元素上使用，直接在内联元素中（如img）使用，则不起任何作用

#### 4.2 line-height

- line-height设为normal时，允许浏览器选择一个合适的行高大小，通常根据字体来确定

### 5. 文字



### 6.伪类

#### 6.1 自我总结

- 伪类可以当成一个类，只是这个类在哪里起作用不是由开发者直接在页面中显式的控制，有点类似于回调函数，由页面自己控制

#### 6.2 动态伪类

- 动态伪类之a标签：lvfha:link,visited,focus,hover,active

  - 其中hover，active可以用于其他元素

  - 去掉a元素的焦点状态，将a标签的tabindex属性设为-1

  - ```css
    a{
    color:red;
    }//相当于给a元素所有的动态伪类都设置成了红色
    ```

#### 6.3 结构伪类

- :nth-child(数字)----选择第（数字）个子类（不是从0开始，是从1开始）

  **html中所有的排序都是从1开始，没有0的概念**

- :nth-child(n)

  n的取值：自然数，0,1,2,3,4,5......——选择所有子类

  2n的取值：偶数——选择偶数子类，偶数也可以用:nth-child(even)

### 7. 盒子模型

### 8.浮动

- 浮动元素必须先设置宽度









修改img大小

```css
.img {
  background-image: url(../img/touxiang.jpg);
  background-size: 400px 400px;
}
```

给图片增加背景色

```
backgroungd-color:red;
background-image: url(../img/touxiang.jpg);
background-repeat: no-repeat;
```


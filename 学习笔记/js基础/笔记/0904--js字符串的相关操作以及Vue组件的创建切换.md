09/04

1.substring（start，end）:取字符串中的某一段值；

2.split(',')：以逗号分隔字符串，返回一个数组；

3.splice（start，length）：切除数组中的某一段

4.判断父字符串中是否包含子字符串：

​	①  parentString.indexOf(childStrintg) != -1,值为true则包含

​	②ES6中，为字符串提供了一个新方法，叫做  String.prototype.includes('要包含的字符串')





一、vue生命周期函数

1.在beforeCreate生命周期函数执行的时候，data和methods中的函数还没有被初始化，此时无法对数据进行操作

2.**在create生命周期函数被执行时，data和methods中的函数都已经被初始化好了，可以在该阶段发起ajax请求**

3.beforeMount，在挂载之前执行，此时模板已经在内存中编辑完成了，但是尚未把模板渲染到页面中，页面中的元素还没有被替换过来，仍然是模板字符串，此时无法操作DOM元素

**4.mounted,如果需要操作DOM节点，最早在mounted函数中执行**

5.beforeUpdate执行时，页面中的元素还是旧的，没有改变，data中的数据是最新的，此时数据没有同步，应用：可以获取原始的DOM

6.updated,在更新DOM之后调用该函数，可以获取到最新的DOM元素
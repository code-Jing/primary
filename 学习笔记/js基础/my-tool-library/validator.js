//身份证相关
function validateIdCard(idCard) {
  var vcity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
  };
  //是否为空
  if (idCard === "") {
    return false;
  }
  //校验长度，类型
  if (isCardNo(idCard) === false) {
    return false;
  }
  //检查省份
  if (checkProvince(idCard, vcity) === false) {
    return false;
  }
  //校验生日
  if (checkBirthday(idCard) === false) {
    return false;
  }
  //检验位的检测
  if (checkParity(idCard) === false) {
    return false;
  }
  return true;
}
//检查号码是否符合规范，包括长度，类型
function isCardNo(card) {
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  var reg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
  if (reg.test(card) === false) {
    return false;
  }
  return true;
}
//取身份证前两位,校验省份
function checkProvince(card, vcity) {
  var province = card.substr(0, 2);
  if (vcity[province] == undefined) {
    return false;
  }
  return true;
}
//检查生日是否正确
function checkBirthday(card) {
  var len = card.length;
  //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
  if (len == "15") {
    var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
    var arr_data = card.match(re_fifteen);
    var year = arr_data[2];
    var month = arr_data[3];
    var day = arr_data[4];
    var birthday = new Date("19" + year + "/" + month + "/" + day);
    return verifyBirthday("19" + year, month, day, birthday);
  }
  //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
  if (len == "18") {
    var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;
    var arr_data = card.match(re_eighteen);
    var year = arr_data[2];
    var month = arr_data[3];
    var day = arr_data[4];
    var birthday = new Date(year + "/" + month + "/" + day);
    return verifyBirthday(year, month, day, birthday);
  }
  return false;
}
//校验日期
function verifyBirthday(year, month, day, birthday) {
  var now = new Date();
  var now_year = now.getFullYear();
  //年月日是否合理
  if (
    birthday.getFullYear() == year &&
    birthday.getMonth() + 1 == month &&
    birthday.getDate() == day
  ) {
    //判断年份的范围（0岁到100岁之间)
    var time = now_year - year;
    if (time >= 0 && time <= 100) {
      return true;
    }
    return true;
  }
  return false;
}
//校验位的检测
function checkParity(card) {
  //15位转18位
  card = changeFivteenToEighteen(card);
  let len = card.length;
  if (len == "18") {
    // var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    // var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    // var cardTemp = 0, i, valnum;
    // for(i = 0; i < 17; i ++) {
    // 	cardTemp += card.substr(i, 1) * arrInt[i];
    // }
    // valnum = arrCh[cardTemp % 11];
    // if (valnum == card.substr(17, 1).toLocaleUpperCase()) {
    // 	return true;
    // }
    return true;
  }
  return false;
}
//15位转18位
function changeFivteenToEighteen(card) {
  if (card.length == "15") {
    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    var arrCh = new Array(
      "1",
      "0",
      "X",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2"
    );
    var cardTemp = 0,
      i;
    card = card.substr(0, 6) + "19" + card.substr(6, card.length - 6);
    for (i = 0; i < 17; i++) {
      cardTemp += card.substr(i, 1) * arrInt[i];
    }
    card += arrCh[cardTemp % 11];
    return card;
  }
  return card;
}
const formValidation = {
  //工号 /^[0-9a-zA-Z]*$/g
  jobNumber: (rule, value, callback) => {
    const reg = /^[0-9a-zA-Z]*$/g;
    if (!reg.test(value)) {
      callback("请输入正确的工号");
    } else {
      callback();
    }
  },

  //手机号验证
  mobile: (rule, value, callback) => {
    const reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if (!reg.test(value)) {
      callback("请输入正确的手机号");
    } else {
      callback();
    }
  },
  fixedPhone: (rule, value, callback) => {
    let regName = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (value != "") {
      if (regName.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的联系电话"));
      }
    } else {
      callback();
    }
  },
  eMailRule: (rule, value, callback) => {
    let regName = /\w@\w*\.\w/;
    if (regName.test(value)) {
      callback();
    } else {
      callback(new Error("请输入正确的邮箱地址"));
    }
  },
  // 邮编验证
  postcode: (rule, value, callback) => {
    const reg = /^[0-9]{6}$/;
    if (!reg.test(value)) {
      callback("请输入正确的邮编");
    } else {
      callback();
    }
  },
  plateNum: (rule, value, callback) => {
    if (value == "" || value == undefined) {
      callback();
      return false;
    }
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}$/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    if (value.length == 7) {
      if (!xreg.test(value.substr(0, 2))) {
        callback("请输入正确的车牌号码");
      } else {
        callback();
      }
    } else if (value.length == 8) {
      if (!xreg.test(value.substr(0, 2))) {
        callback("请输入正确的车牌号码");
      } else {
        callback();
      }
    } else {
      callback("请输入正确的车牌号码");
    }
  },
  age: (rule, value, callback) => {
    const reg = /^[0-9]*[1-9][0-9]*$/;
    if (!(reg.test(value) || Number(value) === 0)) {
      callback("请输入大于等于0的整数");
    } else {
      callback();
    }
  },
  //数字
  number: (rule, value, callback) => {
    let regName = /^([1-9]\d*|[0]{1,1})$/;
    if (value != undefined && value != "") {
      if (regName.test(value)) {
        callback();
      } else {
        callback(new Error("请输入0或正整数"));
      }
    } else {
      callback();
    }
  },
  //经度
  longitudeNum: (rule, value, callback) => {
    let regName = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
    if (value != undefined && value != "") {
      if (regName.test(value)) {
        callback();
      } else {
        callback(
          new Error(
            "经度整数部分为-180-180,小数部分为0到6位,且最大值不超过180!"
          )
        );
      }
    } else {
      callback();
    }
  },
  //纬度
  latitudeNum: (rule, value, callback) => {
    let regName = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
    if (value != undefined && value != "") {
      if (regName.test(value)) {
        callback();
      } else {
        callback(
          new Error("纬度整数部分为0-90,小数部分为0到6位,且最大值不超过90!")
        );
      }
    } else {
      callback();
    }
  },

  //身份证
  identiID: (rule, value, callback) => {
    if (!value) {
      callback(new Error("身份证号不能为空"));
      return;
    }
    let regId = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    let result = validateIdCard(value);
    if (result) {
      callback();
    } else {
      callback(new Error("请输入正确格式的身份证号码"));
    }
  },
};

export default formValidation;

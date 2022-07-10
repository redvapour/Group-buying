window.onload = function () {
  let phone = document.getElementById("phone"); //手机号输入框
  let span = document.getElementsByTagName("span"); //每条输入框提示语
  let checkCodeButton = document.getElementsByTagName("button")[0]; //验证码获取按钮
  let checkCode = document.getElementById("check_code"); //验证码
  let password = document.getElementById("password"); //密码
  let passRepeat = document.getElementById("passrepeat"); //第二次密码
  let agree = document.getElementById("agree"); //同意按钮
  let frmContact = document.getElementById("frmContact");
  // 手机框判断
  phone.onfocus = function () {
    this.style.border = "1px solid #ff8e00";
  };
  phone.onblur = function () {
    this.style.border = "1px solid #aaa";
    // 判断手机号码
    let phoneValue = phone.value;
    // 判断手机号是否为空
    if (phoneValue == "") {
      span[0].className = "display-inline icon-times-circle";
      span[0].innerHTML = "手机号码不能为空";
      frmContact.setAttribute("disabled", "true"); //不能提交
    } else {
      // 判断手机号是否正确
      let istrue =
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(
          phoneValue
        );
      if (istrue) {
        span[0].className = "display-inline icon-check-circle";
        span[0].innerHTML = "手机号正确";
        frmContact.removeAttribute("disabled");
      } else {
        span[0].className = "display-inline icon-times-circle";
        span[0].innerHTML = "手机号应为11位数字";
        frmContact.setAttribute("disabled", "true"); //不能提交
      }
    }
  };
  // 验证码获取
  checkCodeButton.onclick = function () {
    // 生成验证码
    function randomNum() {
      let randomCheck = Math.floor(Math.random() * 10000);
      if (randomCheck < 1000) randomCheck = "0" + randomCheck;
      return randomCheck;
    }
    let randomCheck = randomNum();
    // 使用验证码
    span[1].className = "display-inline";
    span[1].innerHTML = randomCheck;
  };
  // 验证码匹配
  checkCode.onfocus = function () {
    this.style.border = "1px solid #ff8e00";
  };
  checkCode.onblur = function () {
    this.style.border = "1px solid #aaa";
    let checkValue = checkCode.value;
    // 验证码判空
    if (checkValue == "") {
      span[2].className = "display-inline icon-times-circle";
      span[2].innerHTML = "验证码不能为空";
      frmContact.setAttribute("disabled", "true"); //不能提交
    } else {
      // 验证码判正确
      if (checkValue == span[1].innerHTML) {
        span[2].className = "display-inline icon-check-circle";
        span[2].innerHTML = "验证码正确";
        frmContact.removeAttribute("disabled");
      } else {
        span[2].className = "display-inline icon-times-circle";
        span[2].innerHTML = "验证码不正确";
        frmContact.setAttribute("disabled", "true"); //不能提交
      }
    }
  };
  // 密码强度判定
  let aStr = ["弱", "中", "强", "安全"];
  // 密码内容检测
  function checkStrong(val) {
    let num = 0;
    if (val.length < 6) return 0;
    if (/\d/.test(val)) num++; //数字
    if (/[a-z]/.test(val)) num++; //小写
    if (/[A-Z]/.test(val)) num++; //大写
    if (/\W/.test(val)) num++; //特殊字符
    if (val.length > 12) return 4;
    return num;
  }
  password.onfocus = function () {
    this.style.border = "1px solid #ff8e00";
  };
  password.onblur = function () {
    this.style.border = "1px solid #aaa";
  };
  password.onkeyup = function () {
    let passwordVal = password.value;
    let checkNum = checkStrong(passwordVal);
    let tipsSpan = document.getElementById("tips").getElementsByTagName("b");
    // 判断强度函数，并且回退是可以及时更改
    function strongLevel(a, b) {
      for (let i = 0; i < a; i++) {
        tipsSpan[i].style.backgroundColor = b;
        tipsSpan[i].innerHTML = aStr[a - 1];
      }
      for (let i = a; i < 4; i++) {
        tipsSpan[i].style.backgroundColor = "#EEEEEE";
        tipsSpan[i].innerHTML = "";
      }
    }
    switch (checkNum) {
      case 0:
      case 1:
        strongLevel(1, "red");
        break;
      case 2:
        strongLevel(2, "yellow");
        break;
      case 3:
        strongLevel(3, "green");
        break;
      case 4:
        strongLevel(4, "green");
        break;
    }
  };
  // 两次密码判定
  passRepeat.onfocus = function () {
    this.style.border = "1px solid #ff8e00";
  };
  passRepeat.onblur = function () {
    this.style.border = "1px solid #aaa";
    let passRepeatVal = passRepeat.value;
    let passwordVal = password.value;
    if (passRepeatVal != passwordVal) {
      span[3].className = "display-inline icon-times-circle";
      span[3].innerHTML = "两次输入的密码不匹配";
      frmContact.setAttribute("disabled", "true");
    } else {
      span[3].className = "display-inline icon-check-circle";
      span[3].innerHTML = "两次输入的密码匹配";
      frmContact.removeAttribute("disabled");
    }
    if (passRepeatVal == "" && passwordVal == "") {
      span[3].className = "display-none";
      span[3].innerHTML = "";
    }
  };
  // 是否同意各种条文
  let isAgree = true;
  agree.onclick = function () {
    if (isAgree) {
      agree.classList.add("active");
      agree.innerHTML = "√";
      isAgree = false;
    } else {
      agree.classList.remove("active");
      agree.innerHTML = "";
      isAgree = true;
    }
  };
  // 点击注册跳转页面
  frmContact.onclick = function () {
    if (phone.value == "" || password.value == "" || passRepeat.value == "") {
      alert("请填写信息后再注册");
      return false;
    } else if (isAgree) {
      alert("请阅读同意一些你不会看的合约");
      console.log(isAgree);
      return false;
    } else {
      console.log(phone.value);
      alert(5);

      console.log(password.value);
      // window.location.href = "./index.html?city=";
      window.location.href = `./login.html?phone=${phone.value}&pass=${password.value}`;
    }
  };
};

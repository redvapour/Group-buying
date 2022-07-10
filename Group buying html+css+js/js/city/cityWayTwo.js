let addrShow02 = document.getElementById("addr-show02");
let titleWrap = document
  .getElementById("title-wrap")
  .getElementsByTagName("li");
let addrWrap = document.getElementById("addr-wrap");
let btn2 = document.getElementsByClassName("met2")[0];
//存储信息的对象
let current2 = {
  prov: "",
  city: "",
  country: "",
  provVal: "",
  cityVal: "",
  countryVal: "",
};

//对省市区添加事件绑定
document.getElementById("title-wrap").onclick = function (e) {
  if (e.target && e.target.nodeName == "LI") {
    // console.log(target.nodeName);
    // console.log(target);
    for (let i = 0; i < 3; i++) {
      titleWrap[i].className = "";
    }
    e.target.className = "titleSel";
    if (e.target.value == "0") {
      showProv2();
    } else if (e.target.value == "1") {
      showCity2(current2.prov);
    } else {
      showCountry2(current2.city);
    }
  }
};
//动态生成的li标签添加单击事件
addrWrap.onclick = function (e) {
  let n;
  if (e.target && e.target.nodeName == "LI") {
    for (let i = 0; i < 3; i++) {
      if (titleWrap[i].className == "titleSel") {
        n = i;
        break;
      }
    }
    //处理函数
    switch (n) {
      case 0:
        showCity2(e.target.index);
        break;
      case 1:
        showCountry2(e.target.index);
        break;
      case 2:
        selectCountry2(e.target.index);
        break;
      default:
        showProv2();
    }
  }
};
//自动加载省份列表
window.onclick = showProv2();

function showProv2() {
  // console.log(1);
  addrWrap.innerHTML = "";
  titleWrap[0].className = "titleSel";
  for (let i = 0; i < provice.length; i++) {
    let provLi = document.createElement("li");
    provLi.innerText = provice[i]["name"];
    //向下一个层级传递索引值
    provLi.index = i;
    addrWrap.appendChild(provLi);
  }
}

//显示市
function showCity2(index) {
  addrWrap.innerHTML = "";
  //如果我们想要找市的话 就要有省的索引
  current2.prov = index;
  if (provice[index] != undefined) {
    current2.provVal = provice[index].name;
    titleWrap[0].className = "";
    titleWrap[1].className = "titleSel";
    // console.log(current2.prov);
    // console.log(current2.provVal);
    let cityLen = provice[index].city.length;
    for (let j = 0; j < cityLen; j++) {
      let cityLi = document.createElement("li");
      cityLi.innerText = provice[index].city[j].name;
      //向下一个层级传递索引值
      cityLi.index = j;
      addrWrap.appendChild(cityLi);
    }
  }
}
//显示区县
function showCountry2(index) {
  addrWrap.innerHTML = "";
  current2.city = index;
  if (provice[index] != undefined) {
    current2.cityVal = provice[current2.prov].city[index].name;
    titleWrap[1].className = "";
    titleWrap[2].className = "titleSel";
    // console.log(current2.city);
    // console.log(current2.cityVal);
    let countryLen =
      provice[current2.prov].city[index].districtAndCounty.length;
    //如果没有城市就直接返回
    if (countryLen == 0) {
      addrShow02.value = current2.provVal + "-" + current2.cityVal;
    }
    for (k = 0; k < countryLen; k++) {
      let cityLi = document.createElement("li");
      cityLi.innerText =
        provice[current2.prov].city[index].districtAndCounty[k];
      cityLi.index = k;
      addrWrap.appendChild(cityLi);
    }
  }
}
//获取选中的县区
function selectCountry2(index) {
  current2.country = index;
  current2.countryVal =
    provice[current2.prov].city[current2.city].districtAndCounty[index];
  addrShow02.value =
    current2.provVal + "-" + current2.cityVal + "-" + current2.countryVal;
  btn2.disabled = false;
}
//点击确定添加所有的城市信息
btn2.onclick = function () {
  if (
    current2.provVal != "" &&
    current2.cityVal != "" &&
    current2.countryVal != ""
  ) {
    topSite[0].innerHTML = current2.provVal;
    topSite[2].innerHTML =
      "[" + current2.cityVal + "-" + current2.countryVal + "]";
  }
};

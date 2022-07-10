// 节点获取
let btn = document.getElementsByClassName("met1")[0];
let addrShow = document.getElementById("addr-show");
let prov = document.getElementById("prov");
let city = document.getElementById("city");
let country = document.getElementById("country");

let topSite = document.querySelectorAll(".nav-center-left a");
// 存储当前选中省市区对象
let current = {
  prov: "",
  city: "",
  country: "",
};

// 加载省份信息  立即执行函数
(function showProv() {
  //禁用提交
  btn.disabled = true;
  // 创建一个option节点 将数据放在select表单中
  for (let i = 0; i < provice.length; i++) {
    let provOpt = document.createElement("option");
    // console.log(prov.length);
    provOpt.value = provOpt.innerText = provice[i]["name"];
    prov.appendChild(provOpt);
  }
})();

// 选取省份序号
let provIndex = 0;
// 选取城市序号
let cityIndex = 0;

// 根据省份信息显示市信息
function showCity(obj) {
  // 获取选中省份名称
  let val = obj.options[obj.selectedIndex].value;
  // 切换省时清空市县选择   并将现在省份名称重新存储
  if (val != current.prov) {
    current.prov = val;
    city.length = 1;
    country.length = 1;
    btn.disabled = true;
  }
  // 选取不为空时，查找所选省份序号并赋值
  if (val != "") {
    for (let i = 0; i < provice.length; i++) {
      if (val == provice[i]["name"]) {
        provIndex = i;
        break;
      }
    }
  }
  // 遍历所选省份并创建节点插入
  for (let i = 0; i < provice[provIndex]["city"].length; i++) {
    let cityOpt = document.createElement("option");
    //向下拉列表里面添加数据
    cityOpt.value = cityOpt.innerText = provice[provIndex]["city"][i].name;
    city.appendChild(cityOpt);
  }
}

// 根据市信息显示区县信息
function showCountry(obj) {
  let val = obj.options[obj.selectedIndex].value;
  // console.log(val);
  if (val != current.city) {
    current.city = val;
    country.length = 1;
    btn.disabled = true;
  }
  for (let i = 0; i < provice[provIndex]["city"].length; i++) {
    if (current.city == provice[provIndex]["city"][i].name) {
      cityIndex = i;
      break;
    }
  }
  if (val != "") {
    let countryLen =
      provice[provIndex]["city"][cityIndex].districtAndCounty.length;
    //如果县区存在就开始遍历
    for (let n = 0; n < countryLen; n++) {
      let countryOpt = document.createElement("option");
      countryOpt.innerText =
        provice[provIndex]["city"][cityIndex].districtAndCounty[n];
      countryOpt.value =
        provice[provIndex]["city"][cityIndex].districtAndCounty[n];
      country.appendChild(countryOpt);
    }
  }
}

// 全部选中后的一些操作
function selecCountry(obj) {
  // 将当前市县信息存储
  current.country = obj.options[obj.selectedIndex].value;
  // 使得确定按钮可用
  if (current.city != "" && current.country != "") {
    btn.disabled = false;
  }
}
// 拼串显示
function showAddr() {
  addrShow.value = current.prov + "-" + current.city + "-" + current.country;
  topSite[0].innerHTML = current.prov;
  topSite[2].innerHTML = "[" + current.city + "-" + current.country + "]";
}

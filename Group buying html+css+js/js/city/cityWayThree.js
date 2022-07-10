let addrShow03 = document.getElementById("addr-show03");
let dataOrder = document.getElementById("data-order").querySelectorAll("li");
let dataShow = document.getElementById("data-show");

let btn3 = document.getElementsByClassName("met2")[1];

// 加载热门城市
(function () {
  showHotCity();
})();

function showHotCity() {
  // console.log(1);
  dataOrder[0].className = "cityOn";
  let cityLen = cityAll[0].citys.length;
  let dl = document.createElement("dl");
  let dt = document.createElement("dt");
  dt.innerText = cityAll[0].name;
  let dd = document.createElement("dd");
  dl.appendChild(dt);
  dl.appendChild(dd);
  for (let i = 0; i < cityLen; i++) {
    let aCity = document.createElement("a");
    aCity.innerText = cityAll[0].citys[i];
    dd.appendChild(aCity);
  }
  dataShow.appendChild(dl);
}

// 点击不同的字母集合显示对应的城市
dataOrder.forEach(function (value, index) {
  value.onclick = function () {
    for (let i = 0; i < 23; i++) {
      if (i == index) {
        dataOrder[index].className = "cityOn";
      } else {
        dataOrder[i].className = "";
      }
    }
    dataShow.innerHTML = "";
    showCitys(index);
  };
});
function showCitys(index) {
  let dl = document.createElement("dl");
  let dt = document.createElement("dt");
  dt.innerText = cityAll[index].name;
  let dd = document.createElement("dd");
  dl.appendChild(dt);
  dl.appendChild(dd);
  for (let i = 0; i < cityAll[index]["citys"].length; i++) {
    let aCity = document.createElement("a");
    aCity.innerText = cityAll[index].citys[i];
    // console.log(aCity.innerText);
    dd.appendChild(aCity);
  }
  dataShow.appendChild(dl);
}
// 将选择放在输入框里
dataShow.onclick = function (e) {
  if (e.target && e.target.nodeName == "A") {
    addrShow03.value = e.target.innerText;
  }
  btn3.disabled = false;
};
// 选择与头部同步
btn3.onclick = function () {
  topSite[0].innerHTML = addrShow03.value;
  topSite[2].innerHTML = "[" + addrShow03.value + "-" + addrShow03.value + "]";
};

let btnSubmit = document.getElementById("cityto");
let inputBox = document.querySelectorAll("input");
console.log(btnSubmit);
console.log(inputBox);

btnSubmit.onclick = function () {
  //   alert(2);
  let flag = false;
  for (let i = 1; i < inputBox.length; i++) {
    if (inputBox[i].value != "") {
      flag = true;
    }
  }
  if (flag) {
    window.location.href =
      "./index.html?city=" + topSite[0].innerHTML + topSite[2].innerHTML;
  } else {
    alert("请先选择城市信息");
  }
};

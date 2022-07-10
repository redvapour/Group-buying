window.onload = function () {
  // 导航栏下拉效果
  let dropdown = document.getElementById("dropdown");
  let dropdownLi = dropdown.getElementsByTagName("li");

  for (let i = 0; i < dropdownLi.length; i++) {
    if (i == 1) {
      continue;
    }
    dropdownLi[i].onmouseover = function () {
      this.classList.add("show");
    };
    dropdownLi[i].onmouseout = function () {
      this.classList.remove("show");
    };
  }

  // 主体侧边栏右拉效果
  let dropright = document.getElementById("dropright");
  let droprightLi = dropright.getElementsByTagName("li");
  for (let i = 0; i < droprightLi.length; i++) {
    droprightLi[i].onmouseover = function () {
      this.classList.add("show");
    };
    droprightLi[i].onmouseout = function () {
      this.classList.remove("show");
    };
  }
  /*---------轮播图---------*/
  let carousel = document.getElementById("carousel");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  let image = document.getElementById("image");
  let numlist = document.getElementById("number").getElementsByTagName("li");
  let links = document.getElementById("links");
  // 轮播图---初始化
  let websites = [
    "https://waimai.meituan.com",
    "http://www.jd.com/",
    "https://www.maoyan.com/",
    "http://www.bilibili.com/",
    "http://www.taobao.com",
    "http://www.tianmao.com",
  ];
  links.href = "https://waimai.meituan.com";
  image.src = "./images/ad1.jpg";
  numlist[0].style.backgroundColor = "#fff";

  // 图片编号
  let imageNum = 1;
  let websitesNum = 0;

  // 鼠标移出轮播区域    显示或隐藏左右箭头
  carousel.onmouseover = function () {
    left.style.display = "block";
    right.style.display = "block";
    clearInterval(timer);
  };
  carousel.onmouseout = function () {
    left.style.display = "none";
    right.style.display = "none";
    lunbo();
  };
  // 右翻页
  right.onclick = function () {
    rightChange();
    websitesNum = imageNum - 1;
    links.href = websites[websitesNum];
    indexChange();
  };
  // 左翻页
  left.onclick = function () {
    leftChange();
    websitesNum = imageNum - 1;
    links.href = websites[websitesNum];
    indexChange();
  };
  // 鼠标滑过li的时候切换图片
  for (let i = 0; i < numlist.length; i++) {
    numlist[i].onmouseover = function () {
      imageNum = this.innerHTML;
      image.src = "./images/ad" + imageNum + ".jpg";
      websitesNum = imageNum - 1;
      links.href = websites[websitesNum];
      indexChange();
    };
  }
  // 定时轮播
  function lunbo() {
    timer = setInterval(function () {
      rightChange();
      websitesNum = imageNum - 1;
      links.href = websites[websitesNum];
      indexChange();
    }, 3000);
  }
  lunbo();

  // 封装的函数
  // 右翻页函数
  function rightChange() {
    imageNum++;
    if (imageNum > 6) {
      imageNum = 1;
    }
    image.src = "./images/ad" + imageNum + ".jpg";
  }
  // 左翻页函数
  function leftChange() {
    imageNum--;
    if (imageNum < 1) {
      imageNum = 6;
    }
    image.src = "./images/ad" + imageNum + ".jpg";
  }
  // 下标变化函数
  function indexChange() {
    for (let i = 0; i < numlist.length; i++) {
      numlist[i].style.backgroundColor = "#3e3e3e";
      if (websitesNum == i) {
        numlist[i].style.backgroundColor = "#fff";
      }
    }
  }
  /*---------轮播图结束---------*/

  // 猫眼电影
  let triangleMovie = document.getElementsByClassName("triangle");
  let btnLeft = document.getElementsByClassName("btn-left")[0];
  let btnRight = document.getElementsByClassName("btn-right")[0];
  let moviesLi = document.getElementsByClassName("movie-center-bottom")[0];
  let slider = document.getElementsByClassName("slider");
  let hotTitle = document.getElementsByClassName("movie-center-top-hot")[0];
  let comingTitle = document.getElementsByClassName(
    "movie-center-top-coming"
  )[0];
  let hotMovie = document.getElementsByClassName("movie-center-bottom-hot")[0];
  let comingMovie = document.getElementsByClassName(
    "movie-center-bottom-coming"
  )[0];
  // 切换 正在热播 即将上映
  hotTitle.onmouseover = function () {
    comingMovie.style.display = "none";
    hotMovie.style.display = "block";
    triangleMovie[1].style.display = "none";
    triangleMovie[0].style.display = "block";
    sliderIndex = hotMovie.style.display == "block" ? 0 : 1;
  };
  comingTitle.onmouseover = function () {
    hotMovie.style.display = "none";
    comingMovie.style.display = "block";
    triangleMovie[0].style.display = "none";
    triangleMovie[1].style.display = "block";
    sliderIndex = hotMovie.style.display == "block" ? 0 : 1;
  };
  // 显示隐藏左右箭头
  moviesLi.onmouseover = function () {
    btnLeft.style.display = "block";
    btnRight.style.display = "block";
  };
  moviesLi.onmouseout = function () {
    btnLeft.style.display = "none";
    btnRight.style.display = "none";
  };
  // 电影列表滑动
  let movieLeft = 0;
  let sliderIndex = 0;
  btnLeft.onclick = function () {
    movieLeft = movieLeft + 1166;
    if (movieLeft > 0) {
      movieLeft = 0;
    }
    slider[sliderIndex].style.left = movieLeft + "px";
  };
  btnRight.onclick = function () {
    movieLeft = movieLeft - 1166;
    if (movieLeft < 0) {
      movieLeft = -1166;
    }
    slider[sliderIndex].style.left = movieLeft + "px";
  };

  // 推荐民宿
  let hotelTab = document.getElementById("hotel-tab");
  let hotelTabLi = hotelTab.getElementsByTagName("li");
  let triangleHotelLi = hotelTab.getElementsByClassName("triangle");
  let containerHotel = document.getElementById("container");
  let hotellist = containerHotel.getElementsByClassName("hotellist");

  for (let i = 0; i < hotelTabLi.length; i++) {
    hotelTabLi[i].onmouseover = function () {
      Array.from(triangleHotelLi).forEach((triangleHotel) => {
        triangleHotel.style.display = "none";
      });
      triangleHotelLi[i].style.display = "block";

      Array.from(hotellist).forEach((hotels) => {
        hotels.style.display = "none";
      });
      hotellist[i].style.display = "block";
    };
  }

  // 更改欢迎词
  let welcomeUser = document.getElementById("welcomeUser");
  let welcomRegister = document.getElementById("welcomRegister");
  let welcomLogin = document.getElementById("welcomLogin");
  let addressParent = document.getElementsByClassName("nav-center-left")[0];
  let address = addressParent.children;
  let urlStr = location.href;
  // 获取账号数据
  function getParamByUrl(url) {
    let index = url.indexOf("?");
    // 如果存在--->
    if (index != -1) {
      // 截取 ？ 之后的所有字符串
      let str = url.substr(index + 1);
      let strs = str.split("=");
      // console.log(str.split("=")[1]);
      if (strs[0] == "username") {
        welcomeUser.innerHTML = strs[1];
        welcomRegister.innerHTML = "你好";
        welcomLogin.innerHTML = "欢迎光临";
      }
      if (strs[0] == "city") {
        // strs[1].split("[");
        address[1].innerHTML = decodeURI(strs[1].split("[")[0]);
        address[3].innerHTML = "[" + decodeURI(strs[1].split("[")[1]);
      }
    }
  }
  getParamByUrl(urlStr);
};

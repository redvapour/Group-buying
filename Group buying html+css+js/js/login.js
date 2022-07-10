window.onload = function(){
    let submit = document.getElementById('submit');//提交按钮
    let urlStr = location.href;//网页完整url地址

    // 获取账号数据
    function getParamByUrl(url) {
        // 空对象
        let request = {};
        //获取网页分割 ？ 的下标
        let index = url.indexOf('?');
        // 如果存在--->
        if (index != 1) {
            // 截取 ？ 之后的所有字符串
            let str = url.substr(index + 1);
            // 用 & 分割字符串，得到数组['phone = 15...', 'pass = ....']
            let strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                // 遍历为空对象追加属性名和属性值
                request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
            }
        }
        return request;
    }

    let params = getParamByUrl(urlStr);

    let userName = document.getElementById('username');
    let isUser = document.getElementById('is_user')
    // 手机号匹配
    userName.onblur = function (){
        if(userName.value != params['phone']){
            isUser.className = "display-inline icon-times-circle";
            isUser.innerHTML = "手机号码不匹配";
            submit.setAttribute('disabled',true);
        }else{
            isUser.className = "display-inline icon-check-circle";
            isUser.innerHTML = "手机号码匹配";
            submit.removeAttribute('disabled');
        }
    }
    // 密码匹配
    let passWord = document.getElementById('password');
    let isPass = document.getElementById('is_pass');
    passWord.onblur=function(){
        if(passWord.value != params["pass"]){
            isPass.className = "display-inline icon-times-circle";
            isPass.innerHTML = "密码不匹配";
            submit.setAttribute('disabled',true);
        }else{
            isPass.className = "display-inline icon-check-circle";
            isPass.innerHTML = "密码匹配";
            submit.removeAttribute('disabled');
        }
    }
     //点击登录跳转
     submit.onclick = function(){
         if(passWord.value == "" || userName.value ==""){
             alert('请填写信息在登录！');
         }else{
             window.location.href = "./index.html?username=" + userName.value;
         }
     }
}
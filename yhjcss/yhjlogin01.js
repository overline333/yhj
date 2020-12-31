/*function login(){
    var username = document.getElementById("usename").value;
    var pass = document.getElementById("password");

    if(username.value == "" ){
        alert("请输入用户名");
    }else if (pass.value == ""){
        alert("请输入密码");
    }else if(username.value == "admin" && pass.value == "123456"){
        window.location.href="university.html";
    }else{
        alert("请输入正确的用户名和密码！")
    }
}*/
window.onresize = setViewSize;
var marginLeft=0;
var marginTop=0;
//设置画布大小，登录页面显示在屏幕最中间
function setViewSize() {
    //计算屏幕大小
    var w=window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    var h=window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    //设置登陆div的位置
    marginLeft = (w-468)/2;
    marginTop = (h-262)/2;
    document.getElementById("yhjitem").style.marginLeft=marginLeft;
    document.getElementById("yhjitem").style.marginTop=marginTop;
}

//默认聚焦在用户名输入框上
function focusOnUsername() {
    //调整画布大小和登陆框位置
    setViewSize();
    //默认聚焦在输入框上
    if (document.loginForm) {
        var usernameInput = document.loginForm.username;
        if (usernameInput) {
            usernameInput.focus();
        }
    }
    return;
}

//检查用户输入
function checkLogin(){
    if(checkUsername() && checkPassword()){
         return true;
     }		  
    return false;
}
//检查登录用户名
function checkUsername(){
    var username = document.loginForm.username;
    if(username.value.length!=0){
        return true;
    }else{
        alert("请输入用户名");
        return false;
    }
}
//检查登录密码
function checkPassword(){
    var password = document.loginForm.password;
    if(password.value.length!=0){
        return true;
    }else{
        alert("请输入密码");
        return false;
    }
}

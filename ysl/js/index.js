// 引入头部模块
import {topFn as topJs } from './top.js';

topJs();

// 注册于登录页面切换
(function (){
    // 样式获取
    let oLogin =  document.getElementById("log-l"),
        oLginReg = document.getElementById("log-reg"),
        oRegsiter = document.getElementById("regsiter");
    // 点击事件
    let bea = true;
    oLginReg .addEventListener('click',()=>{
        
        if(bea){
            oLogin.style.visibility = "hidden";
            oRegsiter.style.visibility = "visible";
            oLginReg.innerText = "登录";
            bea = false;
        }else{
            oLogin.style.visibility = "visible";
            oRegsiter.style.visibility = "hidden";
            oLginReg.innerText = "立即注册";
            bea = true;
        }
       
    })

    // jquery 实现
    // $('#log-reg').on('click', function () {
    //     if (bea) {
    //         $('#log-l').css({ visibility: "hidden" });
    //         $('#regsiter').css({ visibility: "visible" });
    //         $(this).text('登录');
    //         bea = false;
    //     } else {
    //         $('#log-l').css({ visibility: "visible" });
    //         $('#regsiter').css({ visibility: "hidden" });
    //         $(this).text('立即登录');
    //         bea = true;
    //     }
    // })
})();




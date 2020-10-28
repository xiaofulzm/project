// 引入头部模块
import {topFn as topJs } from './top.js';

topJs();
// 轮播  banner
(function(){
    //  获取元素
    let oUl = document.querySelector(".img-box>ul"),
        aImg = document.querySelectorAll(".img-box>ul>li"),
        aBtn = document.querySelectorAll(".arrow>div"),
        aTab = document.querySelectorAll(".circle>ul>li");
        
    // 克隆元素函数
    // eleF父元素    eleS需要克隆元素的数组 
    function setDOMNode(eleF,eleS){
        // 克隆最后一个放在最前面
        eleF.insertBefore(eleS[eleS.length-1].cloneNode(true),eleS[0]);
        //  克隆第一个放在最后m面
        eleF.appendChild(eleS[0].cloneNode(true));
    }
    setDOMNode(oUl,aImg);
   
    
    // 设置显示第一张图片

    // true : return 出去参数
    // false 设置参数
    function setUltransform(bea = true){
        let imgW =aImg[0].getBoundingClientRect().width;
        if(bea){
            return imgW
        }else{
            oUl.style.transform = `translate(-${imgW}px)`;
        }
    }
    setUltransform(false);

    let lastIndex = 0; // 上一次点击的索引
    function changPage(idx){
        oUl.classList.remove("on");  // 取消动画
        oUl.style.transform =`translate(-${(idx+1)*setUltransform(true)}px)`;
        if(idx<0){
            console.log("1")
            setTimeout(()=>{
                oUl.classList.add("on");
                oUl.style.transform = `translate(-${(aImg.length)*setUltransform(true)}px)`;
            },300)
            idx = aImg.length-1;
        }else if(idx >= aImg.length ){
            setTimeout(()=>{
                oUl.classList.add("on");
                oUl.style.transform = `translate(-${setUltransform(true)}px)`;
            },300)
            idx = 0;
        }
        aTab[lastIndex].classList.remove("active");
        aTab[idx].classList.add("active");
        lastIndex = idx;
    }



    //防抖函数
    function debounce(fn,wait){
        let timeOut;
        return function(){
            //  保存this arguments
            let deThis = this,
                deArg = arguments;
                // console.log(timeOut)
            if(timeOut){clearTimeout(timeOut)}
            let now = ! timeOut;
            timeOut = setTimeout(()=>{
                timeOut= null;
            },wait)
            if(now){fn.apply(deThis,deArg);}

        }

    }

    
    aBtn.forEach(function(ele,idx){
        ele.onclick = debounce(function(){
            changPage(idx?lastIndex+1:lastIndex-1);
        },500)
    })
    aTab.forEach(function(ele,idx){
        ele.onclick = debounce(function(){
            changPage(idx);
        },500)
    })

    //  轮播
    let num =0;
    function carousel(){
        if(num >= 4){
            num = 0
        }
        // console.log(num+=1)
        changPage(num+=1)
    }
    let timer = setInterval(carousel,5000);
    


    oUl.addEventListener("mouseover",function(){
            clearInterval(timer)
    })

    oUl.addEventListener("mouseout",function(){
            timer =  setInterval(carousel,5000);
    })


    //  监听窗口变化 
	let resize = 'orientationchange' in window ? 'orientationchange':'resize';
    window.addEventListener(resize,function(){
        // oUl.classList.add("on");  // 取消动画
        // setUltransform(false);
        // clearInterval(timer);
        // timer =  setInterval(carousel,5000);
        changPage(1)
    })
 

})()

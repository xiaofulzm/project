function topFn() {

    //  吸顶盒 top
    (function () {
        //  获取元素
        let oNav = document.querySelector(".top-nav"),
            oMain = document.querySelector(".main");

        // 响应式 头部元素

        let navTop = oNav.offsetTop;//元素距离顶部的距离
        let w = window.innerWidth;
        var resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
        window.addEventListener(resize, () => {
            w = window.innerWidth;
            if (1200 >= (w + 5)) {
                console.log(w)
                oNav.classList.remove("fiexd");
                oMain.style.marginTop = 50 + "px";
            } else {
                // console.log(w)
                // oNav.classList.add("fiexd");
                oMain.style.marginTop = "";
                window.onscroll = () => {
                    let scrollTop = document.documentElement.scrollTop; // 滚动条高度
                    if (scrollTop >= navTop) {
                        oNav.classList.add("fiexd");
                        oMain.style.marginTop = 50 + "px";
                    } else {
                        oNav.classList.remove("fiexd");
                        oMain.style.marginTop = "";
                    }
                }
            }
        })
        if (w > 1200) {
            window.onscroll = () => {
                let scrollTop = document.documentElement.scrollTop; // 滚动条高度

                if (scrollTop >= navTop) {
                    oNav.classList.add("fiexd");
                    oMain.style.marginTop = 50 + "px";
                } else {
                    oNav.classList.remove("fiexd");
                    oMain.style.marginTop = "";
                }
            }
        } else {
            console.log("1")
            oNav.classList.remove("fiexd");
            oMain.style.marginTop = 50 + "px";
        }


        //  jquery 实现
        // let $nav = $(".top-nav"),
        // $navTop = $nav.offset().top;
        // $(window).on('scroll',function(){
        //     if($(this).scrollTop() >= $navTop){
        //         $nav.addClass("fiexd");
        //         $(".main").css({marginTop:"50px"})
        //     }else{
        //         $nav.removeClass("fiexd");
        //         $(".main").css({marginTop:"0"})
        //     }
        // })
    })();

    // 菜单点击事件
    (function () {
        //  获取样式
        let oMenu = document.querySelector(".menu"),
            oNav = document.querySelector(".nav"),
            clickLi = document.querySelector(".nav>ul>li:nth-child(1)");
            // console.log(clickLi)
        oMenu.addEventListener("click", () => {
            oNav.classList.add("show");
        })
        clickLi.addEventListener("click", () => {
            oNav.classList.remove("show");

        })
    })();
}

export {topFn};
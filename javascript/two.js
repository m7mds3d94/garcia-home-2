






// start loading page




$(window).on("load",function(){
    $(".load").hide()
    $(".contentPage").show()
    
  })
  
  // end loading page









// start navbar all width device



$(".collapseBtn").click(function() {
    $(".navWidthSmall").animate({"right":"0"},500)
 })
 
 $(".closeNavMobile").click(function() {
     $(".navWidthSmall").animate({"right":"-600"},500)
 })
 
 
 
 
 $(".toggle-icon").click(function() {
 
     if($(this).attr("toggleIcon") === "0") {
     $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideDown()
     $(this).children().attr("class","las la-minus")
         $(this).attr("toggleIcon","1")
     } else {
         $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideUp()
         $(this).children().attr("class","las la-plus")
             $(this).attr("toggleIcon","0")
     }
 
 })
 
 
 
 
 
 $(".toggle-inside-icon").click(function() {
 
     if($(this).attr("toggleInsideIcon") === "0") {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideDown()
        $(this).children().attr("class","las la-minus")
        $(this).attr("toggleInsideIcon","1")
     } else {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideUp()
        $(this).children().attr("class","las la-plus")
        $(this).attr("toggleInsideIcon","0")
     }
 
    
 })
 
 
 
 $(".item-nav-home").hover(function() {
     $(".iTemsDropdownHome").fadeToggle(500)
 })
 
 
 
 $(".item-nav-pages").hover(function() {
     $(".iTemsDropdownPages").fadeToggle()
 })
 
 $(".item-nav-blog").hover(function() {
     $(".iTemsDropdownBlog").fadeToggle()
 })
 
 
 $(".searchAreaBtn").click(function() {
     $(this).siblings().focus();
 })
 // end navbar all width device
 

















// // start button navbar


// var barButton = document.querySelector(".bar-collapse")
// var navBar = document.querySelector(".collapse")
// barButton.addEventListener("click", function() {
//     if (navBar.getAttribute("bt") === "1") {
//         navBar.classList.add("block")
//         navBar.setAttribute("bt", "2")
//     } else {
//         navBar.classList.remove("block")
//         navBar.setAttribute("bt", "1")
//     }
    
// })



// var homeDrop = document.querySelector(".h-drop")
// var homeDropAct = document.querySelector(".drop-h")
// var pagesDrop = document.querySelector(".p-drop")
// var pagesDropAct = document.querySelector(".drop-p")
// var blogDrop = document.querySelector(".b-drop")
// var blogDropAct = document.querySelector(".drop-b")


// homeDrop.addEventListener("click", function() {
//     if(homeDrop.getAttribute("home") === "1") {
//         homeDropAct.classList.add("block")
//         homeDrop.setAttribute("home", "2")
//     } else {
//         homeDropAct.classList.remove("block")
//         homeDrop.setAttribute("home", "1")
//     }
// })

// pagesDrop.addEventListener("click",function() {
//     if(pagesDrop.getAttribute("page") === "1") {
//         pagesDropAct.classList.add("block")
//         pagesDrop.setAttribute("page", "2")
//     } else {
//         pagesDropAct.classList.remove("block")
//         pagesDrop.setAttribute("page", "1")
//     }
// })
// blogDrop.addEventListener("click",function() {
//     if(blogDrop.getAttribute("blog") === "1") {
//         blogDropAct.classList.add("block")
//         blogDrop.setAttribute("blog", "2")
//     } else {
//         blogDropAct.classList.remove("block")
//         blogDrop.setAttribute("blog", "1")
//     }
// })




// // end button navbar



// start slider image


var sliderOne = document.querySelector(".slider-1");
var slidrTwo = document.querySelector(".slider-2");

var btnBuy = document.querySelectorAll(".buy-bt")
var arrBtn = Array.from(btnBuy);





var tIMer = null;

slideFade()

function slideFade() {
if (sliderOne.getAttribute("bg") == "1") {
    sliderOne.classList.remove("none")
    slidrTwo.classList.add("none")
    sliderOne.setAttribute("bg", "2")
    slidrTwo.setAttribute("bg", "1")
} else {
    slidrTwo.classList.remove("none")
    sliderOne.classList.add("none")
    sliderOne.setAttribute("bg", "1")
    slidrTwo.setAttribute("bg", "2")
    
}

}
var tIMer = setInterval(slideFade, 4000)



$(".buy-bt").on("mouseenter",function() {
     clearInterval(tIMer);
})

$(".buy-bt").on("mouseout",function() {
    tIMer = setInterval(slideFade, 4000)
})




// end slider img


// start product hover



    // var acTion = document.querySelectorAll('.product');
    // var arrAct = Array.from(acTion)
    // var doAct = document.querySelectorAll('.action')
    // var arrDo = Array.from(doAct)

   
    // // console.log(arrAct);

    // acTion.forEach((el) => {
    //    el.onmouseover = function() {
    //        doAct[arrAct.indexOf(el)].classList.remove("none")
    //    } 
    //    el.onmouseout = function() {
    //     doAct[arrAct.indexOf(el)].classList.add("none")
    // } 
    // })


// end product hover




// start navbar

// var nav = document.querySelectorAll(".over");
// var showNavCont = document.querySelectorAll(".show")


// var arrShow = Array.from(showNavCont)
// var arrNav = Array.from(nav)

// arrNav.forEach((el) => {
//     el.onmouseover = function() {
       
//         arrShow[arrNav.indexOf(el)].classList.remove("none")
//     }
    
//     arrShow.forEach((ele) => {
//         ele.onmouseleave = function () {
//             ele.classList.add("none")
//         }
//     })
// })







// end navbar
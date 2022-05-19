$('.rotating-slider').rotatingSlider({
    autoRotate: true,
    autoRotateInterval: 6000,
    draggable: true,
    directionControls: false,
    directionLeftText: '&lsaquo;',
    directionRightText: '&rsaquo;',
    rotationSpeed: 750,
    slideHeight: 130,
    slideWidth: 170,
    /* Callback Functions */
    beforeRotationStart: function(){
    },
    afterRotationStart: function(){},
    beforeRotationEnd: function(){},
    afterRotationEnd: function(){}
});


function reload(){
    
let inner = document.querySelectorAll(" .inner");
let active = document.querySelectorAll("ul.slides li")
let banner = document.querySelector(".banner")
let value1 = active[0].classList.contains('active-slide');
let value2 = active[1].classList.contains('active-slide');
let value3 = active[2].classList.contains('active-slide');
let value4 = active[3].classList.contains('active-slide');
let value5 = active[4].classList.contains('active-slide');
let value6 = active[5].classList.contains('active-slide');

const img = inner[0].children[0].attributes.src.value;

if(value1){
    // console.log(1);
    let src = inner[0].children[0].attributes.src.value;
    
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}else if(value2){
    // console.log(2);
    let src = inner[1].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value3){
    // console.log(3);
    let src = inner[2].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value4){
    // console.log(4);
    let src = inner[3].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value5){
    // console.log(5);
    let src = inner[4].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}
else if(value6){
    // console.log(6);
    let src = inner[5].children[0].attributes.src.value;
    banner.style.backgroundImage = 'url(' + src + ')';
    banner.style.opacity = "1";
}else{
    banner.style.backgroundImage = 'url(' + img + ')';
}

}
setInterval('reload()', 6000);





function on() {
  document.getElementById("overlay").style.display = "block";
  document.querySelector(".login-area").classList.add("block")
}
function onsr() {
  document.getElementById("overlay").style.display = "block";
  document.querySelector(".search-area").classList.add("block")
}
function onlg() {
  document.getElementById("overlay").style.display = "block";
  document.querySelector(".language").classList.add("block");
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.querySelector(".login-area").classList.remove("block");
  document.querySelector(".language").classList.remove("block");
  document.querySelector(".search-area").classList.remove("block");


}

let countryImg = document.querySelector(".country1 a img");


let getImg = document.querySelectorAll(".img");

for(let i=0; i<getImg.length;i++){
    getImg[i].addEventListener('click', function (){
        let src = this.childNodes[1].attributes.src.value;
        countryImg.attributes.src.value = `${src}`;
        // console.log(src);
    })
}

// getImg[0].childNodes[1].attributes.src.value


let navbar = document.querySelector(".header-nav");

if(window.screenTop>10){
    navbar.classList.add('active');
}

// if(window.innerWidth <= 600 ){
//     alert('leass then with 600px');
//     window.location.href = 'http://www.youtube.com';
// }
// $(".menu-area ul.side-menu li").mouseover(function(){
//     $(this).find('span').show()
// })




    $(".menu-area ul.side-menu li ul.menu-wraper li.after  ").click(function(){
        $(this).children('.dropdown').animate({
        height: 'toggle'
    },1000);
    $(this).siblings().find('ul').animate({
        height: 'hide'
    },500);;
    })
$('.menu-area ul.side-menu li').click(function(){
    $(this).children(".menu-wraper").toggle('.show')
})
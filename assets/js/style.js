//Header
var check = $('input#check');
var menu = $('header .menu');

check.change(function(){
    if(this.checked){
        menu.addClass('active');
    }else{
        menu.removeClass('active');
    }
});

//scrolltop
const scrollTop = document.getElementById('scrolltop')
window.onscroll = () => {
  if (window.scrollY > 0) {
    scrollTop.style.visibility = "visible";
    scrollTop.style.opacity = 100;
  } else {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
  }
};
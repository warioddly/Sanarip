window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})


$(window).scroll(function(){
  var $sections = $('section');
  $sections.each(function(i,el){
  var top  = $(el).offset().top-100;
  var bottom = top +$(el).height();
  var scroll = $(window).scrollTop();
  var id = $(el).attr('id');
  if( scroll > top && scroll < bottom){
    $('a.active').removeClass('active');
    $('a[href="#'+id+'"]').addClass('active');
  }
   })
});



mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
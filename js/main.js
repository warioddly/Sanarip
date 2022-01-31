window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(window).scroll(function(){
  var $sections = $('section');
  $sections.each(function(i,el){
  var top  = $(el).offset().top - 200;
  var bottom = top +$(el).height();
  var scroll = $(window).scrollTop();
  var id = $(el).attr('id');
  if( scroll > top && scroll < bottom){
    $('a.active').removeClass('active');
    $('a[href="#'+id+'"]').addClass('active');
  }
   })
});

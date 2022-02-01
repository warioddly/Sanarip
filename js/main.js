window.addEventListener("scroll", function(){
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
})

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
const home = $('.sidebar .nav .home, .bullets .a');
const about = $('.sidebar .nav .about, .bullets .b');
const services = $('.sidebar .nav .services');
const contact = $('.sidebar .nav .contact');
const home_section = $('.home_section');
const about_section = $('.about_section');
const nav_btns = $('.sidebar .nav li');
const bullets = $('.bullets li');


window.addEventListener('scroll', () => {
   const home_scroll = home_section.offset().top ;
   const about_scroll = about_section.offset().top - 10;
   const current_scroll = document.documentElement.scrollTop
   console.log('home_scroll', home_scroll, 'current_scroll', current_scroll)
   console.log('about_scroll', about_scroll, 'current_scroll', current_scroll)
   console.log('home', current_scroll == home_scroll)
   console.log('about', current_scroll == about_scroll)
   if (current_scroll >= home_scroll) {
      nav_btns.removeClass('active');
      bullets.removeClass('active');
      home.addClass('active');
   }

   if (current_scroll >= about_scroll) {
      nav_btns.removeClass('active');
      bullets.removeClass('active');
      about.addClass('active');
   }
})

nav_btns.on('click', e => {
   e.stopPropagation();
   nav_btns.removeClass('active');
   $(e.target).addClass('active');
})

bullets.on('click', e => {
   bullets.removeClass('active');
   $(e.target).addClass('active');
})

$(home).on('click', e => {
   e.stopPropagation();
   scrollTo({
      left: home_section.offset().left,
      top: home_section.offset().top,
      behavior: "smooth"
   })
});

$(about).on('click', e => {
   e.stopPropagation();
   scrollTo({
      left: about_section.offset().left,
      top: about_section.offset().top,
      behavior: "smooth"
   })
});
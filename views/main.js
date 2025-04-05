const home = $('.sidebar .nav .home, .bullets .a');
const about = $('.sidebar .nav .about, .bullets .b');
const portfolio = $('.sidebar .nav .portfolio, .bullets .d');
const contact = $('.sidebar .nav .contact');
const home_section = $('.home_section');
const about_section = $('.about_section');
const portfolio_section = $('.portfolio_section');
const sidebar_btns = $('.sidebar .nav li');
const sidebar = $('.sidebar');
const bullets = $('.bullets li');
const bar = $('.bar');

window.addEventListener('scroll', () => {
   const home_scroll = home_section.offset().top ;
   const about_scroll = about_section.offset().top - parseInt(about_section.height());
   const portfolio_scroll = portfolio_section.offset().top - parseInt(portfolio_section.height());
   const current_scroll = document.documentElement.scrollTop;
   console.log('home_scroll', home_scroll, 'current_scroll', current_scroll);
   console.log('about_scroll', about_scroll, 'current_scroll', current_scroll);
   console.log('portfolio_scroll', portfolio_scroll, 'current_scroll', current_scroll);
   console.log('home', current_scroll == home_scroll);
   console.log('about', current_scroll == about_scroll);
   console.log('portfolio', current_scroll == portfolio_scroll);
   if (current_scroll >= home_scroll) {
      sidebar_btns.removeClass('active');
      bullets.removeClass('active');
      home.addClass('active');
   }

   if (current_scroll >= about_scroll) {
      sidebar_btns.removeClass('active');
      bullets.removeClass('active');
      about.addClass('active');
   }

   if (current_scroll >= portfolio_scroll) {
      sidebar_btns.removeClass('active');
      bullets.removeClass('active');
      portfolio.addClass('active');
   }
})

sidebar_btns.on('click', e => {
   e.stopPropagation();
   sidebar_btns.removeClass('active');
   $(e.target).addClass('active');
})

bullets.on('click', e => {
   bullets.removeClass('active');
   $(e.target).addClass('active');
})

home.on('click', e => {
   e.stopPropagation();
   scrollTo({
      left: home_section.offset().left,
      top: home_section.offset().top,
      behavior: "smooth"
   })
});

about.on('click', e => {
   e.stopPropagation();
   scrollTo({
      left: about_section.offset().left,
      top: about_section.offset().top,
      behavior: "smooth"
   })
});

portfolio.on('click', e => {
   e.stopPropagation();
   scrollTo({
      left: portfolio_section.offset().left,
      top: portfolio_section.offset().top,
      behavior: "smooth"
   })
});


bar.on('click', () => {
   sidebar.toggleClass('show');
   bar.toggleClass('show');
})
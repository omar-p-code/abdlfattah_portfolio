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

// Portfoio

fetch('config.json').then(d => {
   return d.json()
}).then(async d => {
   const main_video = d.portfolio.main_video;
   await chang_video(main_video.name, portfolio_section.find('.video_bar .main')[0]);
   portfolio_section.find('.video_bar .main .title').text(main_video.title);
   portfolio_section.find('.video_bar .main .discription').text(main_video.discription);
   portfolio_section.find('.video_bar .main').on('click', async e => {
   await chang_video(main_video.name, e.currentTarget);
   });
   console.log(d.portfolio.exmps)
   for (let i =0; i<= d.portfolio.exmps.length; i++) {
      const video = d.portfolio.exmps[i];
      console.log(video)
      portfolio_section.find('.video_bar .exmps').append(`
         <li data-video='${video.name}' onclick="chang_video('${video.name}', this)">
            <h3 class="title">${video.title}</h3>
            <p class="discription">${video.description}</p>
         </li>
         `)
   }
})


async function chang_video(video, e) {
   console.log(e)
   const current_video = portfolio_section.find('.video video')[0];
   current_video.src = `videos/${video}`;
   await current_video.load();
   current_video.controls = true
   current_video.play();

   $(e).siblings().removeClass('active');
   portfolio_section.find('.video_bar .exmps li').removeClass('active');
   portfolio_section.find('.video_bar .main').removeClass('active');
   $(e).addClass('active');
   current_video.addEventListener('ended', () => {
      current_video.controls = false;
      if ($(e).has('main')) {
         console.log(true)
         portfolio_section.find('.video_bar .exmps li')[0].click();       
      }
      if ($(e).has('li')) {
         console.log($(e).next(), $(e))
         $(e).next().click();
      }
   })
}
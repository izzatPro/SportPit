window.addEventListener('DOMContentLoaded', () =>{
// Tabs
let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabParrent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
    };
    function showTabContent(i = 0){
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    tabParrent.addEventListener('click', function(e){
        const target = e.target;
        console.log(e.target);
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i) =>{
                console.log(item);
                if (target == item){
                    hideTabContent();
                    showTabContent(i);                }
            });
        }
    });


    // Scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){     
      window.location.hash = hash;
        });
      } 
    });
  });
    // Scroll Top  
  $('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); 
    });
    $(window).scroll(function() { 
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if(scrolled > 350) {
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});
    //timer
    const deadline = '2022-12-31';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor((t/(1000*60*60*24))),
              seconds = Math.floor( (t/1000) % 60),
              minutes = Math.floor( (t/1000/60) % 60 ),
              hours = Math.floor ( (t/(1000*60*60) % 24 ));
              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }

    function getZero(num){
        if (num >= 0 && num < 10){
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector , endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerInterval = setInterval(updateClock, 1000);
              updateClock();
              function updateClock(){
                const t = getTimeRemaining(endtime);
                days.innerHTML = getZero(t.days),
                hours.innerHTML = getZero(t.hours),
                minutes.innerHTML = getZero(t.minutes),
                seconds.innerHTML = getZero(t.seconds);
                if( t.total <= 0){
                    clearInterval(timerInterval);
                }
              }
    }

    setClock('.timer', deadline);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');
          modalTrigger.forEach(btn => {
            btn.addEventListener('click', function(){
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
            });
          });

          function closeModal(){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
          }
          modalCloseBtn.addEventListener('click',closeModal);
          modal.addEventListener('click', (e) =>{
            console.log(e.target);
            if (e.target === modal ) {
                closeModal();
            }
          });

          document.addEventListener('keydown', (e) =>{
            if (e.code === 'Escape' && modal.classList.contains('show')){
                closeModal();
            }
          });


});

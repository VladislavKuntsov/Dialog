const slider = document.querySelector('.swiper-container');
 let mySwiper;

 function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        mySwiper = new Swiper('.swiper-container', {
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        })
        slider.dataset.mobile = 'true';
    } 

     if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';
           
        if (slider.classList.contains('.swiper-container-initialized')) {  
            mySwiper.destroy();
        }
    }
}
    mobileSlider();
    window.addEventListener('resize', () => {
        mobileSlider();
        showLessMore();
    });

    var slides = document.querySelectorAll('.swiper-slide');
    console.log(slides);
    
    function showLess() {
        if(window.innerWidth >= 768 && window.innerWidth < 992) {
            for(let i = 6; i < slides .length; i++) {
                slides[i].style.display = "none";
            }
        }
        if(window.innerWidth >= 992) {
            for(let i = 8; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
        }
    }

    function showMore   () {
        if(window.innerWidth >= 768 && window.innerWidth < 992) {
            for(let i = 0; i < slides .length; i++) {
                slides[i].style.display = 'block';
                
            }
        }
        if(window.innerWidth >= 992 ) {
            for(let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'block';
                
            }
        }
    }

    var less = document.querySelector('.button-less');
    var more = document.querySelector('.button-more');

    function showLessMore () {
        less.addEventListener('click', function(evt) { 
            evt.preventDefault();
            
            showLess();
            more.style.display = 'block';
            less.style.display = 'none';
        })
    
        more.addEventListener('click', function(evt) { 
            evt.preventDefault();
            
            showMore ();
            more.style.display = 'none';
            less.style.display = 'block';
        })
    }   
    showLessMore ();
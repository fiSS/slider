

    //slider
    let slideIndex = 1, 
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);

        function showSlides(n) { //сюда вместо n попадает 2 из showSlides(slideIndex += n);

            if (n > slides.length) { //если слайды закончились, то возвращаемся к 1 слайду
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length; //возвращаемся к самому последнему слайду
            }

            slides.forEach((item) => item.style.display = 'none'); 
            dots.forEach((item) => item.classList.remove('dot-active')); //способ более современный

            slides[slideIndex - 1].style.display = 'block'; //конвертация нормальной нумерации в js
             dots[slideIndex - 1].classList.add('dot-active');
            }

            function plusSlides(n) { 
                showSlides(slideIndex += n); 
            } 

            function currentSlide(n) {
                showSlides(slideIndex = n); 
            }

            prev.addEventListener('click', function() { //уменьшаем на 1 и идём на слайд назад
                plusSlides(-1);
            });

            next.addEventListener('click', function() {
                plusSlides(1);
            });
            
            dotsWrap.addEventListener('click', function(event){
                for (let i = 0; i < dots.length + 1; i++){
                    if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                        currentSlide(i);
                    }
                }

            });
        

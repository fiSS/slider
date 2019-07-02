

    //slider
    let slideIndex = 1, //переменная отвечает за тот слайд который показывается в данный момент
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

            slides.forEach((item) => item.style.display = 'none'); //скрываем все слайды 1 способ более современный
            // for (let i = 0; i < slider.length; i++) { //через цикл
            //     slider[i].style.display = 'none';
            dots.forEach((item) => item.classList.remove('dot-active')); //способ более современный

            slides[slideIndex - 1].style.display = 'block'; //конвертация нормальной нумерации в js
             dots[slideIndex - 1].classList.add('dot-active');
            }

            function plusSlides(n) { //будет изменять слайд индекс в зависимости от того в какцю сторону идём
                showSlides(slideIndex += n); //увеличиваем слайд на 1 и сразу вызываем функцию showSlides уже с 2 как аргумент
            } 

            //функция которая будет вычисляь текущий слайд и устанавливать его
            function currentSlide(n) {
                showSlides(slideIndex = n); //когда кликаем например на 4 точку сюда будет передаваться цифра 4 и ф-я showSlides запускается с 4-ой и мы видим 4 слайд
            }

            prev.addEventListener('click', function() { //уменьшаем на 1 и идём на слайд назад
                plusSlides(-1);
            });

            next.addEventListener('click', function() {
                plusSlides(1);
            });

            //делегирование событий, если слайды будут автоматически добавляться на страницу, то мы будем генерить новые точки и на них будут висеть уже обработчики событий
            dotsWrap.addEventListener('click', function(event){
                for (let i = 0; i < dots.length + 1; i++){
                    if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                        currentSlide(i);
                    }
                }

            });
        

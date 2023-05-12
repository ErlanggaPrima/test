$(document).ready(function(){
    $(".preloader").slideUp(6000);
    })
    
    $("#banner").addClass("shrink");
    
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 1200,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2.3,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
    
    

    // Jquerry form

    
$(document).ready(function() {
    $('#submitBtn').click(function() {
      // get the values of the name and email fields
      var name = $('#name').val();
      var email = $('#email').val();
      

      if (!email.includes("@")) {
        $('#notification').text('Please enter a valid email address.');
        return;
      }

      // display a pop-up message with the submitted values
      if (name && email) { // check that the name and email fields are not empty
        alert('Thank you, ' + name + ' for send your ideas!');
      } else {
        alert('Please fill out all fields.'); // display an error message if the fields are empty
      }

      
      
      // reset the form fields
      $('#name').val('');
      $('#email').val('');
      
      return false; // prevent the button from submitting the form
    });
  });

    // $(document).ready(function() {
    //     var scroll_pos = 0;
    //     $(document).scroll(function() {
    //         scroll_pos = $(this).scrollTop();
    //         if (scroll_pos > 86) {
    //             $('.nav-link').css('color', '#fff');
    //             $('#banner').css('color', '#000');

    //         } else {
    //             $('.nav-link').css('color', '#fff');
    
    //         }
    //     });
    // });
    
    
    // animation slide splashscreen
    // setTimeout(function() {
    //     $('.preloader').slideUp(1000);
    //     $('.loading-img').delay(170).slideUp('fast')
    // }, 4000);
    // animation slide splashscreen
    
    // $(window).scroll(function() {
    //     var image = document.getElementById("navbarImg");
    //     if (document.documentElement.scrollTop > 86)
    //         image.src =
    //         "/assets/navbar.png";
    //     else
    //         image.src =
    //         "/assets/navbar.png";
    // })
    
    // const testFunction = () => {
        
    // }
    
    // var swiper = new Swiper(".swiperFull", {
    //     // Optional parameters
    //     slidesPerView: 1,
    //     loop: true,
    
    //     // autoplay: {
    //     //     delay: 5000,
    //     //     disableOnInteraction: false
    //     // },
    //     allowTouchMove: true,
    //     // If we need pagination
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     },
    
    // })


    //   
    // Modal Function
    // Modal Function //
    // const scriptURL =
    //     'https://script.google.com/macros/s/AKfycby1RbCmM4mcFsdqsFeSSqwWY0jHmqAOO-WZk_TMuaB89zfmdj8KhpdgucQZtW5BVFQXQA/exec'
    // const form = document.forms['hellokoding-form'];
    // const btnKirim = document.querySelector('.btn-kirim');
    // const btnLoading = document.querySelector('.btn-loading');
    // const myAlert = document.querySelector('.my-alert');
    
    // form.addEventListener('submit', e => {
    //     e.preventDefault()
    
    //     // ketika tombol submit di click 
    //     // tampilkan tombol loading hilangkan tombol kirim 
    //     btnLoading.classList.toggle('d-none');
    //     btnKirim.classList.toggle('d-none');
    
    //     fetch(scriptURL, {
    //             method: 'POST',
    //             body: new FormData(form)
    //         })
    //         // tampilkan tombol kirim hilangkan tombol kirim 
    
    //     .then((response) => {
    //         btnLoading.classList.toggle('d-none');
    //         btnKirim.classList.toggle('d-none');
    //         // tampilkan alert 
    //         myAlert.classList.toggle('d-none')
    //             // reset form
    //         form.reset();
    //         console.log('Success!', response)
    //     })
    
    //     .catch(error => console.error('Error!', error.message))
    // })
    
    // autoplay video
    // window.onload = function() {
    //     document.getElementById("autoplay").play();
    // }
    
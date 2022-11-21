scrollToTopButton = document.getElementById("scrollToTopButton");
let currentCity = localStorage.getItem("city");

if (!currentCity) {
  currentCity = "București";
  localStorage.setItem("city", "București");
}

// Actualizam orasul afisat pe ecran.
updateCityDisplay(currentCity);

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);


$(document).ready(function() {
  $('.go-top').hide(0)
  
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.go-top').fadeIn(200);      
    } else {
      $('.go-top').fadeOut(300);
    }
  });
  $('.go-top').click(function() {
    event.preventDefault();
    
    $('html , body').animate({scrollTop: 0}, 1000);
  });
});
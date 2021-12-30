$(document).ready(function(){



    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){
         
            updateWidget(data, "toronto");
            weatherIcon(data.weather[0].main, "toronto");
          
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){
             
            updateWidget(data, "manhattan");   
            weatherIcon(data.weather[0].main, "manhattan");
              
            
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?id=3451189&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "rio");
            weatherIcon(data.weather[0].main, "rio");    
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?id=3441575&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "montevideo");
            weatherIcon(data.weather[0].main, "montevideo"); 
   
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "paris");
            weatherIcon(data.weather[0].main, "paris");
   
        }   
    });
    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "berlin");
            weatherIcon(data.weather[0].main, "berlin");
                
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Rome&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "rome");
            weatherIcon(data.weather[0].main, "rome"); 
                
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Cairo&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "cairo");
            weatherIcon(data.weather[0].main, "cairo");

        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "seoul");
            weatherIcon(data.weather[0].main, "seoul");
                
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Shanghai&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "shanghai");
            weatherIcon(data.weather[0].main, "shanghai");
                
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "tokyo");
            weatherIcon(data.weather[0].main, "tokyo");
        }   
    });

    $.ajax({
        type : 'GET',
        url : "https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=b8c83742a57bf0ecea649246f86171f0",
        dataType : "jsonp",
        success: function(data){

            updateWidget(data, "karachi");
            weatherIcon(data.weather[0].main, "karachi");
        }   
    });



});

function updateWidget(data, city) {

    $('#' + city +'-country').text(data.sys.country);
    $('#' + city + '-clouds').text(data.clouds.all + "%");
    $('#' + city + '-weather').text(data.weather[0].description);
    $('#' + city + '-temp').text(Math.round(data.main.temp));
    $('#' + city + '-humidity').text(data.main.humidity + "%");
    $('#' + city + '-pressure').text(data.main.pressure + "hPa");
    $('#' + city + '-clouds').text(data.clouds.all + "%"); 

}

function weatherIcon(jsonObj, city) {
    switch (jsonObj) {
        case "Clouds":
          $('.'+ city + '-weather-icon').attr("src","https://myleschuahiock.files.wordpress.com/2016/02/cloudy.png");
          break;
        case "Clear":
          $('.'+ city + '-weather-icon').attr("src","https://myleschuahiock.files.wordpress.com/2016/02/sunny2.png");
          break;
        case "Thunderstorm":
           $('.'+ city + '-weather-icon').attr("src","https://myleschuahiock.files.wordpress.com/2016/02/thunderstorm.png");
          break;
        case "Drizzle":
           $('.'+ city + '-weather-icon').attr("src","https://myleschuahiock.files.wordpress.com/2016/02/drizzle.png");
          break;
        case "Rain":
           $('.'+ city + '-weather-icon').attr("src","https://myleschuahiock.files.wordpress.com/2016/02/rain.png");
          break;
        case "Snow":
           $('.'+ city + '-weather-icon').attr("src","https://myleschuahiock.files.wordpress.com/2016/02/snow.png");
          break;
        case "Extreme":
           $('.'+ city + '-weather-icon').attr("src","https://myleschuahiock.files.wordpress.com/2016/02/warning.png");
        break;
      }
}



// let key = "http://api.weatherapi.com/v1/forecast.json?key=0defe7f05be74d56b9b131037230207&q=London&days=1&aqi=no&alerts=no"

// Lets start writing javascript

// http://api.ipstack.com/${c}?access_key=4445712e26ec962ed5d304917ef7b009

// 30K request fro city https://api.ipgeolocation.io/ipgeo?apiKey=63f52de91ce64446b11082f188e490aa&ip=${c}

// Locator:- https://apiip.net/api/check?ip=${c}& accessKey = b950fec7-0e98-4442-a4bb-5269a47306c

// key for location fetcher 4445712e26ec962ed5d304917ef7b009

// IP and Location Fetcher async functions 4
let ID_address = async () =>
{
    let promise = await fetch(`https://api.ipify.org?format=json`)
    let response = await promise.json()
    document.getElementById("ip_place").innerHTML = response.ip
    let b = document.getElementById("ip_place").innerHTML
    console.log(b)
}
let double_executor = async () =>
{
    await ID_address()
let Location = async () =>
{
    let c = document.getElementById("ip_place").innerHTML
    console.log("c =" + c)
   //  try
   //  {
    let promise = await fetch(`http://api.ipstack.com/${c}?access_key={get your api key}`)
    let response = await promise.json()
    console.log(response)
    get(response.city)
   //  }catch (error) {
   //    fun = () =>
   //    {
   //       setTimeout(() => {
   //          document.querySelector(".error_message").style.opacity=`0`
   //       }, 5000);
   //          document.querySelector(".error_message").style.opacity=`1`
   //    }
   //    fun();
   //    console.error("Error caught in fetching geolocation");
   // }
    
    //  --------------- -------- ------ --- -- -  --------------- -------- ------ --- -- - //
                                // AFTER RETRIVING iP AND LOCATION
   // --------------- -------- ------ --- -- -  --------------- -------- ------ --- -- - //
}
Location()
}
let wait_search = async() =>
{
      await double_executor() 
   const search_value = document.getElementById("search_value")
   const search_btn = document.getElementById("search_button")
   
   search_btn.addEventListener("click" , () =>
   {
       get(search_value.value)
   })
}
   wait_search()

// async finction yo fect data from api
const get = async (city) =>
{
   try
   {
      let promise  = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0defe7f05be74d56b9b131037230207&q=${city}&days=1&aqi=no&alerts=no`)
      let response = await promise.json()
      console.log(response)
      // container2 - div-3 {
      document.getElementById("real_feel").innerHTML = Math.round(response.current.feelslike_c) + "°"
      document.getElementById("UV_index").innerHTML =  response.current.uv // UV
      document.getElementById("wind_speed").innerHTML =  response.current.wind_kph + " km/h"
      document.getElementById("rain_probablity").innerHTML =  response.forecast.forecastday[0].day.daily_chance_of_rain + "%"
  
      // container2-div1
      document.getElementById("head_temperature").innerHTML = Math.round(response.current.temp_c) + "°"
      document.getElementById("city_name").innerHTML = response.location.name
      document.getElementById("region_country").innerHTML = response.location.region + ", " + response.location.country
  
      // One Day Forcast
      // 6:00 AM
      document.getElementById("temp_6am").innerHTML = Math.round(response.forecast.forecastday[0].hour[6].temp_c) + "°"
     // 9:00 AM
     document.getElementById("temp_9am").innerHTML = Math.round(response.forecast.forecastday[0].hour[9].temp_c) + "°"
     // 12:00 PM
     document.getElementById("temp_12Pm").innerHTML = Math.round(response.forecast.forecastday[0].hour[12].temp_c) + "°"
     // 3:00 PM
     document.getElementById("temp_3Pm").innerHTML = Math.round(response.forecast.forecastday[0].hour[15].temp_c) + "°"
     // 6:00 PM
     document.getElementById("temp_6Pm").innerHTML = Math.round(response.forecast.forecastday[0].hour[18].temp_c) + "°"
     // 9:00 PM
     document.getElementById("temp_9Pm").innerHTML = Math.round(response.forecast.forecastday[0].hour[21].temp_c) + "°"
  
  //    // Head Image Change Function
       head_Image_initializer = () =>
       {
           if(response.current.condition.text == "Mist")
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/Cloudy.png`
           }
           else if(response.current.condition.text == "Partly cloudy")
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/Partly_Cloudy.png`
           }
           else if(response.current.condition.text == "Overcast")
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/Cloudy.png`
           }
           else if(response.current.condition.text == "Cloudy")
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/Cloudy.png`
           }
           else if(response.current.condition.text == "Sunny")
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/Sunny.png`
           }
           else if(response.current.condition.text == "Clear")
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/Sunny.png`
           }
           else if(response.current.condition.text == "Patchy rain possible")
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/Cloudy.png`
           }
           else
           {
              document.getElementById("head_weather_image").src = `assets/Orignal_assets/rainy.png`
           }
       }
       head_Image_initializer()
       console.log(response.current.condition.text)
  
       // Day Forecast Image Initializer Function
       dayForecast_Image_initializer = (weather , target) =>
       {
           if(weather == "Mist")
           {
              target.src = `assets/Orignal_assets/Cloudy.png`
           }
           else if(weather == "Partly cloudy")
           {
              target.src = `assets/Orignal_assets/Partly_Cloudy.png`
           }
           else if(weather == "Overcast")
           {
              target.src = `assets/Orignal_assets/Cloudy.png`
           }
           else if(weather == "Cloudy")
           {
              target.src = `assets/Orignal_assets/Cloudy.png`
           }
           else if(weather == "Sunny")
           {
              target.src = `assets/Orignal_assets/Sunny.png`
           }
           else if(weather == "Clear")
           {
              target.src = `assets/Orignal_assets/Sunny.png`
           }
           else if(weather == "Patchy rain possible")
           {
              target.src = `assets/Orignal_assets/Cloudy.png`
           }
           else
           {
              target.src = `assets/Orignal_assets/rainy.png`
           }
       }
       let img_target1 = document.getElementById("day_forcast_image1")
       let img_target2 = document.getElementById("day_forcast_image2")
       let img_target3 = document.getElementById("day_forcast_image3")
       let img_target4 = document.getElementById("day_forcast_image4")
       let img_target5 = document.getElementById("day_forcast_image5")
       let img_target6 = document.getElementById("day_forcast_image6")
  
       dayForecast_Image_initializer(response.forecast.forecastday[0].hour[6].condition.text , img_target1)
       console.log(response.forecast.forecastday[0].hour[6].condition.text + " 1")
       dayForecast_Image_initializer(response.forecast.forecastday[0].hour[9].condition.text , img_target2)
       console.log(response.forecast.forecastday[0].hour[9].condition.text + " 2")
       dayForecast_Image_initializer(response.forecast.forecastday[0].hour[12].condition.text , img_target3)
       console.log(response.forecast.forecastday[0].hour[12].condition.text + " 3")
       dayForecast_Image_initializer(response.forecast.forecastday[0].hour[15].condition.text , img_target4)
       console.log(response.forecast.forecastday[0].hour[15].condition.text + " 4")
       dayForecast_Image_initializer(response.forecast.forecastday[0].hour[18].condition.text , img_target5)
       console.log(response.forecast.forecastday[0].hour[18].condition.text + " 5")
       dayForecast_Image_initializer(response.forecast.forecastday[0].hour[21].condition.text , img_target6)
       console.log(response.forecast.forecastday[0].hour[21].condition.text + " 6")
     
       // Container3 Time and Date
       // Maximum Temperature
        document.getElementById("java_maxtemp").innerHTML = response.forecast.forecastday[0].day.maxtemp_c
        
        //Minimum Temperature
        document.getElementById("java_mintemp").innerHTML = response.forecast.forecastday[0].day.mintemp_c
  
        //Sun-Rise
        document.getElementById("java_sunrise").innerHTML = response.forecast.forecastday[0].astro.sunrise
  
        // Sun-Set
        document.getElementById("java_sunset").innerHTML = response.forecast.forecastday[0].astro.sunset
  
       //Time
       Time_executor = () =>
       {
           if(response.location.localtime.slice(12,13) == `:`)
           {
              let a = `0` + "" + response.location.localtime.slice(10,16)
              document.getElementById("java_Time").innerHTML = a.split(" ").join("")
           }
           else
           {
              document.getElementById("java_Time").innerHTML = response.location.localtime.slice(10,16)
           }
       }
       Time_executor()
       // Timw Zone
       document.getElementById("java_TimeZone").innerHTML = response.location.tz_id
       //Date
       document.getElementById("java_Date").innerHTML = response.location.localtime.slice(8,10)
       // Month
     //   document.getElementById("java_Month").innerHTML = response.location.localtime.slice(8,10)
       Month = (Mon) =>
       {
           if(Mon == `01`)
           {
              document.getElementById("java_Month").innerHTML = "Jan"
           }
           else if(Mon == `02`)
           {
              document.getElementById("java_Month").innerHTML = "Feb"
           }
           else if(Mon == `03`)
           {
              document.getElementById("java_Month").innerHTML = "Mar"
           }
           else if(Mon == `04`)
           {
              document.getElementById("java_Month").innerHTML = "Apr"
           }
           else if(Mon == `05`)
           {
              document.getElementById("java_Month").innerHTML = "May"
           }
           else if(Mon == `06`)
           {
              document.getElementById("java_Month").innerHTML = "Jun"
           }
           else if(Mon == `07`)
           {
              document.getElementById("java_Month").innerHTML = "Jul"
           }
           else if(Mon == `08`)
           {
              document.getElementById("java_Month").innerHTML = "Aug"
           }
           else if(Mon == `09`)
           {
              document.getElementById("java_Month").innerHTML = "Sep"
           }
           else if(Mon == `10`)
           {
              document.getElementById("java_Month").innerHTML = "Oct"
           }
           else if(Mon == `11`)
           {
              document.getElementById("java_Month").innerHTML = "Nov"
           }
           else if(Mon == `12`)
           {
              document.getElementById("java_Month").innerHTML = "Dec"
           }
       }
  Month(response.location.localtime.slice(5,7))
   }catch (error) {
      fun = () =>
      {
         setTimeout(() => {
            document.querySelector(".error_message").style.opacity=`0`
         }, 5000);
            document.querySelector(".error_message").style.opacity=`1`
      }
      fun();
      console.error("Error caught in search");
   }
}



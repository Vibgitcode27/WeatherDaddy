// let key = "http://api.weatherapi.com/v1/forecast.json?key=0defe7f05be74d56b9b131037230207&q=London&days=1&aqi=no&alerts=no"

// Lets start writing javascript




// key for location fetcher 4445712e26ec962ed5d304917ef7b009

// IP and Location Fetcher async functions
let ID_address = async () =>
{
    let promise = await fetch("https://api.ipify.org?format=json")
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
    let promise = await fetch(`http://api.ipstack.com/${c}?access_key=d484765a518d8c4b49b4db7215150531`)
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
double_executor()
 //  http://api.weatherapi.com/v1/forecast.json?key=0defe7f05be74d56b9b131037230207&q=London&days=3&aqi=no&alerts=yes
 //  --------------- -------- ------ --- -- -  --------------- -------- ------ --- -- - //
                                // GET FUNCTION FOR FORECAST
    // --------------- -------- ------ --- -- -  --------------- -------- ------ --- -- - //

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



    const get = async (city) =>
{
   try
   {
    let promise  = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0defe7f05be74d56b9b131037230207&q=${city}&days=3&aqi=no&alerts=yes`)
    let response = await promise.json()
    console.log(response)
    // ------------- Container 2 ------------------- // 
 
    Month = (Mon ,date) =>
     {
         if(Mon == `01`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Jan"
         }
         else if(Mon == `02`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Feb"
         }
         else if(Mon == `03`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Mar"
         }
         else if(Mon == `04`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Apr"
         }
         else if(Mon == `05`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "May"
         }
         else if(Mon == `06`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Jun"
         }
         else if(Mon == `07`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Jul"
         }
         else if(Mon == `08`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Aug"
         }
         else if(Mon == `09`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Sep"
         }
         else if(Mon == `10`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Oct"
         }
         else if(Mon == `11`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Nov"
         }
         else if(Mon == `12`)
         {
            document.getElementById(`java_Month${date}`).innerHTML = "Dec"
         }
     }
     Month(response.forecast.forecastday[0].date.slice(5,7) ,0)
     Month(response.forecast.forecastday[1].date.slice(5,7) ,1)
     Month(response.forecast.forecastday[2].date.slice(5,7) ,2)
    //  Date
    document.getElementById("java_Date0").innerHTML = response.forecast.forecastday[0].date.slice(8,10)
    document.getElementById("java_Date1").innerHTML = response.forecast.forecastday[1].date.slice(8,10)
    document.getElementById("java_Date2").innerHTML = response.forecast.forecastday[2].date.slice(8,10)
 
     // Image Initializor Function
     const Image_initializer = (weather , target) =>
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
    
     let Target1 = document.getElementById("java_core_image1")
     let Target2 = document.getElementById("java_core_image2")
     let Target3 = document.getElementById("java_core_image3")
 
     Image_initializer( response.forecast.forecastday[0].day.condition.text , Target1)
     Image_initializer( response.forecast.forecastday[1].day.condition.text , Target2)
     Image_initializer( response.forecast.forecastday[2].day.condition.text , Target3)
 
     // Temperature
    document.getElementById("java_forecast_temp0").innerHTML = Math.round(response.forecast.forecastday[0].day.avgtemp_c) + "°"
    document.getElementById("java_forecast_temp1").innerHTML = Math.round(response.forecast.forecastday[1].day.avgtemp_c) + "°" 
    document.getElementById("java_forecast_temp2").innerHTML = Math.round(response.forecast.forecastday[2].day.avgtemp_c) + "°"
 
    //-------------- Container3 City -----------------//
     document.getElementById("java_city_name").innerHTML = response.location.name
     // Container3 Area and country
     document.getElementById("java_region_country").innerHTML = response.location.region
    //    Detailed Forecast div
    const variable = (number) =>
    {
    // 6:00 AM
    document.getElementById("java_temp_6am").innerHTML = Math.round(response.forecast.forecastday[`${number}`].hour[6].temp_c) + "°"
    // 9:00 AM
    document.getElementById("java_temp_9am").innerHTML = Math.round(response.forecast.forecastday[`${number}`].hour[9].temp_c) + "°"
    // 12:00 PM
    document.getElementById("java_temp_12Pm").innerHTML = Math.round(response.forecast.forecastday[`${number}`].hour[12].temp_c) + "°"
    // 3:00 PM
    document.getElementById("java_temp_3Pm").innerHTML = Math.round(response.forecast.forecastday[`${number}`].hour[15].temp_c) + "°"
    // 6:00 PM
    document.getElementById("java_temp_6Pm").innerHTML = Math.round(response.forecast.forecastday[`${number}`].hour[18].temp_c) + "°"
    // 9:00 PM
    document.getElementById("java_temp_9Pm").innerHTML = Math.round(response.forecast.forecastday[`${number}`].hour[21].temp_c) + "°"
    
 
    // -------- Images --------- //
    let img_target1 = document.getElementById("day_forcast_image1")
     let img_target2 = document.getElementById("day_forcast_image2")
     let img_target3 = document.getElementById("day_forcast_image3")
     let img_target4 = document.getElementById("day_forcast_image4")
     let img_target5 = document.getElementById("day_forcast_image5")
     let img_target6 = document.getElementById("day_forcast_image6")
 
    Image_initializer(response.forecast.forecastday[`${number}`].hour[6].condition.text , img_target1)
     console.log(response.forecast.forecastday[`${number}`].hour[6].condition.text + " 1")
     Image_initializer(response.forecast.forecastday[`${number}`].hour[9].condition.text , img_target2)
     console.log(response.forecast.forecastday[`${number}`].hour[9].condition.text + " 2")
     Image_initializer(response.forecast.forecastday[`${number}`].hour[12].condition.text , img_target3)
     console.log(response.forecast.forecastday[`${number}`].hour[12].condition.text + " 3")
     Image_initializer(response.forecast.forecastday[`${number}`].hour[15].condition.text , img_target4)
     console.log(response.forecast.forecastday[`${number}`].hour[15].condition.text + " 4")
     Image_initializer(response.forecast.forecastday[`${number}`].hour[18].condition.text , img_target5)
     console.log(response.forecast.forecastday[`${number}`].hour[18].condition.text + " 5")
     Image_initializer(response.forecast.forecastday[`${number}`].hour[21].condition.text , img_target6)
     console.log(response.forecast.forecastday[`${number}`].hour[21].condition.text + " 6")
     
     // Container3 Average Day Temperature
     document.getElementById("java_head_temperature").innerHTML = Math.round(response.forecast.forecastday[`${number}`].day.avgtemp_c) + "°"
    //  Container3 Head Weather Image
    Image_initializer( response.forecast.forecastday[`${number}`].day.condition.text , document.getElementById("head_weather_image"))
    }
 
    const v1 = document.querySelector(".Day1_forecast")
    const v2 = document.querySelector(".Day2_forecast")
    const v3 = document.querySelector(".Day3_forecast")
 
    v1.addEventListener("click" , () =>
    {
      document.querySelector(".Day1_forecast").classList.add("on-click");
      document.querySelector(".Day1_forecast").classList.remove("Day1_forecast_background")
      document.querySelector(".Day2_forecast").classList.remove("on-click");
      document.querySelector(".Day2_forecast").classList.add("Day2_forecast_background")
      document.querySelector(".Day3_forecast").classList.remove("on-click");
      document.querySelector(".Day3_forecast").classList.add("Day3_forecast_background")
      document.querySelector(".container3").style.display='block'
      variable(0)
    })
 
    v2.addEventListener("click" , () =>
    {
      document.querySelector(".Day2_forecast").classList.add("on-click");
      document.querySelector(".Day2_forecast").classList.remove("Day2_forecast_background")
      document.querySelector(".Day1_forecast").classList.remove("on-click");
      document.querySelector(".Day1_forecast").classList.add("Day1_forecast_background")
      document.querySelector(".Day3_forecast").classList.remove("on-click");
      document.querySelector(".Day3_forecast").classList.add("Day3_forecast_background")
      document.querySelector(".container3").style.display='block'
      variable(1)
    })
 
    v3.addEventListener("click" , () =>
    {
      document.querySelector(".Day3_forecast").classList.add("on-click");
      document.querySelector(".Day3_forecast").classList.remove("Day3_forecast_background")
      document.querySelector(".Day1_forecast").classList.remove("on-click");
      document.querySelector(".Day1_forecast").classList.add("Day1_forecast_background")
      document.querySelector(".Day2_forecast").classList.remove("on-click");
      document.querySelector(".Day2_forecast").classList.add("Day2_forecast_background")
      document.querySelector(".container3").style.display='block'
      variable(2)
    })
   }catch (error) {
      fun = () =>
      {
         setTimeout(() => {
            document.querySelector(".error_message").style.opacity=`0`
         }, 5000);
            document.querySelector(".error_message").style.opacity=`1`
      }
      fun();
      console.error("Error caught in fetching geolocation");
   }

    }
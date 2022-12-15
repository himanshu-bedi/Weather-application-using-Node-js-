      const curDate = document.getElementById("date");
      let weathercon = document.getElementById("weathercon");

      const tempstatuss=document.getElementById("status");

      const tempStatus=tempstatuss.innerText;
      // tempStatus.innerText='';
      console.log(tempStatus)


      //condition to check sunny or cloudy
          if (tempStatus === "Sunny") {
            weathercon.innerHTML ="<i class='fas  fa-sun' style='color: #eccc68;font-size: 3.5em'></i>";
        } else if (tempStatus === "Clouds") {
            weathercon.innerHTML = "<i class='fas  fa-cloud' style='color: #f1f2f6;font-size: 3.5em'></i>";
        } else if (tempStatus === "Rainy") {
            weathercon.innerHTML ="<i class='fas  fa-cloud-rain' style='color: #a4b0be;font-size: 3.5em'></i>";
            
        }
        else if (tempStatus === "Clear") {
          weathercon.innerHTML ="<i class='fas fa-cloud-sun' style='color:#fffa65;font-size: 3.5em'></i>";
          
      }  
    //   else if (tempStatus === "Haze") {
    //     console.log("haze")
    //     weathercon.innerHTML ="<i class='fas fa-sun-haze' style='color:#fffa65;font-size: 3.5em'></i>";
        
    // }   
        else {
          console.log("hehehehe");
            weathercon.innerHTML ="<i class='fas  fa-cloud' style='color:#e5f5f5;font-size: 3.5em'></i>";
        }
      //   // tempstatuss.innerHTML="";

      const getCurrentDay = () => {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        let currentTime = new Date();
        let day = weekday[currentTime.getDay()];
        return day;
      };

      const getCurrentTime = () => {
        var months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];

        var now = new Date();
        var month = months[now.getMonth()];
        
        var date = now.getDate();

        let hours = now.getHours();
        let mins = now.getMinutes();

        let periods = "AM";

        if (hours > 11) {
          periods = "PM";
          if (hours > 12) hours -= 12;
        }
        if (mins < 10) {
          mins = "0" + mins;
        }

        return `${month} ${date} | ${hours}:${mins}${periods}`;
      };

      console.log("hellooo");

      curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();

      

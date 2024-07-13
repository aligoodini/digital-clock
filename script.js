      // way 1
      const time = document.querySelector(".time");
      const tarikh = document.querySelector(".tarikh");
      setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let year = date.getFullYear();
        let month = date.getMonth();
        console.log(month);

        let day = date.getDate();
        let week = date.getDay();
        switch (month) {
          case 0:
            month = "January";
            break;
          case 1:
            month = "February";
            break;
          case 2:
            month = "March";
            break;
          case 3:
            month = "April";
            break;
          case 4:
            month = "May";
            break;
          case 5:
            month = "June";
            break;
          case 6:
            month = "July";
            break;
          case 7:
            month = "August";
            break;
          case 8:
            month = "September";
            break;
          case 9:
            month = "October";
            break;
          case 10:
            month = "November";
            break;
          default:
            month = "December";
        }

        switch (week) {
          case 1:
            week = "Sunday";
            break;
          case 2:
            week = "Monday";
            break;
          case 3:
            week = "Tuesday";
            break;
          case 4:
            week = "Wednesday";
            break;
          case 5:
            week = "Thursday";
            break;
          case 6:
            week = "Friday";
            break;
          default:
            week = "Saturday";
        }
        let day_night = "AM";

        if (hours > 12) {
          day_night = "PM";
          hours = hours - 12;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        tarikh.textContent = `${week},${day} ${month} , ${year}`;
        time.textContent = `${hours}:${minutes}:${seconds}  ${day_night}`;
      }, 1000);

      // way 2

      // const date = new Date()
      // let hour = date.getHours()
      // let min = date.getMinutes()
      // let sec = date.getSeconds()

      // setInterval(() => {

      //     sec += 1

      //     if(sec == 60){
      //         min += 1;
      //         sec = 0;
      //     }
      //     if (hour == 24 ){
      //         min = 0;
      //         hour +=1 ;
      //     }
      //     if (hour > 12 ){
      //         hour = hour - 12;
      //     }

      //     console.log(hour , min , sec)

      //     time.innerHTML = `${hour} : ${min} : ${sec} `

      // }, 1000);

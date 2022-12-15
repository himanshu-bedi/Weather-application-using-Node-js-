const express=require("express");
const fs=require('fs');
const app=new express();
const requests=require("requests");
const http=require('http');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



const homefile=fs.readFileSync('public/index.html',"utf-8");

const replaceVal = (tempVal, orgVal) => {
    
    let temperature = tempVal.replace("{%tempval%}", incelsius(orgVal.main.temp));
    temperature = temperature.replace("{%tempmin%}", incelsius(orgVal.main.temp_min));
    temperature = temperature.replace("{%tempmax%}", incelsius(orgVal.main.temp_max));
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
  
    return temperature;
  };

  function incelsius(temp)
  {
      let tem=(temp-273.15);
      tem=tem.toFixed(2);
        return tem;
  }

 let namee="delhi";

  app.post("/",(req,res)=>{
    namee=req.body.city;  
    // res.send(req.body.city);
    res.redirect("/");
  })



app.get("/",(req,res)=>{
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${namee}&appid=226163db47f080177e6e93d94dabe6a4`
      )
        .on("data", (chunk) => {
          // console.log(chunk)
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];

          // console.log(arrData[0].main.temp);

          const realTimeData = arrData.map((val) => replaceVal(homefile, val)).join("");
          app.use(express.static('public'));

            res.write(realTimeData);
          // console.log(realTimeData);

        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });
    
})



app.listen(80);





// const showdata=()=>{
//     url="https://api.openweathermap.org/data/2.5/weather?q=Amritsar&appid=226163db47f080177e6e93d94dabe6a4";
//     fetch(url).then((response)=>{
//         return response.json();

//     }).then((data)=>{

//         const objdata=JSON.parse(data);
//         const arrdata=[objdata];
//         console.log(arrdata[0].main.temp);
//     })
// }
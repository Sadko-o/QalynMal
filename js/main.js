// const cookieBox = document.querySelector(".wrapper"),
// acceptBtn = cookieBox.querySelector("button");
// acceptBtn.onclick = ()=>{
//     //setting cookie for 1 month-> 7 days, after  it'll be expired automatically
//     document.cookie = "Cookie=Aruka; max-age="+60*60*24*7;
//     if(document.cookie){ //if cookie is set
//       cookieBox.classList.add("hide"); //hide cookie box
//     }else{ //if cookie not set then alert an error
//       alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
//     }
//   }
//   let checkCookie = document.cookie.indexOf("Cookie=Aruka"); //checking our cookie
//   //if cookie is set then hide the cookie box else show it
//   checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");


let sum = 0;


function validate(){
  //01
  if (document.getElementById('01').checked){
    sum += 500;
  } else if (!document.getElementById('01').checked) {
    sum -= 500;
  }
  //03
  if (document.getElementById('03').checked){
    sum += 300;
  } else if (!document.getElementById('03').checked) {
    sum -= 300;
  }
  //05
  if (document.getElementById('05').checked){
    sum += 200;
  } else if (!document.getElementById('05').checked) {
    sum -= 200;
  }
  //06
  if (document.getElementById('06').checked){
    sum += 100;
  } else if (!document.getElementById('06').checked) {
    sum -= 100;
  }
  //07
  if (document.getElementById('07').checked){
  } else if (!document.getElementById('07').checked) {
    sum -= 300;
  }
  //08
  if (document.getElementById('08').checked){
    sum += 300;
  } else if (!document.getElementById('08').checked) {
    sum -= 300;
  }
  //09
  if (document.getElementById('09').checked){
    sum += 600;
  } else if (!document.getElementById('09').checked) {
    sum -= 100;
  }
  //10
  if (document.getElementById('10').checked){
    sum += 250;
  } else if (!document.getElementById('10').checked) {
    sum -= 250;
  }
  //11
  if (document.getElementById('11').checked){
    sum += 450;
  } else if (!document.getElementById('11').checked) {
    sum -= 450;
  }
  //12
  if (document.getElementById('12').checked){
    sum += 500;
  } else if (!document.getElementById('12').checked) {
    sum -= 500;
  }
  //13
  if (document.getElementById('13').checked){
    sum += 800;
  } else if (!document.getElementById('13').checked) {
    sum -= 800;
  }
  //14
  if (document.getElementById('14').checked){
    sum += 200;
  } else if (!document.getElementById('14').checked) {
    sum -= 300;
  }
  //15
  if (document.getElementById('15').checked){
    sum += 100;
  } else if (!document.getElementById('15').checked) {
    sum -= 100;
  }
  //17
  if (document.getElementById('17').checked){
    sum += 150;
  } else if (!document.getElementById('17').checked) {
    sum -= 150;
  }
  //18
  if (document.getElementById('18').checked){
    sum += 500;
  } else if (!document.getElementById('18').checked) {
    sum -= 300;
  }
  //19
  if (document.getElementById('19').checked){
    sum += 300;
  } else if (!document.getElementById('19').checked) {
    sum -= 300;
  }
  //21
  if (document.getElementById('21').checked){
    sum -= 300;
  } else if (!document.getElementById('21').checked) {
    sum += 300;
  }


}

var min = 1000;
var max = 8000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(min, max)
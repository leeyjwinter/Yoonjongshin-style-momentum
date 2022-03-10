const clock = document.querySelector("h3#clock");



function sayHello(){
    console.log("hello");
}

function showTime(){
    const date = new Date();
    hour = String(date.getHours());
    minute = String(date.getMinutes());
    second = String(date.getSeconds());

    //padStart는 문자열인 second가 2자리 수가 아니면 앞 부분을
    //0으로 채우라는 의미
    hour = hour.padStart(2,"0");
    minute = minute.padStart(2,"0");
    second = second.padStart(2,"0");

    clock.innerText = `${hour}:${minute}:${second}`;
}

showTime();
setInterval(showTime,1000);




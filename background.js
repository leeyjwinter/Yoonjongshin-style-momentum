const images = [
    "0.jpg",
    "1.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "32.jpg",
    "33.jpg",
    "34.jpg",
    "35.jpg",
    "36.jpg",
    "37.jpg",
    "38.jpg",
    "39.jpg",
    "40.jpg",
];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

//javascript에서 이미지 객체를 만들고 chosenImage라고 source를 지정해줌
// const bgImage = document.createElement("img");

// console.log(bgImage);

//document의 body안에 넣어줌


for(i=0;i<images.length;i++){

    let chosenImage = images[i];
    //a 태그 만들고 href 설정
    const bgImageLink = document.createElement("a");
    bgImageLink.href= "http://www.naver.com";
    bgImageLink.setAttribute('class','content');

    //img 태그 만들고 src 설정
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}`;

    //a 태그 rollingWrap에 넣고 img 태그 a에 넣음
    document.body.querySelector(".rollingWrap").appendChild(bgImageLink);
    bgImageLink.appendChild(bgImage);


}









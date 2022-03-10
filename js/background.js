const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    // "10.jpg",
    // "11.jpg",
    // "12.jpg",
    // "13.jpg",
    // "14.jpg",
    // "15.jpg",
    // "16.jpg",
    // "17.jpg",
    // "18.jpg",
    // "19.jpg",
    // "20.jpg",
    // "21.jpg",
    // "22.jpg",
    // "23.jpg",
    // "24.jpg",
    // "25.jpg",
    // "26.jpg",
    // "27.jpg",
    // "28.jpg",
    // "29.jpg",
    // "30.jpg",
    // "31.jpg",
    // "32.jpg",
    // "33.jpg",
    // "34.jpg",
    // "35.jpg",
    // "36.jpg",
    // "37.jpg",
    // "38.jpg",
    // "39.jpg",
    // "40.jpg",
];

const MVLink = [
    {
        num: 0,
        source: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0pe7ecWqO9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    },

    {
        num:1,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/PfHk32r9tLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    },

    {
        num:2,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Li9bY3iGaaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
        num:3,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/uIKd1PW1Ci4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    },

    {
        num:4,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/xhkIVF-Q3CQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },

    {
        num:5,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/NlgZT8yL2Nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    },

    {
        num:6,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/5DXNXyodQxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        
    },

    {
        num:7,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/kdLp-GgGNl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
    },

    {
        num:8,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/GQNrtdJtcBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    },
    {
        num:9,
        source:'<iframe width="560" height="315" src="https://www.youtube.com/embed/V6VX9xR0XTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    }


];

const MVButton = document.querySelector("rollingWrap div");
const MVArea = document.getElementById("YoonMV");

function paintMV(event){
    const buttonClicked = event.target.parentElement;
    const buttonNum = buttonClicked.id.slice(-(buttonClicked.id.length-7));
    MVArea.innerHTML=MVLink[buttonNum-1].source;
}


for(i=0;i<images.length;i++){

    let chosenImage = images[i];
    //button 태그 만들고 eventlistener 설정
    const bgImageLink = document.createElement("div");
    bgImageLink.setAttribute('class','content');
    bgImageLink.addEventListener("click",paintMV);

    //img 태그 만들고 src 설정
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}`;

    //button 태그 rollingWrap에 넣고 img 태그 button에 넣음
    document.body.querySelector(".rollingWrap").appendChild(bgImageLink);
    bgImageLink.appendChild(bgImage);
}







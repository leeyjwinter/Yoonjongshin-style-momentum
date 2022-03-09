const quotes = [
    {
        quote: "오 놀라워라 그대 향한 내마음 오 새로워라 처음 보는 내 모습 매일 이렇다면 모진 이세상도 참 살아갈 만 할거에요",
        title: "환생",
    },
    {
        quote: "안녕 오랜 나의 사람아 내일 슬프지 않기로 해 마지막은 기억에 남기에 눈물은 미련이라는 것 쯤 서로의 가슴은 알기에 우리 편하게 내일 이별해",
        title: "내일 할 일",
    },
    {
        quote: "날 사랑해 난 아직도 사랑받을 만해 이제서야 진짜 나를 알 것 같은데 이렇게 떠밀리듯 가면 언젠가 나이가 멈추는 날 서두르듯 마지막 말 할까봐 이것저것 뒤범벅인 된 채로 사랑해 용서해 내가 잘못했어 조금만 더 조금만 더 널 사랑해 날 용서해 지금부터",
        title: "나이",
    },
    {
        quote: "사랑해 이 길 함께 가는 그대여 굳이 고된 나를 택한 그대여 가끔 바람이 불 때만 저 먼 풍경을 바라봐 올라온 만큼 아름다운 우리 길",
        title: "오르막길",
    },
    {
        quote: "비교하지 마 상관하지 마 누가 그게 옳은 길이래 옳은 길 따위는 없는 걸 내가 걷는 이곳이 나의 길",
        title: "지친하루",
    },
    {
        quote: "이촌동 그 길 아직도 지날 땐 마치 어제 일처럼 선명해요 밤에 공원도 그 햄버거 집도 지하상가 그 덮밥집도",
        title: "1월부터 6월까지",
    },
    {
        quote: "네가 남발했던 사랑이란 달콤함은 너무 끈적거려 떨어지지 않아 이젠 꼼짝할 수도 이젠 숨을 막아오고 있어",
        title: "몬스터",
    },
    {
        quote: "포기하지 마 아프면 아픈 얘기 그 모든 순간순간 나만의 이야기야 멈추려 하지 마 분명 날아오를 기회가 와 좀 늦더라도내 눈가의 주름 깊은 곳엔 뭐가 담길지 궁금하지 않니 답은 조금 미룬 채 지금은 조금 더 부딪혀봐 ",
        title: "Slow Starter",
    },
    {
        quote: "우리 언제쯤인가 마주칠수 있겠지 저 불빛속을 거닐다보면 먼저 알아본사람 나였으면 해 난 언제나 바라봤기에 언제나",
        title: "야경",
    },
    {
        quote: "잘 지내라고 답할 걸 모두 다 내가 잘 사는 줄 다 아니까 그 알량한 자존심 때문에 너무 잘 사는 척 후련한 척 살아가",
        title: "좋니",
    },
 
];

const quote = document.querySelector("#quote span:first-child");
const title = document.querySelector("#quote span:last-child");

//0~1 사이의 숫자를 랜덤으로 추출하고 소숫점 뺌
num = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[num];
// console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
title.innerText = "-" + todaysQuote.title + "-";
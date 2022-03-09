const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        title: "Nelson Mandela",
    },
    {
        quote: "he way to get started is to quit talking and begin doing.",
        title: "Walt Disney",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        title: "Steve Jobs",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        title: "Eleanor Roosevelt",
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        title: "Oprah Winfrey",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        title: "James Cameron",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        title: "John Lennon",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        title: "Mother Teresa",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        title: "Franklin D. Roosevelt",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else. ",
        title: "Margaret Mead",
    },
 
];

const quote = document.querySelector("#quote span:first-child");
const title = document.querySelector("#quote span:last-child");

//0~1 사이의 숫자를 랜덤으로 추출하고 소숫점 뺌
num = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[num];
// console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
title.innerText = todaysQuote.title;
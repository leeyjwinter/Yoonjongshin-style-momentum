//html의 form 사용
//preventDefault함수로 JS의 기본기능을 잠그면서 실행하기

const  section = document.querySelector("section");
const  h1 = document.querySelector("h1");
const  buttonsWrap = document.querySelector(".buttonsWrap");
const  rollingWrap = document.querySelector(".rollingWrap");
const loginForm = document.querySelector("#login-form");

//loginForm id를 가진 태그의 요소들을 가져옴
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greetings = document.querySelector("h2");
const HIDDEN_CLASSNAME = "hidden";


//이는 jS에서 submit을 할 때 값을 전달하고 있으며 , 새로고침을 하면서 어떤 것들을
//실행함
//이를 막아줘야 함

function onLoginSubmitEvent(event){
    event.preventDefault();
    section.classList.remove(HIDDEN_CLASSNAME);
    h1.classList.remove(HIDDEN_CLASSNAME);
    buttonsWrap.classList.remove(HIDDEN_CLASSNAME);
    rollingWrap.classList.remove(HIDDEN_CLASSNAME);
	const username = loginInput.value; 
	loginForm.classList.add("hidden");
    paintGreetings(username);
	localStorage.setItem("username",username);

}

function paintGreetings(username){
    greetings.innerText = `${username}, thank you for loving Yoon`;
	greetings.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmitEvent);


const savedUsername = localStorage.getItem("username");
if(savedUsername!=null){
    
	loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);

}
else{
    section.classList.add(HIDDEN_CLASSNAME);
    h1.classList.add(HIDDEN_CLASSNAME);
    buttonsWrap.classList.add(HIDDEN_CLASSNAME);
    rollingWrap.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
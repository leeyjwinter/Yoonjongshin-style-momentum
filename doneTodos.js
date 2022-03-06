const toDoFormDone = document.getElementById("todo-formDone");
const toDoListDone = document.getElementById("todo-listDone");
const toDoInputDone = toDoFormDone.querySelector("input");

const TODOS_KEY = "doneTodos";

function deleteTodoDone(event){
    const li = event.target.parentElement;
    li.remove();
    //toDos 리스트를 업데이트 해줌(방금 클릭된 아이디 제외한 것만 남겨두는 필터함수)
    toDosDone = toDosDone.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDosDone(toDosDone);
}


function saveToDosDone(a){
    //toDOs의 값들을 string으로 저장해줌
    localStorage.setItem("doneTodos",JSON.stringify(a));
}

const savedToDosDone = localStorage.getItem(TODOS_KEY);

if(savedToDosDone){
    const parsedToDosDone = JSON.parse(savedToDosDone);
    toDosDone = parsedToDosDone;
    //텍스트 값을 배열 오브젝트로 바꿔줌
    parsedToDos.forEach(paintLocalDone);
    //parsedToDos의 각각의 요소에 대하여 함수실행하도록

}

function paintLocalDone(item){
    const li = document.createElement("li");
    li.id=item.id;
    const span = document.createElement("span");
    span.innerText = item.text;
    const button = document.createElement("div");
    button.classList.add("checkbox");
    button.innerText = "✔︎";
    button.addEventListener("click", deleteTodoDone);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

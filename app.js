const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector(`.js-input`);
const btnNode = document.querySelector(`.js-btn`)
let todos = [];
//Создание массива

//Добовление задачи (задает уникально айди) добовление туду в г лобальный массив
function addTodo(text) {
    const todo = {
        text,
        done:false,
        id: `${Math.random()}`
    };

    todos.push(todo);
}

//Удаление задачи (Ищит по айди совпадение в масиве), если находит подобый айди, меняет статус на тру
function deleteTodo(id) {
    todos.forEach(todo =>{
        if (todo.id === id) {
            todo.done = true;
        }
    })
}


//Добовлен задачи в хтмл
function render() {
    let html = '';

    todos.forEach(todo => {
        if (todo.done) {
            return;
        }
        html += `
        <div>
        🔥 ${todo.text}
            <button data-id="${todo.id}">Zrobione✅</button>
        </div>
        `
    })

    todosNode.innerHTML = html;
}

//Кнопка добавление задачи (Проверка кнопки на нажатие) если кнопка нажата, добовляет задачу из инпута
btnNode.addEventListener('click', () => {
    const text = inputNode.value;

    addTodo(text);
    render();
})

todosNode.addEventListener('click', (event) =>{
    if(event.target.tagName !=='BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);
    render();
})

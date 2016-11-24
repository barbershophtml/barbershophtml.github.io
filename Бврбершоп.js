//Пошаговый js на примере Барбершопа

// Находим кнопку Вход с классом .login и присваиваем ей имя link
var link = document.querySelector(".login");

// находим модальное окно с формой входа
var popup = document.querySelector(".modal-content");

// Кстати, чтобы найти ВСЕ элементы используем querySelectorAll

// А чтобы понять работает или не работает код, команду console.log("Здесь текст"); - сообщение в консоль браузера (F12)

// Отлавливаем событие click по найденному элементу link
// Сбрасываем у него действие по умолчанию - переход по ссылке
// Открываем модальное окно с формой входа, которое предварительно нашли. Для этого элементу popup присваиваем класс .modal-content-show, стили которого (display: block;) прописаны в css

//ВАЖНО! В аргументе метода classList точка перед именем класса не ставится - этот метод и так касается только и исключительно классов 

link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    
//Закрываем модальное окно
// Внутри popap ищем класс .modal-content-close
    
var close = popup.querySelector(".modal-content-close");
    
// И удаляем у него класс modal-content-show
// на всякий случай отменяя действие по умолчанию
close.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.remove("modal-content-show");
    }); 

/* Кстати, всего возможно 4 действия с классами 
    element.classList.add("class"); - добавление класса
    element.classList.remove("class"); - удаление класса
    element.classList.toggle("class"); - переключение класса (если класс есть, его уберут, если нет - добавят)
    element.classList.contains("class"); - сообщает, есть ли у элемента класс */
    
// Важно: в названии класса точка не пишется - уже говорила, но ошибка частая
// Метод classList работает только от Internet Explorer 10
    
// Промежуточный итог №1

var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
}); 
    
    
    
    
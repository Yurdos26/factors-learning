// Получаем кнопку "Факторы успешного обучения"
const mainButton = document.querySelector('.main-item');

// Получаем все остальные 14 кнопок
const menuItems = document.querySelectorAll('.menu-item:not(.main-item)');


// Скрываем все кнопки, кроме кнопки "Факторы успешного обучения"
menuItems.forEach(menuItem => {
  menuItem.style.display = 'none';
});

// Добавляем обработчик событий при клике на кнопку "Факторы успешного обучения"
mainButton.addEventListener('click', () => {
    // Показываем все 14 кнопок
    menuItems.forEach(menuItem => {
        menuItem.style.display = 'block';
    });
});

// Добавляем обработчик событий при клике на пустое место на странице
document.addEventListener('click', (event) => {
    const target = event.target;
    // Проверяем, было ли кликнуто вне области галлереи или вне модального окна
    if (!target.closest('.gallery, .modal')) {
        // Скрываем все 14 кнопок, кроме кнопки "Факторы успешного обучения"
        menuItems.forEach(menuItem => {
            menuItem.style.display = 'none';
        });
    }
});
  
// Добавляем обработчик событий для каждой кнопки 
var modalBtns = document.getElementsByClassName("openModal");
var modals = document.getElementsByClassName("modal");

// код для отображения модального окна нажатой кнопки
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener("click", function() {
    var modalId = this.dataset.modalid;
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
}
// код для закрытия модального окна
var closeBtns = document.getElementsByClassName("close");

for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = "none";
  });
}
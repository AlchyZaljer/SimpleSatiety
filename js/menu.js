// если размер окна меньше 1101px
if (window.matchMedia("(max-width: 1100px)").matches) {
    // сохранение всех элементов горизонатльного меню
    const horizontals = document.querySelectorAll('.horizontalMenu');

    // скрытие горизонатльного меню
    horizontals.forEach((item) => {
        item.classList.toggle('unseen')
    });

    // открытие выпадающего меню
    document.querySelector('.dropdown').classList.toggle('unseen');

    // обработчик нажатия на кнопку для выпадения
    document.querySelector('.dropBtn').addEventListener('click', (event) => {
        document.querySelector(".dropMenu").classList.toggle('unseen');
    })
}
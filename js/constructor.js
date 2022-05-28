// обработчик кнопки "Найти"
document.querySelector('#searchBtn').addEventListener('click', (event) => {

    // получение значений выбранных опций
    let complexity = document.querySelector('input[name="complexity"]:checked').value;
    let recipeType = document.querySelector('input[name="recipe"]:checked').value;
    let equipment = document.querySelector('input[name="equipment"]:checked').value;

    // сохранение значений выбранных опций
    localStorage.setItem("complexity", `${complexity}`);
    localStorage.setItem("recipeType", `${recipeType}`);
    localStorage.setItem("equipment", `${equipment}`);
})

// обработчик кнопки "Показать все"
document.querySelector('#showAllBtn').addEventListener('click', (event) => {

    // сохранение нажатия
    localStorage.setItem("showAllFlag", 1);
})
    // получение id нажатой ссылки
    let link_id = localStorage.getItem("link_id");

    // создание названия рецепта
    let title = document.createElement('h1');
    title.className = "recipeTitle";
    title.innerText = collection[link_id].title;
    document.querySelector('.title').appendChild(title);

    // получение количества ингридиентов 
    let ingrNum = collection[link_id].ingredients.num;
    
    for (let i = 0; i < ingrNum; i++)
    {
        // создание строки под ингридиент
        let tr = document.createElement('tr');
        tr.id = 'ingrTr_' + i;
        document.querySelector('.ingrTable').appendChild(tr);

        // создание столбца под номер ингридиента
        let tdNum = document.createElement('td');
        tdNum.className = "ingrNum";
        tdNum.innerText = `${i+1}) `;
        document.querySelector(`#ingrTr_${i}`).appendChild(tdNum);

        // создание столбца под название ингридиента
        let tdTitle = document.createElement('td');
        tdTitle.className = "ingrName";
        tdTitle.innerText = collection[link_id].ingredients[i+1].title;
        document.querySelector(`#ingrTr_${i}`).appendChild(tdTitle);

        // создание столбца под количество ингридиента
        let tdAmount = document.createElement('td');
        tdAmount.className = "ingrAmount";
        tdAmount.innerText = collection[link_id].ingredients[i+1].num;
        document.querySelector(`#ingrTr_${i}`).appendChild(tdAmount);
    }

    // получение количества действий
    let actNum = collection[link_id].actions.num;

    for (let i = 0; i < actNum; i++)
    {
        // создание строки под действие
        let tr = document.createElement('tr');
        tr.id = 'actTr_' + i;
        document.querySelector('.actTable').appendChild(tr);

        // создание столбца под номер действия
        let tdNum = document.createElement('td');
        tdNum.className = "actNum";
        tdNum.innerText = `${i+1}. `;
        document.querySelector(`#actTr_${i}`).appendChild(tdNum);

        // создание столбца под описание действия
        let tdDescription = document.createElement('td');
        tdDescription.className = "actDescription";
        tdDescription.innerText = collection[link_id].actions[i+1];
        document.querySelector(`#actTr_${i}`).appendChild(tdDescription);
    }

    // обработчики нажатия на пункты горизонтального и вертикального меню
    document.addEventListener('click', function(event) {
        if (event.target.matches('.mainPage, .aboutPage, .exitPage')) {
            localStorage.clear();
        } 

        else if (event.target.matches('.searchPage')) {
            localStorage.removeItem("link_id");
        }
    });
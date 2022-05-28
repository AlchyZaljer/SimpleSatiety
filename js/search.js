    // получение значений выбранных опций
    let complexity = localStorage.getItem("complexity");
    let recipeType = localStorage.getItem("recipeType");
    let equipment = localStorage.getItem("equipment");
    let showAllFlag = localStorage.getItem("showAllFlag");

    // проверка на нажатие кнопки "Показать все"
    if (showAllFlag == 1) {
        // создание картинки тегов
        let allImg = document.createElement('img');
        allImg.setAttribute("src", "../img/all.svg");
        document.querySelector('.tagsImg').appendChild(allImg);

        // получение длины массива рецептов
        let size = Object.keys(collection).length;

        for (let i = 0; i < size; i++) {
            // создание названия рецепта
            let title = document.createElement('li');
            title.className = "recipeName";
            title.id = 'title_' + i;
            title.innerText = collection[i].title;
            title.innerText = title.innerText[0].toUpperCase() + title.innerText.substring(1).toLocaleLowerCase();
            document.querySelector('.listTable').appendChild(title);

            // создание ссылки на рецепт
            let link = document.createElement('a');
            link.className = "recipeLink";
            link.id = 'link_' + i;
            link.innerHTML = `<br>смотреть рецепт`;
            link.href = 'recipe.html';
            document.querySelector(`#title_${i}`).appendChild(link);

            // обработчик нажатия на ссылку
            document.querySelector(`#link_${i}`).addEventListener('click', (event) => {
                // сохранение id нажатой ссылки 
                localStorage.setItem("link_id", `${i}`);
            });
        }
    } else {
        // создание картинок тегов
        let complexityImg = document.createElement('img');
        switch (complexity) {
            case "easy":
                complexityImg.setAttribute("src", "../img/easy.svg");
                break;
            case 'ok':
                complexityImg.setAttribute("src", "../img/ok.svg");
                break;
        }

        let recipeTypeImg = document.createElement('img');
        switch (recipeType) {
            case "breakfast":
                recipeTypeImg.setAttribute("src", "../img/breakfast.svg");
                break;
            case 'salad':
                recipeTypeImg.setAttribute("src", "../img/salad.svg");
                break;
            case 'soup':
                recipeTypeImg.setAttribute("src", "../img/soup.svg");
                break;
            case 'garnish':
                recipeTypeImg.setAttribute("src", "../img/garnish.svg");
                break;
            case 'second':
                recipeTypeImg.setAttribute("src", "../img/second.svg");
                break;
            case 'meatdish':
                recipeTypeImg.setAttribute("src", "../img/meatdish.svg");
                break;
        }

        let equipmentImg = document.createElement('img');
        switch (equipment) {
            case "nothing":
                equipmentImg.setAttribute("src", "../img/nothing.svg");
                break;
            case 'stove':
                equipmentImg.setAttribute("src", "../img/stove.svg");
                break;
            case 'oven':
                equipmentImg.setAttribute("src", "../img/oven.svg");
                break;
            case 'microwane':
                equipmentImg.setAttribute("src", "../img/microwane.svg");
                break;
        }

        document.querySelector('.tagsImg').appendChild(complexityImg);
        document.querySelector('.tagsImg').appendChild(recipeTypeImg);
        document.querySelector('.tagsImg').appendChild(equipmentImg);

        // счетчик для выявления несовпадения комбинаций тегов
        let counter = 0;

        // получение длины массива рецептов
        let size = Object.keys(collection).length;

        for (let i = 0; i < size; i++) {
            if ((collection[i].tags.recipeType == recipeType) && (collection[i].tags.complexity == complexity) && (collection[i].tags.equipment == equipment)) {
                // создание названия рецепта
                let title = document.createElement('li');
                title.className = "recipeName";
                title.id = 'title_' + i;
                title.innerText = collection[i].title;
                title.innerText = title.innerText[0].toUpperCase() + title.innerText.substring(1).toLocaleLowerCase();
                document.querySelector('.listTable').appendChild(title);

                // создание ссылки на рецепт
                let link = document.createElement('a');
                link.className = "recipeLink";
                link.id = 'link_' + i;
                link.innerHTML = `<br>смотреть рецепт`;
                link.href = 'recipe.html';
                document.querySelector(`#title_${i}`).appendChild(link);

                // обработчик нажатия на ссылку
                document.querySelector(`#link_${i}`).addEventListener('click', (event) => {
                    // сохранение id нажатой ссылки 
                    localStorage.setItem("link_id", `${i}`);
                });

                counter++;
            }
        }

        if (counter == 0) {
            // скрытие поля результата
            document.querySelector('#foundTitle').classList.toggle('unseen');

            // создание уведомления о ненахождении информации
            let alert = document.createElement('p');
            alert.className = "searchAlert";
            alert.innerText = 'По Вашему запросу рецептов не найдено:(  Пожалуйста, попробуйте снова, я постараюсь Вам помочь.';
            document.querySelector('.listTitle').appendChild(alert);

            counter = 0;
        }
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
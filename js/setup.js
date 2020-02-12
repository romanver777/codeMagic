(function() {

    const setupEl = document.querySelector('.setup');
    const setupOpen = document.querySelector('.setup-open');
    const setupClose = document.querySelector('.setup-close');

    const similarHero = [];

    const fNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Юлия', 'Люпита', 'Вашингтон', 'Виктор'];
    const sNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    const coatColors = ['rgb(101, 131, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// генерация случайного числа
    function getRandomNumber(min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    }

// создание массива случайных неповторяющихся чисел
    function getArrayRandomIndexes(array, count) {
        const indexes = new Set();

        while (indexes.size < count) {
            indexes.add(Math.floor(Math.random() * Math.floor(array.length)));
        }

        return Array.from(indexes);
    }

// создание полного имени
    function getFullName(firstNames, secondNames) {
        const fullName = [];
        const arrIndexes = getArrayRandomIndexes(firstNames, 4);

        for (const i of arrIndexes) {
            fullName.push(`${firstNames[i]} ${secondNames[i]} `);
        }

        return fullName;
    }

// заполнение массива волшебников
    function fillArrayHeroes(names, colors, eyes) {
        const indColors = getArrayRandomIndexes(colors, 4);
        const indEyes = getArrayRandomIndexes(eyes, 4);

        for (let i = 0; i < names.length; i++) {
            similarHero.push({
                name: names[i],
                coatColor: colors[indColors[i]],
                eyesColor: eyes[indEyes[i]],
            });
        }
    }

// вывод волшебников в DOM
    function addSimilarWizards(wizards) {
        const template = document.querySelector('#similar-wizard-template').content.querySelector('div');
        const setupDiv = document.querySelector('.setup-similar-list');

        for (const el of wizards) {
            const element = template.cloneNode(true);

            element.querySelector('.setup-similar-label').innerText = el.name;
            element.querySelector('.wizard-coat').setAttribute('fill', el.coatColor);
            element.querySelector('.wizard-eyes').setAttribute('fill', el.eyesColor);

            setupDiv.appendChild(element);
        }

        document.querySelector('.setup-similar').classList.remove('hidden');
    }

// открытие-закрытие окна настройки персонажа
    setupOpen.addEventListener('click', () => setupEl.classList.remove('hidden'));
    setupClose.addEventListener('click', () => {

        setupEl.classList.add('hidden');
        setupEl.style = '';
    });

// замена цвета мантии при клике
    const setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');

    setupWizardCoat.addEventListener('click', () => {

        setupWizardCoat.setAttribute('style', `fill: ${coatColors[getRandomNumber(0, coatColors.length)]}`);
    });

// замена цвета глаз при клике
    const setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

    setupWizardEyes.addEventListener('click', () => {

        setupWizardEyes.setAttribute('style', `fill: ${eyesColors[getRandomNumber(0, eyesColors.length)]}`);
    });

// замена цвета файрбола при клике
    const setupFireballWrap = document.querySelector('.setup-fireball-wrap');

    setupFireballWrap.addEventListener('click', () => {

        setupFireballWrap.setAttribute('style', `background: ${fireballColors[getRandomNumber(0, fireballColors.length)]}`);
    });

    fillArrayHeroes(getFullName(fNames, sNames), coatColors, eyesColors);
    addSimilarWizards(similarHero);

})();
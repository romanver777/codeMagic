(function () {

    const setupEl = document.querySelector('.setup');
    const setupOpen = document.querySelector('.setup-open');
    const setupClose = document.querySelector('.setup-close');

    const coatColors = ['rgb(101, 131, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    let wizards = [];
    let wizardColor = {
        coat: document.querySelectorAll('.setup-wizard-appearance input')[0].value,
        eyes: document.querySelectorAll('.setup-wizard-appearance input')[1].value,
        fire: document.querySelector('.setup-fireball-wrap input').value
    };

// генерация случайного числа
    function getRandomNumber(min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    }

// успешная загрузка данных
    let successHandler = (data) => {

        wizards = data;
        createWizards(wizards);
    };

// вывод ошибки при загрузке данных
    let errorHandler = (message) => alert(message);

// вывод волшебников
    function createWizards(wizards) {

        const template = document.querySelector('#similar-wizard-template').content.querySelector('div');
        const setupDiv = document.querySelector('.setup-similar-list');

        if (setupDiv.childElementCount) {
            setupDiv.innerHTML = ''
        }

        getFilterWizards(wizards).forEach((el) => {

            const element = template.cloneNode(true);

            element.querySelector('.setup-similar-label').innerText = el.name;
            element.querySelector('.wizard-coat').style.fill = el.colorCoat;
            element.querySelector('.wizard-eyes').style.fill = el.colorEyes;

            setupDiv.appendChild(element);
        });

        document.querySelector('.setup-similar').classList.remove('hidden');
    }

// фильтрация волшебников
    function getFilterWizards(wizards) {

        const similarWizardsLength = 4;
        let wizardsCopy = wizards.slice();

        wizardsCopy.forEach((el) => {

            el.rate = 0;

            if (el.colorCoat == wizardColor.coat) {

                el.rate += 3;

                if (el.colorEyes == wizardColor.eyes) {

                    el.rate += 2;

                    if (el.colorFireBall == wizardColor.fire) {

                        el.rate += 1;
                    }
                }
            }
        });

        wizardsCopy.sort((a, b) => {
            return b.rate - a.rate
        })
            .splice(similarWizardsLength);

        return wizardsCopy;
    }

// отправка формы
    (function () {
        const form = setupEl.querySelector('.setup-wizard-form');

        form.addEventListener('submit', (e) => {

            window.save(new FormData(form), hideAndClearSetupElPosition, errorHandler);
            e.preventDefault();
        });
    })();

// закрытие окна и возврат в начальное положение
    let hideAndClearSetupElPosition = () => {

        setupEl.classList.add('hidden');
        setupEl.style = '';
    };

// открытие-закрытие окна настройки персонажа
    setupOpen.addEventListener('click', () => setupEl.classList.remove('hidden'));
    setupClose.addEventListener('click', () => hideAndClearSetupElPosition());

// замена цвета мантии при клике
    (function () {

        const setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');

        setupWizardCoat.addEventListener('click', () => {

            wizardColor.coat = setupWizardCoat.style.fill = coatColors[getRandomNumber(0, coatColors.length)];
            createWizards(wizards);
        });
    })();

// замена цвета глаз при клике
    (function () {

        const setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

        setupWizardEyes.addEventListener('click', () => {

            wizardColor.eyes = setupWizardEyes.style.fill = eyesColors[getRandomNumber(0, eyesColors.length)];
            createWizards(wizards);
        });
    })();

// замена цвета файрбола при клике
    (function () {

        const setupFireballWrap = document.querySelector('.setup-fireball-wrap');

        setupFireballWrap.addEventListener('click', () => {

            setupFireballWrap.style.background = fireballColors[getRandomNumber(0, fireballColors.length)];
        });
    })();

// загрузка данных
    window.load(successHandler, errorHandler);
})();

const setupEl = document.querySelector('.setup');

setupEl.classList.remove('hidden');

const similarHero = [
  // {
  //     name: '',
  //     coatColor: '',
  //     eyesColor: ''
  // }
];

const fNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Юлия', 'Люпита', 'Вашингтон', 'Виктор'];
const sNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const coatColors = ['rgb(101, 131, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// создание массива случайных неповторяющихся чисел
function getArrayIndexes(array, count) {
  const indexes = new Set();

  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * Math.floor(array.length)));
  }

  return Array.from(indexes);
}
// создание полного имени
function getFullName(firstNames, secondNames) {
  const fullName = [];
  const arrIndexes = getArrayIndexes(firstNames, 4);

  for (const i of arrIndexes) {
    fullName.push(`${firstNames[i]} ${secondNames[i]} `);
  }

  return fullName;
}
// заполнение массива волшебников
function fillArrayHeroes(names, colors, eyes) {
  const indColors = getArrayIndexes(colors, 4);
  const indEyes = getArrayIndexes(eyes, 4);

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
    element.querySelector('.wizard-coat').setAttributeNS(null, 'fill', el.coatColor);
    element.querySelector('.wizard-eyes').setAttributeNS(null, 'fill', el.eyesColor);

    setupDiv.appendChild(element);
  }

  document.querySelector('.setup-similar').classList.remove('hidden');
}

fillArrayHeroes(getFullName(fNames, sNames), coatColors, eyesColors);
addSimilarWizards(similarHero);

const addedMyths = [];
const mythsPull = [];
const randomMyths = [];
const myths = [
  {
    name: 'Газета',
    url : '1.png',
  },
  {
    name: 'Безвихідь',
    url : '2.png',
  },
  {
    name: 'Монстр',
    url : '3.png',
  },
  {
    name: 'Лупа',
    url : '4.png',
  },
  {
    name: '3в1',
    url : '5.png',
  },
  {
    name: 'Розплата',
    url : '6.png',
  },
  {
    name: 'Пустяк',
    url : '7.png',
  },
];

function addMyth2Pull(myth) {
  const mythCopy = { ...myth };
  const $mythsPull = document.getElementById('myths-pull');
  const mythDiv = document.createElement('div');
  const remove = document.createElement('button');
  const { h2, img } = htmlElMyth(mythCopy);

  mythCopy.div = mythDiv;

  remove.innerText = 'Видалити з пуллу';
  remove.addEventListener('click', (e) => {
    e.preventDefault();

    const mythsIndex = mythsPull.indexOf(mythCopy);

    if (mythsIndex === -1) {
      return;
    }

    mythsPull.splice(mythsIndex, 1);
    mythDiv.remove();
  });

  mythDiv.append(h2, img, remove);

  $mythsPull.append(mythDiv);
  mythsPull.push(mythCopy);
}

function addMyth(myth) {
  const mythCopy = { ...myth };
  const $allMyth = document.getElementById('all-myths');
  const mythDiv = document.createElement('div');
  const remove = document.createElement('button');
  const addToPullBtn = document.createElement('button');
  const { h2, img } = htmlElMyth(mythCopy);

  remove.innerText = 'Видалити';
  remove.addEventListener('click', (e) => {
    e.preventDefault();

    const addedMythsIndex = addedMyths.indexOf(mythCopy);

    if (addedMythsIndex === -1) {
      return;
    }

    addedMyths.splice(addedMythsIndex, 1);
    mythDiv.remove();
  });

  addToPullBtn.innerText = 'Додати до пуллу';
  addToPullBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addMyth2Pull(mythCopy);
  });

  mythDiv.append(h2, img, remove, addToPullBtn);

  $allMyth.append(mythDiv);
  addedMyths.push(mythCopy);

  addMyth2Pull(mythCopy);
}

function htmlElMyth(myth, index) {
  const h2 = document.createElement('h2');
  const img = document.createElement('img');

  h2.innerText = typeof index === 'number'
      ? `${myth.name} (${index})`
      : myth.name;

  img.setAttribute('weight', '50');
  img.setAttribute('height', '50');
  img.setAttribute('src', `imgs/${myth.url}`);

  return { h2, img };
}

function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function rndMyth() {
  if (!mythsPull.length) {
    return;
  }

  const $rndDiv = document.getElementById('rnd-myths');

  const index = randomInteger(0, mythsPull.length - 1);

  const myth = mythsPull[index];
  const mythCopy = { ...myth };

  delete mythCopy.div;

  const { h2, img } = htmlElMyth(mythCopy);
  const mythDiv = document.createElement('div');

  mythDiv.append(h2, img);

  myth.div.remove();

  $rndDiv.append(mythDiv);
  randomMyths.push(mythCopy);

  mythsPull.splice(index, 1);
}

function showBasicMyths() {
  const $mythsList = document.getElementById('myths-list');

  myths.forEach((myth, index) => {
    const div = document.createElement('div');
    const add = document.createElement('button');
    const { h2, img } = htmlElMyth(myth, index);

    add.innerText = 'Додати';
    add.addEventListener('click', (e) => {
      e.preventDefault();

      addMyth(myth);
    });

    div.append(h2, img, add);

    $mythsList.append(div);
  });
}

function attachRndEvent() {
  const rnd = document.getElementById('rnd-myth');

  rnd.addEventListener('click', (e) => {
    e.preventDefault();

    rndMyth();
  });
}

function attachMove2PullEvent() {
  const btn = document.getElementById('added-myths-move2pull');

  btn.addEventListener('click', () => addedMyths.forEach(addMyth2Pull));
}

function init() {
  showBasicMyths();
  attachRndEvent();
  attachMove2PullEvent();
}

const defaultTokens = [1, 1, 1, 2, 2, 3, 3, 0, 0, 4, 5, 6, 6, 6];

function defaultScenario() {
  if (!defaultTokens.length) {
    return;
  }

  defaultTokens.forEach(index => addMyth(myths[index]));
}

window.onload = function() {
  init();
  defaultScenario();
};

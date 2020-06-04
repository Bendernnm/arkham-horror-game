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

function htmlElMyth(myth) {
  const h2 = document.createElement('h2');
  const img = document.createElement('img');

  h2.innerText = myth.name;

  img.setAttribute('weight', '50');
  img.setAttribute('height', '50');
  img.setAttribute('src', `imgs/${myth.url}`);

  return { h2, img };
}

function showBasicMyths() {
  const $mythsList = document.getElementById('myths-list');

  myths.forEach((myth) => {
    const div = document.createElement('div');
    const add = document.createElement('button');
    const { h2, img } = htmlElMyth(myth);

    add.innerText = 'Додати';
    add.addEventListener('click', (e) => {
      e.preventDefault();

      addMyth(myth);
    });

    div.append(h2, img, add);

    $mythsList.append(div);
  });
}

function init() {
  showBasicMyths();
}


window.onload = function() {
  init();
};

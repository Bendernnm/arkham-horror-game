const cache = {};
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

}

function showBasicMyths() {
  cache.basicMyth = {};

  const els = [];
  const mythsList = document.getElementById('myths-list');

  myths.forEach((myth) => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const addToPull = document.createElement('button');

    h2.innerText = myth.name;

    img.setAttribute('weight', '50');
    img.setAttribute('height', '50');
    img.setAttribute('src', `imgs/${myth.url}`);

    addToPull.innerText = 'Додати до пулу';
    addToPull.addEventListener('onclick', (e) => {
      e.preventDefault();

      addMyth2Pull(myth);
    });

    div.append(h2);
    div.append(img);
    div.append(addToPull);

    mythsList.append(div);

    els.push({ h2, img, addToPull });
  });

  cache.basicMyth = { els, mythsList };
}

function init() {

}

window.onload = function() {
  showBasicMyths();
};

'use strict';
//Simple fun

const getJoke = function () {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res) => res.json())
    .then((data) => {
      txt.innerHTML = data.setup;
      setTimeout(() => {
        txt.innerHTML = data.punchline;
      }, 6000);
    });
};

const btn = document.querySelector('#btn');
const txt = document.querySelector('#txt');

btn.addEventListener('click', function () {
  getJoke();
});

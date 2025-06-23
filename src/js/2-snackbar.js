import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(ms => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Promise in ${ms}ms`,
        position: 'topRight',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '1.5',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        iconUrl: '../img/GroupOK.svg',
        progressBarColor: '#326101',
        color: '#59a10d',
        transitionIn: 'fadeInDown',
      });
    })
    .catch(ms => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Promise in ${ms}ms`,
        position: 'topRight',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '1.5',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        iconUrl: '../img/bi_x-octagon.svg',
        progressBarColor: '#b51b1b',
        color: '#ef4040',
        transitionIn: 'fadeInDown',
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
}

import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalFeedback = document.querySelector('.modal--feedback');
const modalFeedbackBtns = document.querySelectorAll('[data-modal="feedback"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');
const modalCall = document.querySelector('.modal--call');
const modalCallBtns = document.querySelectorAll('[data-modal="call"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalFeedback && modalFeedbackBtns.length) {
    setupModal(modalFeedback, false, modalFeedbackBtns, false, false);
  }
  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns);
  }
  if (modalCall && modalCallBtns.length) {
    setupModal(modalCall, false, modalCallBtns, false, false);
  }
};

export {initModals};

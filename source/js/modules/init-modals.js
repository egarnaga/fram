import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');
const modalCall = document.querySelector('.modal--call');
const modalCallBtns = document.querySelectorAll('[data-modal="call"]');
const modalError = document.querySelector('.modal--error');
const modalErrorBtns = document.querySelectorAll('[data-modal="error"]');

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

  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns, false, false);
  }
  if (modalCall && modalCallBtns.length) {
    setupModal(modalCall, false, modalCallBtns, false, false);
  }
  if (modalError && modalErrorBtns.length) {
    setupModal(modalError, false, modalErrorBtns, false, false);
  }
};

export {initModals};

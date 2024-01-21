import createElement from '../createElement/createElement';
import './css/collapse.css';

export default class Collapse {
  constructor(parent, title, descr) {
    if (typeof (parent) === 'string') {
      this.parent = document.querySelector(parent);
    } else {
      this.parent = parent;
    }
    this.title = title;
    this.descr = descr;
    this.init();
  }

  init() {
    this.collapseEl = createElement({
      name: 'div',
      classes: ['collapse'],
    });

    const buttonEl = createElement({
      name: 'button',
      classes: ['collapse__btn'],
      text: this.title,
    });
    this.collapseEl.appendChild(buttonEl);

    const descrContainerEl = createElement({
      name: 'div',
      classes: ['collapse__container'],
    });
    const descrEl = createElement({
      name: 'div',
      classes: ['collapse__descr'],
      text: this.descr,
    });
    descrContainerEl.appendChild(descrEl);

    buttonEl.onclick = () => {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }

      descrContainerEl.classList.add('collapsing');
      const height = descrEl.clientHeight;

      if (descrContainerEl.classList.contains('show')) {
        descrContainerEl.classList.remove('show');
        descrContainerEl.style.height = `${height}px`;

        setTimeout(() => {
          descrContainerEl.style.height = '0';
        }, 1);

        this.timeout = setTimeout(() => {
          descrContainerEl.classList.remove('collapsing');
        }, 451);

        return;
      }

      descrContainerEl.style.height = `${height}px`;

      this.timeout = setTimeout(() => {
        descrContainerEl.removeAttribute('style');
        descrContainerEl.classList.add('show');
        descrContainerEl.classList.remove('collapsing');
      }, 450);
    };

    this.collapseEl.appendChild(descrContainerEl);
  }

  bindToDOM() {
    this.parent.appendChild(this.collapseEl);
  }
}

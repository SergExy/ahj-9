import Collapse from './collapse/Collapse';
import createElement from './createElement/createElement';

const onDOMloaded = () => {
  const body = document.querySelector('body');
  const container = createElement({
    name: 'div',
    classes: ['container'],
  });
  body.appendChild(container);

  const descr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente nam, obcaecati corrupti eos autem repellendus illum! Itaque eveniet veniam illum, nesciunt ipsa repellendus quam nihil quaerat, pariatur ipsum nobis.';
  const collapse = new Collapse(container, 'Collapse', descr);
  collapse.bindToDOM();
  const collapse2 = new Collapse(container, 'Collapse - 2', descr);
  collapse2.bindToDOM();
  const collapse3 = new Collapse(container, 'Collapse - 3', descr);
  collapse3.bindToDOM();
};

document.addEventListener('DOMContentLoaded', onDOMloaded);

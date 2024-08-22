import $app from './constants/app.ts';
import Form from './components/Form';
import './style.scss';
import Container from './elements/Container';

const $form = new Form({
  legendText: 'How did we do?',
  formText: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
}).formElement;

const $container = new Container().containerElement;

if($container && $form) {
  $container.appendChild($form)
  $app?.appendChild($container);
}

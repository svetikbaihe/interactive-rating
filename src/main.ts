import $app from './constants/app.ts';
import Form from './components/Form';
import './style.scss';
import Container from './elements/Container';
import Button from '../src/elements/Button';
import InputRadio from '../src/elements/InputRadio';
import Modal from '../src/components/Modal';

const $form = new Form({
  legendText: 'How did we do?',
  formText: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
}).formElement;

const $container = new Container().containerElement;

if($container && $form) {
  $container.appendChild($form)
  $app?.appendChild($container);
}

// const $button = new Button({
//   buttonText: 'SUBMIT'
// })

// const $inputRadio = new InputRadio({
//   name: 'rating',
//   values: ['1', '2', '3', '4', '5']
// })

// const $form = new Form({
//   legendText: 'jdfkdj',
//   formText: 'fjkdljs dsljfdkkj dflkdj'
// })

// if(
//   $form.formElement
// ) {
//   $app?.appendChild($form.formElement);
// }
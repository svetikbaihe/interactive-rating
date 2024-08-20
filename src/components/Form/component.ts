import type { FormConstructor, FormInterface } from "./types";
import Button from "../../elements/Button";
import InputRadio, { type InputRadioInterface } from "../../elements/InputRadio";
import styles from './style.module.scss';
import Modal from "../../components/Modal";
import Container, { type ContainerInterface } from "../../elements/Container";

class Form implements FormInterface {
  protected legendText: string = ''
  protected formText: string = ''
  protected $form: HTMLElement | null = null
  protected mark: string = ''
  protected container: ContainerInterface | null = null
  protected rating: InputRadioInterface | null = null

  constructor({ 
    legendText, 
    formText 
  }:FormConstructor) {
    this.legendText = legendText;
    this.formText = formText;

    this.container = new Container();

    this.rating = new InputRadio({
      name: 'review',
      values: ['1', '2', '3', '4', '5'],
      onChange: this.handleChange
    });

    this.buildForm();
  }

  public get formElement() {
    return this.$form;
  }

  protected buildForm = () => {
    const $form = document.createElement('form');

    $form.className = [
      styles.form,
      'maxwd-208',
      'maxhg-208',
      'padd-18',
      'marg-t-60'
    ].join(' ');

    $form.addEventListener('submit', e => {
      e.preventDefault();
    });

    const $fieldset = document.createElement('fieldset');

    $fieldset.className = [
      styles.fieldset,
      'd-flex',
      'flex-direction-column', 
      'gap-15'
    ].join(' ');

    const $imgWrapper = document.createElement('div');

    $imgWrapper.className = [
      styles.img_wrapper,
      'width-22',
      'height-22'
    ].join(' ');

    const $starIcon = document.createElement('img');

    $starIcon.className = [
      styles.star_icon
    ].join(' ');

    $starIcon.setAttribute('src', '/icons/icon-star.svg');
    
    $imgWrapper.appendChild($starIcon);

    $fieldset.appendChild($imgWrapper);
    $fieldset.appendChild(this.buildTextSection());
    $fieldset.appendChild(this.buildRatingSection());

    $form.appendChild($fieldset);

    this.$form = $form;
  }

  protected buildTextSection = () => {
    const $textSectionWrapper = document.createElement('div');

    $textSectionWrapper.className = [
      styles.text_section_wrapper,
      'd-flex',
      'flex-direction-column', 
      'gap-10'
    ].join(' ');

    const $formLegend = document.createElement('legend');

    $formLegend.className = [
      styles.form_legend
    ].join(' ');

    const $formText = document.createElement('p');

    $formText.className = [
      styles.form_text
    ].join(' ');

    if(this.legendText) {
      $formLegend.innerText = this.legendText;
    }

    if(this.formText) {
      $formText.innerText = this.formText;
    }

    $textSectionWrapper.appendChild($formLegend);
    $textSectionWrapper.appendChild($formText);

    return $textSectionWrapper;
  }

  protected buildRatingSection = () => {
    const $ratingSectionWrapper = document.createElement('div');

    $ratingSectionWrapper.className = [
      styles.rating_section_wrapper,
      'd-flex',
      'flex-direction-column', 
      'gap-15'
    ].join(' ');

    const $submitBtn = new Button({
      buttonText: 'SUBMIT',
      type: 'submit',
      onClick: this.handleClick
    }).buttonElement;

    if(this.rating?.inputRadioElement) {
      $ratingSectionWrapper.appendChild(this.rating.inputRadioElement);
    }

    if($submitBtn) {
      $ratingSectionWrapper.appendChild($submitBtn);
    }

    return $ratingSectionWrapper;
  }

  protected handleClick = () => {
    this.$form?.remove();

    const $modal = new Modal({
      title: 'Thank you!',
      body: "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!",
      extraValue: this.mark
    }).modalElement;

    if (this.container?.containerElement && $modal) {
      this.container?.containerElement?.appendChild($modal);
    }
  }

  protected handleChange = (value: string) => {
    this.mark = value;
    console.log(this.mark);
  }
}

export default Form;
import styles from './styles.module.scss';
import type { InputRadioInterface, InputRadioConstructor } from './types';

class InputRadio implements InputRadioInterface {
  protected name: string = '';
  protected values: string[] = [];
  protected $inputRadioWrapper: HTMLElement | null = null;
  protected handleChange: (value: string) => void = () => {};

  constructor ({ 
    name,
    values,
    onChange
  }: InputRadioConstructor) {
    this.name = name;
    this.values = values; 

    if(onChange) {
      this.handleChange = onChange
    }

    this.buildInputRadio();
  }

  get inputRadioElement() {
    return this.$inputRadioWrapper;
  }

  buildInputRadio = () => {
    const $inputRadioWrapper = document.createElement('div');

    $inputRadioWrapper.className = [
      styles.input_radio_wrapper
    ].join(' ');

    this.values.forEach(value => {

      const $inputRadio = document.createElement('input');
   
      $inputRadio.className = [
        styles.input_radio
      ].join(' ');

      $inputRadio.setAttribute('type', 'radio');
      $inputRadio.setAttribute('id', `id-${this.name}-${value}`);
      $inputRadio.setAttribute('name', `${this.name}`);
      $inputRadio.setAttribute('value', value);

      $inputRadio.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.handleChange(target.value);
      });
      
      const $inputRadioLabel = document.createElement('label');

      $inputRadioLabel.className = [
        styles.radio_label
      ].join(' ');

      $inputRadioLabel.setAttribute('for', `id-${this.name}-${value}`);
      $inputRadioLabel.innerText = value;

      $inputRadioWrapper.appendChild($inputRadio);
      $inputRadioWrapper.appendChild($inputRadioLabel);
    });

    this.$inputRadioWrapper = $inputRadioWrapper;
  }
}

export default InputRadio;
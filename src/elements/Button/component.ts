import styles from './style.module.scss';
import type { ButtonInterface, ButtonConstructor} from './types';

class Button implements ButtonInterface {
  protected buttonText: string = '';
  protected handleClick: VoidFunction = () => {};
  protected $btn: HTMLElement | null = null;

  constructor({ 
    buttonText, 
    onClick 
  }: ButtonConstructor) {
    this.buttonText = buttonText;
    
    if(onClick) {
      this.handleClick = onClick
    }

    this.buildButton();
  }

  public get buttonElement() {
    return this.$btn;
  }

  protected buildButton = () => {
    const $button = document.createElement('button');

    $button.className = [
      styles.button
    ].join(' ');

    $button.addEventListener('click', () => this.handleClick());

    if(this.buttonText) {
      $button.innerText = this.buttonText;
    }

    this.$btn = $button;
  }

}

export default Button;
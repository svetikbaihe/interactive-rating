import type { ModalConstructor, ModalInterface } from "./types";
import Container from "../../elements/Container";
import styles from './style.module.scss';

class Modal implements ModalInterface {
  protected title: string = ''
  protected body: string = ''
  protected footer: string = ''
  protected $rootModal: HTMLElement | null = null
  protected extraValue: string = ''
  protected container: HTMLElement | null = null

  constructor({
    title, 
    body,
    footer,
    extraValue
  }: ModalConstructor) {
    this.title = title;
    this.body = body;

    this.container = new Container().containerElement;
    
    if(footer) {
      this.footer = footer;
    }

    if(extraValue) {
      this.extraValue = extraValue;
    }

    this.buildRootModal();
  }

  public get modalElement() {
    return this.$rootModal
  }

  protected buildRootModal = () => {
    const $rootModal = document.createElement('div');

    $rootModal.className = [
      styles.root_modal
    ].join(' ');

    $rootModal.appendChild(this.buildOverlay());

    this.$rootModal = $rootModal;
  }

  protected buildOverlay = () => {
    const $overlay = document.createElement('div');

    $overlay.className = [
      styles.overlay,
      'd-flex',
      'f-just-content-center',
      'wd-100vw',
      'hg-100vh'
    ].join(' ');

    $overlay.appendChild(this.buildModal());

    $overlay.addEventListener('click', e => {
      if (e.target === $overlay) {
        this.close();
      }
    })

    return $overlay;
  }

  protected buildModal = () => {
    const $modal = document.createElement('div');

    $modal.className = [
      styles.modal,
      'maxwd-208',
      'maxhg-208',
      'padd-18',
      'd-flex',
      'flex-direction-column',
      'f-align-items-center',
      'gap-9',
      'marg-t-60'
    ].join(' ');

    $modal.appendChild(this.buildModalTitle());
    $modal.appendChild(this.buildModalBody());

    return $modal;
  }

  protected buildModalTitle = () => {
    const $modalTitleWrapper = document.createElement('div');

    $modalTitleWrapper.className = [
      styles.modal_title_wrapper,
      'd-flex',
      'flex-direction-column',
      'gap-15'
    ].join(' ');

    const $titleImg = document.createElement('img');

    $titleImg.className = [
      styles.title_img,
      'width-84'
    ].join(' ');

    $titleImg.setAttribute('src', 'src/assets/icons/illustration-thank-you.svg');

    const $modalSubTitle = document.createElement('h2');

    $modalSubTitle.className = [
      styles.modal_sub_title,
      'padd-4'
    ].join(' ');

    $modalSubTitle.innerText = `You selected ${this.extraValue} out of 5`;

    const $modalTitle = document.createElement('h1');

    $modalTitle.className = [
      styles.modal_title,
      'marg-t-5'
    ].join(' ');

    if(this.title) {
      $modalTitle.innerText = this.title;
    }

    $modalTitleWrapper.appendChild($titleImg);
    $modalTitleWrapper.appendChild($modalSubTitle);
    $modalTitleWrapper.appendChild($modalTitle);

    return $modalTitleWrapper;
  }

  protected buildModalBody = () => {
    const $modalBody = document.createElement('p');

    $modalBody.className = [
      styles.modal_body
    ].join(' ');

    if(this.body) {
      $modalBody.innerText = this.body;
    }

    return $modalBody;
  }

  protected toggleHideBody = (isHidden: boolean) => {
    const $body = document.querySelector('body');

    if (!isHidden && $body) {
      $body.style.overflow = ''
    } else if ($body) {
      $body.style.overflow = 'hidden'
    }
  }

  protected render = () => {
    if (this.$rootModal && this.container) {
      this.container.appendChild(this.$rootModal);
    }
  }

  protected destroyModal = () => {
    this.$rootModal?.remove();
    this.$rootModal = null
  }

  protected open = () => {
    this.render();
    this.toggleHideBody(true);
  }

  protected close = () => {
    this.destroyModal();
    this.toggleHideBody(false);
  }
}

export default Modal;
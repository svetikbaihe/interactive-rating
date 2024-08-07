import type { ContainerInterface } from "../Container/types";
import styles from './style.module.scss';

class Container implements ContainerInterface {
  protected $container: HTMLElement | null = null
  protected static instance: Container | null = null;

  constructor() {
    if (Container.instance && typeof Container.instance === "object") {
      return Container.instance
    }

    Container.instance = this

    this.buildContainer();

    return this
  }

  public get containerElement() {
    return this.$container;
  }

  protected buildContainer = () => {
    const $container = document.createElement('div');

    $container.className = [
      styles.container,
      'hg-100vh',
      'd-flex',
      'f-just-content-center'
    ].join(' ');

    this.$container = $container
  }
}

export default Container;
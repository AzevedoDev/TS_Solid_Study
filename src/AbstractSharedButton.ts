import EventHandler from './EventHandler';

export default abstract class AbstractSharedButton {
  url: string;
  clazz: string
  eventHandler: EventHandler;

  constructor(clazz:string,url: string) {
    this.clazz= clazz
    this.eventHandler = new EventHandler();
    this.url = url;
  }

  abstract createLink(): string

  bind() {
    const link = this.createLink()
    this.eventHandler.addEventListenerToClass(this.clazz, 'click',
        () => window.open(link));
  }
}
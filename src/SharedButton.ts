import EventHandler from './EventHandler';

export default class SharedButton {
  url: string;
  eventHandler: EventHandler;

  constructor(url: string) {
    this.eventHandler = new EventHandler();
    this.url = url;
  }

  bind(clazz: string, socialNetwork: string) {
    let link: string;
    if (socialNetwork === 'twitter') {
      link = `https://twitter.com/share?url=${this.url}`;
    }
    if (socialNetwork === 'facebook') {
      link = `https://twitter.com/share?url=${this.url}`;
    }
    if (socialNetwork === 'linkedin') {
      link = `https://twitter.com/share?url=${this.url}`;
    }
    this.eventHandler.addEventListenerToClass(clazz, 'click',
        () => window.open(link));
  }
}
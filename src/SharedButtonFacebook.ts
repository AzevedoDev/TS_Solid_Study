import AbstractSharedButton from './AbstractSharedButton';

export default class SharedButtonFacebook extends AbstractSharedButton{
  constructor(clazz:string,url: string) {
    super(clazz,url)
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
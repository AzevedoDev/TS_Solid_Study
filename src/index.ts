import SharedButtonTwitter from './SharedButtonTwitter';
import SharedButtonFacebook from './SharedButtonFacebook';


const twitter = new SharedButtonTwitter("btn-twitter","https://twitter.com/azevedoDev")
const facebook = new SharedButtonFacebook("btn-facebook","https://twitter.com/azevedoDev")
twitter.bind()
facebook.bind()
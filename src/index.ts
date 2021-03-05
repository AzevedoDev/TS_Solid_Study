import ShareButton from './SharedButton';

const shareButton = new ShareButton('www.google.com.br')
shareButton.bind('.btn-twitter', 'twitter')
shareButton.bind('.btn-facebook', 'facebook')
shareButton.bind('.btn-linkedin', 'linkedin')
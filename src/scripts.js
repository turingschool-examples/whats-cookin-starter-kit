import './styles.css';
import apiCalls from './apiCalls';
import MicroModal from 'micromodal';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown. Callback ftn to poppulate modal called here?`),
  onClose: modal => console.info(`${modal.id} is hidden`),
  openTrigger: 'data-micromodal-trigger',
  closeTrigger: 'data-custom-close',
  openClass: 'is-open',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: true 
});

console.log('Hello world');

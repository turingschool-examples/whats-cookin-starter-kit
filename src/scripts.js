import './styles.css';
import apiCalls from './apiCalls';
import MicroModal from 'micromodal';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown. Callback ftn to poppulate modal called here?`), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: 'data-micromodal-trigger', // [3]
  closeTrigger: 'data-custom-close', // [4]
  openClass: 'is-open', // [5]
  disableScroll: true, // [6]
  disableFocus: false, // [7]
  awaitOpenAnimation: false, // [8]
  awaitCloseAnimation: false, // [9]
  debugMode: true // [10]
});

// MicroModal.init();

console.log('Hello world');

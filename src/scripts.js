import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Glide from '@glidejs/glide'

import "/node_modules/@glidejs/glide/dist/css/glide.core.min.css"

const config = {
    type:'carousel',
    perView: 1
}

new Glide('.glide', config).mount()

console.log('Hello world');

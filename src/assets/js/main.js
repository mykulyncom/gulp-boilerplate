import noFollow from './modules/link-blank.js';
import isWebP from './modules/check-webp.js';
import dataImage from './modules/data-background.js';

import '../../pug/**/*.js'; // Import all modules

const init = () => {
    console.log('init');
    noFollow();
    isWebP();
    dataImage();
};

window.addEventListener('load', () => {
    init();
});

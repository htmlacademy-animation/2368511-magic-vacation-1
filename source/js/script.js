// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import titles from "./modules/titles";
import appearance from "./modules/appearance";
import changeFon from './modules/changeFon';
import FullPageScroll from './modules/full-page-scroll';
import footerPrize from './modules/prize-footer';
import history from './modules/history';
// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
titles();

appearance();
footerPrize();
history();
changeFon();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

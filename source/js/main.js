import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {showInputs} from './modules/show-inputs';
import {featuresSlider} from './modules/features-slider';
import {accordionIndustrySolutions} from './modules/accordion-industry-solutions';
import {partnersSlider} from './modules/partners-slider';
import {reviewsSlider} from './modules/reviews-slider';
import {hamburgerMenu} from './modules/hamburger-menu';
import {headerLightScroll} from './modules/header-light-scroll';

import {widthSlider} from './modules/width-slider';
import {heightSlider} from './modules/height-slider';
import {lengthSlider} from './modules/length-slider';
import {weightSlider} from './modules/weight-slider';

import {accordionFaq} from './modules/accordion-faq';

import {portfolioSlider1} from './modules/portfolio-slider1';
import {portfolioSlider2} from './modules/portfolio-slider2';

import {carSlider1} from './modules/car-slider1';
import {carSlider2} from './modules/car-slider2';
import {carSlider3} from './modules/car-slider3';
import {carSlider4} from './modules/car-slider4';
import {mobileCarSlider} from './modules/mobile-car-slider';

import {calculatorSlider} from './modules/calculator-slider';
import {tabs} from './modules/tabs';


// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------


initModals();

showInputs();
featuresSlider();
accordionIndustrySolutions();
partnersSlider();
reviewsSlider();
hamburgerMenu();
headerLightScroll();

widthSlider();
heightSlider();
lengthSlider();
weightSlider();

accordionFaq();

portfolioSlider1();
portfolioSlider2();

carSlider1();
carSlider2();
carSlider3();
carSlider4();
mobileCarSlider();

calculatorSlider();
tabs();

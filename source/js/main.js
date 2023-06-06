import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {showInputs} from './modules/show-inputs';
import {featuresSlider} from './modules/features-slider';
import {accordionIndustrySolutions} from './modules/accordion-industry-solutions';
import {partnersSlider} from './modules/partners-slider';
import {reviewsSlider} from './modules/reviews-slider';
import {hamburgerMenu} from './modules/hamburger-menu';


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

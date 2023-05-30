import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {showInputs} from './modules/show-inputs';
import {featuresSlider} from './modules/features-slider';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
showInputs();
featuresSlider();

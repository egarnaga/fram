import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {showInputs} from './modules/showInputs';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
showInputs();

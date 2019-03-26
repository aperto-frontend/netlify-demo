/**
 * Main entry file for styles.
 */
import './app.scss';

/**
 * Main entry file for application.
 */
import { Veams } from './app.veams';
import Slider from './shared/components/slider/scripts/slider';

// Initialize modules with Veams

// Init Slider
Veams.modules.add({ namespace: 'slider', module: Slider });
// @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true //
// @INSERTPOINT :: @ref: js-init-once, @keep: true //
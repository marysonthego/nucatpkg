import App from './App.js'; 
import {Nucat} from './Nucat.js'; 
import {ScrollToTop} from './ScrollToTop.js'; 
import {AboutUs} from './AboutUs.js';

//Include the components you want to expose outside of the package
const nucat = () => { 
  return { 
    Nucat: Nucat, 
    AboutUs: AboutUs 
  } 
}; 
export default nucat();

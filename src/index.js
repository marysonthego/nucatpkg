import Nucat from './Nucat.js'; 

//Include the components you want to expose outside of the package
const nucat = () => { 
  return { 
    Nucat: Nucat
  } 
}; 
export default nucat();

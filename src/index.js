import NucatApp from './NucatApp.js'; 

//Include the components you want to expose outside of the package
const nucat = () => { 
  return { 
    NucatApp: NucatApp
  } 
}; 
export default nucat();

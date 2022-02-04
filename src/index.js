import NucatApp from './NucatApp.js'; 

//Include the components you want to expose outside of the package
const nucatpkg = () => { 
  return { 
    NucatApp: NucatApp
  } 
}; 
export default nucatpkg();

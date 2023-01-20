/* 
import './App.css'; 
import FlexLayout from './components/FlexLayout';
*/

import ConditionalRenderElements from "./components/ConditionalRenderElements";
import ConditionalRenderingDemo from "./components/conditionalRenderingDemo";

/* import JsxDemoSamples from "./components/JsxDemoSamples"; */

/* import WebDeveloper from "./components/WebDeveloper"; */

/*  
import './News.css';
import FlexNewsGallery from './components/FlexNewsGallery';
*/

/* import FormLayout from './components/FormLayout';
import './Form.css' */

/* import EmployeesDemo from './components/EmployeesDemo'; */

/* import FormLayout2 from './components/FormLayout2';
import './Form2.css' */
 
function App() {
  return (
    <div className="App">
        
      
      <ConditionalRenderingDemo/>
      <ConditionalRenderElements/>      
      {/* 
      <FormLayout fname="First Name"/>
      <FlexLayout/>
      <FlexNewsGallery/>
      <FormLayout2/>
      <EmployeesDemo/>
      <WebDeveloper/>
      <JsxDemoSamples/>
      */
     }
    </div>
  );
}

export default App;

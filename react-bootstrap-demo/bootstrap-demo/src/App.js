//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FormCheckExample from './components/FormCheckExample';
import FormDisabled from './components/FormDisabled';
import LoginLayout from './components/LoginLayout'; */
import ToastDemo from './components/ToastDemo';
import AccordionDemo from './components/AccordionDemo';
import DropDownDemo from './components/DropDownDemo';
import NumberedExample from './components/NumberedExample';
import PaginationDemo from './components/PaginationDemo';
import PillDemo from './components/PillDemo';
import ResponsiveExample from './components/ResponsiveExample';
import ModalExample from './components/ModalExample';
import FillExample from './components/FillExample';


function App() {
  return (
    <div className="App container border">
      {/* 
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
  <ProgressBar now={60} />
  <LoginLayout/>
  <FormDisabled/>
  <FormCheckExample/> */}
  <ToastDemo/>
<AccordionDemo/>
<DropDownDemo/>
<NumberedExample/>
<PaginationDemo/>
<PillDemo/>
<ResponsiveExample/>
<ModalExample/>
<FillExample/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Start from './components/Start';
import Form from './components/Form';
import Todo from './components/Todo';
import Pagination from './components/Pagination';
import  Reverse  from './components/Reverse';
import Store from './components/Store';
import Practice from './components/Practice';
import CodeGenerator from './components/CodeGenerator';
//import Hooks from './components/Hooks';
import Basic from './components/Basic';
import RandomPassGen from './components/RandomPassGen';
import Guilt from './components/Guilt';
import CurrencyConverter from './components/CurrencyConverter';


function App() {
  return (
    <div className="App">
    
    
    
   
     <Practice></Practice>
   
     <Basic></Basic>
    
    
      <Routes>
        <Route path='/Random' element={<RandomPassGen/>}></Route>
        <Route path='/' element={<Pagination/>}></Route>
        <Route path='/start' element={<Start/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/reverse' element={<Reverse/>}></Route>
        <Route path='/store' element={<Store/>}></Route>
      </Routes>
      <Guilt></Guilt>
      <CodeGenerator></CodeGenerator>
      <CurrencyConverter></CurrencyConverter>
    </div>
  );
}

export default App;

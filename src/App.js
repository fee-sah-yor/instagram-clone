import {Nav, Bio, Gallery}from './components';
import './App.css';

function App() {
  return (
 <>
       <Nav/>
    <div className="container">
      <Bio/>
      <Gallery/>
    </div>
 </>
  );
}

export default App;
import React, {useState} from 'react';
import Form from "./Form";
import { hello } from './utils/hello'

hello();

function App() {
  return (
<div className="container">
        <h1 className="container__h1">EXCHANGE</h1>
        <Form>
          
        </Form>
        <footer className="footer">&copy; Adrian Kolano 2020. </footer>
    </div>

  );
}

export default App;

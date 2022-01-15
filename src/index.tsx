import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoListApp from './ToDo/ToDoApp';
import reportWebVitals from './reportWebVitals';
import ApiTest from './APITest';

/*import * as jquery from "jquery";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './backend/routes/router';
*/

/*const app = express();
// set up port
export const EXPRESS_PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());
// add routes
app.use('/api', router);
// run server
app.listen(EXPRESS_PORT, () => console.log(`Server running on port ${EXPRESS_PORT}`));

app.use();

jquery.ajax({
  url: "http://localhost:8000/artikel",
  type: "GET",
  success: function(res) {
    console.log(res);
  }
})
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToDoListApp/>
    <ApiTest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

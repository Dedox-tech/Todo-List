import React, {useState} from 'react';
import './App.css';
import { InitialView } from './components/InitialView';
import { ThemeProvider } from '@emotion/react';
import { personalTheme } from './customTheme';
import { TodoList} from "./components/TodoList";

function App() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [UIState, setUIState] = useState("Inicio");

  const handleClickParent = () => {
    setUIState("TodoList");
  }

  let pageRendered;

  if (UIState === "Inicio") {
    pageRendered = <InitialView handleName = {setName} realName = {name} handleSurName = {setSurname} realSurName = {surname} callParent = {handleClickParent}/>;
  }

  else {
    pageRendered = <TodoList name = {name} surname = {surname}/>;
  }

  return (
    <ThemeProvider theme = {personalTheme}>
      {pageRendered}
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import Typography from '@mui/material/Typography';
import {TodoItemsIndividual} from "./TodoItemsIndividual";
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid'

function TodoItemsGroup (props) {

    const arrayOfItemsTodo = useSelector((state) => state.todos.arrayOfItems);

    let listOfItemsForRendering;

    if (props.currentTab === 0) {
        listOfItemsForRendering = arrayOfItemsTodo.map((element) => {
            return (
                <TodoItemsIndividual key = {nanoid()} elementName = {element.element} isCompleted = {element.isCompleted}/>
            );
        });
    }

    else if (props.currentTab === 1) {
        listOfItemsForRendering = arrayOfItemsTodo.filter(element => {
            return (element.isCompleted === false);
        }).map(element => {
            return (
                <TodoItemsIndividual key = {nanoid()} elementName = {element.element} isCompleted = {element.isCompleted}/>
            );
        });
    }

    else {
        listOfItemsForRendering = arrayOfItemsTodo.filter(element => {
            return (element.isCompleted === true);
        }).map(element => {
            return (
                <TodoItemsIndividual key = {nanoid()} elementName = {element.element} isCompleted = {element.isCompleted}/>
            );
        });
    }

    let message;

    if (listOfItemsForRendering.length === 0 || listOfItemsForRendering.length === undefined) {
        message = `Oops, parace que no hay tareas aquí, ${props.name}`;
    }

    else if (listOfItemsForRendering.length === 1) {
        message = `Te queda 1 tarea, ${props.name}`;
    }

    else {
        message = `Te quedan ${listOfItemsForRendering.length} tareas, ${props.name}`;
    }

    return (
        <>
            <Typography variant = "h5" color="initial" mb = {5} align = "center"> {message} </Typography>
            {listOfItemsForRendering}
        </>
    );
}

export {TodoItemsGroup};

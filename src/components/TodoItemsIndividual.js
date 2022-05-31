import React from "react";
import {useState} from "react";
import { Stack } from '@mui/material';
import { Button, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormLabel, TextField} from "@mui/material";
import { deleteElement } from "./TodoReducer";
import { changeStatus } from "./TodoReducer";
import { editElement } from "./TodoReducer";
import { useDispatch } from 'react-redux';

function TodoItemsIndividual (props) {

    const [valueInputElement, setValueInputElement] = useState("");
    const [status, setStatus] = useState("defaultStatus");
    const dispatch = useDispatch();

    let contentTodoItems;
    let botonesItems; 

    const handleClickDelete = (event) => {
        dispatch(deleteElement({element: props.elementName}));
    }

    const handleClickChangeStatus = (event) => {
        dispatch(changeStatus({element: props.elementName}));
    }

    const handleChangeInputElement = (event) => {
        setValueInputElement(event.target.value);
    }

    const handleClickEdit = (event) => {
        dispatch(editElement({element: valueInputElement, previousElement: props.elementName}));
    }

    if (status === "defaultStatus") {
        contentTodoItems =  
            <FormControlLabel 
                control = {
                    <Checkbox 
                        checked = {props.isCompleted}
                        onChange = {handleClickChangeStatus}
                    />
                } 
                label = {props.elementName}
                sx = {{mb: 3}} 
        />;
        botonesItems = 
            <Stack 
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={5}
                sx = {{mb: 3}} 
            >
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick = {
                        () => {setStatus("editStatus")}
                    }>
                    Editar
                </Button>
                <Button 
                    variant="contained" 
                    color = "primary" 
                    fullWidth style = {{backgroundColor: "#FCDE9C", color: "#4F4F4F"}}
                    onClick = {handleClickDelete}>
                    Eliminar 
                </Button>
            </Stack>
        ;

    }

    else {
        contentTodoItems = 
            <FormControl style = {{width: "100%"}}>
                <FormLabel sx = {{mb: 1}}> Nuevo nombre para {props.elementName} </FormLabel>
                <TextField
                    id="nombre"
                    fullWidth
                    sx = {{mb: 3}}
                    onChange = {handleChangeInputElement}
                    value = {valueInputElement} 
                />
            </FormControl>
        ;

        botonesItems = 
            <Stack 
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={5}
                sx = {{mb: 3}} 
            >
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick = {handleClickEdit}
                >
                    Guardar
                </Button>
                <Button 
                    variant="contained" 
                    color = "primary" 
                    fullWidth 
                    style = {{backgroundColor: "#FCDE9C", color: "#4F4F4F"}}
                    onClick = {
                        () => {setStatus("defaultStatus")}
                    }>
                    Cancelar 
                </Button>
            </Stack>
        ;
    }

    return (
        <Box sx = {{mb: 5}}>
            {contentTodoItems}
            {botonesItems}
        </Box>
    );
}

export {TodoItemsIndividual};
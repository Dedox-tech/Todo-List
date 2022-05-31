import React, {useState, useEffect} from "react";
import Avatar from "boring-avatars";
import {TodoItemsGroup} from "./TodoItemsGroup";
import { useSelector, useDispatch } from 'react-redux';
import { addElement } from "./TodoReducer";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import { AppBar } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { Toolbar } from '@mui/material';
import {Button, Box} from '@mui/material';
import {TextField} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TodoList (props) {

    const [valueInput, setValueInput] = useState("");
    const [valueTabs, setValueTabs] = useState(0);
    const dispatch = useDispatch();
    const arrayOfItemsTodo = useSelector((state) => state.todos.arrayOfItems);

    const handleChangeInput = (event) => {
        setValueInput(event.target.value);
    };    

    const handleChangeTabs = (event, newValueTabs) => {
      setValueTabs(newValueTabs);
    };

    const handleClickAdd = (event) => {
        dispatch(addElement({element: valueInput, isCompleted: false}));
        setValueInput("");
    };

    useEffect(() => {
        console.log(valueTabs);
     }, [valueTabs]);

    return (
        <>
            <AppBar position = "fixed" variant = "outlined"  elevation = {0} style = {{background: "#FFFFFF"}}>
                <Toolbar>
                    <CreateIcon sx = {{fontSize: 25}} style = {{color: "#8a8a8a"}}/>
                    <Typography variant="h6" color = "text.primary" component = "div" fontWeight="fontWeightRegular" sx={{ flexGrow: 1, ml: 1}}>
                        Mis tareas
                    </Typography>
                    <Avatar size = {30} name = "Diego Murillo" variant = "beam" colors = {["#FCDE9C"]}/>
                    <Typography variant="h6" color = "text.primary" component = "div" fontWeight="fontWeightRegular" sx={{ ml: 1}}>
                        {props.name + " " + props.surname}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                style = {{minHeight: "100vh"}}
            >

                <Grid item xs = {12}>
                    <Container maxWidth="sm" sx = {{mt: 14, px: 3}}>
                        <Typography variant="h4" color="initial" align = "center" mb = {2}> ¿Qué necesitas realizar? </Typography>
                        <TextField
                            id="ingresarTarea"
                            fullWidth
                            sx = {{mb: 3}}
                            value = {valueInput}
                            onChange = {handleChangeInput}
                        />
                        <Button 
                            variant="contained" 
                            fullWidth sx = {{mb: 5}} 
                            onClick = {handleClickAdd}
                            >
                          Añadir tarea
                        </Button>
                        <Tabs value={valueTabs} onChange={handleChangeTabs} centered = {true} sx = {{mb: 5}}>
                            <Tab label="Todas" />
                            <Tab label="Activas" />
                            <Tab label="Completas" />
                        </Tabs>
                        <TodoItemsGroup currentTab = {valueTabs} name = {props.name} surname = {props.surname}/>
                        <Typography variant="subtitle1" align = "center" mb = {7}> © Copyright 2022 Lista de tareas App </Typography>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
}

export {TodoList};
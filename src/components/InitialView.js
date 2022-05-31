import React from "react";
import { Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import BackgroundImage from "../images/background-image.svg";
import { FormControl, FormLabel, FormHelperText, TextField} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import {Button, Box} from '@mui/material';

function InitialView(props) {

    const imageStyles = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
    };

    const formControlStyles = {
        width: "100%"
    };

    const handleNameInput = (event) => {
        props.handleName(event.target.value);
    };

    const handleSurNameInput = (event) => {
        props.handleSurName(event.target.value);
    };

    const handleClickParent = (event) => {
        props.callParent();
    }

    return (
        <Grid container spacing={0}>

            <Grid item xs = {12} md = {6}>

                <Container maxWidth= "sm">

                    <Grid container spacing = {2} sx = {{my: 5, px: 2}} justifyContent="center">

                        <Grid item  xs = {12} >
                            <Box sx = {{alignItems: "center", display: "flex", justifyContent: "center"}}>
                                <CreateIcon sx = {{fontSize: 40}} style = {{color: "#8a8a8a"}}/>
                            </Box>
                        </Grid>

                        <Grid item  xs = {12} mb = {2} >
                            <Typography variant="h4" align = "center"> Lista de tareas App </Typography>
                        </Grid>

                        <Grid item xs = {12}>
                            <FormControl style = {formControlStyles}>
                                <FormLabel sx = {{mb: 1}}> Nombre </FormLabel>
                                <TextField
                                    id="nombre"
                                    fullWidth
                                    onChange = {handleNameInput}
                                    value = {props.realName}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs = {12}>
                            <FormControl style = {formControlStyles}>
                                <FormLabel sx = {{mb: 1}}> Apellido </FormLabel>
                                <TextField
                                    id="apellido"
                                    fullWidth
                                    onChange = {handleSurNameInput}
                                    value = {props.realSurName}
                                />
                            </FormControl>
                        </Grid>  

                        <Grid item  xs = {12} >
                            <Button variant="contained" color="primary" fullWidth sx = {{mt: 2, mb: 2}} onClick = {handleClickParent}>
                                Siguiente
                            </Button>
                        </Grid>

                        <Grid item  xs = {12} >
                            <Typography variant="subtitle1" align = "center"> © Copyright 2022 Lista de tareas App </Typography>
                        </Grid>

                    </Grid>

                </Container>

            </Grid>

            <Grid item xs = {0} md = {6} style = {imageStyles}>
              
            </Grid>

        </Grid>
    );
}

export {InitialView};

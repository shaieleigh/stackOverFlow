import React, { useState } from 'react';
import { signup } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';
import NavBar from '../components/NavBar'

import './SignupPage.css'

const colors = {
    text: 'white',
    background: '#0077cc',
}

const useStyles = makeStyles({
    root: {
      color: colors.text,
      width: "100%",
      backgroundColor: colors.background,
      "&:hover": {
        backgroundColor: colors.background
      }
    },
})

const theme = createMuiTheme({
    overrides: {
      MuiInputBase: {
        root: {
          width: '100%'
        },
        input: {
        //   background: "white",
          font: "15px Helvetica Neue",
          padding: "5px",
          width: '100%'
        }
      },
      MuiButton: {
        root: {
          margin: '100% 0 15px 0',
          height: '40px'
        },
        label: {
          textTransform: "none",
          font: "13px Roboto",

        },
      }
    },
  });


function SignupPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUserId = useSelector(state => state.auth.id);
    const classes = useStyles()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(signup( email, password, username ));
        //history.push("/");
    }

    if (currentUserId) return <Redirect to="/" />;

    return (
      <>
        <NavBar />
        <div className='signUpBlurb'>
        </div>
        <div className='signUpDiv'>
          <Box className="box">
              <ThemeProvider theme={theme}>
                <div className="errors-container">
                  <ul className="errors" id="sign-up-errors"></ul>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="buttonDiv">
                    <div className='signUpLabel'><label>Display name</label></div>
                    <TextField className='signup' id="outlined-basic" variant="outlined" onChange = {e => setUsername(e.target.value)} />
                  </div>
                  <div className="buttonDiv">
                    <div className='signUpLabel'><label>Email</label></div>
                    <TextField className='signup' id="outlined-basic" variant="outlined" onChange = {e => setEmail(e.target.value)}/>
                  </div>
                  <div className="buttonDiv">

                    <div className='signUpLabel'><label>Password</label></div>
                    <TextField className='signup' id="outlined-basic" variant="outlined" onChange = {e => setPassword(e.target.value)}/>
                    <div><label>Password</label></div>
                  <TextField className='signup' id="outlined-basic" variant="outlined" type="password" onChange = {e => setPassword(e.target.value)}/>

                  </div>
                  <div className="signUpButton">
                    <Button type="submit" classes={classes} variant="contained" disableElevation>
                      Sign Up
                    </Button>
                  </div>
                </form>
              </ThemeProvider>
          </Box>
        </div>
      </>
    )



}


export default SignupPage;

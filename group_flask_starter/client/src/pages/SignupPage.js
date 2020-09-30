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
        input: {
        //   background: "white",
          font: "15px Helvetica Neue",
          padding: "5px",
        }
      },
      MuiButton: {
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
        await dispatch(signup(username, email, password ));
        history.push("/");
    }

    if (currentUserId) return <Redirect to="/" />;

    return (
      <>
        <NavBar />
        <div className='signUpDiv'>
          <Box className="box">
              <ThemeProvider theme={theme}>
                <div className="errors-container">
                  <ul className="errors" id="sign-up-errors"></ul>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="buttonDiv">
                    <div><label>Display name</label></div>
                    <TextField className='signup' id="outlined-basic" variant="outlined" onChange = {e => setUsername(e.target.value)} />
                  </div>
                  <div className="buttonDiv">
                    <div><label>Email</label></div>.
                    <TextField className='signup' id="outlined-basic" variant="outlined" onChange = {e => setEmail(e.target.value)}/>
                  </div>
                  <div className="buttonDiv">
                    <div><label>Password</label></div>
                  <TextField className='signup' id="outlined-basic" variant="outlined" type="password" onChange = {e => setPassword(e.target.value)}/>
                  </div>
                  <div className="buttonDiv">
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

import React, { useState } from 'react';
import { login } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { TextField, Input } from '@material-ui/core';
import NavBar from '../components/NavBar';
import './LoginPage.css'

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
          padding: "5px"
        },
      }
    },
  });


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentUserToken = useSelector(state => state.auth.auth_token);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(email, password));
     // history.push("/");
    }

    const handleDemoSubmit = (e) => {
        e.preventDefault();
        dispatch(login("ian@aa.io", "password"));
        //history.push("/");
    }

    if (currentUserToken) return <Redirect to="/questions" />;

    return (
      <>
        <NavBar/>
        <Container>
            <ThemeProvider theme={theme}>

                

                <div className="errors-container">
                  <ul className="errors" id="errors"></ul>
                </div>
                <form id="login-form" onSubmit={handleSubmit}>

                        <div className="buttonDiv">
                        <div><label>Email</label></div>
                        <Input className='signup' id="outlined-basic" variant="outlined" onChange = {e => setEmail(e.target.value)}/>
                        </div>
                        <div className="buttonDiv">
                        <div><label>Password</label></div>
                       <Input type='password' className='signup' id="outlined-basic" variant="outlined" onChange = {e => setPassword(e.target.value)}/>


                        </div>
                        <div className="buttonDiv">
                        <Button type="submit" classes={classes} variant="contained" disableElevation >
                            Log in
                        </Button>
                        </div>
                        <div>
                <Button type="submit" classes={classes} variant="contained" disableElevation onClick={handleDemoSubmit}>Log in as demo user</Button>
                        </div>
                </form>
            </ThemeProvider>
        </Container>
      </>
    )
}

export default LoginPage;

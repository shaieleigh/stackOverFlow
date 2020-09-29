import React, { useState } from 'react';
import { login } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import NavBar from '../components/NavBar';


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
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(login(email, password));
      history.push("/");
    }

    const handleDemoSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login("demo@example.com", "password"));
        history.push("/");
      }

      if (currentUserId) return <Redirect to="/dashboard" />;

    return (
      <>
        <NavBar/>
        <Container>
            <ThemeProvider theme={theme}>
                <form onSubmit={handleSubmit}>
                        <div className="buttonDiv">
                        <div><label>Email</label></div>.
                        <TextField className='signup' id="outlined-basic" variant="outlined" onChange = {e => setEmail(e.target.value)}/>
                        </div>
                        <div className="buttonDiv">
                        <div><label>Password</label></div>
                        <TextField className='signup' id="outlined-basic" variant="outlined" onChange = {e => setPassword(e.target.value)}/>
                        </div>
                        <div className="buttonDiv">
                        <Button type="submit" classes={classes} variant="contained" disableElevation>
                            Log in
                        </Button>
                        </div>
                        <div>
                            <Button type="submit" classes={classes} variant="contained" disableElevation>Log in as demo user</Button>
                        </div>
                </form>
            </ThemeProvider>
        </Container>
      </>
    )
}

export default LoginPage;

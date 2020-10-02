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
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
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
      },

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
          padding: "10px",
          width: '100%'
        }
      },
      MuiButton: {
        root: {
          margin: '0 0 0 0',
          height: '40px',
          // justifyItem: 'end'
        },
        label: {
          textTransform: "none",
          font: "13px Roboto",
        },
      },
      // MuiButtonBase: {
      //   root: {
      //     height: '40px'
      //   },
      // },
      // MuiTouchRipple: {
      //   root: {
      //     height: '50px',
      //     padding: '20px'
      //   },
      // },

    },
  });


function SignupPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUserToken = useSelector(state => state.auth.auth_token);
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(username, email, password ));

    }

    if (currentUserToken) return <Redirect to="/questions" />;

    return (
      <>
        <NavBar />
        <div className='middleDiv'>
          <div className='signUpBlurb'>
            <h1 className='blurbHeading'>Join the Snack Overflow Community</h1>
            <div>
              <p className='signupP'><QuestionAnswerIcon />Get unstuck - ask a question</p>
              <p className='signupP'>Check out privileges like voting and commenting</p>
              <p className='signupP'>Search for answers to questions already asked</p>
              <p className='signupP'>Earn reputation and badges</p>
              <p className='little'>Use the Demo User Link here to tour around</p>
            </div>
          </div>
          <div className='signUpDiv'>
            <Box className="box">
                <ThemeProvider theme={theme}>
                  <form onSubmit={handleSubmit}>
                    <div className="errors-container">
                      <ul className="errors" id="sign-up-errors"></ul>
                    </div>
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
                    </div>
                    <div className="signUpButton">
                      <Button id='signupButtonButton' type="submit" classes={classes} variant="contained" disableElevation>
                        Sign Up
                      </Button>
                    </div>
                  </form>
                </ThemeProvider>
            </Box>
          </div>
        </div>
      </>
    )



}


export default SignupPage;

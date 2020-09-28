import React, { useState } from 'react';
import { signup } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/Box';


function SignupPage() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUserId = useSelector(state => state.auth.id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(signup( email, fullName, password, username ));
        history.push("/");
      }

      if (currentUserId) return <Redirect to="/" />

      return (
          <Box>
              <form>
                <TextField id="outlined-basic" variant="outlined" />
              </form>
          </Box>
      )



}


export default SignupPage;

import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import { useDispatch } from 'react-redux';
import { setUser } from './store/auth';
import { CssBaseline } from '@material-ui/core';
// import ThemeProvider from 'material-ui/styles/';

// import UserList from './components/UsersList';


function App() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      const loadUser = async () => {
        const res = await fetch("/api/user");
        if (res.ok) {
          res.data = await res.json();
          dispatch(setUser(res.data.user))
        }
        setLoading(false);
      }
      loadUser();
    }, [dispatch]);

    if (loading) return null;

    return (
        <>
          <CssBaseline>
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
          </CssBaseline>
        </>
    );
}

export default App;

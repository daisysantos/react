import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { UserState } from '../../../store/token/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/token/Actions';
import {toast} from 'react-toastify';

function Navbar() {
    // const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))
        // alert("Usuário deslogado com sucesso!")
        toast.info('Usuário deslogado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent =

            <AppBar position="static" style={{ background: "#850a0a" }}>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>


                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" style={{ color: "white" }}>
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar >
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import Carrossel from '../../components/carrossel/Carrossel';
import { UserState } from '../../store/token/Reducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate();
    // const [token, setToken] = useLocalStorage('token');

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token == "") {
            // alert("Você precisa estar logado")
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' background-color="white">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='text-dcorator-none'>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.pinimg.com/originals/a2/63/e6/a263e6aa33d2d2136ae8c5691399d3fe.gif" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
                <Grid xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>

            {/* <Grid container style={{ marginTop: "8px" }}>
                <TabPostagem />
                <Grid item xs={12}>
                    <ModalPostagem />
                    <Carrossel />
            </Grid>
        </Grid> */}
        </>
    );
}

export default Home;
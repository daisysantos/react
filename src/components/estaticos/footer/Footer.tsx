import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import './Footer.css'
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    var footerComponent

    if (token !== '') {
        footerComponent =


            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/daisysantos" target="_blank">
                                <GithubIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/daisycristina7/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/daisy-santos-s/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' > Daisy Santos© 2023 </Typography>
                        </Box>
                        <Box>
                            <a target="_blank" className='textos' href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;
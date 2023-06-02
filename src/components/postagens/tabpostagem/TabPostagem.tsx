import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered className='sobrenos' onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre mim" value="2"/>
                    </Tabs>
                </AppBar>
                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2" background-color='white'>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify" >Sou uma pessoa apaixonada pela visa e adora novos desafios. Desistir não é uma opção e melhor do que as vitórias é comemora-las com algo que nos faz bem. Uma boa refeição e um bebida perfeita melhoram qualquer dia 💖🖤!</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;
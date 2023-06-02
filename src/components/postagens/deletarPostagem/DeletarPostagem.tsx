import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import './DeletarPostagem.css';
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/token/Reducer';

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  const [post, setPosts] = useState<Postagem>()

  useEffect(() => {
    if (token == "") {

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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/posts')
    deleteId(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    });


    toast.success('Postagem deletada com sucesso!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  }

  function nao() {
    navigate('/posts')
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary" style={{background: "#f3debc"}}>
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={nao} variant="contained" size='large' color="secondary" style={{background: "#700505"}}>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;
import { Button, Container, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserCreate() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    var data = {
      'fname': fname,
      'lname': lname,
      'username': username,
      'email': email,
      'avatar': avatar,
    }

    fetch('https://www.melivecode.com/api/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    navigate("/")
  }

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [avatar, setavatar] = useState('');

  const handleHome = () => {
    navigate("/", { replace: true })
  }

  return (
    <Container maxWidth="xs" sx={{
      marginTop: '8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      <Button onClick={handleHome}>Volver</Button>
      <Typography sx={{ p: 5 }} component="h1" variant="h5">
        Datos del nuevo usuario:
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              variant="outlined"
              required
              label="Nombre"
              onChange={(e) => setfname(e.target.value)}
              autoFocus />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Apellido"
              onChange={(e) => setlname(e.target.value)}
              autoFocus />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Usuario"
              onChange={(e) => setusername(e.target.value)}
              autoFocus />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="email"
              onChange={(e) => setemail(e.target.value)}
              autoFocus />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="avatar"
              label="avatar"
              onChange={(e) => setavatar(e.target.value)}
              autoFocus />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className='submit'>
          Crear Usuario
        </Button>
      </form>
    </Container >
  )
}

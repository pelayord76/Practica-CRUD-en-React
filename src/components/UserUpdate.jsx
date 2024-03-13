import { Button, Container, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UserUpdate = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [avatar, setavatar] = useState('');

  const handleHome = () => {
    navigate("/", { replace: true })
  }

  useEffect(() => {
    fetch(`https://www.melivecode.com/api/users/${id}`)
      .then(res => res.json())
      .then((result) => {
          setfname(result.user.fname)
          setlname(result.user.lname)
          setusername(result.user.username)
          setemail(result.user.email)
          setavatar(result.user.avatar)
        }
      )
  }, [id])

  const handleSubmit = () => {
    var data = {
      'id': id,
      'fname': fname,
      'lname': lname,
      'username': username,
      'email': email,
      'avatar': avatar,
    }

    fetch('https://www.melivecode.com/api/users/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    navigate("/");
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
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              label="Nombre"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              autoFocus />
            <TextField
              autoComplete="lname"
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Apellido"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              autoFocus />
            <TextField
              autoComplete="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Usuario"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              autoFocus />
            <TextField
              autoComplete="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              autoFocus />
            <TextField
              autoComplete="avatar"
              variant="outlined"
              required
              fullWidth
              id="avatar"
              label="avatar"
              value={avatar}
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
          Guardar cambios
        </Button>
      </form>
    </Container >)
}

import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

export const UserList = () => {

  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create/", { replace: true })
  }

  const handleUpdate = (id) => {
    navigate("/update/" + id, { replace: true })
  }

  const handleDelete = (id) => {
    var data = {
      'id': id
    }
    fetch('https://melivecode.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setusers(result)
        }
      )
  }, [])

  return (
    <TableContainer>
      <Button onClick={handleCreate}>Crear Usuario</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Nombre de usuario</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <img src={user.avatar} style={{ width: "50px", height: "50px" }} />
              </TableCell>
              <TableCell>{user.fname}</TableCell>
              <TableCell>{user.lname}</TableCell>
              <TableCell>{user.username}</TableCell>
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => handleUpdate(user.id)}>Editar</Button>
                <Button onClick={() => handleDelete(user.id)}>Borrar</Button>
              </ButtonGroup>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

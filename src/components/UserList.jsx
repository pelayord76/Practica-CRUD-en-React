import usersArray from "../UsersArrayV1.js";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const UserList = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Nombre de usuario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersArray.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <img src={user.avatar} style={{width: "50px", height: "50px"}}/>
              </TableCell>
              <TableCell>{user.fname}</TableCell>
              <TableCell>{user.lname}</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

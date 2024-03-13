import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserList } from "./components/UserList";
import { UserCreate } from "./components/UserCreate";
import { UserUpdate } from "./components/UserUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/update/:id" element={<UserUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
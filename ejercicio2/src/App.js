import React, { useEffect, useState } from "react";
import { GlobalProvider } from "./context/GlobalState";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import UserTable from "./components/UserTable";
import services from "./services/services";

const App = () => {
  const [users, setUsers] = useState([]);

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const fetchUsers = async () => {
    try {
      const resp = await services.getAll();
      setUsers(resp.data);
    } catch (error) {
      alert("Error en los datos.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <GlobalProvider>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Ejercicio 2</h1>
        <div className="row">
          <div>
            {editing ? (
              <div>
                <h2>Editar usuario</h2>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                />
              </div>
            ) : (
              <div>
                <h2>Agregar usuario</h2>
                <AddUserForm />
              </div>
            )}
          </div>
          <div>
            <h2>Usuarios</h2>
            {users.length > 0 && (
              <UserTable users={users} editUser={editUser} />
            )}
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;

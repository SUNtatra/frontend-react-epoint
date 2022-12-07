import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Employees from "./pages/Employees";
import Unite from "./pages/Unite";
import Jourferie from "./pages/Jourferie";
import AddEmployees from "./pages/AddEmployees";
import EditEmployees from "./pages/EditEmployees";
import AddJourferie from "./pages/AddJourferie";
import EditJourferie from "./pages/EditJourferie";
import AddUnite from "./pages/AddUnite";
import EditUnite from "./pages/EditUnite";
import Pointage from "./pages/Pointage";
import Validationconge from "./pages/Validationconge";
import AddValidationconge from "./pages/AddValidationconge";
import EditValidationconge from "./pages/EditValidationconge";

import Addpointage from "./pages/Addpointage";
import Editpointage from "./pages/Editpointage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/employees/add" element={<AddEmployees/>}/>
          <Route path="/employees/edit/:id" element={<EditEmployees/>}/>
          <Route path="/Unite" element={<Unite/>}/>
          <Route path="/Unite/add" element={<AddUnite/>}/>
          <Route path="/Unite/edit/1" element={<EditUnite/>}/>
          <Route path="/Jourferie" element={<Jourferie/>}/>
          <Route path="/Jourferie/add" element={<AddJourferie/>}/>
          <Route path="/Jourferie/edit/:id" element={<EditJourferie/>}/>
          <Route path="/Pointage" element={<Pointage/>}/>
          <Route path="/Pointage/Add" element={<Addpointage/>}/>
          <Route path="/Pointage/Edit/1" element={<Editpointage/>}/>

          <Route path="/Validationconge" element={<Validationconge/>}/>
          <Route path="/Validationconge/Add" element={<AddValidationconge/>}/>
          <Route path="/Validationconge/Edit/1" element={<EditValidationconge/>}/>

       

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

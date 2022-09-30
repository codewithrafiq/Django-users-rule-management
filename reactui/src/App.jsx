import React from "react";
import NevBar from "./components/NevBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import GroupPage from "./pages/GroupPage";
import PermissionsPage from "./pages/PermissionsPage";

const App = () => {
  return (
    <>
      <NevBar />
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/rouls" element={<GroupPage />} />
          <Route path="/permissions" element={<PermissionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

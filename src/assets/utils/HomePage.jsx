import React, { useEffect, useState } from "react";
import Admin from "../pages/Admin";
import Users from "../pages/Users";

function HomePage() {
  const [admin, setAdmin] = useState(true);

  function handleAdmin() {
    setAdmin(!admin);
  }

  return (
    <div>
      {admin ? <Admin /> : <Users />}
      <button className="btn" onClick={handleAdmin}>
        Click Me !
      </button>
    </div>
  );
}

export default HomePage;

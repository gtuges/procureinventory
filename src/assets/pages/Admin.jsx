import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      Admin
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="" />
        <label class="form-check-label" for="">
          {" "}
          Default checkbox{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id=""
          checked
        />
        <label class="form-check-label" for="">
          Checked checkbox{" "}
        </label>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Admin;

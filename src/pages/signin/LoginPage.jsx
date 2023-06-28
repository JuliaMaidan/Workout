import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={() => loginWithRedirect()}>
        <input type="email" />
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

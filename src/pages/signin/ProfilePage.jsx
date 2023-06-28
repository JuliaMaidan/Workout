import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  if (!isAuthenticated) {
    return <div>You need to login to view the profile page.</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default ProfilePage;

import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("logged in") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  function handleSignOut() {
    localStorage.setItem("logged in", "false");
    navigate("/");
  }
  return (
    isLoggedIn && (
      <>
        <h1>User Profile Page</h1>
        <p>
          <button onClick={handleSignOut}>Sign Out</button>
        </p>
      </>
    )
  );
}

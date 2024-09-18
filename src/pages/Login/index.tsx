import { useState } from "react";
import { HomeButton } from "../Characters/styles";
import Header from "../MarvelH";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helloUser, setHelloUser] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userDatabase, setUserDatabase] = useState<
    { email: string; password: string }[]
  >([]);

  const logOut = () => {
    setHelloUser(false);
  };

  const welcomeUser = () => {
    if (helloUser === true) {
      return (
        <h1 style={{ color: "white" }}>
          Welcome {email} <button onClick={logOut}> log out </button>
        </h1>
      );
    }
  };

  const handleRegister = () => {
    const userExists = userDatabase.some((user) => user.email === email);

    if (userExists) {
      alert("User already registered!");
    } else {
      // Register new user
      setUserDatabase([...userDatabase, { email, password }]);
      setHelloUser(true);
      alert("Registration successful! You are now logged in.");
    }
  };

  const handleLogin = () => {
    const validUser = userDatabase.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      setHelloUser(true);
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <>
      <nav>
        {" "}
        <nav>
          <HomeButton onClick={() => window.location.reload()}>
            {" "}
            Home{" "}
          </HomeButton>
        </nav>
        {helloUser === false && (
          <>
            <input
              id="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isRegistering ? (
              <>
                <button onClick={handleRegister}>Register</button>
                <p style={{ color: "white" }}>
                  Already have an account?{" "}
                  <button onClick={() => setIsRegistering(false)}>
                    Login here
                  </button>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleLogin}>Login</button>
                <p style={{ color: "white" }}>
                  Don't have an account ?{" "}
                  <button onClick={() => setIsRegistering(true)}>
                    Register here
                  </button>
                </p>
              </>
            )}
          </>
        )}
        {helloUser === true && welcomeUser()}
      </nav>
    </>
  );
};

export default LoginPage;

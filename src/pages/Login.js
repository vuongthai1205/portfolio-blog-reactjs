import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { GoogleAuthProvider,signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../config/firebase";
function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formLogin);
  };
  const handleLoginGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    auth.languageCode = "it";
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(token, user)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="title-page">Welcome admin</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  value={formLogin.email}
                  type="email"
                  placeholder="Enter email"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={formLogin.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <button
                type="submit"
                placeholder="Password"
                className="btn-login">
                Login
              </button>
            </Form>
            <button onClick={handleLoginGoogle} className="btn-login-google">
              Login with google
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

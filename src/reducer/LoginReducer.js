import cookie from "react-cookies";
function LoginReducer(currentState, action) {
  switch (action.type) {
    case "login":
      return action.payload;
    case "logout":
      cookie.remove("token");
      cookie.remove("user");
      return null;
  }

  return currentState;
}

export default LoginReducer;

import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {/* <Router>
          <AuthProvider>
            <Routes>
              <PrivateRoute exact path="/" element={Login} />
              <PrivateRoute path="/update-profile" element={UpdateProfile} />
              <Route path="/Signup" element={Signup} />
              <Route path="/Login" element={Login} />
              <Route path="/ForgotPassword" element={ForgotPassword} />
              <Route path="/" element={Login} />
            </Routes>
          </AuthProvider>
        </Router> */}
        <Router>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            {/* <Route path="/cards">
              <Cards />
            </Route>
            <Route path="/newcard">
              <NewCard />
            </Route> */}
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
      </div>
    </Container>
  )
}

export default App
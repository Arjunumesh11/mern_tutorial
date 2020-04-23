import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import './App.css'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import { reducer, initialState } from './reducer/userReducer'
export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    console.log("state_app " + state)
    const user = JSON.parse(localStorage.getItem("user"))
    console.log("app " + user)
    if (user) {
      history.push('/')
      dispatch({ type: "USER", payload: user })
    }
    else {
      history.push('/signin')
    }



  }, [])
  return (
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/signin' component={Signin}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/create' component={CreatePost}></Route>
    </Switch>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

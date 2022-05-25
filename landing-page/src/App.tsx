import React, { createContext, useContext } from 'react';
import RouteComponent from './components/RouteComponent';

export type userType = {
  loggedIn: boolean
  setLoggedIn: (l: boolean) => void
}

export const UserContext = createContext<userType>({
  loggedIn: false,
  setLoggedIn: () => {}
})

export const useUserContext = () => useContext(UserContext)

class App extends React.Component<{}, {loggedIn: boolean, setLoggedIn: any}> {
  setLoggedIn = (loggedIn: boolean) => {
    this.setState({ loggedIn })
  }
  constructor(props: any) {
    super(props)
    this.state = {
      loggedIn: localStorage.getItem("loggedIn") === "true",
      setLoggedIn: this.setLoggedIn
    };
  }
  
  render() {
    return (
      <UserContext.Provider value = {{loggedIn: this.state.loggedIn, setLoggedIn: this.state.setLoggedIn}}>
        <RouteComponent />
      </UserContext.Provider>
    );
  }
};

export default App;
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChallengeList from "./pages/ChallengeList";
import ChallengePinList from "./pages/ChallengePinList";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import MyChallenges from "./pages/MyChallenges";
import ChangeInfo from "./pages/ChangeInfo";
import MakeNewChallenges from "./pages/MakeNewChallenges";
import Follower from "./pages/Follower";

// Redux 관련
import store from './redux/store';
import { Provider } from 'react-redux';
// import { ChallengeData } from "../../data/ChallengeData";
// Home Component Routing !!!

function App() {

  return (
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact component={Home} />
          <Route path="/tag" component={ChallengeList} />
          <Route path="/pin" component={ChallengePinList} />
          <Route path="/my-challenges" component={MyChallenges} />
          <Route path="/change-info" component={ChangeInfo} />
          <Route path="/challenge" component={MakeNewChallenges} />
          <Route path="/following" component={Follower} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, Switch, withRouter} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import UsersContainer from "./components/users/UsersContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Login from "./components/login/LoginForm";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppRootStateType} from "./components/redux/redux-store";
import {setAuthThunkCreator} from "./components/redux/reducer/authPageReducer";

class App extends Component<any, AppRootStateType> {

    componentDidMount() {
        this.props.setAuthThunkCreator();
    }

    render() {
        return (
                    <div className={'app-wrapper'}>
                        <HeaderContainer />
                        <Navbar />
                        <div className={'app-wrapper-content'}>
                            <Switch>
                                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
                                <Route path={'/dialogs'} render={() => <DialogsContainer />} />
                                <Route path={'/users'} render={() => <UsersContainer />} />
                                <Route path={'/login'} render={() => <Login />} />
                                <Route path={'/news'} component={News} />
                                <Route path={'/music'} component={Music} />
                                <Route path={'/settings'} component={Settings} />
                            </Switch>
                        </div>
                    </div>
        );
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(null, { setAuthThunkCreator })
)(App);


import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import HeaderContainer from "./components/header/HeaderContainer";
import UsersContainer from "./components/users/UsersContainer";
import Login from "./components/login/LoginForm";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {AppRootStateType, store} from "./components/redux/redux-store";
import {setAuthThunkCreator} from "./components/redux/reducer/authPageReducer";
import {Preloader} from "./components/common/preloader/Preloader";


const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"));

class App extends Component<any, AppRootStateType> {

    componentDidMount() {
        this.props.setAuthThunkCreator();
    }

    render() {
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path={'/profile/:userId?'} render={() => {
                            return <React.Suspense fallback={ <Preloader/> }>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>

                        <Route path={'/dialogs'} render={() => {
                            return <React.Suspense fallback={ <Preloader/> }>
                            <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(null, {setAuthThunkCreator})
)(App);


const SamuraiTSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiTSApp




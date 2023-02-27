import s from './style.module.scss';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <HeaderContainer/>
                <Nav/>
                <div className={s.AppWrapperContent}>
                    <Routes>
                        <Route
                            path='/dialogs/*'
                            element={<DialogsContainer
                            />}/>
                        <Route
                            path='/profile/:userId?'
                            element={<ContentContainer/>}
                        />
                        <Route
                            path='/users'
                            element={<UsersContainer/>}
                        />
                        <Route
                            path='/login'
                            element={<Login/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

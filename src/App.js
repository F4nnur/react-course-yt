import s from './style.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <Header/>
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

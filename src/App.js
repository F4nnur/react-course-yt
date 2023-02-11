import s from './style.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                            path='/content'
                            element={<Content
                            />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

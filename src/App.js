import s from './style.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <Header/>
                <Nav/>
                <div className={s.AppWrapperContent}>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs/>} />
                        <Route path='/content' element={<Content/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )   ;
}

export default App;

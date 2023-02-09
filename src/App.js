import s from './style.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
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
                                store={props.store}
                                state={props.state.dialogsPage}
                                messageData={props.state.dialogsPage}
                                dispatch={props.dispatch}
                            />}/>
                        <Route
                            path='/content'
                            element={<Content
                                store={props.store}
                        />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

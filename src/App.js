import s from './style.module.scss';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";

const App = () => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <Nav/>
            <Content/>
        </div>
    );
}

export default App;

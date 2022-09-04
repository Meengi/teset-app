import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/NavBar/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddComment, UpTextArea} from "./State";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile state={props.state.profilePage}
                                                                   AddComment={props.AddComment}
                                                                   UpTextArea={props.UpTextArea}/>}/>
                        <Route path='/messages/*' element={<Dialogs state={props.state.dialogPage} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

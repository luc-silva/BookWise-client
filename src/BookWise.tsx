import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookshelf } from "./Pages/Bookshelf";
import { Header } from "./components/Misc/Header";
import { BookDetails } from "./Pages/BookDetails";
import { CreateBook } from "./Pages/CreateBook";
import { useState } from "react";
import { userSessionDefaultValues } from "./constants/defaultValues";
import { Login } from "./Pages/Login";
import { Registration } from "./Pages/Registration";

function App() {
    let [user, setUser] = useState(userSessionDefaultValues);

    return (
        <div className="BookWise">
            <Router>
                <Header user={user} setUser={setUser}/>
                <Routes>
                    <Route path="login" element={<Login user={user} setUser={setUser} />} />
                    <Route path="registration" element={<Registration />} />

                    <Route path="book/:id" element={<BookDetails token={user.token}/>}>
                        <Route path="book/:id/edit" />
                    </Route>
                    <Route path="add" element={<CreateBook user={user} />} />
                    <Route
                        path="bookshelf"
                        element={<Bookshelf user={user} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

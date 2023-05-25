import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookshelf } from "./Pages/Bookshelf";
import { Header } from "./components/Misc/Header";
import { BookDetails } from "./Pages/BookDetails";
import { CreateBook } from "./Pages/CreateBook";
import { useState } from "react";
import { userSessionDefaultValues } from "./constants/defaultValues";
import { Login } from "./Pages/Login";
import { Registration } from "./Pages/Registration";
import styles from "./BookWise.module.css";
import { EditBook } from "./components/Subpages/EditBook";

function App() {
    let [user, setUser] = useState(userSessionDefaultValues);

    return (
        <div className={styles["BookWise"]}>
            <Router>
                <Header user={user} setUser={setUser} />
                <div className={styles["bookwise__page"]}>
                    <Routes>
                        <Route
                            path="login"
                            element={<Login user={user} setUser={setUser} />}
                        />
                        <Route path="registration" element={<Registration />} />

                        <Route
                            path="book/:id/"
                            element={<BookDetails user={user} />}
                        />
                        <Route
                            path="book/:id/edit"
                            element={<EditBook user={user} />}
                        />
                        <Route
                            path="add"
                            element={<CreateBook user={user} />}
                        />
                        <Route
                            path="bookshelf"
                            element={<Bookshelf user={user} />}
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

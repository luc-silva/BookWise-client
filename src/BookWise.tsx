import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookshelf } from "./Pages/Bookshelf";
import { Header } from "./components/Misc/Header";
import { BookDetails } from "./Pages/BookDetails";
import { CreateBook } from "./Pages/CreateBook";
import { useState } from "react";
import { userSessionInitialValues } from "./constants/defaultValues";
import { Login } from "./Pages/Login";
import { Registration } from "./Pages/Registration";
import { EditBook } from "./components/Subpages/EditBook";
import { Toast } from "./components/Misc/Toast";
import styles from "./BookWise.module.css";

function App() {
    let [user, setUser] = useState(userSessionInitialValues);
    let [toastMessage, setToastMessage] = useState("");
    let [isToastActive, toggleToast] = useState(false);

    return (
        <div className={styles["bookwise"]}>
            <Toast
                isActive={isToastActive}
                toggleStateFunction={toggleToast}
                message={toastMessage}
            />
            <Router>
                <Header user={user} setUser={setUser} />
                <div className={styles["bookwise__page"]}>
                    <Routes>
                        <Route
                            path="login"
                            element={
                                <Login
                                    user={user}
                                    setUser={setUser}
                                    setToastMessage={setToastMessage}
                                    toggleToast={toggleToast}
                                />
                            }
                        />
                        <Route
                            path="registration"
                            element={
                                <Registration
                                    setToastMessage={setToastMessage}
                                    toggleToast={toggleToast}
                                />
                            }
                        />

                        <Route
                            path="book/:id/"
                            element={<BookDetails user={user} />}
                        />
                        <Route
                            path="book/:id/edit"
                            element={
                                <EditBook
                                    user={user}
                                    setToastMessage={setToastMessage}
                                    toggleToast={toggleToast}
                                />
                            }
                        />
                        <Route
                            path="add"
                            element={
                                <CreateBook
                                    user={user}
                                    setToastMessage={setToastMessage}
                                    toggleToast={toggleToast}
                                />
                            }
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

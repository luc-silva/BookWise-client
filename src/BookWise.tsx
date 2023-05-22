import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookshelf } from "./Pages/Bookshelf";
import { Header } from "./components/Misc/Header";
import { BookDetails } from "./Pages/BookDetails";
import { CreateBook } from "./Pages/CreateBook";
import { useState } from "react";
import { userSessionDefaultValues } from "./constants/defaultValues";

function App() {
    let [user, setUser] = useState(userSessionDefaultValues);

    return (
        <div className="BookWise">
            <Router>
                <Header user={user} />
                <Routes>
                    <Route path="book/:id" element={<BookDetails />}>
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

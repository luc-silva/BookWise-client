import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookshelf } from "./Pages/Bookshelf";
import { Header } from "./components/Misc/Header";
import { BookDetails } from "./Pages/BookDetails";

function App() {
    return (
        <div className="BookWise">
            <Router>
                <Header />
                <Routes>
                    <Route path="book/:id" element={<BookDetails />} >
                        <Route path="book/:id/edit"/>
                    </Route>
                    <Route path="create"/>
                    <Route path="bookshelf" element={<Bookshelf />} /> 
                </Routes>
            </Router>
        </div>
    );
}

export default App;

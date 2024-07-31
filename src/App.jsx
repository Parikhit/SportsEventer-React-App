import { Routes, Route, Link } from 'react-router-dom';

//components
import Navbar from './components/navbar.component';
import SportsCards from './components/sports-cards.component';
import SelectedEventCards from './components/selected-event-cards.component';
import Footer from './components/footer.component';

import './App.css';

const App = () => {
    return (
        <>
            <Link
                to='/'
                className='text-3xl hover:text-amber-200'
            >
                SportsEventer React App
            </Link>

            <Navbar />

            <Routes>
                <Route
                    index
                    element={<SportsCards />}
                />
                <Route />
                <Route
                    path='/selected-events'
                    element={<SelectedEventCards />}
                />
            </Routes>

            <Footer />
        </>
    );
};

export default App;

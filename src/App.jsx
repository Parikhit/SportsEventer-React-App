import { useState, useEffect } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar.component';
import SportsCards from './components/sports-cards.component';
import SelectedEventCards from './components/selected-event-cards.component';

import './App.css';

const STATUS = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};

const App = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [status, setStatus] = useState(STATUS.LOADING);

    // console.log('allEvents:', allEvents.length);
    // console.log('selectedEvents:', selectedEvents.length);

    const getEventData = async () => {
        try {
            const response = await fetch(
                'https://66a773d453c13f22a3cfccab.mockapi.io/api/v1/events'
            );

            if (!response.ok) {
                setStatus(STATUS.ERROR);
            } else {
                const data = await response.json();

                setStatus(STATUS.SUCCESS);
                setAllEvents(data);
            }
        } catch (error) {
            setStatus(STATUS.ERROR);
        }
    };

    useEffect(() => {
        getEventData();
    }, []);

    return (
        <>
            <Link
                to='/'
                className='text-3xl hover:text-amber-200'
            >
                Sports Eventer React App
            </Link>
            <Navbar />

            <Routes>
                <Route
                    index
                    element={
                        <SportsCards
                            allEvents={allEvents}
                            setSelectedEvents={setSelectedEvents}
                            setAllEvents={setAllEvents}
                            selectedEvents={selectedEvents}
                            status={status}
                        />
                    }
                />
                <Route />
                <Route
                    path='/selected-events'
                    element={
                        <SelectedEventCards
                            selectedEvents={selectedEvents}
                            setSelectedEvents={setSelectedEvents}
                            setAllEvents={setAllEvents}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default App;

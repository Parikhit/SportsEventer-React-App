import { createContext, useState, useEffect } from 'react';

const STATUS = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};

export const EventContext = createContext({
    allEvents: [],
    setAllEvents: () => null,
    status: '',
    setStatus: () => null,
});

export const EventProvider = ({ children }) => {
    const [allEvents, setAllEvents] = useState([]);
    const [status, setStatus] = useState(STATUS.LOADING);

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

    const values = { allEvents, setAllEvents, status, setStatus };

    return <EventContext.Provider value={values}>{children}</EventContext.Provider>;
};

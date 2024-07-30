import { createContext, useState, useEffect } from 'react';

//utils
import { getItemFromLocalStorage, setItemToLocalStorage } from '../utils/localStorage.utlis';

const URL = 'https://66a773d453c13f22a3cfccab.mockapi.io/api/v1/events';

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
    const [allEvents, setAllEvents] = useState(() => getItemFromLocalStorage('allEvents', []));
    const [status, setStatus] = useState(() => getItemFromLocalStorage('status', STATUS.LOADING));

    const getEventData = async (URL) => {
        try {
            const response = await fetch(URL);

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
        getEventData(URL);
    }, []);

    useEffect(() => {
        setItemToLocalStorage('allEvents', allEvents);
        setItemToLocalStorage('status', status);
    }, [allEvents, status]);

    const values = { allEvents, setAllEvents, status, setStatus };

    return <EventContext.Provider value={values}>{children}</EventContext.Provider>;
};

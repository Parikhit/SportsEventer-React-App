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

    const getEventData = async () => {
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                setStatus(STATUS.ERROR);
            } else {
                const newEvents = await response.json();

                // Check for duplicates
                const existingEventIds = new Set(allEvents.map((event) => event.id));

                const uniqueNewEvents = newEvents.filter(
                    (event) => !existingEventIds.has(event.id)
                );

                setStatus(STATUS.SUCCESS);

                if (uniqueNewEvents.length > 0) {
                    setAllEvents((prevEvents) => {
                        const updatedEvents = [...prevEvents, ...uniqueNewEvents];

                        setItemToLocalStorage('allEvents', updatedEvents);
                        return updatedEvents;
                    });
                }
            }
        } catch (error) {
            setStatus(STATUS.ERROR);
        }
    };

    useEffect(() => {
        if (!allEvents.length) {
            getEventData();
        }
    }, []);

    useEffect(() => {
        setItemToLocalStorage('allEvents', allEvents);
        setItemToLocalStorage('status', status);
    }, [allEvents, status]);

    const values = { allEvents, setAllEvents, status, setStatus };

    return <EventContext.Provider value={values}>{children}</EventContext.Provider>;
};

import { createContext, useState, useEffect } from 'react';

//utils
import { getItemFromLocalStorage, setItemToLocalStorage } from '../utils/localStorage.utlis';

export const SelectedEventsContext = createContext({
    selectedEvents: [],
    setSelectedEvents: () => null,
    isEventClashing: false,
    setIsEventClashing: () => null,
});

export const SelectedEventsProvider = ({ children }) => {
    const [selectedEvents, setSelectedEvents] = useState(() =>
        getItemFromLocalStorage('selectedEvents', [])
    );
    const [isEventClashing, setIsEventClashing] = useState(false);

    useEffect(() => {
        setItemToLocalStorage('selectedEvents', selectedEvents);
    }, [selectedEvents]);

    const values = { selectedEvents, setSelectedEvents, isEventClashing, setIsEventClashing };
    return (
        <SelectedEventsContext.Provider value={values}>{children}</SelectedEventsContext.Provider>
    );
};

import { useContext } from 'react';

//components
import SportCard from './sports-card.component';

//contexts
import { SelectedEventsContext } from '../contexts/selectedEvents.context';

const SelectedEventCards = () => {
    //pulling values and methods from context
    const { selectedEvents } = useContext(SelectedEventsContext);

    //Handlinng edge case if fetch fails
    if (selectedEvents.length === 0 || !selectedEvents)
        return (
            <div className='w-full h-48 flex items-center justify-center text-2xl font-semibold'>
                No Events Selected
            </div>
        );

    return (
        <>
            {/* Case to show user for maximum of 3 events selected */}
            {selectedEvents.length > 2 && (
                <div className='text-md font-medium'>You have reached the maximum of 3 events</div>
            )}

            <div className='max-w-7xl min-w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 border border-red-200 p-4'>
                {selectedEvents.map((event) => {
                    return (
                        <div
                            key={event.id}
                            className='flex items-center justify-evenly border md:w-3/10 h-fit border-white hover:border-amber-500 rounded-lg m-3 p-6 hover:scale-105 transition-transform'
                        >
                            {/* Passing the events as a prop with a button type to reuse the Card component for both cases i.e  SELECT and UNSELECT   */}
                            <SportCard
                                event={event}
                                buttonType='UNSELECT'
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SelectedEventCards;

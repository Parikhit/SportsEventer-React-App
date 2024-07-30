import { useContext } from 'react';

//components
import SportCard from './sports-card.component';
import Message from './message.component';

//contexts
import { EventContext } from '../contexts/events.context';
import { SelectedEventsContext } from '../contexts/selectedEvents.context';

const SportsCards = () => {
    const { allEvents, status } = useContext(EventContext);
    const { selectedEvents, isEventClashing } = useContext(SelectedEventsContext);

    if (status === 'LOADING')
        return (
            <div className='w-full h-48 flex items-center justify-center text-2xl font-semibold'>
                LOADING...
            </div>
        );

    if (status === 'ERROR')
        return (
            <div className='w-full h-48 flex items-center justify-center text-2xl font-semibold'>
                <Message message='Something went wrong!!!' />
            </div>
        );

    return (
        <>
            {/* Case to show user for maximum of 3 events selected  or Envents are clashing i.e it'll show one at a time*/}
            {(selectedEvents.length > 2 && (
                <Message message='You have reached the maximum limit of 3 events!' />
            )) ||
                (isEventClashing && (
                    <Message message='  Event time is clashing with another scheduled activity.' />
                ))}

            <div className='max-w-7xl min-w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 border border-amber-300 rounded-lg p-4'>
                {allEvents.map((event) => (
                    <div
                        key={event.id}
                        className='flex items-center justify-evenly border md:w-3/10 h-fit border-white hover:border-amber-500 rounded-lg m-3 p-6 hover:scale-105 transition-transform hover:text-amber-300'
                    >
                        {/* Passing the events as a prop with a button type to reuse the Card component for both cases i.e  SELECT and UNSELECT   */}

                        <SportCard
                            event={event}
                            buttonType='SELECT'
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SportsCards;

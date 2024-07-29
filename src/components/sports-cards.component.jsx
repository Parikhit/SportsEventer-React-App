import SportCard from './sports-card.component';

const SportsCards = ({
    allEvents,
    setSelectedEvents,
    setAllEvents,
    setEventClicked,
    selectedEvents,
    status,
}) => {
    // if (allEvents.length === 0 || !allEvents || status === 'ERROR') {
    //     return (
    //         <div className='w-full h-48 flex items-center justify-center text-2xl font-semibold'>
    //             Something went wrong!!!
    //         </div>
    //     );

    if (status === 'LOADING')
        return (
            <div className='w-full h-48 flex items-center justify-center text-2xl font-semibold'>
                LOADING...
            </div>
        );

    if (status === 'ERROR')
        return (
            <div className='w-full h-48 flex items-center justify-center text-2xl font-semibold'>
                Something went wrong!!!
            </div>
        );

    return (
        <>
            {selectedEvents.length > 2 && (
                <div className='text-md font-medium'>You have reached the maximum of 3 events</div>
            )}

            <div className='max-w-7xl min-w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 border border-red-200 p-4'>
                {allEvents.map((event) => (
                    <div
                        key={event.id}
                        className='flex items-center justify-evenly border md:w-3/10 h-fit border-white hover:border-amber-500 rounded-lg m-3 p-6  hover:scale-105 transition-transform'
                    >
                        <SportCard
                            setSelectedEvents={setSelectedEvents}
                            event={event}
                            setAllEvents={setAllEvents}
                            setEventClicked={setEventClicked}
                            buttonType='SELECT'
                            selectedEvents={selectedEvents}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SportsCards;

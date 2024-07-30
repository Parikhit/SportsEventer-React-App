import SportCard from './sports-card.component';

const SelectedEventCards = ({
    selectedEvents,
    setSelectedEvents,
    setAllEvents,
    setEventClicked,
}) => {
    if (selectedEvents.length === 0 || !selectedEvents)
        return (
            <div className='w-full h-48 flex items-center justify-center text-2xl font-semibold'>
                No Events Selected
            </div>
        );

    return (
        <>
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
                            <SportCard
                                setSelectedEvents={setSelectedEvents}
                                event={event}
                                setAllEvents={setAllEvents}
                                setEventClicked={setEventClicked}
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

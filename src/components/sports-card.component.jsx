import { useContext } from 'react';

//contexts
import { EventContext } from '../contexts/events.context';
import { SelectedEventsContext } from '../contexts/selectedEvents.context';

//utility functions for converting time from string and checking time conflicts
import { convertTime } from '../utils/convertTime.utils';
import { timeConflicts } from '../utils/checkTimeConflicts.utils';

const SportCard = ({ event, buttonType }) => {
    //pulling values and methods from context
    const { setAllEvents } = useContext(EventContext);
    const { selectedEvents, setSelectedEvents, setIsEventClashing } =
        useContext(SelectedEventsContext);

    const {
        event_name: eventName,
        event_category: eventCategory,
        start_time: startTime,
        end_time: endTime,
    } = event;

    //Handline the main click functionality here
    const handleEventClick = (event) => {
        const id = event.id;

        //Based on the buttonType we apply the logic for select and unselect

        //Here we apply the edges cases of "maximum of 3 events can be selected" and "no time conflicts" b/w events"
        if (buttonType === 'SELECT' && selectedEvents.length < 3) {
            if (!timeConflicts(event, selectedEvents)) {
                setSelectedEvents((prevEvents) => [...prevEvents, event]);
                setAllEvents((sports) => sports.filter((sport) => sport.id !== id));
            } else {
                setIsEventClashing(true);
            }
        }

        //Here we are add  the logic when UNSELECT button is clicked from the selected events
        if (buttonType == 'UNSELECT') {
            setAllEvents((prevEvents) => [...prevEvents, event]);
            setSelectedEvents((sports) => sports.filter((sport) => sport.id !== id));
            return;
        }
    };

    return (
        <>
            <div className='w-1/4 px-3'>
                <h1 className='text-5xl'>{eventCategory[0]}</h1>
            </div>
            <div className='border-l border-white h-32 px-4' />
            <div className='flex flex-col'>
                <div className='text-left'>
                    <div>{eventName}</div>
                    <div>{`(${eventCategory})`}</div>
                    <div>{`${convertTime(startTime)} - ${convertTime(endTime)}`}</div>
                </div>
                <div className='text-right mt-4'>
                    <button
                        //passing the event as an argument to the handle function
                        onClick={() => handleEventClick(event)}
                        className='bg-white border rounded-md text-black text-[14px] font-semibold px-2 py-1 active:bg-amber-500'
                        id={`${buttonType}`}
                    >
                        {buttonType}
                    </button>
                </div>
            </div>
        </>
    );
};

export default SportCard;

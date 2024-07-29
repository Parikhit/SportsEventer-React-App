import { convertTime, timeConflicts } from '../utils/utilityFunctions.utils';

const SportCard = ({ event, setSelectedEvents, setAllEvents, selectedEvents, buttonType }) => {
    const {
        event_name: eventName,
        event_category: eventCategory,
        start_time: startTime,
        end_time: endTime,
    } = event;

    const handleEventClick = (event) => {
        const id = event.id;

        if (
            buttonType === 'SELECT' &&
            selectedEvents.length < 3
            // && timeConflicts(event, selectedEvents)
        ) {
            setSelectedEvents((prevEvents) => [...prevEvents, event]);
            setAllEvents((sports) => sports.filter((sport) => sport.id !== id));
        } else {
            setSelectedEvents((prevEvents) => [...prevEvents]);
            setAllEvents((sports) => [...sports]);
        }

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
                    <div className=''>{eventName}</div>
                    <div className=''>{`(${eventCategory})`}</div>
                    <div className=''>{`${convertTime(startTime)} - ${convertTime(endTime)}`}</div>
                </div>
                <div className='text-right mt-4'>
                    <button
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

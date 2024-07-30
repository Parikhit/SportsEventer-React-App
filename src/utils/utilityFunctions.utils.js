export const convertTime = (timeStr) => {
    let hours = new Date(timeStr).getHours();
    const minutes = new Date(timeStr).getMinutes();

    //Checking if time is 24 Hr format or 12 Hr format
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12 || 12; // Convert '0' to '12' for 12 AM/PM

    const finalHours = hours < 10 ? `0${hours}` : hours;
    const finalMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${finalHours}:${finalMinutes} ${period}`;
};

export const timeConflicts = (eventToCheck, events) => {
    const eventToCheckStartTime = new Date(eventToCheck.start_time);
    const eventToCheckEndTime = new Date(eventToCheck.end_time);

    for (const event of events) {
        const eventStartTime = new Date(event.start_time);
        const eventEndTime = new Date(event.end_time);

        if (eventToCheckStartTime < eventEndTime && eventToCheckEndTime > eventStartTime) {
            return true;
        }
    }

    return false;
};

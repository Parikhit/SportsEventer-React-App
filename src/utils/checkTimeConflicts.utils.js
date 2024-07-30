//check for time conflicts
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

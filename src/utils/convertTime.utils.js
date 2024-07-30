//convert time from the given string to 12-Hr format

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

export const durationConverter = (time) => {
    const hours = Math.floor(time / 60);
    const remainingMinutes = time % 60;

    if (hours === 0) {
        return `${remainingMinutes}m`;
    } else if (remainingMinutes === 0) {
        return `${hours}h`;
    } else {
        return `${hours}h ${remainingMinutes}m`;
    }
}

export const dateToYearConverter = (date) => {
    return date.split('-')[0];
}
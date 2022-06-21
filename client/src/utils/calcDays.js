const calcDays = (day1, day2) => {

    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const time = Math.abs(day2.getTime() - day1.getTime());
    const daysCount = time / millisecondsPerDay;

    return daysCount;
}

export default calcDays;
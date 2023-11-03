"use strict";
function startCountdown(minutes) {
    const targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes() + minutes);
    const interval = setInterval(() => {
        const currentTime = new Date();
        const remainingTime = new Date(targetTime.getTime() - currentTime.getTime());
        const hours = remainingTime.getUTCHours();
        const minutes = remainingTime.getUTCMinutes();
        const seconds = remainingTime.getUTCSeconds();
        if (remainingTime.getTime() <= 10) {
            clearInterval(interval);
            console.log('Countdown timer has finished!');
        }
        else {
            console.clear();
            console.log(`Countdown Timer: ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
}
const minutes = process.argv[2];
if (!minutes) {
    console.log('Please specify the countdown time in minutes.');
}
else {
    const parsedMinutes = parseInt(minutes, 10);
    if (isNaN(parsedMinutes)) {
        console.log('Invalid input. Please specify a valid number of minutes.');
    }
    else {
        console.log(`Starting countdown timer for ${parsedMinutes} minutes...`);
        startCountdown(parsedMinutes);
    }
}

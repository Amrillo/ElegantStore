    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

function timer(daysElement, hoursElement,minutesElement,secondsElement) {  
    const endDate = new Date('June 30, 2024, 10:19:59');
    let timeInterval ;  

    function updateTimer() { 
        const now = new Date();  
        const timeDifference = endDate - now;  
    
        if(timeDifference < 0) {  
             daysElement.innerText = 0;
             hoursElement.innerText = 0;
             minutesElement.innerText = 0;
             secondsElement.innerText = 0;
             clearInterval(timeInterval);
             return
        }
    
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60))/ (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60))/ (1000));

        if (daysElement) daysElement.innerText = days;
        if (hoursElement) hoursElement.innerText = hours;
        if (minutesElement) minutesElement.innerText = minutes;
        if (secondsElement) secondsElement.innerText = seconds;
    
    }   
    updateTimer();
    timeInterval = setInterval(updateTimer, 1000);

}

timer(daysElement,hoursElement,minutesElement,secondsElement)

export default timer; 



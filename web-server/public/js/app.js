console.log('Client side javaScript file is loaded');

fetch('http://localhost:3000/weather?address=mathura').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
        }else {
            console.log(`Location: ${data.location}`);
            console.log(`Current Temperature ${data.currentTemperature}`);
        }
    })
})
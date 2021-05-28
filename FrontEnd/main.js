//This script will help display the counter on the site

window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = "https://getwareresumecounter.azurewebsites.net/api/GetResumeCounter?code=TM3tCKNX0hOJSeGCaLwWknyaCgDdjy2bUx17Yshq6yf3vnABrUuXVw==";
const functionApiLocal = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website Called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
        return count;
};
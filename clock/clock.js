// creating a function getTime
function getTime(){

    // creating an object for predefined class Date
    const time = new Date()
    // console.log(time);

    // accessing hours from Date using predefined class
    const hour = time.getHours()
    // console.log(hour);

    // accessing minutes from Date using predefined class
    const min = time.getMinutes()
    // console.log(min);

    // accessing seconds from Date using predefined class
    const sec =time.getSeconds()
    // console.log(sec);

    // displaying time on html page
    tdisp.innerHTML =`${hour}:${min}:${sec} ${hour>=12?'PM':'AM'}`
    setTimeout(() => {
        getTime()
    }, 1000);
}
// function calling of getTime
getTime()
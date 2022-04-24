const clocktitle = document.getElementById("clock")

const time = () =>{
    const clock = new Date()
    const month = String(clock.getMonth()).padStart(2, "0")
    const date = String(clock.getDate()).padStart(2, "0")
    const hour = String(clock.getHours()).padStart(2, "0");
    const min = String(clock.getMinutes()).padStart(2, "0");
    const sec = String(clock.getSeconds()).padStart(2, "0");
    clocktitle.innerText = `${month}/${date} \n ${hour} : ${min} : ${sec}`
}

time()
setInterval(time, 1000)
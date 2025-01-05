console.log("This is my script")
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "newemail",
    "email": "newemail@harry.com",
    "score": 0.64,
    "state": "unknown",
    "domain": "harry.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("Clicked!")                
    resultCont.innerHTML=`<img width="23px" src="img/loading.svg" alt="">`
    let key = "ema_live_BMJ9rWcAnaNCNtZp81b9xDOtnWWVP62bsd3fCVgC"
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res= await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key]!=="" && result[key]!==" ")
        str = str + `<div> ${key}: ${result[key]}</div>`
    }

    console.log(str)
    resultCont.innerHTML = str

})

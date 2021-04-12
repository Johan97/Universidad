const formjs = document.getElementById("formone")
const boxnamejs = document.getElementById("boxname")
const boxmailjs = document.getElementById("boxmail")
const boxpassjs = document.getElementById("boxpass")
const boxconpassjs = document.getElementById("boxconpass")

const pjs = document.getElementById("warning")
  

formjs.addEventListener("submit", e =>{    
    e.preventDefault()
    validatefield();
})

function validatefield() {
    let warning = ""
    let ok = false
    pjs.innerHTML = ""
    let expremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let exprepass = /^[^'\s]/
    if(boxnamejs.value.length <6){
        warning += '-The name must have a minimum of 6 characters <br>'
        ok = true
    }
        if (!expremail.test(boxmailjs.value)) {
            warning += '-The mail is not valid <br>'
            ok = true
        } 
        if (boxpassjs.value.length<6) {
            warning += '-The password must have a minimum of 6 characters <br>'
            ok = true
        }
        if (boxconpassjs.value!==boxpassjs.value) {
            warning += '-Passwords do not match'
            ok = true
        }
        if(ok){
            pjs.innerHTML = warning         
        }else{
            pjs.innerHTML = 'Successful registration'
        }
    
}

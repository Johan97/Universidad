//Author: Johan Siabato
//function to validate entered email
    function validateemail(inputmail){

        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return mailformat.test(inputmail);
    }


//function to validate form inputs
function validateemptyfields() {

const boxmailjs = document.forms["formone"]["boxmail"].value;
const boxnamejs = document.forms["formone"]["boxname"].value;
const listcityjs = document.forms["formone"]["listcity"].value;

//valid empty boxmail
if (boxmailjs == "") {
    //swal("Oops!", "Something went wrong on the page!", "error");
    alert("The field YOUR E-MAIL cannot be left empty");
    document.formone.boxmail.focus();
    return false;} 

    else
    {
        //valid empty boxname
        if (boxnamejs == "") {
        alert("The field YOUR NAME cannot be left empty");
        document.formone.boxname.focus();
        return false;}

        else
        {
            //valid empty listcity
            if (listcityjs == "") {
            alert("The field CITY cannot be left empty");
            return false;}

            else
            {
                //use function validate email and deliver value captured in the boxmail object of the form
                if (validateemail(boxmailjs)) {
                    alert("Thanks")
                    return true;}
                else{
                    alert("Mail is no valid");
                    document.formone.boxmail.focus();
                }
            }
        }
    }

}     
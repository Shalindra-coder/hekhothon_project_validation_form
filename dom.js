const btn = document.querySelector("#btn")
const form = document.querySelector(".contact-form")

btn.addEventListener('click', function (e) {
    const userid = document.querySelector("#UserId").value;
    const contact = document.querySelector("#Contact").value;
    const Email = document.querySelector("#Email").value;
    const usermessage = document.querySelector(".userid")
    const contactmessage = document.querySelector(".contact")
    const Emailmassage = document.querySelector(".Email")
    const passmassage = document.querySelector(".Password")
    const confirmassage = document.querySelector(".ConfirmPassword")

    const password = document.querySelector("#Password").value;
    const confirmpassword = document.querySelector("#ConfirmPassword").value;
    const message = document.querySelector(".message")

    e.preventDefault() 
    let count = 0;


    if (userid != "") {
        count++;

    } else {
        usermessage.style.color = "red"

        usermessage.innerHTML = "please fill the userId"

    }

    if ((contact != "") && Number(contact) && contact.length === 10) {
        count++

    } else {
        contactmessage.style.color = "red"
        contactmessage.innerText = "Your Contact number is not valid 10 digit number"

    }
    if ((Email != "") && (Email.includes("@"))) {
        count++
    } else {
        Emailmassage.style.color = "red"

        Emailmassage.innerText = "please fill the correnct Email id"

    }
    if ((password != "") && (password.length >= 8) || (password.includes("@") || (password.includes("$") || (password.includes("&") || (password.includes("#")))))) {
        count++
    } else {
        passmassage.style.color = "red"
        passmassage.innerText = "plase give corect password"

    }

    if (confirmpassword == password) {
        count++
    } else {
        confirmpassword.style.color = "red"
        confirmpassword.innerText = "Your password is not matched"
    }

    if (count == 5) {

        form.innerHTML = "Form Successfully Submitted "
        message.innerHTML = "Done"


    }

});






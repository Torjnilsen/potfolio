
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

function validate() {
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let msg = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
        emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name, email,msg) {
    emailjs.send("service_x8tg3dm","template_iwd9udl",{
    to_name: name,
    from_name: email,
    message: msg,
});  
}

function emptyerror() {
    swal({
        title: "å nei!",
        text: "husk å fylle ut alle felt",
        icon: "error",
    });
}

function success() {
    swal({
        title: "email har blid sendt!",
        text: "jeg vil svare så fort jeg rekker",
        icon: "success",
    });
}




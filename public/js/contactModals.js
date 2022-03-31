let Emailmodal = document.getElementById("my_email_modal")
let Emailbtn = document.getElementById("my_btn_one")
let Whatsappmodal = document.getElementById("my_whatsapp_modal")
let Whatsappbtn = document.getElementById("my_btn_two")

Emailbtn.onclick = function() {
    Emailmodal.style.display = "block";
  };

Whatsappbtn.onclick = function() {
    Whatsappmodal.style.display = "block";
  };

window.onclick = function(event) {
    if (event.target == Emailmodal || event.target == Whatsappmodal ) {
        Emailmodal.style.display = "none";
        Whatsappmodal.style.display = "none";
    }
}
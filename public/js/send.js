function send() {

    let message = document.getElementById('textEmail').value;
    let recipientEmail = document.getElementById('recipientEmail').value;
    let titleEmail = document.getElementById('titleEmail').value;

    if (titleEmail == "") titleEmail = 'E-Mail de Test';

    if (recipientEmail != "") {

        $.ajax({
            type: "POST",
            url: "/api/v1.0/send",
            headers: {},
            data: {
                "message": message,
                "recipientEmail": recipientEmail,
                "titleEmail": titleEmail,
            },
            success: function(response) {
                document.getElementById('main').style.display = "none";
                document.getElementById('MailOk').style.visibility = "visible";
            }
        })

    } else {
        document.getElementById('recipientEmail').style.border = "2px solid red";
        document.getElementById('recipientEmail').value = "Vérifier l'adresse e-mail";
    }
};


function reload() {
    document.getElementById('main').style.display = "block";
    document.getElementById('MailOk').style.visibility = "hidden";
}
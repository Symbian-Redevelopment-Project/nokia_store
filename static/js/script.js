function validateLoginForm() {
    var email_element = document.getElementById('email');
    var email = email_element.value; 
    var email_label = document.getElementById('email_label');
    var email_required = email_label.getElementsByClassName('required')[0];
    var email_tip = document.getElementById('email_tip');
    var email_pattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (email == "") {
        email_required.style.display = "inline";
        email_tip.style.display = "none";
        return false;
    } else {
        email_tip.style.display = "none";
        email_required.style.display = "none";
    };

    if (! email_pattern.test(email)) {
        email_required.style.display = "none";
        email_tip.style.display = "inline";
        return false;
    } else {
        email_required.style.display = "none";
        email_tip.style.display = "none";
    };

    var password_element = document.getElementById('password');
    var password = password_element.value; 
    var password_label = document.getElementById('password_label');
    var password_required = password_label.getElementsByClassName('required')[0];

    if (password == "") {
        password_required.style.display = "inline";
        return false;
    } else {
        password_required.style.display = "none";
    };
}

function validateRegisterForm() {

    var username_element = document.getElementById('username');
    var username = username_element.value; 
    var username_label = document.getElementById('username_label');
    var username_required = username_label.getElementsByClassName('required')[0];
    var username_tip = document.getElementById('username_tip');
    var username_pattern = /^[\w]{6,}$/;

    if (username == "") {
        username_required.style.display = "inline";
        username_tip.style.display = "none";
        return false;
    } else {
        username_tip.style.display = "none";
        username_required.style.display = "none";
    };

    if (! username_pattern.test(email)) {
        username_required.style.display = "none";
        username_tip.style.display = "inline";
        return false;
    } else {
        username_required.style.display = "none";
        username_tip.style.display = "none";
    };
    
    var email_element = document.getElementById('email');
    var email = email_element.value; 
    var email_label = document.getElementById('email_label');
    var email_required = email_label.getElementsByClassName('required')[0];
    var email_tip = document.getElementById('email_tip');
    var email_pattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (email == "") {
        email_required.style.display = "inline";
        email_tip.style.display = "none";
        return false;
    } else {
        email_tip.style.display = "none";
        email_required.style.display = "none";
    };

    if (! email_pattern.test(email)) {
        email_required.style.display = "none";
        email_tip.style.display = "inline";
        return false;
    } else {
        email_required.style.display = "none";
        email_tip.style.display = "none";
    };

    var password_element = document.getElementById('password');
    var password = password_element.value; 
    var password_label = document.getElementById('password_label');
    var password_required = password_label.getElementsByClassName('required')[0];

    if (password == "") {
        password_required.style.display = "inline";
        return false;
    } else {
        password_required.style.display = "none";
    };
}
const handleButton = (number) => {
    document.getElementById("name-field").value = document.getElementById("name-"+number).innerText;
    document.getElementById("email-field").value = document.getElementById("email-"+number).innerText;
    document.getElementById("phone-field").value = document.getElementById("phone-"+number).innerText;
    document.getElementById("role-field").value = document.getElementById("role-"+number).innerText;         
}
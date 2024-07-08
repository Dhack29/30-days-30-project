var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', ()=>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    } else{
        msg.style.display = "none";
    }

    if(pass.value.length < 4 ){
        str.innerHTML = "Weak";
        msg.style.color = "red";
        pass.style.borderColor = "red";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8 ){
        str.innerHTML = "Medium";
        msg.style.color = "yellow";
        pass.style.borderColor = "yellow";
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "Strong";
        msg.style.color = "green";
        pass.style.borderColor = "green";
    }
})
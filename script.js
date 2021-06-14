// create function of insert numbers 
insert = (num) => {
    document.form.textview.value = document.form.textview.value + num
}

// create function of executes the operation calculation
equal = () => {
    let exp = document.form.textview.value
    if(exp) {
        document.form.textview.value = eval(exp)
    }
}

// create function of cleaner of textview
clean = () => {
    document.form.textview.value = ""
}

// create function of Take a step back
back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1)
}

// create function of switch between themes when click of button
let btnChange = document.getElementById("btn-switch")
btnChange.addEventListener("click" , toggleTheme )
function toggleTheme() {
    let theme = document.getElementById("styleChange")

    if (theme.getAttribute('href') == 'css/default.css') {
        theme.setAttribute('href', 'css/theme1.css');
    } else if (theme.getAttribute('href') == 'css/theme1.css') {
        theme.setAttribute('href', 'css/theme2.css');
    } else {
        theme.setAttribute('href', 'css/default.css');
    }
}
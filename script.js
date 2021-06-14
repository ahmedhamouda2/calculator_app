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
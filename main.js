function checkForm(el){

    let name = el.name.value;
    let surname = el.surname.value;
    let password = el.password.value;
    let password_rep = el.password_rep.value;
    if(name == 0 || surname == 0)
        alert('Введите данные ')
    else{
        if(password.length < 8)
            alert('Пароль должен быть минимум 8 символов')
        else {
            if(password == password_rep)
                alert('Приветствую: ' + '\n' + surname + '\n' +  name)
            else alert("Пароли не совпадают")
        }
    }
}


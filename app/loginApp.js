const testUser = {
    name: "Beyonce",
    login: "beyonce@gmail.com",
    password: "blue"

}

function showForm() {
    let formulario = document.getElementById("formSignup");
    formulario.lastElementChild.remove();
    let name = document.getElementById('sName').value;
    let surName = document.getElementById('sSurName').value;
    let email = document.getElementById('sEmail').value;
    let date = document.getElementById('sDate').value;
    formulario.innerHTML +=
        `<label>Cidade</label>
    <input type="text" class="signup-input">
    <br>
    <label>Nome Artístico</label>  
   <input type="text" class="signup-input" id="sCity">
    <br>
    
    <label>Gênero</label>
    <select class="signup-input" id="sGender">
        <option>Feminino</option>
        <option>Masculino</option>
        <option>Outros</option>
    </select>
    <br>
    <label>Profissão</label>
    <input type="text" class="signup-input">
    <br>
    <label>Idioma</label>
    <select id="sLanguage" class="signup-input">
        <option>Português (BR)</option>
        <option>Inglês</option>
        <option>Espanhol</option>
        <option>Outros</option>
    </select>
    <br>
    <label>Fale sobre você</label>
    <br>
    <textarea class="signup-textarea" id="sBio"></textarea>
    <br>
    <label>Senha</label>
    <input type="password" class="signup-input" id="sPassword">
    <br>
    <label>Repita a senha</label>
    <input type="password" class="signup-input" id="sRepeatPassword">
    <div class="btnForm">
    <button type="submit" id="signup-button" onclick="signup()">Cadastrar</button>
    </div>`

    document.getElementById('sName').value = name;
    document.getElementById('sSurName').value = surName;
    document.getElementById('sEmail').value = email;
    document.getElementById('sDate').value = date;

}


function signup() {

    let arrayInputs = document.getElementsByClassName('signup-input');
    let follow = true;


    for (let i = 0; i < arrayInputs.length; i++) {
        console.log("valor " + i + " " + arrayInputs[i].value);
        if (arrayInputs[i].value == null || arrayInputs[i].value == "") {
            arrayInputs[i].setAttribute('class', 'signup-input empty');
            arrayInputs[i].setAttribute('placeholder', 'Preenchimento obrigatório');
            follow = false;
        } else {
            arrayInputs[i].setAttribute('class', 'signup-input notEmpty');
        }
    }



    if (follow) {
        senha = document.getElementById('sPassword');
        rSenha = document.getElementById('sRepeatPassword');
        if (senha.value !== rSenha.value) {
            follow = false;
            alert('Senhas não são compatíveis');
            senha.setAttribute('class', 'signup-input empty');
            rSenha.setAttribute('class', 'signup-input empty');
        }
        else {
            senha.setAttribute('class', 'signup-input notEmpty');
            rSenha.setAttribute('class', 'signup-input notEmpty');
            console.log('senha ok')
        }
    }

    if (follow) {

        alert('Cadastrado com sucesso');
        window.location = 'index.html';

    }
}

function loginVerification() {

    login = document.getElementById('login');
    password = document.getElementById('password');
    if (login.value == testUser.login && password.value == testUser.password)
        window.location = 'index.html';
    else {
        login.setAttribute('class', 'login-input empty');
        password.setAttribute('class', 'login-input empty');
        alert('Usuário ou senha incorretas!');
    }
}
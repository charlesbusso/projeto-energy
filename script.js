const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const btnLimpar = document.getElementById('btnLimpar');
const ic = document.getElementById('ic');



form.addEventListener("submit", (e) => {
    e.preventDefault();

   
    

checkInputs();
});
    function checkInputs() {
        const usernameValue = username.value;
        const emailValue = email.value;
        const telValue = tel.value;
        const passwordValue = password.value;
        const passwordConfirmationValue = passwordConfirmation.value;
        

        if (usernameValue === "") {
            setErrorFor(username, "O nome de usuário é obrigatório.");
        } else {
            setSuccessFor(username);
        }
        if (emailValue === "") {
            setErrorFor(email, "O email é obrigatório.");
        }
        else if (!checkEmail(emailValue)){
            setErrorFor(email, "por favor, insira um email válido.");
        }
        else {
            setSuccessFor(email);
        }

        if (telValue === ""){
            setErrorFor(tel, "O número de telefone é obrigatório.");
        }
        else{
            setSuccessFor(tel);        }
        
        if (passwordValue === "") {
            setErrorFor(password,"A senha é obrigatória.");
        }
        else if (passwordValue.length < 8) {
            setErrorFor(password," A senha precisa ter no mínimo 8 caracteres.");
        }
        else {
            setSuccessFor(password);
    } 
    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatório.");
    }
    else if (passwordConfirmationValue != passwordValue){
        setErrorFor(passwordConfirmation, " As senhas não conferem.");
    }
    else if (passwordConfirmationValue.length < 8) {
        setErrorFor(passwordConfirmation, " A senha preicsa ter nomínimo 8 caracteres");
    }
    else {
        setSuccessFor(passwordConfirmation);
    }

        
    }
    const formControls = form.querySelectorAll(".form-control");

    const formIsvalid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });
    if (formIsvalid) {
        ("A Conta criada com sucesso.");
    }

   

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        small.innerText = message;

        formControl.className = "form-control error";
        
    }
    function setSuccessFor(input) {
        const formControl = input.parentElement;

        formControl.className = "form-control success";
    

      }
     
      
     
      document.getElementById("btnLimpar").addEventListener('click', reset);

      function reset(){

  
          
        if(setErrorFor){
            
            setErrorFor(passwordConfirmation, "");
            setErrorFor(password, "");
            setErrorFor(email, "");
            setErrorFor(username, "");
            setErrorFor(tel, "");

        }else if(setSuccessFor){
            setSuccessFor("");
       
      
        
        
      }}

     
 
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          );
    }
   
   

   
     

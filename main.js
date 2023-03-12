const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// CRIA UMA FORMATAÇÃO PARA O NÚMERO QUE FOR INSERIDO NO INPUT "TELEFONE"
const phoneInput = document.getElementById('telefone');
phoneInput.addEventListener('input', formatPhoneNumber);

function formatPhoneNumber() {
  let phone = phoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2'); // Formata DDD
  phone = phone.replace(/(\d{5})(\d)/, '$1-$2'); // Formata número
  phoneInput.value = phone; // Insere o número formatado no input
}
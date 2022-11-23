export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--ivalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch'
]

const mensagensDeErro = {
    nome:
    {
        valueMissing: 'O campo Nome não pode estar vazio'
    },
    email:
    {
        valueMissing: 'O campo E-mail não pode estar vazio',
        typeMismatch: 'O E-mail digitado não é valido'
    },
    senha:
    {
        valueMissing: 'O campo Senha não pode estar vazio',
        patternMismatch: 'A senha deve conter entre 6 e 12 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número'
    },
    mensagem:
    {
        valueMissing: 'O campo Mensagem não pode estar vazio'
    },
    telefone:
    {
        valueMissing: 'O campo Telefone não pode estar vazio',
        patternMismatch: 'O número de telefone deve conter os dois números de DDD, e os outros 8 ou 9 números do telefone.'
    },
    cadastro_regional:
    {
        valueMissing: 'O campo Cadastro Regional não pode estar vazio',
        patternMismatch: 'O cadastro deve ser digitado da forma correta'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return (mensagem)
}
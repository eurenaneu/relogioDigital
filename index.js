const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(() => {
    let dataAtual = new Date();

    dataAtual.getHours() < 10 ? horas.textContent = "0" + dataAtual.getHours() : horas.textContent = dataAtual.getHours();
    dataAtual.getMinutes() < 10 ? minutos.textContent = "0" + dataAtual.getMinutes() : minutos.textContent = dataAtual.getMinutes();
    dataAtual.getSeconds() < 10 ? segundos.textContent = "0" + dataAtual.getSeconds() : segundos.textContent = dataAtual.getSeconds();
}, 1000);

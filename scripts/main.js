/*var senha = prompt("Bem vindo de volta! Digite a senha:");
if (senha === "1") {
  alert("Acesso permitido!");
} else {
  alert("Senha incorreta, tente novamente");
}*/

/*senha.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
 */ //adicionar currency BRL nos valores
function atualizarRelogio() {
  const agora = new Date();

  const diaSemana = agora.toLocaleDateString("pt-BR", { weekday: "short" });
  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const iso = agora.toISOString();

  const elDia = document.getElementById("dia-semana-hoje");
  elDia.textContent = diaSemana;
  elDia.dateTime = iso;

  const elData = document.getElementById("data-hoje");
  elData.textContent = data;
  elData.dateTime = iso.slice(0, 10);

  const elHora = document.getElementById("hora-hoje");
  elHora.textContent = hora;
  elHora.dateTime = iso;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

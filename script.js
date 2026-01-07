function pagar() {
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value;

  if (!email || !nome) {
    alert("Preencha nome e email para continuar.");
    return;
  }

  // Salva dados localmente (opcional)
  localStorage.setItem("email", email);
  localStorage.setItem("nome", nome);

  window.location.href = "pagamento.html";
}

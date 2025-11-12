async function gerarPeticao() {
  const relato = document.getElementById("relato").value;

  const response = await fetch("/api/gerar-peticao", { // ✅ caminho relativo
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ relato })
  });

  const data = await response.json();
  document.getElementById("resultado").textContent = data.texto;
}

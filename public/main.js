  // Simula carregamento
    window.addEventListener("load", () => {
      const loadingScreen = document.getElementById("loading-screen");
      const mainContent = document.getElementById("main-content");

      // Espera 3 segundos antes de mostrar o conteúdo
      setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
      }, 3000);
    });

    // Exemplo simples de login
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("message");

      if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login realizado com sucesso!";
        // redireciona para página principal
        setTimeout(() => {
          window.location.href = "peticao.html";
        }, 1500);
      } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha inválidos.";
      }
    });



    // CADASTRO ------------------------------
      document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("message");

      if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
      }

      // Exemplo simples de sucesso
      message.style.color = "green";
      message.textContent = "Cadastro realizado com sucesso!";
      
      // Redireciona após 2 segundos
      setTimeout(() => {
        window.location.href = "peticao.html";
      }, 2000);
    });
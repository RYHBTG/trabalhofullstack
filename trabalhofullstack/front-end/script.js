document.getElementById('formEndereco').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const Nome = document.getElementById('nome').value;
  const CPF = document.getElementById('cpf').value;
  const Telefone = document.getElementById('telefone').value;
  
  const Pessoa = {
    Nome,
    CPF,
    Telefone,
  };
  
  console.log(Pessoa);

  try {
    const response = await fetch('http://localhost:3000/pessoas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Pessoa) // Use "Pessoa" em vez de "addressData"
    });
    
    const result = await response.json();
    
    if (response.ok) {
      document.getElementById('message').innerText = 'Pessoa enviada com sucesso!';
      document.getElementById('formEndereco').reset();
    } else {
      document.getElementById('message').innerText = `Erro: ${result.message}`;
    }
  } catch (error) {
    document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
  }
});

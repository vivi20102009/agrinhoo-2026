/**
* Arquivo de lógica interativa para a Cartilha Digital - Agrinho 2026.
* Avalia as ações sustentáveis do agricultor com base em checkboxes.
*/


document.addEventListener('DOMContentLoaded', () => {
   // Captura dos elementos necessários do HTML através do DOM
   const botaoCalcular = document.getElementById('btn-diagnostico');
   const itensChecklist = document.querySelectorAll('.calc-item');
   const containerResultado = document.getElementById('resultado-container');
   const tituloResultado = document.getElementById('resultado-titulo');
   const textoResultado = document.getElementById('resultado-texto');


   // Escutador de clique para processar as escolhas do usuário
   botaoCalcular.addEventListener('click', () => {
       let pontuacaoTotal = 0;


       // Percorre cada opção e soma o valor caso ela esteja selecionada
       itensChecklist.forEach(item => {
           if (item.checked) {
               pontuacaoTotal += parseInt(item.value);
           }
       });


       // Remove a classe 'hidden' para exibir o bloco de resposta na tela
       containerResultado.classList.remove('hidden');


       // Estrutura condicional para definir o feedback com base na pontuação
       if (pontuacaoTotal === 0) {
           tituloResultado.textContent = "🔍 Alerta de Manejo Prévio";
           textoResultado.textContent = "Sua propriedade ainda não adotou nenhuma dessas medidas simples. Comece cobrindo o solo ou guardando água da chuva para notar economias imediatas!";
           containerResultado.style.borderColor = "#e63946"; // Cor de alerta
       } else if (pontuacaoTotal <= 50) {
           tituloResultado.textContent = "🌱 Bom Começo!";
           textoResultado.textContent = "Você já está no caminho da conservação! Implementar mais uma ação de irrigação ou rotação fará seu solo ficar ainda mais produtivo e protegido.";
           containerResultado.style.borderColor = "#e9c46a"; // Cor intermediária
       } else if (pontuacaoTotal <= 75) {
           tituloResultado.textContent = "🌿 Agro Forte!";
           textoResultado.textContent = "Parabéns! Sua gestão respeita muito o meio ambiente. Você aplica a maioria das boas práticas da nossa cartilha.";
           containerResultado.style.borderColor = "#a7c957"; // Cor positiva
       } else {
           tituloResultado.textContent = "🏆 Campeão da Sustentabilidade!";
           textoResultado.textContent = "Excelente! Sua propriedade é um modelo real para o Agrinho 2026. Produção otimizada, desperdício zero de água e solo totalmente protegido.";
           containerResultado.style.borderColor = "#2d6a4f"; // Cor excelente
       }


       // Rola a página suavemente até o container de resultado para facilitar a leitura no celular
       containerResultado.scrollIntoView({ behavior: 'smooth' });
   });
});




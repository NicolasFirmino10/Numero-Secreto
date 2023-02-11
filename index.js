
function iniciarJogo() {
    var numeroMax = prompt("Digite o numero maximo:")
          var numeroSecreto = 
      parseInt(Math.random()*numeroMax)
      var tentativa = 0;
        while(chute != numeroSecreto){
         
          if(tentativa != 0){
            alert('Você já fez ' + tentativa + ' tentativas!')
          }
         
          var chute = prompt('digite um número entre 1 e ' + numeroMax);
         
            if(chute == numeroSecreto){
              alert("ACERTOU!!!")
            } else if (chute < numeroSecreto){
              alert('Errou... o número secreto é MAIOR que ' + chute)
            } else if (chute > numeroSecreto){
              alert('Errou... o número secreto é MENOR que ' + chute)
            }
            tentativa += 1;
           
          }
         
    
        }
  
    
        var listaDeJogadores = [];
        var elementoTabela = document.getElementById("tabelaJogadores");
        
        
        function exibirNaTela() {
          elementoTabela.innerHTML = "";
          listaDeJogadores.forEach((jogador, index) => {
            console.log(jogador);
            elementoTabela.innerHTML += `
                <tr>
                    <td>${jogador.nome}</td>                
                    <td>${jogador.pontos}</td>
                    <td><button onClick="adicionarPontos(${index})">Pontos</button></td>
                    <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
                    <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
                  </tr>
            `;
          });
        }
        
        function criarJogador() {
          var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
          listaDeJogadores.push({
            nome: nomeNovoJogador,
            pontos: 0
          });
          document.getElementById("campoNomeJogador").value = "";
          exibirNaTela();
        }
        
        
        
        function adicionarPontos(index) {
          listaDeJogadores[index].empate++;
          listaDeJogadores[index].pontos++;
          if (listaDeJogadores[index].pontos >= 10) {
            alert(listaDeJogadores[index].nome + ' GANHOU A PARTIDA!!!')
          }
          exibirNaTela();
        }
        
        
        
        function limparPontuacaoJogador(index) {
          listaDeJogadores[index].vitoria = 0;
          listaDeJogadores[index].empate = 0;
          listaDeJogadores[index].derrota = 0;
          listaDeJogadores[index].pontos = 0;
          exibirNaTela();
        }
        
        function removerJogador(index) {
          listaDeJogadores.splice(index, 1);
          exibirNaTela();
        }
        
        function apagarJogadores() {
          listaDeJogadores = [];
          exibirNaTela();
        }
        
function calculadora(){
    const operacao = Number(prompt('Escolha uma operacão:\n 1 - Soma (+)\n 2 - Subtracão (-)\n 3 - Multiplicacão (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciacão (**)'));

    //validar a variável operacao //nao pode ser string e nem maior que 7
    if(!operacao || operacao >= 7){
        alert('Erro - operacão inválida!')
    }else{
        //iniciar as variáveis
        let n1 = Number(prompt('Insira o primeiro valor:')); //Number - serve para converter a string para um número 
        let n2 = Number(prompt('Insira o segundo valor:')); 
        let resultado;
        
        //validar as variaveis
        if(!n1 || !n2){
            alert('Erro - parâmetros inválidos!')
        }else{
            //funcões
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            
            function novaOperacao(){
                let opcao = prompt("Deseja fazer outra operacão? \n 1- Sim \n 2- Não");
                
                if(opcao == 1){
                    calculadora();
                }else if (opcao == 2){
                    alert("Até mais!")
                }else{
                    alert("Digite uma opcão válida.")
                    novaOperacao();
                }
            }
        }

        //fazer a verificacao de operacoes
        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }       
    }    
}

calculadora();
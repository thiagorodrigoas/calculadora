export default function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*';   
    function calcular (numero1, numero2, operacao){
        let resultado;
        switch (operacao){
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
                break;
        }
        return resultado;
    }

    function ConcatenaNumero (numAtual, numConcat) {
        //Caso contenha apenas 0 ou null, reinicia o valor
        if (numAtual === '0' || numAtual === null) { 
            numAtual = '';
        };

        //Primeiro digito for '.' concatena 0 ao ponto
        if(numConcat==='.' && numAtual=== ''){
            numAtual = '0.';
        }

        //Caso '.' digitado e já conhena um ponto, apenas retornar (indexOf retorna a posição da string do parametro se nao existe retorna -1)
        if(numConcat ==='.' && numAtual.indexOf('.')> -1){
            return numAtual;
        }
        
        return numAtual + numConcat;

    }

    return [
        calcular,
        ConcatenaNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
        ];
}
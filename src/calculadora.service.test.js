import React from 'react';
import ReactDOM from 'react-dom';

import CalculadoraService from './Calculadora.service';


//Descrição de um teste de um servço
describe('Teste do Calculadora service', () => {
//Coloca dentro de uma variável uma função do serviço
    const [calcular, ConcatenaNumero, SOMA,SUBTRACAO,DIVISAO,MULTIPLICACAO] = CalculadoraService();

//Testa uma situação da função 
    it('Deve garantir que 1 + 4 = 5.', ()=> {
//Chama a função de calcular passando os parametros e expect(o valor esperado) toEqual(ser igual a '5 no caso')
        let soma = calcular(1,4,SOMA);
        expect(soma).toEqual(5);
    });
    it('Deve garantir que 1 - 4 = -3.', ()=> {
        let subtracao = calcular(1,4,SUBTRACAO);
        expect(subtracao).toEqual(-3);
    })
    it('Deve garantir que 1 / 4 = 0,25.', ()=> {
        let divisao = calcular(1,4,DIVISAO);
        expect(divisao).toEqual(0.25);
    })

    it('Deve garantir que 1 * 4 = 4.', ()=> {
        let multiplicacao = calcular(1,4,MULTIPLICACAO);
        expect(multiplicacao).toEqual(4);
    })

    it('Deve retornar 0 para operação inválida.', ()=> {
        let operacaoInvalida = calcular(1,4,'%')
        expect(operacaoInvalida).toEqual(0)
    })
});
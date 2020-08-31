import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste da CalculadoraService', () => {

    const [calcular, SOMA] = CalculadoraService();

    it('Deve garantir que 1 + 4 = 5.',() => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('Deve garantir que 1-4 = -3', () => {
        let subtracao = calcular(1,4, '-');
        expect(subtracao).toEqual(-3);
    })

});
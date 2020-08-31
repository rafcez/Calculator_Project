function CalculadoraService(){

    const SOMA = '+';

    function calcular(numero1, numero2, operacao){
        let resultado;
        

        switch(operacao){
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '/':
                resultado = numero1 / numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
        }
    }

    return [
        calcular,
        SOMA
    ];
}

export default CalculadoraService;
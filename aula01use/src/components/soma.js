import React,{useState} from "react";

function CalculadoraDesoma(){
    const[numero1,setNumero1]=useState('');
    const[numero2,setNumero2]=useState('');
    const[soma,setSoma]=useState('null');
    const[menos,setmenos]=useState('null');

    const CalculadoraDesoma = () => {
        //Converter os valores para numeros e calcular a soma 
        const resultado = Number(numero1)+ Number(numero2);
        setSoma(resultado);

        const CalculadoraDemenos = () => {
            //Converter os valores para numeros e calcular a soma 
            const resultado = Number(numero1)- Number(numero2);
            setSoma(resultado);
    };
    return (
        <div>
            <input
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder="Digite o primeiro numero"
            />
            <input
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder="Digite o segundo numero"
            />
            <button onClick={CalculadoraDesoma}>Calcular Soma</button>
            {soma !== null && <p>resultado: {soma}</p>}
        </div>
        
        <div>
        <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        placeholder="Digite o primeiro numero"
        />
        <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        placeholder="Digite o segundo numero"
        />
        <button onClick={CalculadoraDemenos}>Calcular menos</button>
        {menos !== null && <p>resultado: {menos}</p>}
    </div>
    );
}
export default CalculadoraDesoma;
export default CalculadoraDemenos;
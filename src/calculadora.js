import React, { useState } from 'react';
import './calculadora.css';
import CalculadoraService from './Calculadora.service';

import {
  Jumbotron, Container, Row, Col, Button, Form
} from 'react-bootstrap'

function Calculadora() {

  const [calcular, ConcatenaNumero, SOMA,SUBTRACAO,DIVISAO,MULTIPLICACAO] = CalculadoraService();
  
  const [txtNumeros, setTxtNumeros] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function AdicionarNumero(numero){
    let resultado;

    if(operacao === null){
      resultado = ConcatenaNumero(numero1, numero);
      setNumero1(resultado);
    }
    else{
      resultado = ConcatenaNumero(numero2, numero);
      setNumero2(resultado);
    }
     setTxtNumeros(resultado);
  }

  function DefinirOperacao(op){
    //Define operação caso null
    if(operacao === null){
      setOperacao(op);
      return;
    }
    //Numero2 diferente de null, realiza o calculo da operação
    if(numero2 !== null){
      const resultado = calcular(parseFloat(numero1),parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoCalcular(){
    if(numero2 === null)
      return;
    
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    setTxtNumeros(resultado);
  }

  function Limpar (){
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperacao(null);
  }

  return (
    <Jumbotron style={{
      background: 'transparente !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin:'5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant = "danger"
            onClick={Limpar}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type='text'
            name="txtNumeros"
            className="text-right"
            readOnly="readonly"
            value={txtNumeros}
            data-testid= "txtNumeros"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('7')}>7</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('8')}>8</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('9')}>9</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={()=> DefinirOperacao(DIVISAO)}>/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('4')}>4</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('5')}>5</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('6')}>6</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={()=> DefinirOperacao(MULTIPLICACAO)}>*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('1')}>1</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('2')}>2</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('3')}>3</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={()=> DefinirOperacao(SUBTRACAO)}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('0')}>0</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=> AdicionarNumero('.')}>.</Button>
          </Col>
          <Col>
            <Button variant="success"
            onClick={acaoCalcular}>=</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={()=> DefinirOperacao(SOMA)}>+</Button>
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  );
}

export default Calculadora;

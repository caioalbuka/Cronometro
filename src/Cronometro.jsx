import React, { useEffect, useState } from "react";

import "./App.css";

function Cronometro() {
  //Toggle - Alternar - Ligar/Desligar(True/False)
  const [iniciar, setIniciar] = useState(false);
  //Cronometro simples
  const [tempoTotal, setTempoTotal] = useState(0);
  const minuto = Math.round(tempoTotal / 60);
  const segundos = tempoTotal % 60;
  //quando o useEffect dispara?
  //quando renderiza o componente ele dispara 1 vez.

  useEffect(() => {
    if (iniciar) {
      setTimeout(() => {
        setTempoTotal(tempoTotal + 1);
      }, 1000);
    }
  }, [tempoTotal, iniciar]);

  return (
    <div className="container">
      <div className="title">Cronômetro</div>

      <div className="relogios">
        <span>{minuto.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{segundos.toString().padStart(2, "0")}</span>
      </div>

      <div className="botoes">
        <button
          className="iniciar"
          type="button"
          onClick={() => {
            setIniciar(true);
          }}
        >
          Iniciar
        </button>

        <button
          className="parar"
          type="button"
          onClick={() => {
            alert(tempoTotal + " Segundos");
            setIniciar(false);
          }}
        >
          Parar
        </button>

        <button
          className="resetar"
          type="button"
          onClick={() => {
            setIniciar(false);
            setTempoTotal(0);
          }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}

export default Cronometro;

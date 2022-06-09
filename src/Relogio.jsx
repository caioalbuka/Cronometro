import React, { useEffect, useState } from "react";

import "./App.css";

function Relogio() {
  //True = Liga / False = Desliga
  const [liga, setLiga] = useState(false);
  //True = Números crescentes / False = Números decrescentes
  const [sobe, setSobe] = useState(false);
  //Tempo do Despertador
  const [tempoTotal, setTempoTotal] = useState(0);
  const [reset, setReset] = useState(false);
  //p: quando o useEffect dispara?
  //r: quando renderiza o componente ele dispara 1 vez.
  // function somar(){ if (sobe) {
  //       setTimeout(() => {
  //         if (!liga) {
  //           setLiga(false);
  //           setSobe(false);
  //           setTempoTotal(0);
  //           return;
  //         }
  //         if (reset) {
  //           setTempoTotal(0);
  //           setReset(false);
  //           setLiga(false);
  //           return;
  //         } else {
  //           setTempoTotal(tempoTotal + 1);
  //           return;
  //         }
  //       }, 1000);
  //       console.log("a ", tempoTotal);

  // }
  function testando() {
    if (reset) {
      setTempoTotal(0);
      setReset(false);
      return;
    }
    if (tempoTotal !== 0 && liga) {
      setTempoTotal(tempoTotal - 1);

      return;
    }
    if (tempoTotal === 0 && liga) {
      setLiga(false);
      alert("O Tempo ACABOU para você");
      return;
    }
  }

  const subtrair = setTimeout(testando, 1000);

  useEffect(() => {
    if (sobe) {
      setTimeout(() => {
        if (!liga) {
          setLiga(false);
          setSobe(false);
          setTempoTotal(0);
          return;
        }
        if (reset) {
          setTempoTotal(0);
          setReset(false);
          setLiga(false);
          return;
        } else {
          setTempoTotal(tempoTotal + 1);
          return;
        }
      }, 1000);
      console.log("a ", tempoTotal);
    } else {
      if (!sobe) {
        subtrair;
      }
      // if (!sobe) {
      //   setTimeout(() => {
      //     if (reset) {
      //       setTempoTotal(0);
      //       setReset(false);
      //       return;
      //     }
      //     if (tempoTotal !== 0 && liga) {
      //       setTempoTotal(tempoTotal - 1);
      //       console.log("c", tempoTotal);
      //       return;
      //     }
      //     if (tempoTotal === 0 && liga) {
      //       setLiga(false);
      //       alert("O Tempo ACABOU para você");
      //       return;
      //     }
      //     console.log("b ", tempoTotal);
      //   }, 1000);
      // }
    }
  }, [tempoTotal, liga]);
  console.log(
    "Ligado",
    liga,
    " Sobe",
    sobe,
    " Tempo",
    tempoTotal,
    " Reset",
    reset
  );

  return (
    <div className="container">
      <div className="title">Despertador</div>

      <div>
        <input
          className="inputMinuto"
          type="number"
          value={tempoTotal.toString()}
          onChange={(e) => {
            setTempoTotal(e.target.value);
          }}
        />
      </div>
      <div className="botoes">
        <button
          className="iniciar"
          type="button"
          onClick={() => {
            if (tempoTotal === 0) {
              setSobe(true);
            }
            setLiga(true);
          }}
        >
          Iniciar
        </button>

        <button
          className="parar"
          type="button"
          onClick={() => {
            setLiga(false);
            setSobe(false);
          }}
        >
          Parar
        </button>

        <button
          className="resetar"
          type="button"
          onClick={() => {
            setReset(true);
            clearTimeout(subtrair);
            return;
          }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}

export default Relogio;

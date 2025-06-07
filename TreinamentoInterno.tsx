import React, { useState } from 'react';
import './TreinamentoInterno.css';

const treinamentos = [
  { id: 1, titulo: "O que não pode ser informado ao cliente", setor: "atendimento", arquivo: "3CX.pdf" },
  { id: 2, titulo: "Como realiza migração de IP", setor: "redes", arquivo: "3CX.pdf" },
  { id: 3, titulo: "Esquema de ligação automação", setor: "automação", arquivo: "automacao.pdf" },
];
// Simulação do setor do usuário
const setorUsuario = "atendimento";

const TreinamentoInterno = () => {
  const [treinamentoSelecionado, setTreinamentoSelecionado] = useState<any>(null);

  // Filtra os treinamentos conforme o setor do usuário
  const treinamentosFiltrados = treinamentos.filter(t => t.setor === setorUsuario);

  const abrirTreinamento = (treinamento: any) => {
    setTreinamentoSelecionado(treinamento);
  };

  const fecharPopup = () => {
    setTreinamentoSelecionado(null);
  };


  return (
    <div className="treinamento-container">
      <h1>Treinamentos Internos</h1>
      <div className="treinamento-grid">
        {treinamentos.map(t => (
          <div key={t.id} className="treinamento-card" onClick={() => setTreinamentoSelecionado(t)}>
            <h3>{t.titulo}</h3>
            <p>{t.descricao}</p>
          </div>
        ))}
      </div>

      {treinamentoSelecionado && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setTreinamentoSelecionado(null)}>&times;</span>
            <h2>{treinamentoSelecionado.titulo}</h2>
            <p>{treinamentoSelecionado.descricao}</p>
            <div className="botoes">
              {treinamentoSelecionado.pdfDisponivel && userCanDownload && (
                <button>Baixar PDF</button>
              )}
              <button>Visualizar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default TreinamentoInterno;

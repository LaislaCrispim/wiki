import React, { useState } from 'react';
import './TreinamentoExterno.css';

interface Treinamento {
  id: number;
  titulo: string;
  url: string;
}

const treinamentos: Treinamento[] = [
  {
    id: 1,
    titulo: 'Treinamento - Atendimento Externo',
    url: '/pdfs/3CX.pdf',
  },
  {
    id: 2,
    titulo: 'Treinamento - Segurança de Campo',
    url: '/pdfs/3CX.pdf',
  },
  {
    id: 3,
    titulo: 'Treinamento - Normas Técnicas',
    url: '/pdfs/3CX.pdf',
  },
  // Adicione mais treinamentos conforme necessário
];

export default function TreinamentoExterno() {
  const [pdfSelecionado, setPdfSelecionado] = useState<Treinamento | null>(null);

  return (
    <div className="treinamento-container">
      <h2>Treinamentos Externos</h2>
      <div className="grid-container">
        {treinamentos.map((treino) => (
          <div
            key={treino.id}
            className="card"
            onClick={() => setPdfSelecionado(treino)}
          >
            <h3>{treino.titulo}</h3>
          </div>
        ))}
      </div>

      {pdfSelecionado && (
        <div className="modal">
          <div className="modal-content">
            <button className="fechar" onClick={() => setPdfSelecionado(null)}>
              X
            </button>
            <iframe
              src={`${pdfSelecionado.url}#toolbar=0`}
              width="100%"
              height="100%"
              title="Visualizador de PDF"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import './Duvidas.css';

function Duvidas() {
  const [assunto, setAssunto] = useState('');
  const [duvida, setDuvida] = useState('');
  const [setor, setSetor] = useState('');
  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!assunto) {
      alert('Por favor, preencha o assunto.');
      return;
    }

    const formData = new FormData();
    formData.append('assunto', assunto);
    formData.append('duvida', duvida);
    formData.append('setor', setor);
    if (arquivo) {
      formData.append('arquivo', arquivo);
    }

    console.log({
      assunto,
      duvida,
      setor,
      arquivo
    });

    // Reset
    setAssunto('');
    setDuvida('');
    setSetor('');
    setArquivo(null);
  };

  return (
    <div className="duvidas-container">
      <h2>Envie sua dúvida</h2>
      <form onSubmit={handleSubmit} className="duvidas-form">
        <label>
          Assunto*:
          <input
            type="text"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            required
            placeholder="Identifique o assunto da dúvida"
          />
        </label>

        <label>
          Descrição da dúvida:
          <textarea
            placeholder="Escreva aqui sua dúvida..."
            value={duvida}
            onChange={(e) => setDuvida(e.target.value)}
            required
          />
        </label>

        <label>
          Setor:
          <select
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
            required
          >
            <option value="">Selecione o setor</option>
            <option value="Integração">Integração</option>
            <option value="Monitoramento">Monitoramento</option>
            <option value="Atendimento">Atendimento</option>
            <option value="Automação">Automação</option>
            <option value="Gestão">Gestão</option>
          </select>
        </label>

        <label>
          Anexar arquivo (opcional):
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file && file.size > 5 * 1024 * 1024) {
                alert('Arquivo muito grande! Máximo de 5MB.');
                e.target.value = ''; // limpa o input
                setArquivo(null);
              } else {
                setArquivo(file || null);
              }
            }}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Duvidas;

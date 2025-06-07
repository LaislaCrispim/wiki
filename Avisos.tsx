function Avisos() {
  const avisos = [
    "Nova política interna disponível no portal.",
    "Reunião geral na próxima sexta-feira.",
  ];

  return (
    <div>
      <h1>Avisos Internos</h1>
      {avisos.map((a, idx) => (
        <div key={idx} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
          {a}
        </div>
      ))}
    </div>
  );
}

export default Avisos;

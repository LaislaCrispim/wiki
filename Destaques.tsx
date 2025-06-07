function Destaques() {
  const destaques = [
    "Maria Santos - Atendimento destaque da semana.",
    "Equipe TI - Sucesso na implementação do novo sistema.",
  ];

  return (
    <div>
      <h1>Destaques da Semana</h1>
      {destaques.map((d, idx) => (
        <div key={idx} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
          {d}
        </div>
      ))}
    </div>
  );
}

export default Destaques;

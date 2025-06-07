function Recrutamento() {
  const posts = [
    "Mutirão dia 10/06 na unidade A.",
    "Precisamos de voluntários para o mutirão do dia 20/06.",
  ];

  return (
    <div>
      <h1>Recrutamento para Mutirão</h1>
      {posts.map((p, idx) => (
        <div key={idx} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
          {p}
        </div>
      ))}
    </div>
  );
}

export default Recrutamento;

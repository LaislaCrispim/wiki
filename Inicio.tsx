import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import PostFeed from '../components/PostFeed';
import EnqueteForm from '../components/EnqueteForm';
import '../styles/Inicio.css';

const Inicio: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // Aqui ficam apenas os aprovados
  const [pendentes, setPendentes] = useState<any[]>([]); // Postagens aguardando aprovação

  const handleNewPost = (post: any) => {
    setPendentes(prev => [...prev, post]);
  };

  const aprovarPost = (index: number) => {
    const aprovado = pendentes[index];
    setPendentes(p => p.filter((_, i) => i !== index));
    setPosts(prev => [aprovado, ...prev]);
  };

  return (
    <div className="inicio-container">
      <h1>Feed de Comunicações</h1>
      <PostForm onPostSubmit={handleNewPost} />
      <EnqueteForm />
      
      {pendentes.length > 0 && (
        <div className="pendentes-section">
          <h2>Postagens Aguardando Aprovação</h2>
          {pendentes.map((post, index) => (
            <div key={index} className="post-pendente">
              <p>{post.texto}</p>
              {post.imagem && <img src={post.imagem} alt="Prévia" />}
              <button onClick={() => aprovarPost(index)}>Aprovar</button>
            </div>
          ))}
        </div>
      )}

      <PostFeed posts={posts} />
    </div>
  );
};

export default Inicio;

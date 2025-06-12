import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

interface Post {
  id: number;
  userId: string;
  userName: string;
  userPhoto: string;
  text: string;
  image: string | null;
  likes: number;
  category: string;
  approved: boolean;
}

const Inicio: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const navigate = useNavigate();

  const categorias = ['Recrutamento para mutirão', 'Marketing', 'Avisos'];

  const currentUser = {
    id: 'user123',
    name: 'Fulano de Tal',
    photo: '/default-user.png',
  };

  const handlePost = (categoria: string) => {
    if (!postText && !imageFile) return;

    const newPost: Post = {
      id: Date.now(),
      userId: currentUser.id,
      userName: currentUser.name,
      userPhoto: currentUser.photo,
      text: postText,
      image: imageFile ? URL.createObjectURL(imageFile) : null,
      likes: 0,
      category: categoria,
      approved: false,
    };

    setPosts([newPost, ...posts]);
    setPostText('');
    setImageFile(null);
  };

  const handleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const filteredPosts =
    selectedCategory === 'todos'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="inicio-container">
      <aside className="menu-lateral">
        <ul>
          <li onClick={() => setSelectedCategory('todos')}>Todos</li>
          {categorias.map((cat) => (
            <li key={cat} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <main className="conteudo-principal">
        <div className="campo-postagem">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Escreva sua postagem..."
          />
          <div className="botoes">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) setImageFile(e.target.files[0]);
              }}
            />
            {categorias.map((cat) => (
              <button key={cat} onClick={() => handlePost(cat)}>
                Postar em {cat}
              </button>
            ))}
            <button className="criar-enquete">Criar Enquete</button>
          </div>
        </div>

        <div className="feed-postagens">
          {filteredPosts.map((post) => (
            <div key={post.id} className="postagem">
              <div
                className="autor"
                onClick={() => navigate(`/perfil/${post.userId}`)}
              >
                <img
                  src={post.userPhoto}
                  alt="Foto do usuário"
                  className="autor-foto"
                />
                <span className="autor-nome">{post.userName}</span>
              </div>

              <p>{post.text}</p>

              {post.image && (
                <img
                  src={post.image}
                  alt="Imagem"
                  className="postagem-imagem"
                />
              )}

              {!post.approved && (
                <span className="pendente">Aguardando aprovação</span>
              )}

              <div className="like-section">
                <button
                  className="like-button"
                  onClick={() => handleLike(post.id)}
                >
                  ❤️ Curtir ({post.likes})
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Inicio;

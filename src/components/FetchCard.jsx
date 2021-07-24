import React, { useCallback, useEffect, useState } from "react";
import getUser from "../helpers/getUser";
import getPosts from "../helpers/getPosts";
import IsLoading from "../IsLoading";

/* const usuarioInicial = {
  name: "",
  email: "",
};

const postsInicial = [
  { id: "1", title: "lorem ipsum" },
  { id: "2", title: "lorem ipsum #2" },
]; */

function FetchCard() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const actualizaUsuario = useCallback(
    () => {
      setIsLoading(true);
      getUser()
        .then((newUser) => {
          setUser(newUser);
          setIsLoading(false);
        });
    },
    [],
  )

  const actualizaPosts = useCallback(
    (userId) => {
      getPosts(userId).then((newPosts) => setPosts(newPosts));
    },
    [],
  )

  useEffect(() => {
    actualizaUsuario();
  }, [actualizaUsuario]);

  useEffect(() => {
    user && actualizaPosts(user?.id);
  }, [user, actualizaPosts])

  return ( 
    
     (isLoading) ?
      <IsLoading /> :
    (<div>
      <p>nombre: {user.name}</p>
      <p>correo: {user.email}</p>
      <h3>Posts</h3>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      <button onClick={actualizaUsuario}>Cambia usuario</button>
    </div>)
    )
  
}

export default FetchCard;

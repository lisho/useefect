
async function getUser() {
   
    const usuarioAleatorioId = Math.floor(Math.random()*10)+1;

    const url = 'https://jsonplaceholder.typicode.com/users/'+usuarioAleatorioId;
    const res = await fetch(url);
    const user = await res.json();

    return user;
   
}

export default getUser

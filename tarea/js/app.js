async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Pedir las publicaciones del usuario 1
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1/error",
    );
    // Comprobar si la petición fue exitosa
    if (!res.ok) {
      throw new Error("Error al obtener las publicaciones");
    }
    // 2. Convertir la respuesta a JSON
    const posts = await res.json();
    // 3. Mostrar los títulos en la lista
    lista.innerHTML = posts.map((post) => `<li>${post.title}</li>`).join("");
  } catch (error) {
    // 4. Mostrar el mensaje si ocurre un error
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}
mostrarPosts();

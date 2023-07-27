function createPost(title, body) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  const data = JSON.stringify({ title: title, body: body });

  fetch(url, {
    method: "POST",
    headers: headers,
    body: data,
  })
    .then((response) => response.json())
    .then((post) => {
      // добавляем созданный пост в DOM
      const postElement = document.createElement("div");
      postElement.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}</p>`;
      document.getElementById("postsContainer").appendChild(postElement);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    createPost(title, body);

    // очищаем поля формы после добавления поста
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
  });

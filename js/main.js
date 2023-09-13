const postInput = document.getElementById('postInput');
const searchBtn = document.getElementById('searchBtn');
const postContainer = document.getElementById('postContainer');

searchBtn.addEventListener("click", () => {
    const postId = postInput.value;

    if (postId < 1 || postId > 100) {
        alert("ID тільки від 1 до 100");
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Помилка: ${response.status}`);
        }
        return response.json();
    })
    
    .then((post) => {
        postContainer.innerHTML = `
            <h2>Пост №${post.id}</h2>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button id="commentsBtn">Отримати коментарі</button>
        `;
    })
    .catch((error) => {
        console.error("Помилка при запиті поста:", error);
        postContainer.innerHTML = "Помилка при запиті поста.";
    });
});
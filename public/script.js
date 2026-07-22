// Day 4 - Form Validation

const blogForm = document.querySelector("form");

blogForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();
    const content = document.getElementById("content").value.trim();
    const confirm = document.getElementById("confirm").checked;

    if (
        title === "" ||
        author === "" ||
        category === "" ||
        description === "" ||
        content === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    if (!confirm) {
        alert("Please confirm before publishing.");
        return;
    }
const blog = {
    title,
    author,
    category,
    description,
    content
};

fetch("/blogs", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
})
.then(response => response.json())
.then(data => {
    alert(data.message);
    blogForm.reset();
})
.catch(error => {
    console.error(error);
    alert("Something went wrong!");
});
});
// Day 7 - Display Blogs

const blogList = document.getElementById("blogList");

if (blogList) {

    const blogs = [
        {
            title: "Getting Started with Express.js",
            author: "Vedika",
            category: "Programming"
        }
    ];

    blogs.forEach(blog => {

        blogList.innerHTML += `
            <div class="card">
                <div class="card-content">
                    <span>${blog.category}</span>
                    <h3>${blog.title}</h3>
                    <p>Author: ${blog.author}</p>
                    <button>Read More</button>
                </div>
            </div>
        `;

    });

}
// Day 4 - Form Validation
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");
if (blogId) {
    document.querySelector("button[type='submit']").textContent = "Update Blog";
}

console.log("Blog ID:", blogId);
if (blogId) {

    fetch("/blogs")
        .then(response => response.json())
        .then(blogs => {

            const blog = blogs.find(b => b.id == blogId);

            if (blog) {

                document.getElementById("title").value = blog.title;
                document.getElementById("author").value = blog.author;
                document.getElementById("category").value = blog.category;
                document.getElementById("description").value = blog.description;
                document.getElementById("content").value = blog.content;

            }

        });

}

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

const url = blogId ? `/blogs/${blogId}` : "/blogs";
const method = blogId ? "PUT" : "POST";

fetch(url, {
    method: method,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
})
.then(response => response.json())
.then(data => {

    alert(data.message);

    blogForm.reset();

    window.location.href = "index.html";

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
        id: 1,
        title: "Getting Started with Express.js",
        author: "Vedika",
        category: "Programming",
        content: "This is my first blog."
    }
];
blogs.forEach(blog => {
    blogList.innerHTML += `
        <div class="blog-card">
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>

            <button onclick="editBlog(${blog.id})">Edit</button>
            <button onclick="deleteBlog(${blog.id})">Delete</button>
        </div>
    `;
});

}
async function deleteBlog(id) {
    await fetch(`/blogs/${id}`, {
        method: "DELETE"
    });

    loadBlogs();
}
function editBlog(id) {
    alert("Edit button clicked for Blog ID: " + id);
}
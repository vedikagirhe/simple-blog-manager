const blogList = document.getElementById("blogList");

fetch("/blogs")
.then(response => response.json())
.then(blogs => {

    blogList.innerHTML = "";

    blogs.forEach(blog => {

        blogList.innerHTML += `
            <div class="card">

                <div class="card-content">

                    <span>${blog.category}</span>

                    <h3>${blog.title}</h3>

                    <p>${blog.description}</p>

                    <p><strong>Author:</strong> ${blog.author}</p>

                    <button>Read More</button>

<button onclick="deleteBlog(${blog.id})" class="delete-btn">
    Delete
</button>

                </div>

            </div>
        `;

    });

});
async function deleteBlog(id) {

    const response = await fetch(`/blogs/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        location.reload();
    } else {
        alert("Failed to delete blog.");
    }

}
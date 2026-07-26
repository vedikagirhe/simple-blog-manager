const blogList = document.getElementById("blogList");
blogList.innerHTML = `
    <h3 style="text-align:center;">
        Loading blogs...
    </h3>
`;

fetch("/blogs")
.then(response => response.json())
.then(blogs => {

    if (blogs.length === 0) {

        blogList.innerHTML = `
            <div style="text-align:center; padding:40px;">
                <h2>No Blogs Available</h2>
                <p>Be the first to publish a blog!</p>
            </div>
        `;

        return;
    }

    blogList.innerHTML = "";

    blogs.forEach(blog => {

        blogList.innerHTML += `
            <div class="card">

                <div class="card-content">

                    <span>${blog.category}</span>

<h3>${blog.title}</h3>

<p>${blog.description}</p>

<p><strong>Author:</strong> ${blog.author}</p>

<hr>

                    <button>Read More</button>

                    <button onclick="editBlog(${blog.id})" class="edit-btn">
                        Edit
                    </button>

                    <button onclick="deleteBlog(${blog.id})" class="delete-btn">
                        Delete
                    </button>

                </div>

            </div>
        `;

    });

})
.catch(error => {

    console.error(error);

    blogList.innerHTML = `
        <div style="text-align:center; padding:40px;">
            <h2>⚠ Unable to load blogs</h2>
            <p>Please try again later.</p>
        </div>
    `;

});
async function deleteBlog(id) {

    const confirmDelete = confirm("Are you sure you want to delete this blog?");

    if (!confirmDelete) {
        return;
    }

    const response = await fetch(`/blogs/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert("Blog deleted successfully!");
        location.reload();
    } else {
        alert("Failed to delete blog.");
    }

}
function editBlog(id) {

    window.location.href = `add-blog.html?id=${id}`;

}
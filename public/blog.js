const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

const blogDetails = document.getElementById("blogDetails");

fetch("/blogs")
    .then(response => response.json())
    .then(blogs => {

        const blog = blogs.find(b => b.id == blogId);

        if (!blog) {
            blogDetails.innerHTML = `
                <h2 style="text-align:center;">Blog Not Found</h2>
            `;
            return;
        }

        blogDetails.innerHTML = `
            <img src="${blog.image || 'images/default-blog.jpg'}" alt="${blog.title}">

            <h1>${blog.title}</h1>

            <p><strong>Category:</strong> ${blog.category}</p>

            <p><strong>Author:</strong> ${blog.author}</p>

            <p><strong>Description:</strong> ${blog.description}</p>

            <hr>

            <p>${blog.content}</p>

            <a href="index.html" class="back-btn">← Back to Home</a>
        `;

    })
    .catch(error => {
        console.error(error);

        blogDetails.innerHTML = `
            <h2 style="text-align:center;">Unable to load blog.</h2>
        `;
    });
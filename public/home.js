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

                </div>

            </div>
        `;

    });

});
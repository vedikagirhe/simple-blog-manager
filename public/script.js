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

    alert("Blog Published Successfully!");

    blogForm.reset();

});
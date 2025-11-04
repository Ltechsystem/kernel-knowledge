const headerIds = ["home", "articles", "about"];

headerIds.forEach(headerId => {
    const link = document.getElementById(headerId);
    if (link) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            if (headerId === "home") {
                window.location.href="../html/home.html";
            } if (headerId === "articles") {
                window.location.href="../html/articles.html";
            } if (headerId === "about") {
                window.location.href="../html/about.html";
            }
        })
    }
})
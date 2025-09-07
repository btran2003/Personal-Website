/*  Dynamic Navbar
    Grabs navbar.html and drops into #navbar
*/
/*
document.addEventListener("DOMContentLoaded", function(){
    // Detect if we're on GitHub Pages or local
    const isGitHubPages = window.location.hostname.includes('github.io');
    const basePath = isGitHubPages ? '/Personal-Website/' : '/';
    
    fetch(basePath + "partials/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        
        //highlight current page link
        const links = document.querySelectorAll("#navbar a");
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });
    }) 
    .catch(error => console.error("Error loading navbar:", error));
}); */
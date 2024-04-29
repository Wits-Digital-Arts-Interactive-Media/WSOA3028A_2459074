// Attach an event listener to the window.onload event
window.onload = function() {
    // Function to create and append navigation elements
    function createNavigation() {
        const nav = document.getElementById('navList');
        
        // Define navigation items
        const navItems = [
            { text: "Home", href: "index.html" },
            { text: "Blog", href: "Blogs/blog.html" },
            { text: "Essays", href: "Essays/essays.html" },
            { text: "Portfolio", href: "../Portfolio/portfolio.html" },
            { text: "Design", href: "Design/design.html" },
            { text: "About", href: "aboutme.html" }
        ];

        // Create and append navigation elements
        navItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.text;
            a.href = item.href;
            li.appendChild(a);
            nav.appendChild(li);
        });
    }

    // Call createNavigation function when the window is fully loaded
    createNavigation();
};
function loadPage(page) {
    const main = document.querySelector("main");
    if (!main) return;

    const routes = {
        home: "index.html",
        banks: "banks.html",
        groceries: "groceries.html",
        school: "school.html",
        "spending-analyzer": "spending-analyzer.html",
        utilities: "utilities.html",
        work: "work.html"
    };

    const target = routes[page];
    if (!target) {
        main.innerHTML = "<h1>404</h1><p>Page not found.</p>";
        return;
    }

    fetch(target)
        .then(res => {
            if (!res.ok) throw new Error("Fetch failed");
            return res.text();
        })
        .then(html => {
            const doc = new DOMParser().parseFromString(html, "text/html");
            const innerMain = doc.querySelector("main");
            main.innerHTML = innerMain ? innerMain.innerHTML : html;
        })
        .catch(err => {
            console.error(err);
            main.innerHTML = "<h1>Error</h1><p>Could not load page.</p>";
        });
}

// Pill selection
document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
        pill.classList.toggle('active');
        console.log('Selected:', pill.textContent);
        const newWindow = document.createElement('div');
        newWindow.classList.add('new-window');
        newWindow.innerHTML = `<div class="close-btn">X</div><h2>${pill.textContent} </h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
        document.body.appendChild(newWindow);
        document.getElementsByClassName('close-btn')[0].addEventListener('click', () => {
            document.body.removeChild(newWindow);
        });
    });
});

// Example: Search button handler
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    console.log('Searching for:', query);
    // TODO: Call Supabase API for AI recommendations
});
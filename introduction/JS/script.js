/* =========================================
   EXISTING CODE (Typewriter, Tilt, Navbar) goes here...
   ========================================= */

/* =========================================
   5. TAB INTERFACE LOGIC (The "Personal Hub")
   ========================================= */
function openTab(tabName) {
    // 1. Remove 'active-link' from all tab titles
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let link of tabLinks) {
        link.classList.remove("active-link");
    }

    // 2. Remove 'active-tab' from all content areas
    const tabContents = document.getElementsByClassName("tab-contents");
    for (let content of tabContents) {
        content.classList.remove("active-tab");
    }

    // 3. Add active class to the clicked tab title (event target)
    event.currentTarget.classList.add("active-link");

    // 4. Show the specific content ID
    document.getElementById(tabName).classList.add("active-tab");
}

/* =========================================
   6. GALLERY FILTER LOGIC
   ========================================= */
const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterContainer) {
    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item")) {
            // Deactivate existing active filter
            filterContainer.querySelector(".active-filter").classList.remove("active-filter");
            
            // Activate new filter button
            event.target.classList.add("active-filter");
            
            const filterValue = event.target.getAttribute("data-filter");
            
            galleryItems.forEach((item) => {
                if (item.classList.contains("tilt-card")) {
                    // Reset tilt transform to prevent visual glitches when filtering
                    item.style.transform = 'none';
                }

                if (filterValue === 'all' || item.getAttribute("data-category") === filterValue) {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    });
}
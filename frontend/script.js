// ===============================
// Load Projects From Backend API
// ===============================

async function loadProjects() {
    const container = document.getElementById("projects-container");

    // Loading State
    container.innerHTML = `
        <p style="color:white; text-align:center;">
            Loading projects...
        </p>
    `;

    try {

        // Fetch data from backend
        const response = await fetch("http://localhost:5000/api/projects");

        // Check if server response is OK
        if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }

        // Convert response to JSON
        const projects = await response.json();

        // Clear previous content
        container.innerHTML = "";

        // If no projects exist
        if (!projects || projects.length === 0) {
            container.innerHTML = `
                <p style="color:white; text-align:center;">
                    No projects found.
                </p>
            `;
            return;
        }

        // Create project cards dynamically
        projects.forEach((project) => {

            const card = document.createElement("div");

            card.classList.add("project-card");

            card.innerHTML = `
                <div class="project-content">

                    <h3 class="project-title">
                        ${project.title}
                    </h3>

                    <p class="project-description">
                        ${project.description}
                    </p>

                    <div class="project-tech">
                        ${project.technologies}
                    </div>

                    <div class="project-links">

                        ${
                            project.github
                            ? `
                            <a href="${project.github}" target="_blank">
                                GitHub
                            </a>
                            `
                            : ""
                        }

                        ${
                            project.live
                            ? `
                            <a href="${project.live}" target="_blank">
                                Live Demo
                            </a>
                            `
                            : ""
                        }

                    </div>

                </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {

        console.error("Error:", error);

        container.innerHTML = `
            <p style="color:#ef4444; text-align:center;">
                Failed to connect to backend server.
            </p>
        `;
    }
}


// ===============================
// Run After Page Loads
// ===============================

window.addEventListener("DOMContentLoaded", () => {
    loadProjects();
});
document.getElementById("edit-button").addEventListener("click", () => {
    const newInfo = prompt("Enter updated information for your profile (e.g., New skills or interests):");
    if (newInfo) {
        const aboutSection = document.querySelector(".profile-info");
        const newParagraph = document.createElement("p");
        newParagraph.textContent = newInfo;
        aboutSection.appendChild(newParagraph);
    }
});

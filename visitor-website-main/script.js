function selectLanguage(language) {
    var dropdownContent = document.getElementById("myDropdown");
    var dropdownButton = document.querySelector(".dropbtn");
    dropdownButton.textContent = language;
    dropdownContent.classList.remove("show");

    // Add 'arrow' span back
    dropdownButton.innerHTML += '<span class="arrow">&#9660;</span>';
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    var arrow = document.querySelector(".arrow");
    dropdownContent.classList.toggle("show");
    arrow.classList.toggle("rotate");
}

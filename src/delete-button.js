const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("input")[i].value = "";
    }
});
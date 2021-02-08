const initialsButton = document.querySelector(".initials-button");
let initialsList = localStorage.getItem("initials") ? JSON.parse(localStorage.getItem("initials")) : []

initialsButton.addEventListener("click", function () {
    const initialsInput = document.querySelector(".initialsInput");
    initialsList.push(initialsInput.value)
    localStorage.setItem("initials", JSON.stringify(initialsList))
    initialsInput.value = ""

    const initialDiv = document.querySelector(".initialDiv");
    initialDiv.classList.add("hide")

    let scoreDiv = document.querySelector(".scoreDiv");
    scoreDiv.classList.remove("hide")

    let initialsLocalStorage = document.querySelector(".initialsLocalStorage");



    for (var i = 0; i < initialsList.length; i++) {
        initialsLocalStorage.innerHTML = initialsLocalStorage.innerHTML + `
            <li class="list-group-item">${initialsList[i]}</li>
                       
            `

    }


})


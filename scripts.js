document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("infoModal")
    const modalText = document.getElementById("modal-text")
    const closeModal = document.querySelector(".close")

    document.querySelectorAll(".info-block").forEach(block => {
        block.addEventListener("click", function () {
            const info = this.getAttribute("data-info")
            modalText.textContent = info
            modal.style.display = "block"
        })
    })

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"
    })

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"
        }
    })
})

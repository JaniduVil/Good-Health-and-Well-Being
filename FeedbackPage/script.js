document.getElementById("message").addEventListener("input", function () {
    let remaining = 200 - this.value.length;
    document.getElementById("message-counter").innerText = `${remaining} characters remaining`;
});

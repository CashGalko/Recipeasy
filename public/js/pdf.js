window.onload = function () {
    document.getElementById("download")
    .addEventListener("click", () => {
        const DOCIDVAR = this.document.getElementById("DOCID");
        html2pdf().from(DOCIDVAR).save();
    })
}
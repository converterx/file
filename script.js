document.getElementById("convertButton").addEventListener("click", async () => {
    const fileInput = document.getElementById("fileInput");
    const formatSelect = document.getElementById("formatSelect");
    const progressBar = document.getElementById("progressBar");
    const progressContainer = document.getElementById("progressContainer");
    const downloadButton = document.getElementById("downloadButton");

    if (!fileInput.files[0]) {
        alert("Please select a WEBP file!");
        return;
    }

    const file = fileInput.files[0];
    const outputFormat = formatSelect.value;

    // Show progress
    progressContainer.style.display = "block";
    progressBar.style.width = "0%";

    // Simulate conversion progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + "%";
        if (progress >= 100) {
            clearInterval(interval);

            // Conversion Logic (Simulated)
            const convertedFile = new Blob([file], { type: `image/${outputFormat}` });

            // Enable download button
            downloadButton.style.display = "inline-block";
            downloadButton.textContent = "Download Converted File";
            downloadButton.onclick = () => {
                const url = URL.createObjectURL(convertedFile);
                const a = document.createElement("a");
                a.href = url;
                a.download = `converted.${outputFormat}`;
                a.click();
                URL.revokeObjectURL(url);
            };
        }
    }, 300); // Simulating progress
});

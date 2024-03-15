document.addEventListener("DOMContentLoaded", () => {
  // A simple example showing how to download images from an URL
  // for usage with pdfmake

  // Function to fetch an image from a given URL and convert it to a data URL
  function fetchImage(url) {
    return fetch(url) // Fetch the image from the provided URL
      .then((response) => response.blob()) // Get the image data as a Blob
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result); // Resolve the promise with the data URL when the FileReader has finished loading
            reader.onerror = reject; // Reject the promise if there's an error with the FileReader
            reader.readAsDataURL(blob); // Read the image data as a data URL
          })
      );
  }

  // Function to create a PDF using pdfmake
  function createPDF() {
    const doc = {
      content: [
        // ... (other content)
        {
          image: "https://xy.com/myimage.jpg",
        },
      ],
      images: {
        "https://xy.com/myimage.jpg": null,
      },
    };

    const fetches = [];
    // Loop through each image URL in the 'images' property of the 'doc' object
    doc.images.forEach((src) => {
      // For each image URL, fetch the image and update the 'images' property with the data URL
      fetches.push(
        fetchImage(src).then((data) => {
          doc.images[src] = data;
        })
      );
    });

    // After all image fetches are complete
    Promise.all(fetches).then(() => {
      // Create a PDF using pdfmake with the updated 'doc' object and download it as 'test.pdf'
      pdfMake.createPdf(doc).download("test.pdf");
    });
  }

  // Call the createPDF function to initiate the process
  createPDF();
});

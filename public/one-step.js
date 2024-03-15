console.log("Hello World");

const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  const sample_id = document.getElementById("sample_id");
  const sample_date = document.getElementById("sample_date");
  const sample_time = document.getElementById("sample_time");
  const sample_by = document.getElementById("sample_by");
  const sample_type = document.getElementById("sample_type");
  const lot = document.getElementById("lot");
  const sublot = document.getElementById("sublot");
  const material = document.getElementById("material");
  const granular_spec = document.getElementById("granular_spec");
  const location = document.getElementById("location");
  const job_location = document.getElementById("job_location");
  const quarry = document.getElementById("quarry");
  const test_date = document.getElementById("test_date");
  const test_by = document.getElementById("test_by");

  const total_sample_mass = document.getElementById("total_sample_mass");
  const pan_mass = document.getElementById("pan_mass");
  const pan_sample_mass = document.getElementById("pan_sample_mass");
  const pan_dry_mass = document.getElementById("pan_dry_mass");
  const moisture = document.getElementById("moisture");

  const retained_150mm = document.getElementById("retained_150mm");
  const passing_150mm = document.getElementById("passing_150mm");

  const retained_106mm = document.getElementById("retained_106mm");
  const passing_106mm = document.getElementById("passing_106mm");

  const retained_53mm = document.getElementById("retained_53mm");
  const passing_53mm = document.getElementById("passing_53mm");

  const retained_37mm = document.getElementById("retained_37mm");
  const passing_37mm = document.getElementById("passing_37mm");

  const retained_26mm = document.getElementById("retained_26mm");
  const passing_26mm = document.getElementById("passing_26mm");

  const retained_19mm = document.getElementById("retained_19mm");
  const passing_19mm = document.getElementById("passing_19mm");

  const retained_16mm = document.getElementById("retained_16mm");
  const passing_16mm = document.getElementById("passing_16mm");

  const retained_13mm = document.getElementById("retained_13mm");
  const passing_13mm = document.getElementById("passing_13mm");

  const retained_9mm = document.getElementById("retained_9mm");
  const passing_9mm = document.getElementById("passing_9mm");

  const retained_4mm = document.getElementById("retained_4mm");
  const passing_4mm = document.getElementById("passing_4mm");

  const retained_2mm = document.getElementById("retained_2mm");
  const passing_2mm = document.getElementById("passing_2mm");

  const retained_1mm = document.getElementById("retained_1mm");
  const passing_1mm = document.getElementById("passing_1mm");

  const retained_600um = document.getElementById("retained_600um");
  const passing_600um = document.getElementById("passing_600um");

  const retained_300um = document.getElementById("retained_300um");
  const passing_300um = document.getElementById("passing_300um");

  const retained_150um = document.getElementById("retained_150um");
  const passing_150um = document.getElementById("passing_150um");

  const retained_75um = document.getElementById("retained_75um");
  const passing_75um = document.getElementById("passing_75um");

  // Get all elements with the class "readonly-input"
  var readonlyInputs = document.getElementsByClassName("locked_input");

  // Set a common value to all readonly input elements
  var commonValue = "15";

  for (var i = 0; i < readonlyInputs.length; i++) {
    readonlyInputs[i].value = commonValue;
  }

  sample_id.addEventListener("input", () => {
    const value = sample_id.value.trim();
    const isValid = !(value === "");

    if (isValid) {
      sample_id.classList.remove("invalid");
      sample_id.classList.add("valid");
      console.log("sample id is valid");
    } else {
      sample_id.classList.remove("valid");
      sample_id.classList.add("invalid");
      console.log("sample id is invalid");
    }
  });

  // calculate sample weight

  pan_mass.addEventListener("input", calculateTotalSampleMass);
  pan_dry_mass.addEventListener("input", calculateTotalSampleMass);

  function calculateTotalSampleMass() {
    const pan = parseFloat(pan_mass.value) || 0;
    const samplePan = parseFloat(pan_dry_mass.value) || 0;

    total_sample_mass.value = (samplePan - pan).toFixed(1);
  }

  // calculate moisture content

  pan_sample_mass.addEventListener("input", calculateMoisture);
  pan_dry_mass.addEventListener("input", calculateMoisture);
  total_sample_mass.addEventListener("input", calculateMoisture);

  function calculateMoisture() {
    const wetMass = parseFloat(pan_sample_mass.value) || 0;
    const dryMass = parseFloat(pan_dry_mass.value) || 0;
    const sampleMass = parseFloat(total_sample_mass.value) || 0;

    // Perform your calculation here
    const result = ((wetMass - dryMass) / sampleMass) * 100;

    // Update the result input field
    moisture.value = result.toFixed(1);
  }

  // calculate percent passing

  retained_150mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_150mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_150mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_106mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_106mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_106mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_53mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_53mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_53mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_37mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_37mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_37mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_26mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_26mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_26mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_19mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_19mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_19mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_16mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_16mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_16mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_13mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_13mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_13mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_9mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_9mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_9mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_4mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_4mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_4mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_2mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_2mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_2mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_1mm.addEventListener("input", () => {
    const xmass = parseFloat(retained_1mm.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_1mm.value = passing.toFixed(1);

    updateChartData();
  });

  retained_600um.addEventListener("input", () => {
    const xmass = parseFloat(retained_600um.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_600um.value = passing.toFixed(1);

    updateChartData();
  });

  retained_300um.addEventListener("input", () => {
    const xmass = parseFloat(retained_300um.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_300um.value = passing.toFixed(1);

    updateChartData();
  });

  retained_150um.addEventListener("input", () => {
    const xmass = parseFloat(retained_150um.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_150um.value = passing.toFixed(1);

    updateChartData();
  });

  retained_75um.addEventListener("input", () => {
    const xmass = parseFloat(retained_75um.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_75um.value = passing.toFixed(1);

    updateChartData();
  });

  retained_pan.addEventListener("input", () => {
    const xmass = parseFloat(retained_pan.value) || 0;
    const totalMass = parseFloat(total_sample_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_pan.value = passing.toFixed(1);

    updateChartData();
  });

  const userDropdowns = document.querySelectorAll(".user");

  fetch("/getUsers")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through each dropdown
      userDropdowns.forEach((usersDropdown) => {
        // Clear any existing options in the dropdown
        while (usersDropdown.firstChild) {
          usersDropdown.removeChild(usersDropdown.firstChild);
        }

        // Add the "Select User" option to the dropdown
        const blankOption = document.createElement("option");
        blankOption.value = "";
        blankOption.textContent = "Select User";
        usersDropdown.appendChild(blankOption);

        // Iterate through the data and add options with both first and last names
        data.forEach((item) => {
          const option = document.createElement("option");
          option.value = `${item.FirstName} ${item.LastName}`; // Concatenate first and last names
          option.textContent = `${item.FirstName} ${item.LastName}`; // Concatenate first and last names
          usersDropdown.appendChild(option);
        });
      });
    });

  const sourcesDropdown = document.getElementById("source");

  fetch("/getSources")
    .then((response) => response.json())
    .then((data) => {
      const sources = new Set();

      const blankOption = document.createElement("option");
      blankOption.value = "";
      blankOption.textContent = "Select Source";
      sourcesDropdown.appendChild(blankOption);

      data.forEach((item) => {
        if (!sources.has(item.source)) {
          sources.add(item.source);

          const option = document.createElement("option");
          option.value = item.source;
          option.textContent = item.source;
          sourcesDropdown.appendChild(option);
        }
      });

      sourcesDropdown.addEventListener("change", () => {
        updateMaterialDropdown(sourcesDropdown.value);
      });
    });

  const materialsDropdown = document.getElementById("material");

  function updateMaterialDropdown(selectedSource) {
    materialsDropdown.innerHTML = "";

    const blankOption = document.createElement("option");
    blankOption.value = "";
    blankOption.textContent = "Select Material"; // Display text for the blank option
    materialsDropdown.appendChild(blankOption);

    fetch("/getMaterials")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          if (item.source == selectedSource) {
            const option = document.createElement("option");
            option.value = item.product_type;
            option.textContent = item.product_type;
            materialsDropdown.appendChild(option);
          }
        });
      });
  }

  const spec_53mm = document.getElementById("spec_53mm");
  const spec_26mm = document.getElementById("spec_26mm");
  const spec_19mm = document.getElementById("spec_19mm");
  const spec_16mm = document.getElementById("spec_16mm");
  const spec_13mm = document.getElementById("spec_13mm");
  const spec_9mm = document.getElementById("spec_9mm");
  const spec_4mm = document.getElementById("spec_4mm");
  const spec_75um = document.getElementById("spec_75um");

  const source = document.getElementById("source");
  const material_type = document.getElementById("material");
  const jmf_150mm = document.getElementById("jmf_150mm");
  const jmf_106mm = document.getElementById("jmf_106mm");
  const jmf_53mm = document.getElementById("jmf_53mm");
  const jmf_37mm = document.getElementById("jmf_37mm");
  const jmf_26mm = document.getElementById("jmf_26mm");
  const jmf_19mm = document.getElementById("jmf_19mm");
  const jmf_16mm = document.getElementById("jmf_16mm");
  const jmf_13mm = document.getElementById("jmf_13mm");
  const jmf_9mm = document.getElementById("jmf_9mm");
  const jmf_4mm = document.getElementById("jmf_4mm");
  const jmf_2mm = document.getElementById("jmf_2mm");
  const jmf_1mm = document.getElementById("jmf_1mm");
  const jmf_600um = document.getElementById("jmf_600um");
  const jmf_300um = document.getElementById("jmf_300um");
  const jmf_150um = document.getElementById("jmf_150um");
  const jmf_75um = document.getElementById("jmf_75um");

  const gran_spec = document.getElementById("granular_spec");

  // Assuming you have an event listener for when both source and material are selected
  function updateJMF(selectedSource, selectedMaterial) {
    gran_spec.value = `${selectedSource} ${selectedMaterial}`;
    // Make a GET request to the server to fetch the data
    fetch(`/getJMF?source=${selectedSource}&material=${selectedMaterial}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const match = data[0]; // Assuming there's only one matching row

          jmf_37mm.value = match.gradation_37mm;
          jmf_19mm.value = match.gradation_19mm;
          jmf_26mm.value = match.gradation_26mm;
          jmf_13mm.value = match.gradation_13mm;
          jmf_16mm.value = match.gradation_16mm;

          jmf_9mm.value = match.gradation_9mm;
          jmf_2mm.value = match.gradation_2mm;
          jmf_4mm.value = match.gradation_4mm;
          jmf_600um.value = match.gradation_600um;
          jmf_1mm.value = match.gradation_1mm;
          jmf_150um.value = match.gradation_150um;
          jmf_300um.value = match.gradation_300um;
          jmf_75um.value = match.gradation_75um;

          updateJMFChartData();
        } else {
          console.log("No matching data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }

  material_type.addEventListener("change", function (event) {
    const selectedMaterial = event.target.value;
    const selectedSource = source.value;
    updateJMF(selectedSource, selectedMaterial);
  });

  const data = {
    labels: [
      "150 mm",
      "106 mm",
      "53.0 mm",
      "37.5 mm",
      "26.5 mm",
      "19.0 mm",
      "16.0 mm",
      "13.2 mm",
      "9.5 mm",
      "4.75 mm",
      "2.36 mm",
      "1.18 mm",
      "600 um",
      "300 um",
      "150 um",
      "75 um",
    ],
    datasets: [
      {
        label: "Sample Data",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "JMF Data",
        data: [],
        // pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        // pointRadius: 5,
        // pointHoverRadius: 7,
        // borderWidth: 0
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, config);

  // Add event listeners to input fields to update chart data
  const inputFields = document.querySelectorAll(".passing_input");
  inputFields.forEach((input) => {
    input.addEventListener("change", updateChartData);
  });

  function updateChartData() {
    // Get the values from the input fields and update the chart data
    const newData = Array.from(inputFields).map((input) =>
      parseFloat(input.value)
    );
    myChart.data.datasets[0].data = newData;
    myChart.update(); // Update the chart
  }

  const jmfFields = document.querySelectorAll(".jmf_fields");
  jmfFields.forEach((input) => {
    input.addEventListener("change", updateJMFChartData);
  });

  function updateJMFChartData() {
    const jmfData = Array.from(jmfFields).map((input) =>
      parseFloat(input.value)
    );
    myChart.data.datasets[1].data = jmfData;
    myChart.update();

    console.log("New Data: ", jmfData);
  }

  // Define the content for your PDF
  document.getElementById("submit").addEventListener("click", () => {
    const sampleID = document.getElementById("sample_id").value;
    const sampleDate = document.getElementById("sample_date").value;
    const sampleBy = document.getElementById("sample_by").value;
    const sampleType = document.getElementById("sample_type").value;
    const source = document.getElementById("source").value;
    const material = document.getElementById("material").value;
    // const location = document.getElementById('location').value;
    const testDate = document.getElementById("test_date").value;
    const testBy = document.getElementById("test_by").value;
    const totalMass = document.getElementById("total_sample_mass").value;
    const panSample = document.getElementById("pan_sample_mass").value;
    const panDry = document.getElementById("pan_dry_mass").value;
    const moisture = document.getElementById("moisture").value;

    const passing150 = document.getElementById("passing_150mm").value;
    const passing106 = document.getElementById("passing_106mm").value;
    const passing53 = document.getElementById("passing_53mm").value;
    const passing37 = document.getElementById("passing_37mm").value;
    const passing26 = document.getElementById("passing_26mm").value;
    const passing19 = document.getElementById("passing_19mm").value;
    const passing16 = document.getElementById("passing_16mm").value;
    const passing13 = document.getElementById("passing_13mm").value;
    const passing9 = document.getElementById("passing_9mm").value;
    const passing4 = document.getElementById("passing_4mm").value;
    const passing2 = document.getElementById("passing_2mm").value;
    const passing1 = document.getElementById("passing_1mm").value;
    const passing600um = document.getElementById("passing_600um").value;
    const passing300um = document.getElementById("passing_300um").value;
    const passing150um = document.getElementById("passing_150um").value;
    const passing75um = document.getElementById("passing_75um").value;

    const jmf150 = document.getElementById("jmf_150mm").value;
    const jmf106 = document.getElementById("jmf_106mm").value;
    const jmf53 = document.getElementById("jmf_53mm").value;
    const jmf37 = document.getElementById("jmf_37mm").value;
    const jmf26 = document.getElementById("jmf_26mm").value;
    const jmf19 = document.getElementById("jmf_19mm").value;
    const jmf16 = document.getElementById("jmf_16mm").value;
    const jmf13 = document.getElementById("jmf_13mm").value;
    const jmf9 = document.getElementById("jmf_9mm").value;
    const jmf4 = document.getElementById("jmf_4mm").value;
    const jmf2 = document.getElementById("jmf_2mm").value;
    const jmf1 = document.getElementById("jmf_1mm").value;
    const jmf600um = document.getElementById("jmf_600um").value;
    const jmf300um = document.getElementById("jmf_300um").value;
    const jmf150um = document.getElementById("jmf_150um").value;
    const jmf75um = document.getElementById("jmf_75um").value;

    const chartDataUrl = document
      .getElementById("myChart")
      .toDataURL("image/png");

    // Function to load an image asynchronously and return a promise
    function loadImageAsync(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    }

    // Define the content for your PDF
    const documentDefinition = {
      content: [
        {
          async: true,
          image:
            "https://gipi.com/wp-content/uploads/2022/04/GIP_Logo_300x85.png",
          width: 100,
          height: 100,
          callback: function (img) {
            return [img.width, img.height];
          },
        },
        // {
        //     image: 'data:image/png;base64, https://gipi.com/wp-content/uploads/2022/04/GIP_Logo_300x85.png',
        //     width: 100,
        //     height: 100,
        // },
        // {
        //     image: `data:image/png;base64,${gipLogoData}`,
        //     width: 100,
        //     absolutePosition: { x: 10, y: 10 }
        // },

        {
          text: "One-Step Sample Result Report",
          fontSize: 16,
          bold: true,
          alignment: "center",
          margin: [0, 20, 0, 20],
        },
        {
          columns: [
            [],
            [
              {
                text: `Sample #: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
              {
                text: `Sample Type: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
              {
                text: `Sample Date: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
              {
                text: `Sample By: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
            ],
            [
              { text: `${sampleID}`, fontSize: 10, margin: [10, 0, 10, 0] },
              { text: `${sampleType}`, fontSize: 10, margin: [10, 0, 10, 0] },
              { text: `${sampleDate}`, fontSize: 10, margin: [10, 0, 10, 0] },
              { text: `${sampleBy}`, fontSize: 10, margin: [10, 0, 10, 0] },
            ],
            [
              {
                text: `Source: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
              {
                text: `Material: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
              {
                text: `Date Tested: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
              {
                text: `Test By: `,
                fontSize: 10,
                alignment: "right",
                margin: [10, 0, 10, 0],
              },
            ],
            [
              { text: `${source}`, fontSize: 10 },
              { text: `${material}`, fontSize: 10 },
              // { text: `${location}`, fontSize: 10 },
              { text: `${testDate}`, fontSize: 10 },
              { text: `${testBy}`, fontSize: 10 },
            ],
            [],
          ],

          widths: ["10%", "10%", "10%", "10%", "10%", "10"],
        },

        // { text: `Location: ${location}`, fontSize: 12},
        {
          text: `Moisture Content: ${moisture}`,
          fontSize: 10,
          alignment: "center",
          margin: [0, 20, 0, 20],
        },

        {
          text: "Gradation",
          fontSize: 12,
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 20],
        },

        {
          table: {
            body: [
              ["Sieve Size", "Sample Result", "JMF Data"],
              ["150 mm: ", `${passing150}`, `${jmf150}`],
              ["106 mm: ", `${passing106}`, `${jmf106}`],
              ["53.0 mm: ", `${passing53}`, `${jmf53}`],
              ["37.5 mm: ", `${passing37}`, `${jmf37}`],
              ["26.5 mm: ", `${passing26}`, `${jmf26}`],
              ["19.0 mm: ", `${passing19}`, `${jmf19}`],
              ["16.0 mm: ", `${passing16}`, `${jmf16}`],
              ["13.2 mm: ", `${passing13}`, `${jmf13}`],
              ["9.5 mm: ", `${passing9}`, `${jmf9}`],
              ["4.75 mm: ", `${passing4}`, `${jmf4}`],
              ["2.36 mm: ", `${passing2}`, `${jmf2}`],
              ["1.18 mm: ", `${passing1}`, `${jmf1}`],
              ["600 um: ", `${passing600um}`, `${jmf600um}`],
              ["300 um: ", `${passing300um}`, `${jmf300um}`],
              ["150 um: ", `${passing150um}`, `${jmf150um}`],
              ["75 um: ", `${passing75um}`, `${jmf75um}`],
            ],
          },
        },

        // { text: 'Line Chart to PDF', fontSize: 16, alignment: 'center' },
        { image: chartDataUrl, width: 500 },

        {
          text: `More information available upon request `,
          fontSize: 8,
          margin: [0, 20, 0, 0],
        },
      ],
    };

    // Load the image asynchronously
    loadImageAsync(documentDefinition.content[0].image)
      .then((img) => {
        // Generate the PDF
        const pdfDoc = pdfMake.createPdf(documentDefinition);

        // Open the PDF in a new tab after the image has loaded
        pdfDoc.getBase64((dataUrl) => {
          const blob = pdfMake.createPdfKitDocument({
            content: documentDefinition.content,
            images: { img },
          });
          const blobUrl = URL.createObjectURL(blob);
          window.open(blobUrl, "_blank");
        });

        // Alternatively, you can download the PDF with a specific filename
        // pdfDoc.download("example.pdf");
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  });
});

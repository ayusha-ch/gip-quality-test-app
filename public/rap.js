const form = document.getElementById('form');

document.addEventListener("DOMContentLoaded", () => {

    // Define the content for your PDF
document.getElementById('submit').addEventListener('click', (event) => {

    console.log('submit button pressed...')

    // sample details
    const sample_id = document.getElementById('sample_id').value;
    const lab = document.getElementById('lab').value;
    const sample_date = document.getElementById('sample_date').value;
    const sample_time = document.getElementById('sample_time').value;
    const sample_by = document.getElementById('sample_by').value;
    const asphalt_plant = document.getElementById('asphalt_plant').value;
    const rap_type = document.getElementById('rap_type').value;
    const test_date = document.getElementById('test_date').value;
    const test_by = document.getElementById('test_by').value;

    // const pan_mass = document.getElementById('pan_mass').value;
    // const pan_wet_sample = document.getElementById('pan_wet_sample').value;
    // const pan_dry_sample = document.getElementById('pan_dry_sample').value;
    // const wet_sample = document.getElementById('wet_sample').value;
    // const dry_sample = document.getElementById('dry_sample').value;

    // Moisture Content %
    const moisture = document.getElementById('moisture').value;

    // const original_sample_mass = document.getElementById('original_sample_mass').value;
    // const filter_before_extraction = document.getElementById('filter_before_extraction').value;
    // const filter_after_extraction = document.getElementById('filter_after_extraction').value;
    // const fines_filter = document.getElementById('fines_filter').value;
    // const cup_before_extraction = document.getElementById('cup_before_extraction').value;
    // const cup_after_extraction = document.getElementById('cup_after_extraction').value;
    // const fines_cup = document.getElementById('fines_cup').value;
    // const dry_aggregate_mass = document.getElementById('dry_aggregate_mass').value;
    // const total_extracted_aggregate = document.getElementById('total_extracted_aggregate').value;
    // const mass_asphalt_cement = document.getElementById('mass_asphalt_cement').value;

    // Cement Content %
    const asphalt_cement_content = document.getElementById('asphalt_cement_content').value;

    // const passing_150mm = document.getElementById('passing_150mm').value;
    // const passing_106mm = document.getElementById('passing_106mm').value;
    // const passing_53mm = document.getElementById('passing_53mm').value;
    const passing_37mm = document.getElementById('passing_37mm').value;
    const passing_26mm = document.getElementById('passing_26mm').value;
    const passing_19mm = document.getElementById('passing_19mm').value;
    const passing_16mm = document.getElementById('passing_16mm').value;
    const passing_13mm = document.getElementById('passing_13mm').value;
    const passing_9mm = document.getElementById('passing_9mm').value;
    const passing_4mm = document.getElementById('passing_4mm').value;
    const passing_2mm = document.getElementById('passing_2mm').value;
    const passing_1mm = document.getElementById('passing_1mm').value;
    const passing_600um = document.getElementById('passing_600um').value;
    const passing_300um = document.getElementById('passing_300um').value;
    const passing_150um = document.getElementById('passing_150um').value;
    const passing_75um = document.getElementById('passing_75um').value;

    const chartDataUrl = document.getElementById('myChart').toDataURL('image/png');
    // const gipLogoUrl = '/assets/gip_logo.png'.toDataURL('image/png');

    // Define the content for your PDF
    const documentDefinition = {
      content: [

        // { 
        //     image: gipLogoUrl, 
        //     width: 400,
        // },

        { text: 'Sample Result Report', fontSize: 14, bold: true, alignment: 'center', margin: [0,10,0,20] },
        { text: 'Sample Details', fontSize: 14, bold: true, alignment: 'center', margin: [0,10,0,20] },
        {
            columns: [
                [
                    { text: `Sample #: ` , fontSize: 10},
                    { text: `Lab: ` , fontSize: 10},
                    { text: `Date Sampled: ` , fontSize: 10},
                    { text: `Time Sampled: ` , fontSize: 10},
                    { text: `Sampled By: ` , fontSize: 10},
                ],
                [
                    { text: `${sample_id}`, fontSize: 10 },
                    { text: `${lab}`, fontSize: 10 },
                    { text: `${sample_date}`, fontSize: 10 },
                    { text: `${sample_time}`, fontSize: 10 },
                    { text: `${sample_by}`, fontSize: 10 },
                ],
                [
                    { text: `Asphalt Plant: ` , fontSize: 10},
                    { text: `RAP Type: ` , fontSize: 10},
                    { text: `Date Tested: ` , fontSize: 10},
                    { text: `Sampled By: ` , fontSize: 10},
                ],
                [
                    { text: `${asphalt_plant}`, fontSize: 10 },
                    { text: `${rap_type}`, fontSize: 10 },
                    { text: `${test_date}`, fontSize: 10 },
                    { text: `${test_by}`, fontSize: 10 },
                ]
            ],

            widths: ['20%', '30%', '20%', '30%']
        },

        { text: 'Moisture', fontSize: 12, bold: true, alignment: 'center', margin: [0,50,0,20] },

        {
            columns: [
                [
                    { text: `Pan: ` , fontSize: 10},
                    { text: `Pan + Wet Sample: ` , fontSize: 10},
                    { text: `Pan + Dry Sample: ` , fontSize: 10},
                ],
                [
                    { text: `${pan_mass.value}`, fontSize: 10 },
                    { text: `${pan_wet_sample.value}`, fontSize: 10 },
                    { text: `${pan_dry_sample.value}`, fontSize: 10 },
                ],
                [
                    { text: `Wet Sample Weight: ` , fontSize: 10},
                    { text: `Dry Sample Weight: ` , fontSize: 10},
                    { text: `Moisture: ` , fontSize: 10},
                ],
                [
                    { text: `${wet_sample.value}`, fontSize: 10 },
                    { text: `${dry_sample.value}`, fontSize: 10 },
                    { text: `${moisture.value}`, fontSize: 10 },
                ]
            ],

            widths: ['20%', '30%', '20%', '30%']
        },

        { text: 'Extraction', fontSize: 12, bold: true, alignment: 'center', margin: [0,50,0,20] },

        {
            columns: [
                [
                    { text: `Original Sample Mass: ` , fontSize: 10},
                ],
                [
                    { text: `${original_sample_mass.value}`, fontSize: 10 },
                ],
                [
                ],
                [
                ]
            ],

            widths: ['20%', '30%', '20%', '30%']
        },

        {
            columns: [
                [
                    { text: `Mass of Filter Before Extraction: ` , fontSize: 10},
                    { text: `Mass of Filter After Extraction: ` , fontSize: 10},
                    { text: `Mass of Fines in Filter: ` , fontSize: 10},
                ],
                [
                    { text: `${filter_before_extraction.value}`, fontSize: 10 },
                    { text: `${filter_after_extraction.value}`, fontSize: 10 },
                    { text: `${fines_filter.value}`, fontSize: 10 },
                ],
                [
                    { text: `Mass of Cup Before Extraction: ` , fontSize: 10},
                    { text: `Mass of Cup After Extraction: ` , fontSize: 10},
                    { text: `Mass of Fines in Cup: ` , fontSize: 10},
                ],
                [
                    { text: `${cup_before_extraction.value}`, fontSize: 10 },
                    { text: `${cup_after_extraction.value}`, fontSize: 10 },
                    { text: `${fines_cup.value}`, fontSize: 10 },
                ]
            ],

            widths: ['20%', '30%', '20%', '30%']
        },

        {
            columns: [
                [
                    { text: `Dry Aggregate mass: ` , fontSize: 10},
                    { text: `Total Extracted Aggregate: ` , fontSize: 10},
                ],
                [
                    { text: `${dry_aggregate_mass.value}`, fontSize: 10 },
                    { text: `${total_extracted_aggregate.value}`, fontSize: 10 },
                ],
                [
                    { text: `Mass of Asphalt Cement: ` , fontSize: 10},
                    { text: `Asphalt Cement Content: ` , fontSize: 10},
                ],
                [
                    { text: `${mass_asphalt_cement.value}`, fontSize: 10 },
                    { text: `${asphalt_cement_content.value}`, fontSize: 10 },
                ]
            ],

            widths: ['20%', '30%', '20%', '30%']
        },


        { text: 'Gradation', fontSize: 12, bold: true, alignment: 'center', margin: [0,50,0,20] },

        

        {
            columns: [
                [
                    { text: `106 mm: `, fontSize: 10},
                    { text: `53.0 mm: `, fontSize: 10},
                    { text: `37.5 mm: `, fontSize: 10},
                    { text: `26.5 mm: `, fontSize: 10},
                    { text: `19.0 mm: `, fontSize: 10},
                    { text: `16.0 mm: `, fontSize: 10},
                    { text: `13.2 mm: `, fontSize: 10},
                    { text: `9.5 mm: `, fontSize: 10},
                    { text: `4.75 mm: `, fontSize: 10},
                    { text: `2.36 mm: `, fontSize: 10},
                    { text: `1.18 mm: `, fontSize: 10},
                    { text: `600 um: `, fontSize: 10},
                    { text: `300 um: `, fontSize: 10},
                    { text: `150 um: `, fontSize: 10},
                    { text: `75 um: `, fontSize: 10},
                ],
                [
                    // { text: `${passing_150mm}`, fontSize: 10 },
                    // { text: `${passing_106mm}`, fontSize: 10 },
                    // { text: `${passing_53mm}`, fontSize: 10 },
                    { text: `${passing_37mm.value}`, fontSize: 10 },
                    { text: `${passing_26mm.value}`, fontSize: 10 },
                    { text: `${passing_19mm.value}`, fontSize: 10 },
                    { text: `${passing_16mm.value}`, fontSize: 10 },
                    { text: `${passing_13mm.value}`, fontSize: 10 },
                    { text: `${passing_9mm.value}`, fontSize: 10 },
                    { text: `${passing_4mm.value}`, fontSize: 10 },
                    { text: `${passing_2mm.value}`, fontSize: 10 },
                    { text: `${passing_1mm.value}`, fontSize: 10 },
                    { text: `${passing_600um.value}`, fontSize: 10 },
                    { text: `${passing_300um.value}`, fontSize: 10 },
                    { text: `${passing_150um.value}`, fontSize: 10 },
                    { text: `${passing_75um.value}`, fontSize: 10 },
                    { text: `${asphalt_cement_content.value}`, fontSize: 10 },
                ],
                [
                    { text: `Mass of Asphalt Cement: ` , fontSize: 10},
                    { text: `Asphalt Cement Content: ` , fontSize: 10},
                ],
                [
                    { text: `${mass_asphalt_cement.value}`, fontSize: 10 },
                    { text: `${asphalt_cement_content.value}`, fontSize: 10 },
                ]
            ],

            widths: ['20%', '30%', '20%', '30%']
        },
 

        // { text: 'Line Chart to PDF', fontSize: 16, alignment: 'center' },
            { image: chartDataUrl, width: 400 },

            // { image: gipLogoUrl, width: 400 },

            { text: `More information available upon request `, fontSize: 12, margin: [0, 20, 0, 0]},
      ]
    };

    // Generate the PDF
    const pdfDoc = pdfMake.createPdf(documentDefinition);

    // To open the PDF in a new tab
    pdfDoc.open();

    // To download the PDF with a specific filename
    pdfDoc.download('example.pdf');
  });

    // --------- ENDPOINTS

    const userDropdowns = document.querySelectorAll('.user');

    fetch('/getUsers')
        .then(response => response.json())
        .then(data => {
            // Iterate through each dropdown
            userDropdowns.forEach(usersDropdown => {
                // Clear any existing options in the dropdown
                while (usersDropdown.firstChild) {
                    usersDropdown.removeChild(usersDropdown.firstChild);
                }
    
                // Add the "Select User" option to the dropdown
                const blankOption = document.createElement('option');
                blankOption.value = '';
                blankOption.textContent = 'Select User';
                usersDropdown.appendChild(blankOption);
    
                // Iterate through the data and add options with both first and last names
                data.forEach(item => {
                    const option = document.createElement('option');
                    option.value = `${item.FirstName} ${item.LastName}`; // Concatenate first and last names
                    option.textContent = `${item.FirstName} ${item.LastName}`; // Concatenate first and last names
                    usersDropdown.appendChild(option);
                });
            });
        });

    const plantDropdown = document.getElementById('asphalt_plant');

    fetch('/getSources')
        .then(response => response.json())
        .then(data => {
            
            const sources = new Set();

            const blankOption = document.createElement('option');
            blankOption.value = '';
            blankOption.textContent = 'Select Source';
            plantDropdown.appendChild(blankOption);

            data.forEach(item => {


                if( (!sources.has(item.source)) && (item.product_type.toLowerCase().includes('rap')) ) {

                    sources.add(item.source);

                    const option = document.createElement('option');
                    option.value = item.source;
                    option.textContent = item.source;
                    plantDropdown.appendChild(option);

                }
                
        });

        plantDropdown.addEventListener('change', () => {
            updateRapTypeDropdown(plantDropdown.value);
        })
    });


    const rapDropdown = document.getElementById('rap_type');

    function updateRapTypeDropdown(selectedPlant) {
        rapDropdown.innerHTML = '';

        const blankOption = document.createElement('option');
        blankOption.value = '';
        blankOption.textContent = 'Select RAP Type';
        rapDropdown.appendChild(blankOption);

        fetch('/getMaterials')
        .then(response => response.json())
        .then(data => {

            data.forEach(item => {

                if (item.source == selectedPlant) {

                    const option = document.createElement('option');
                    option.value = item.product_type;
                    option.textContent = item.product_type;
                    rapDropdown.appendChild(option);
                }
            })
        })

        rapDropdown.addEventListener('change', () => {
            updateJMF(selectedPlant, rapDropdown.value);
        })
    }
    
    function updateJMF(selectedPlant, selectedRap) {
        fetch(`/getJMF?source=${selectedPlant}&material=${selectedRap}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0){
                const match = data[0];

                jmf_37mm.value = match.gradation_37mm;
                jmf_26mm.value = match.gradation_26mm;
                jmf_19mm.value = match.gradation_19mm;
                jmf_16mm.value = match.gradation_16mm;
                jmf_13mm.value = match.gradation_13mm;
                jmf_9mm.value = match.gradation_9mm;
                jmf_4mm.value = match.gradation_4mm;
                jmf_2mm.value = match.gradation_2mm;
                jmf_1mm.value = match.gradation_1mm;
                jmf_600um.value = match.gradation_600um;
                jmf_300um.value = match.gradation_300um;
                jmf_150um.value = match.gradation_150um;
                jmf_75um.value = match.gradation_75um;

                updateJMFChartData();
            } else {
                console.log('no matching data found')
            }
        })
        .catch(error => {
            console.log('error fetching data: ' + error);
        })
    }

    const jmfFields = document.querySelectorAll('.jmf_fields');

    function updateJMFChartData(){
        const jmfData = Array.from(jmfFields).map((input) => parseFloat(input.value));
        myChart.data.datasets[1].data = jmfData;
        myChart.update();
    }

    // fetch('/getAsphaltPlants')
    //     .then(response => response.json())
    //     .then(data => {
            
    //         const plants = new Set();

    //         const blankOption = document.createElement('option');
    //         blankOption.value = '';
    //         blankOption.textContent = 'Select Plant';
    //         plantDropdown.appendChild(blankOption);

    //         data.forEach(item => {

    //             const option = document.createElement('option');
    //             option.value = `${item.plant_name}`;
    //             option.textContent = `${item.plant_name}`;
    //             plantDropdown.appendChild(option);
                
    //     });
    // });

    // --------- CALCULATIONS

    const pan_mass = document.getElementById('pan_mass');
    const pan_wet_sample = document.getElementById('pan_wet_sample');
    const pan_dry_sample = document.getElementById('pan_dry_sample');
    const wet_sample = document.getElementById('wet_sample');
    const dry_sample = document.getElementById('dry_sample');
    const moisture = document.getElementById('moisture');

    pan_wet_sample.addEventListener('input', calculateWetMass);
    pan_dry_sample.addEventListener('input', calculateDryMass);

    function calculateWetMass() {
        wet_sample.value = (pan_wet_sample.value - pan_mass.value).toFixed(1);
    }

    function calculateDryMass() {
        dry_sample.value = (pan_dry_sample.value - pan_mass.value).toFixed(1);
    }

    pan_dry_sample.addEventListener('input', calculateMoistureContent);

    function calculateMoistureContent() {
        moisture.value = (((wet_sample.value - dry_sample.value) / dry_sample.value) * 100).toFixed(1);
    }


    const filter_before_extraction = document.getElementById('filter_before_extraction');
    const filter_after_extraction = document.getElementById('filter_after_extraction');
    const fines_filter = document.getElementById('fines_filter');

    filter_after_extraction.addEventListener('input', calculateFilterFines);

    function calculateFilterFines() {
        fines_filter.value = (filter_after_extraction.value - filter_before_extraction.value).toFixed(1);
    }

    const extract_before_wash = document.getElementById('cup_before_extraction');
    const extract_after_wash = document.getElementById('cup_after_extraction');
    const fines_extract = document.getElementById('fines_cup');

    extract_after_wash.addEventListener('input', calculateExtractFines);

    function calculateExtractFines() {
        fines_extract.value = (extract_after_wash.value - extract_before_wash.value).toFixed(1);
    }


    const original_sample_mass = document.getElementById('original_sample_mass');
    const dry_aggregate_mass = document.getElementById('dry_aggregate_mass'); 
    const total_extracted_aggregate = document.getElementById('total_extracted_aggregate');
    const mass_asphalt_cement = document.getElementById('mass_asphalt_cement');
    const asphalt_cement_content = document.getElementById('asphalt_cement_content'); 

    function calculateTotalExtractedAggregate() {
        total_extracted_aggregate.value = parseFloat(dry_aggregate_mass.value) + parseFloat(fines_extract.value) + parseFloat(fines_filter.value);
        calculateMassAsphaltCement();
    }

    function calculateMassAsphaltCement() {
        mass_asphalt_cement.value = (original_sample_mass.value - total_extracted_aggregate.value).toFixed(1);
        calculateAsphaltCementContent();
    }

    function calculateAsphaltCementContent() {
        asphalt_cement_content.value = ((mass_asphalt_cement.value / original_sample_mass.value) * 100).toFixed(1);
    }

    dry_aggregate_mass.addEventListener('input', calculateTotalExtractedAggregate);




    // -------------------- Percent Passing (please fix later)

// const retained_150mm = document.getElementById('retained_150mm');
// const passing_150mm = document.getElementById('passing_150mm');

// const retained_106mm = document.getElementById('retained_106mm');
// const passing_106mm = document.getElementById('passing_106mm');

// const retained_53mm = document.getElementById('retained_53mm');
// const passing_53mm = document.getElementById('passing_53mm');

const retained_37mm = document.getElementById('retained_37mm');
const passing_37mm = document.getElementById('passing_37mm');

const retained_26mm = document.getElementById('retained_26mm');
const passing_26mm = document.getElementById('passing_26mm');

const retained_19mm = document.getElementById('retained_19mm');
const passing_19mm = document.getElementById('passing_19mm');

const retained_16mm = document.getElementById('retained_16mm');
const passing_16mm = document.getElementById('passing_16mm');

const retained_13mm = document.getElementById('retained_13mm');
const passing_13mm = document.getElementById('passing_13mm');

const retained_9mm = document.getElementById('retained_9mm');
const passing_9mm = document.getElementById('passing_9mm');

const retained_4mm = document.getElementById('retained_4mm');
const passing_4mm = document.getElementById('passing_4mm');

const retained_2mm = document.getElementById('retained_2mm');
const passing_2mm = document.getElementById('passing_2mm');

const retained_1mm = document.getElementById('retained_1mm');
const passing_1mm = document.getElementById('passing_1mm');

const retained_600um = document.getElementById('retained_600um');
const passing_600um = document.getElementById('passing_600um');

const retained_300um = document.getElementById('retained_300um');
const passing_300um = document.getElementById('passing_300um');

const retained_150um = document.getElementById('retained_150um');
const passing_150um = document.getElementById('passing_150um');

const retained_75um = document.getElementById('retained_75um');
const passing_75um = document.getElementById('passing_75um');

// retained_150mm.addEventListener('input', () => {
//     const xmass = parseFloat(retained_150mm.value) || 0;
//     const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

//     const passing = ((totalMass - xmass) / totalMass) * 100;

//     passing_150mm.value = passing.toFixed(1); 

//     updateChartData();
// });


// retained_106mm.addEventListener('input', () => {
//     const xmass = parseFloat(retained_106mm.value) || 0;
//     const totalMass = parseFloat(total_extracted_aggregate.value) || 0;

//     const passing = ((totalMass - xmass) / totalMass) * 100;

//     passing_106mm.value = passing.toFixed(1); 

//     updateChartData();
// });

// retained_53mm.addEventListener('input', () => {
//     const xmass = parseFloat(retained_53mm.value) || 0;
//     const totalMass = parseFloat(total_extracted_aggregate.value) || 0;

//     const passing = ((totalMass - xmass) / totalMass) * 100;

//     passing_53mm.value = passing.toFixed(1); 

//     updateChartData();
// });

retained_37mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_37mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_37mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_26mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_26mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_26mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_19mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_19mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_19mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_16mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_16mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_16mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_13mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_13mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_13mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_9mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_9mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_9mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_4mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_4mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_4mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_2mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_2mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_2mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_1mm.addEventListener('input', () => {
    const xmass = parseFloat(retained_1mm.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_1mm.value = passing.toFixed(1); 

    updateChartData();
});

retained_600um.addEventListener('input', () => {
    const xmass = parseFloat(retained_600um.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_600um.value = passing.toFixed(1); 

    updateChartData();
});

retained_300um.addEventListener('input', () => {
    const xmass = parseFloat(retained_300um.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_300um.value = passing.toFixed(1); 

    updateChartData();
});

retained_150um.addEventListener('input', () => {
    const xmass = parseFloat(retained_150um.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_150um.value = passing.toFixed(1); 

    updateChartData();
});

retained_75um.addEventListener('input', () => {
    const xmass = parseFloat(retained_75um.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_75um.value = passing.toFixed(1); 

    updateChartData();
});

retained_pan.addEventListener('input', () => {
    const xmass = parseFloat(retained_pan.value) || 0;
    const totalMass = parseFloat(dry_aggregate_mass.value) || 0;

    const passing = ((totalMass - xmass) / totalMass) * 100;

    passing_pan.value = passing.toFixed(1); 

    updateChartData();
});


// -------------------------------- GRAPH

const data = {
    labels: ['37.5 mm', '26.5 mm', '19.0 mm', '16.0 mm', '13.2 mm', '9.5 mm', '4.75 mm', '2.36 mm', '1.18 mm', '600 um', '300 um', '150 um', '75 um'],
    datasets: [
        {
            label: 'Sample Data',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        },
        {
            label: 'JMF Data',
            data: [],
            borderColor: 'rgba(255, 99, 132, 1',
            borderWidth: 2, 
            fill: false
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);

// Add event listeners to input fields to update chart data
const inputFields = document.querySelectorAll('.passing_input');
inputFields.forEach((input) => {
  input.addEventListener('change', updateChartData);
});

function updateChartData() {
    // Get the values from the input fields and update the chart data
    const newData = Array.from(inputFields).map((input) => parseFloat(input.value));
    myChart.data.datasets[0].data = newData;
    myChart.update(); // Update the chart
}







});




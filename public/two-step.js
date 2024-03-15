const form = document.getElementById('form');

document.addEventListener("DOMContentLoaded", () => {

    // ----- ENDPOINTS

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


        const sourcesDropdown = document.getElementById('source');

        fetch('/getSources')
            .then(response => response.json())
            .then(data => {
                
                const sources = new Set();
    
                const blankOption = document.createElement('option');
                blankOption.value = '';
                blankOption.textContent = 'Select Source';
                sourcesDropdown.appendChild(blankOption);
    
                data.forEach(item => {
    
    
                    if(!sources.has(item.source)) {
    
                        sources.add(item.source);
    
                        const option = document.createElement('option');
                        option.value = item.source;
                        option.textContent = item.source;
                        sourcesDropdown.appendChild(option);
    
                    }
                    
            });
    
            sourcesDropdown.addEventListener('change', () => {
                updateMaterialDropdown(sourcesDropdown.value);
            })
        });
    
        const materialsDropdown = document.getElementById('material');
    
        function updateMaterialDropdown(selectedSource) {
            materialsDropdown.innerHTML = '';
    
            const blankOption = document.createElement('option');
            blankOption.value = '';
            blankOption.textContent = 'Select Material'; // Display text for the blank option
            materialsDropdown.appendChild(blankOption);
    
            fetch('/getMaterials')
            .then(response => response.json())
            .then(data => {
    
               
    
                data.forEach(item => {
    
                    if(item.source == selectedSource) {
                        const option = document.createElement('option');
                        option.value = item.product_type;
                        option.textContent = item.product_type;
                        materialsDropdown.appendChild(option);
                    }
                });
            });
        }


        // Fetching Specification names from database for pull down menu

        const specification = document.getElementById('specification'); 

        fetch('/getSpecificationList')
            .then(response => response.json())
            .then(data => {
                
                const specificationOptions = new Set();
    
                const blankOption = document.createElement('option');
                blankOption.value = '';
                blankOption.textContent = 'Select Specification';
                specification.appendChild(blankOption);
    
                data.forEach(item => {
                    specificationOptions.add(item.spec_name);
    
                    const option = document.createElement('option');
                    option.value = item.spec_name;
                    option.textContent = item.spec_name;
                    specification.appendChild(option);
                    
                });
    
            });


        // updating spec table based on spec selection from pulldown

        const spec_150mm = document.getElementById('spec_150mm');
        const spec_106mm = document.getElementById('spec_106mm');
        const spec_53mm = document.getElementById('spec_53mm');
        const spec_37mm = document.getElementById('spec_37mm');
        const spec_26mm = document.getElementById('spec_26mm');
        const spec_19mm = document.getElementById('spec_19mm');
        const spec_16mm = document.getElementById('spec_16mm');
        const spec_13mm = document.getElementById('spec_13mm');
        const spec_9mm = document.getElementById('spec_9mm');
        const spec_4mm = document.getElementById('spec_4mm');
        const spec_2mm = document.getElementById('spec_2mm');
        const spec_1mm = document.getElementById('spec_1mm');
        const spec_600um = document.getElementById('spec_600um');
        const spec_300um = document.getElementById('spec_300um');
        const spec_150um = document.getElementById('spec_150um');
        const spec_75um = document.getElementById('spec_75um');

        
        specification.addEventListener('change', function(event) {
            const selectedSpec = event.target.value;
            console.log(selectedSpec);
            updateSpecification(selectedSpec);
        });
    
        function updateSpecification(selectedSpec) {
            fetch(`/getSpecification?selectedSpec=${selectedSpec}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0){
                        const match = data[0];

                        spec_150mm.value = ``;
                        spec_106mm.value = ``;
                        spec_53mm.value = ``;
                        spec_37mm.value = ``;
                        spec_26mm.value = ``;
                        spec_19mm.value = ``;
                        spec_16mm.value = ``;
                        spec_13mm.value = ``;
                        spec_9mm.value = ``;
                        spec_4mm.value = ``;
                        spec_2mm.value = ``;
                        spec_1mm.value = ``;
                        spec_600um.value = ``;
                        spec_300um.value = ``;
                        spec_150um.value = ``;
                        spec_75um.value = ``;

                        const spec_data_min = [];
                        const spec_data_max = [];

                        if(match.sieve_150mm_min != null && match.sieve_150mm_max != null) {
                            spec_150mm.value = `${match.sieve_150mm_min} - ${match.sieve_150mm_max}`;
                        }
                        spec_data_min.push(match.sieve_150mm_min);
                        spec_data_max.push(match.sieve_150mm_max);

                        if(match.sieve_106mm_min != null && match.sieve_106mm_max != null) {
                            spec_106mm.value = `${match.sieve_106mm_min} - ${match.sieve_106mm_max}`;
                        }
                        spec_data_min.push(match.sieve_106mm_min);
                        spec_data_max.push(match.sieve_106mm_max);

                        if(match.sieve_53mm_min != null && match.sieve_53mm_max != null) {
                            spec_53mm.value = `${match.sieve_53mm_min} - ${match.sieve_53mm_max}`;
                        } 
                        spec_data_min.push(match.sieve_53mm_min);
                        spec_data_max.push(match.sieve_53mm_max);

                        if(match.sieve_37mm_min != null && match.sieve_37mm_max != null) {
                            spec_37mm.value = `${match.sieve_37mm_min} - ${match.sieve_37mm_max}`;
                        }
                        spec_data_min.push(match.sieve_37mm_min);
                        spec_data_max.push(match.sieve_37mm_max);

                        if(match.sieve_26mm_min != null && match.sieve_26mm_max != null) {
                            spec_26mm.value = `${match.sieve_26mm_min} - ${match.sieve_26mm_max}`;
                        }
                        spec_data_min.push(match.sieve_26mm_min);
                        spec_data_max.push(match.sieve_26mm_max);

                        if(match.sieve_19mm_min != null && match.sieve_19mm_max != null) {
                            spec_19mm.value = `${match.sieve_19mm_min} - ${match.sieve_19mm_max}`;
                        }
                        spec_data_min.push(match.sieve_19mm_min);
                        spec_data_max.push(match.sieve_19mm_max);

                        if(match.sieve_16mm_min != null && match.sieve_16mm_max != null) {
                            spec_16mm.value = `${match.sieve_16mm_min} - ${match.sieve_16mm_max}`;
                        }
                        spec_data_min.push(match.sieve_16mm_min);
                        spec_data_max.push(match.sieve_16mm_max);

                        if(match.sieve_13mm_min != null && match.sieve_13mm_max != null) {
                            spec_13mm.value = `${match.sieve_13mm_min} - ${match.sieve_13mm_max}`;
                        }
                        spec_data_min.push(match.sieve_13mm_min);
                        spec_data_max.push(match.sieve_13mm_max);

                        if(match.sieve_9mm_min != null && match.sieve_9mm_max != null) {
                            spec_9mm.value = `${match.sieve_9mm_min} - ${match.sieve_9mm_max}`;
                        }
                        spec_data_min.push(match.sieve_9mm_min);
                        spec_data_max.push(match.sieve_9mm_max);
                        
                        if(match.sieve_4mm_min != null && match.sieve_4mm_max != null) {
                            spec_4mm.value = `${match.sieve_4mm_min} - ${match.sieve_4mm_max}`;
                        }
                        spec_data_min.push(match.sieve_4mm_min);
                        spec_data_max.push(match.sieve_4mm_max);

                        if(match.sieve_2mm_min != null && match.sieve_2mm_max != null) {
                            spec_2mm.value = `${match.sieve_2mm_min} - ${match.sieve_2mm_max}`;
                        }
                        spec_data_min.push(match.sieve_2mm_min);
                        spec_data_max.push(match.sieve_2mm_max);

                        if(match.sieve_1mm_min != null && match.sieve_1mm_max != null) {
                            spec_1mm.value = `${match.sieve_1mm_min} - ${match.sieve_1mm_max}`;
                        }
                        spec_data_min.push(match.sieve_1mm_min);
                        spec_data_max.push(match.sieve_1mm_max);

                        if(match.sieve_600um_min != null && match.sieve_600um_max != null) {
                            spec_600um.value = `${match.sieve_600um_min} - ${match.sieve_600um_max}`;
                        }
                        spec_data_min.push(match.sieve_600um_min);
                        spec_data_max.push(match.sieve_600um_max);

                        if(match.sieve_300um_min != null && match.sieve_300um_max != null) {
                            spec_600um.value = `${match.sieve_300um_min} - ${match.sieve_300um_max}`;
                        }
                        spec_data_min.push(match.sieve_300um_min);
                        spec_data_max.push(match.sieve_300um_max);

                        if(match.sieve_150um_min != null && match.sieve_150um_max != null) {
                            spec_150um.value = `${match.sieve_150um_min} - ${match.sieve_150um_max}`;
                        }
                        spec_data_min.push(match.sieve_150um_min);
                        spec_data_max.push(match.sieve_150um_max);

                        if(match.sieve_75um_min != null && match.sieve_75um_max != null) {
                            spec_75um.value = `${match.sieve_75um_min} - ${match.sieve_75um_max}`;
                        }
                        spec_data_min.push(match.sieve_75um_min);
                        spec_data_max.push(match.sieve_75um_max);

                        myChart.data.datasets[1].data = spec_data_min;
                        myChart.data.datasets[2].data = spec_data_max;
                        myChart.update(); // Update the chart
                    }
                })
        }

    // ----- CALCULATIONS

    // calculate moisture
    const pan_mass = document.getElementById('pan_mass');
    const pan_wet_sample = document.getElementById('pan_sample_mass');
    const pan_dry_sample = document.getElementById('pan_dry_mass');
    const moisture = document.getElementById('moisture');

    pan_wet_sample.addEventListener('input', calculateMoisture);
    pan_dry_sample.addEventListener('input', calculateMoisture);

    function calculateMoisture() {
        //moisture.value = ( (parseFloat(pan_wet_sample.value) - parseFloat(pan_wet_sample.value)) / pan_dry_sample.value ).toFixed(1);
        moisture.value = ( (( parseFloat(pan_dry_sample.value / parseFloat(pan_wet_sample.value)) ) * 100 ) ).toFixed(1);
        // moisture.value = ( 100 - (( parseFloat(pan_dry_sample.value / parseFloat(pan_wet_sample.value)) ) * 100 ) ).toFixed(1);
    }

    // calculate A. Mass Total Sample

    const mass_total_sample = document.getElementById('mass_total_sample');

    pan_mass.addEventListener('input', calculateMassTotalSample);
    pan_dry_sample.addEventListener('input', calculateMassTotalSample);

    function calculateMassTotalSample() {
        mass_total_sample.value = (parseFloat(pan_dry_sample.value) - parseFloat(pan_mass.value)).toFixed(1);
    }

    // calculate B. Mass Retained (same as 4.75 user entry)

    const mass_retained = document.getElementById('mass_retained');
    const retained_4mm = document.getElementById('retained_4mm');

    retained_4mm.addEventListener('input', calculateMassRetained);

    function calculateMassRetained() {
        mass_retained.value = (parseFloat(retained_4mm.value)).toFixed(1);
    }

    // calculate C. Mass Passing

    const mass_passing = document.getElementById('mass_passing');

    retained_4mm.addEventListener('input', calculateMassPassing);
    pan_mass.addEventListener('input', calculateMassPassing);
    pan_dry_sample.addEventListener('input', calculateMassPassing);

    function calculateMassPassing() {
        mass_passing.value = ( parseFloat(mass_total_sample.value) - parseFloat(mass_retained.value) ).toFixed(1)
    }

    // calculate D. Coarse Aggregate Percent 

    const coarse_aggregate_percent = document.getElementById('coarse_aggregate_percent');

    retained_4mm.addEventListener('input', calculateCoarseAggregatePercent);
    pan_mass.addEventListener('input', calculateCoarseAggregatePercent);
    pan_dry_sample.addEventListener('input', calculateCoarseAggregatePercent);

    function calculateCoarseAggregatePercent() {
        coarse_aggregate_percent.value = ( (parseFloat(mass_retained.value) / parseFloat(mass_total_sample.value) * 100) ).toFixed(1);
    }

    // calculate E. Fine AggregatePercent

    const fine_aggregate_percent = document.getElementById('fine_aggregate_percent');

    retained_4mm.addEventListener('input', calculateFineAggregatePercent);
    pan_mass.addEventListener('input', calculateFineAggregatePercent);
    pan_dry_sample.addEventListener('input', calculateFineAggregatePercent);

    function calculateFineAggregatePercent() {
        fine_aggregate_percent.value = ( (parseFloat(mass_passing.value) / parseFloat(mass_total_sample.value) * 100) ).toFixed(1);
    }

    // Coarse Gradation

    retained_150mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_150mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_150mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_106mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_106mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_106mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_53mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_53mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_53mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_37mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_37mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_37mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_53mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_53mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_53mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_37mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_37mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_37mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_26mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_26mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_26mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_19mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_19mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_19mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_16mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_16mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_16mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_13mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_13mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_13mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_9mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_9mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_9mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_4mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_4mm.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_4mm.value = passing.toFixed(1); 

        updateChartData();
    });

    // Fines Gradation

    const fine_aggregate_mass = document.getElementById('fine_aggregate_mass');


    retained_2mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_2mm.value) || 0;
        const totalMass = parseFloat(fine_aggregate_mass.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_2mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_1mm.addEventListener('input', () => {
        const xmass = parseFloat(retained_1mm.value) || 0;
        const totalMass = parseFloat(fine_aggregate_mass.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_1mm.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_600um.addEventListener('input', () => {
        const xmass = parseFloat(retained_600um.value) || 0;
        const totalMass = parseFloat(fine_aggregate_mass.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_600um.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_300um.addEventListener('input', () => {
        const xmass = parseFloat(retained_300um.value) || 0;
        const totalMass = parseFloat(fine_aggregate_mass.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_300um.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_150um.addEventListener('input', () => {
        const xmass = parseFloat(retained_150um.value) || 0;
        const totalMass = parseFloat(fine_aggregate_mass.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_150um.value = passing.toFixed(1); 

        updateChartData();
    });

    retained_75um.addEventListener('input', () => {
        const xmass = parseFloat(retained_75um.value) || 0;
        const totalMass = parseFloat(fine_aggregate_mass.value) || 0;

        const passing = ((totalMass - xmass) / totalMass) * 100;

        passing_75um.value = passing.toFixed(1); 

        updateChartData();
    });

    // Contaminant Analysis

    coated_mass.addEventListener('input', () => {
        const xmass = parseFloat(coated_mass.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const percent = ( xmass / totalMass) * 100;

        coated_percent.value = percent.toFixed(1); 
    });

    glass_ceramic_mass.addEventListener('input', () => {
        const xmass = parseFloat(glass_ceramic_mass.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const percent = ( xmass / totalMass) * 100;

        glass_ceramic_percent.value = percent.toFixed(1); 
    });

    deleterious_mass.addEventListener('input', () => {
        const xmass = parseFloat(deleterious_mass.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const percent = ( xmass / totalMass) * 100;

        deleterious_percent.value = percent.toFixed(1); 
    });

    crushed_concrete_mass.addEventListener('input', () => {
        const xmass = parseFloat(crushed_concrete_mass.value) || 0;
        const totalMass = parseFloat(mass_total_sample.value) || 0;

        const percent = ( xmass / totalMass) * 100;

        crushed_concrete_percent.value = percent.toFixed(1); 
    });

    coated_mass.addEventListener('input', calculateTotalMass);
    glass_ceramic_mass.addEventListener('input', calculateTotalMass);
    deleterious_mass.addEventListener('input', calculateTotalMass);
    crushed_concrete_mass.addEventListener('input', calculateTotalMass);

    function calculateTotalMass() {
        const xmass = ( (parseFloat(coated_mass.value) || 0) + (parseFloat(glass_ceramic_mass.value) || 0) + (parseFloat(deleterious_mass.value) || 0) + (parseFloat(crushed_concrete_mass.value) || 0));
        const totalMass = (parseFloat(mass_total_sample.value)) || 0;

        console.log(xmass, totalMass);

        const percent = ( xmass / totalMass) * 100;

        console.log(percent);

        total_contaminant_mass.value = xmass.toFixed(1)
        total_contaminant_percent.value = percent.toFixed(1); 
    }

    // ----- CREATE THE GRAPH

    const data = {
        labels: ['150 mm', '106 mm', '53.0 mm', '37.5 mm', '26.5 mm', '19.0 mm', '16.0 mm', '13.2 mm', '9.5 mm', '4.75 mm', '2.36 mm', '1.18 mm', '600 um', '300 um', '150 um', '75 um'],
        datasets: [
            {
                label: 'Sample Data',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Specification Points Min',
                data: [], // Add your specification data here
                backgroundColor: 'rgba(255, 100, 255, 1)', // Customize the color of the points
                pointRadius: 5, // Customize the size of the points
                pointHoverRadius: 7, // Customize the size of the points on hover
                type: 'scatter', // Use scatter type for points
            },
            {
                label: 'Specification Points Max',
                data: [], // Add your specification data here
                backgroundColor: 'rgba(255, 0, 0, 1)', // Customize the color of the points
                pointRadius: 5, // Customize the size of the points
                pointHoverRadius: 7, // Customize the size of the points on hover
                type: 'scatter', // Use scatter type for points
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
    
    // Add event listeners to input fields to update % passing chart data
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

    // setting up form variables

    const location = document.getElementById('location');

    const passing150 = document.getElementById('passing_150mm');
    const passing106 = document.getElementById('passing_106mm');
    const passing53 = document.getElementById('passing_53mm');
    const passing37 = document.getElementById('passing_37mm');
    const passing26 = document.getElementById('passing_26mm');
    const passing19 = document.getElementById('passing_19mm');
    const passing16 = document.getElementById('passing_16mm');
    const passing13 = document.getElementById('passing_13mm');
    const passing9 = document.getElementById('passing_9mm');
    const passing4 = document.getElementById('passing_4mm');
    const passing2 = document.getElementById('passing_2mm');
    const passing1 = document.getElementById('passing_1mm');
    const passing600um = document.getElementById('passing_600um');
    const passing300um = document.getElementById('passing_300um');
    const passing150um = document.getElementById('passing_150um');
    const passing75um = document.getElementById('passing_75um');

    const spec150 = document.getElementById('spec_150mm');
    const spec106 = document.getElementById('spec_106mm');
    const spec53 = document.getElementById('spec_53mm');
    const spec37 = document.getElementById('spec_37mm');
    const spec26 = document.getElementById('spec_26mm');
    const spec19 = document.getElementById('spec_19mm');
    const spec16 = document.getElementById('spec_16mm');
    const spec13 = document.getElementById('spec_13mm');
    const spec9 = document.getElementById('spec_9mm');
    const spec4 = document.getElementById('spec_4mm');
    const spec2 = document.getElementById('spec_2mm');
    const spec1 = document.getElementById('spec_1mm');
    const spec600um = document.getElementById('spec_600um');
    const spec300um = document.getElementById('spec_300um');
    const spec150um = document.getElementById('spec_150um');
    const spec75um = document.getElementById('spec_75um');

    const coatedMass = document.getElementById('coated_mass');
    const coatedPercent = document.getElementById('coated_percent');
    const glassCeramicMass = document.getElementById('glass_ceramic_mass');
    const glassCeramicPercent = document.getElementById('glass_ceramic_percent');
    const deleteriousMass = document.getElementById('deleterious_mass');
    const deleteriousPercent = document.getElementById('deleterious_percent');
    const crushedConcreteMass = document.getElementById('crushed_concrete_mass');
    const crushedConcretePercent = document.getElementById('crushed_concrete_percent');

    const chartDataUrl = document.getElementById('myChart').toDataURL('image/png');


    document.getElementById('submit').addEventListener('click', () => {
        
        const documentDefinition = {
            content: [
                { text: 'Two-Step Sample Result Report', fontSize: 16, bold: true, alignment: 'center', margin: [0,20,0,20] },
                { columns: [
                    [],
                    [
                        { text: `Sample #: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                        { text: `Sample Type: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                        { text: `Sample Date: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                        { text: `Sampled By: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                    ],
                    [
                        { text: `${sample_id.value}`, fontSize: 10, margin: [10,0,10,0] },
                        { text: `${sample_type.value}`, fontSize: 10, margin: [10,0,10,0] },
                        { text: `${sample_date.value}`, fontSize: 10, margin: [10,0,10,0] },
                        { text: `${sample_by.value}`, fontSize: 10, margin: [10,0,10,0] },
                    ],
                    [
                        { text: `Material: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                        { text: `Location: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                        { text: `Test Date: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                        { text: `Tested By: ` , fontSize: 10, alignment: 'right', margin: [10, 0, 10, 0] },
                    ],
                    [
                        { text: `${material.value}`, fontSize: 10, margin: [10,0,10,0] },
                        { text: `${location.value}`, fontSize: 10, margin: [10,0,10,0] },
                        { text: `${test_date.value}`, fontSize: 10, margin: [10,0,10,0] },
                        { text: `${test_by.value}`, fontSize: 10, margin: [10,0,10,0] },
                    ],
                    []
                ],

                    widths: ['10%', '10%', '10%', '10%', '10%', '10%',] 
                }, 

                { text: `Moisture Content: ${moisture.value}`, fontSize: 10, alignment: 'center', margin: [0,20,0,20]},

                { text: 'Gradation', fontSize: 12, bold: true, alignment: 'center', margin: [0,0,0,20] },

                {
                    table: {
                        body: [
                            ['Sieve Size', 'Sample Result', 'Specification'],
                            ['150 mm: ', `${passing150.value}`, `${spec150.value}`],
                            ['106 mm: ', `${passing106.value}`, `${spec106.value}`],
                            ['53.0 mm: ', `${passing53.value}`, `${spec53.value}`],
                            ['37.5 mm: ', `${passing37.value}`, `${spec37.value}`],
                            ['26.5 mm: ', `${passing26.value}`, `${spec26.value}`],
                            ['19.0 mm: ', `${passing19.value}`, `${spec19.value}`],
                            ['16.0 mm: ', `${passing16.value}`, `${spec16.value}`],
                            ['13.2 mm: ', `${passing13.value}`, `${spec13.value}`],
                            ['9.5 mm: ', `${passing9.value}`, `${spec9.value}`],
                            ['4.75 mm: ', `${passing4.value}`, `${spec4.value}`],
                            ['2.36 mm: ', `${passing2.value}`, `${spec2.value}`],
                            ['1.18 mm: ', `${passing1.value}`, `${spec1.value}`],
                            ['600 um: ', `${passing600um.value}`, `${spec600um.value}`],
                            ['300 um: ', `${passing300um.value}`, `${spec300um.value}`],
                            ['150 um: ', `${passing150um.value}`, `${spec150um.value}`],
                            ['75 um: ', `${passing75um.value}`, `${spec75um.value}`],
                        ]
                    }
                },

                { text: 'Contaminants Analysis', fontSize: 14, bold: true, alignment: 'center', margin: [0,10,0,20] },

                {
                    table: {
                        body: [
                            [ 'Property', 'Sample Result', 'Specification' ],
                            [ 'Glass or Ceramic', `${glassCeramicMass.value}`, `${glassCeramicPercent.value}` ],
                            [ 'Deleterious', `${deleteriousMass.value}`, `${deleteriousPercent.value}` ],
                            [ 'Asphalt Coated', `${coatedMass.value}`, `${coatedPercent.value}` ],
                            [ 'Crushed Concrete', `${crushedConcreteMass.value}`, `${crushedConcretePercent.value}`],
                        ]
                    }
                },

                { image: chartDataUrl, width: 500 },

                { text: `More information available upon request `, fontSize: 8, margin: [0, 20, 0, 0]},
            ]};

            const pdfDoc = pdfMake.createPdf(documentDefinition);
            pdfDoc.open();
            pdfDoc.download('example.pdf');

        })

    });
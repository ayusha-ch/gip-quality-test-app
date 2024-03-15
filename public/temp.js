const documentDefinition = {
    content: [
      // {
      //     image: 'data:image/png;base64, https://gipi.com/wp-content/uploads/2022/04/GIP_Logo_300x85.png',
      //     width: 100,
      //     absolutePosition: { x :400, y: 10 }
      // },
      // {
      //     image: `data:image/png;base64,${gipLogoData}`, 
      //     width: 100, 
      //     absolutePosition: { x: 10, y: 10 }
      // },

      { text: 'Sample Result Report', fontSize: 14, bold: true, alignment: 'center', margin: [0,10,0,20] },
      {
          columns: [
              [
                  { text: `Sample #: ` , fontSize: 10},
                  { text: `Sample Type: `, fontSize: 10},
                  { text: `Sample Date: `, fontSize: 10},
                  { text: `Sample By: `, fontSize: 10},
              ],
              [
                  { text: `${sampleID}`, fontSize: 10 },
                  { text: `${sampleType}`, fontSize: 10 },
                  { text: `${sampleDate}`, fontSize: 10 },
                  { text: `${sampleBy}`, fontSize: 10 },
              ],
              [
                  { text: `Material: `, fontSize: 10},
                  { text: 'Location: ', fontSize: 10},
                  { text: `Date Tested: `, fontSize: 10},
                  { text: `Test By: `, fontSize: 10},
              ],
              [
                  { text: `${gran_spec}`, fontSize: 10 },
                  { text: `${location}`, fontSize: 10 },
                  { text: `${testDate}`, fontSize: 10 },
                  { text: `${testBy}`, fontSize: 10 },
              ]
          ],

          widths: ['20%', '30%', '20%', '30%']
      },

      {
          columns: [
              [
                  { text: `Moisture Content: `, fontSize: 10},
              ],
              [
                  {text:`${moisture}`}
              ],
          ],
          widths: ['50%', '50%']
      },

      { text: 'Gradation', fontSize: 12, bold: true, alignment: 'center', margin: [0,50,0,20] },

      {
          columns: [
              [
                  { text: `150 mm: `, fontSize: 10},
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
                  { text: `${passing150}`, fontSize: 10},
                  { text: ` ${passing106}`, fontSize: 10},
                  { text: `${passing53}`, fontSize: 10},
                  { text: `${passing37}`, fontSize: 10},
                  { text: `${passing26}`, fontSize: 10},
                  { text: `${passing19}`, fontSize: 10},
                  { text: `${passing16}`, fontSize: 10},
                  { text: `${passing13}`, fontSize: 10},
                  { text: `${passing9}`, fontSize: 10},
                  { text: `${passing4}`, fontSize: 10},
                  { text: `${passing2}`, fontSize: 10},
                  { text: `${passing1}`, fontSize: 10},
                  { text: `${passing600um}`, fontSize: 10},
                  { text: `${passing300um}`, fontSize: 10},
                  { text: `${passing150um}`, fontSize: 10},
                  { text: `${passing75um}`, fontSize: 10},
              ]
          ],
          widths: ['50%', '50%']
      },

      // { text: 'Line Chart to PDF', fontSize: 16, alignment: 'center' },
          { image: chartDataUrl, width: 400 },

          { text: `More information available upon request `, fontSize: 12, margin: [0, 20, 0, 0]},
    ]
  };
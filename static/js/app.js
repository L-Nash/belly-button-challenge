//set URL variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";



//---------------------------filter so starting ID = the data row
function makeMetaData(selectedID){
  d3.json(url).then((data)=>{

    // --------------------------- use metadata to populate demo data
    let demoData = data.metadata;
    for (let i = 0; i < demoData.length; i++) {
      let demo = demoData[i]
      if ( demo.id == selectedID ) {

        let panel = d3.select(".panel-body");
        panel.html("");
       

        for (const [key, value] of Object.entries(demo)) {
          let text = `${key}: ${value}`;
          panel.append("h6").text(text);
        }
      }
    }
  })
}




// Establish the Promise
// const dataPromise = d3.json(url);
 //----------------------Set up starting ID
// let selectedID = 940;
function init(){
// Get JSON data and log to console
// let data = dataPromise.then(function(data) {
//   console.log(data.names);
//   console.log(data.samples);
// });
//----------------------------- link IDS to dropdonw

  // // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
  d3.json(url).then((data)=>{
    let PatientIDs = data.names;
    // Loop though options and append to to dropdown
    PatientIDs.forEach((ID)=>{
      dropdownMenu.append("option").attr("value", ID).text(ID);
    })
    let initialID = PatientIDs[0];
    // makePlots(initialID);
    makeMetaData(initialID);

  })
 
}

function optionChanged(selectedID) {
  makeMetaData(selectedID);
  // MakePlots(selectedID);

}



//---------bar chart

// d3.json(url).then((data)=>{

//   // d3.selectAll(".col-md-5").append("div").attr("class", "panel panel-primary");
//   d3.select("#bar").attr("class", "panel-body");
//   d3.select("#gauge").attr("class", "panel-body");

//   let sampleData = data.samples;
//   let otuIds = [];
//   let sampleValues = [];

//   for (let i = 0; i < sampleData.length; i++) {

//     let selectedSample = sampleData[i];
//     if (selectedSample.id == selectedID ) {
//       otuIds.push(selectedSample.otu_ids)
//       sampleValues.push(selectedSample.sample_values)
//       console.log(otuIds)
//       console.log(sampleValues)};
// }})

//   let trace1 = {
//     x: otuIds,
//     y: sampleValues
//   };
  
//   let chartData = [trace1];
  
//   let layout = {
//     title: `Top 10 OTUs for ${sampleData.id}`,
    
//   };
  
// let barPlot = Plotly.newPlot("plot", chartData, layout);

//  d3.select("#bar").append(barPlot);


init();
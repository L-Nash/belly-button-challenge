//set URL variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Establish the Promise
const dataPromise = d3.json(url);

// Get JSON data and log to console
let data = dataPromise.then(function(data) {
  console.log(data.names);
  console.log(data.samples);
});
//----------------------------- link IDS to dropdonw

  // // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  d3.json(url).then((data)=>{
    console.log(data.metadata)
  let PatientIDs = data.names
  // Loop though options and append to to dropdown
  PatientIDs.forEach((ID)=>{
    dropdownMenu.append("option").text(ID)
  })
  })
 


//---------------------------filter so starting ID = the data row
d3.json(url).then((data)=>{

// function selectDemo(each) {
//   return each.id == selectedID;
// }

// --------------------------- use metadata to populate demo data
let demoData = data.metadata;
 //----------------------Set up starting ID
let selectedID = 940;

for (let i = 0; i < 100; i++) {
  let demo = demoData[i]
  if ( demo.id == selectedID ) {


  age = Object.entries(demoData)
  console.log(age);
  

  
    
  // Calling the function
  // let demoInfo = demoData.filter(selectDemo);

  // test = JSON.stringify(demo); 
  
  // Need to extract key value pairs - this won't work...
  d3.select(".panel-body").append("p").text(demoData[i])
  // d3.select(".panel-body").append("li").text(demo.ethnicity)
  // d3.select(".panel-body").append("li").text(demo.gender)
  // d3.select(".panel-body").append("li").text(demo.age)
  // d3.select(".panel-body").append("li").text(demo.location)
  // d3.select(".panel-body").append("li").text(demo.bbtype)
  // d3.select(".panel-body").append("li").text(demo.wfreq)
  // ;


  
 
  
}}


})



//---------OR 

// let demo = demoData.map((item,index) => `id ${index}`);
// console.log(demo);

//-----------OR

// function demo(patient) {
//   return patient.id === selectedID;
// };
// d3.json(url).then((data)=>{
// for (let i = 0; i < 20; i++) {
// let filteredData = demoData.filter(a => a.id == selectedID)};}





// let mapArrow3 = data.map((item, index) => `Stage ${index}: ${item}`);

// console.log("Arrow3:", mapArrow3);

//-----------------------code what to do when new number is selected by user
// use samples to create for loop to update bar chart, bubble, gauge and 

// use metadata to populate demo data;
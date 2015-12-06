document.addEventListener("DOMContentLoaded", function(event) {
  //install wordcloud
  var allTakut = wordCloud("allTakut")
  var maleTakut = wordCloud("maleTakut")
  var femaleTakut = wordCloud("femaleTakut")
  allTakut.draw(data.takut_count_struct)
  maleTakut.draw(data.takut_gender_count_struct[0])
  femaleTakut.draw(data.takut_gender_count_struct[1])
  //highcharts
  /*var pandangan_chart = pieLevelChart("pandangan", "Apakah cantik hanya dari pandangan ?", data.pandangan_count, data.pandangan_gender_count)
  var cantikgak_bubble = bubbleChart("cantikgak_bubble", "Jika kamu cantik: ya atau tidak ?", data.cantikgak_bubble)*/
  // console.log("DOM fully loaded and parsed");
});

var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("4.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  
  d3.select('#title').text(iJS._("Eficacia del tratamiento antiparasitario"));

  d3.selectAll('#line_0').on("mouseover", function() {
    d3.selectAll('#line_0').classed("active",true)
  })
  d3.selectAll('#line_0').on("mouseout", function() {
    d3.selectAll('#line_0').classed("active",false)
  })
  d3.selectAll('#man').on("mouseover", function() {
    d3.selectAll('#line_0').classed("active",true)
  })
  d3.selectAll('#man').on("mouseout", function() {
    d3.selectAll('#line_0').classed("active",false)
  })
  d3.selectAll('#vinchuca').on("mouseover", function() {
    d3.selectAll('#line_0').classed("active",true)
  })
  d3.selectAll('#vinchuca').on("mouseout", function() {
    d3.selectAll('#line_0').classed("active",false)
  })

  d3.selectAll('#line_1').on("mouseover", function() {
    d3.selectAll('#line_1').classed("active",true)
  })
  d3.selectAll('#line_1').on("mouseout", function() {
    d3.selectAll('#line_1').classed("active",false)
  })
  d3.selectAll('#line_2').on("mouseover", function() {
    d3.selectAll('#line_2').classed("active",true)
  })
  d3.selectAll('#line_2').on("mouseout", function() {
    d3.selectAll('#line_2').classed("active",false)
  })
  d3.selectAll('#line_3').on("mouseover", function() {
    d3.selectAll('#line_3').classed("active",true)
  })
  d3.selectAll('#line_3').on("mouseout", function() {
    d3.selectAll('#line_3').classed("active",false)
  })


  d3.selectAll('#woman').on("mouseover", function() {
    d3.selectAll('#line_1').classed("active",true)
    d3.selectAll('#line_2').classed("active",true)
    d3.selectAll('#line_3').classed("active",true)
  })
  d3.selectAll('#woman').on("mouseout", function() {
    d3.selectAll('#line_1').classed("active",false)
    d3.selectAll('#line_2').classed("active",false)
    d3.selectAll('#line_3').classed("active",false)
  })
  

  d3.selectAll('#embarazo').on("mouseover", function() {
    d3.selectAll('#line_1').classed("active",true)
  })
  d3.selectAll('#embarazo').on("mouseout", function() {
    d3.selectAll('#line_1').classed("active",false)
  })
  d3.selectAll('#organo').on("mouseover", function() {
    d3.selectAll('#line_2').classed("active",true)
  })
  d3.selectAll('#organo').on("mouseout", function() {
    d3.selectAll('#line_2').classed("active",false)
  })
  d3.selectAll('#sangre').on("mouseover", function() {
    d3.selectAll('#line_3').classed("active",true)
  })
  d3.selectAll('#sangre').on("mouseout", function() {
    d3.selectAll('#line_3').classed("active",false)
  })  

});

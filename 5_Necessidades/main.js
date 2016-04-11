
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("5.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  
  d3.select('#title').text(iJS._("Necesidades en I+D"));
  d3.select('#tbox1a').text(iJS._("Mejores herramientas de diagnóstico:"));
  d3.select('#tbox1b').text(iJS._("más simples, más sensibles y más específicas"));
  d3.select('#tbox2a').text(iJS._("Nuevos medicamentos o mejores combinaciones:"));
  d3.select('#tbox2b').text(iJS._("para los pacientes crónicos adultos"));
  d3.select('#tbox3a').text(iJS._("Desarrollo de biomarcadores:"));
  d3.select('#tbox3b').text(iJS._("para saber si un paciente responde al tratamiento y/o se ha curado"));
  d3.select('#fuente').text(iJS._("Fuente: Coalición Global de la Enfermedad de Chagas: Rompiendo el Silencio, una oportunidad para los pacientes de Chagas."));

  
  d3.selectAll('#box1').on("mouseover", function() {
    d3.selectAll('#box1').classed("active",true)
  })
  d3.selectAll('#box1').on("mouseout", function() {
    d3.selectAll('#box1').classed("active",false)
  })

  d3.selectAll('#box2').on("mouseover", function() {
    d3.selectAll('#box2').classed("active",true)
  })
  d3.selectAll('#box2').on("mouseout", function() {
    d3.selectAll('#box2').classed("active",false)
  })

  d3.selectAll('#box3').on("mouseover", function() {
    d3.selectAll('#box3').classed("active",true)
  })
  d3.selectAll('#box3').on("mouseout", function() {
    d3.selectAll('#box3').classed("active",false)
  })    


});


var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("1.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("Las cifras de la enfermedad del Chagas"));
  d3.select('.riesgo1').text(iJS._("25.000.000"));
  d3.select('.riesgo2').text(iJS._("de personas en riesgo"));

  d3.select('.infectadas1').text(iJS._("6.000.000"));
  d3.select('.infectadas2').text(iJS._("personas infectadas"));

  d3.select('.nosaben1').text(iJS._("más de 5.000.000"));
  d3.select('.nosaben2').text(iJS._("de personas infectadas"));
  d3.select('.nosaben3').text(iJS._("no saben que tienen la enfermedad"));

  d3.select('.tratamiento1').text(iJS._("menos de 100.000"));
  d3.select('.tratamiento2').text(iJS._("personas infectadas"));
  d3.select('.tratamiento3').text(iJS._("reciben el tratamiento adecuado"));.3

  d3.select('.legend1').text(iJS._("Países con Chagas endémico"));
  d3.select('.legend2').text(iJS._("Paises con Chagas no endémico"));

  d3.select('.source').text(iJS._("Fuente: Coalición Global de la Enfermedad de Chagas: Rompiendo el Silencio, una oportunidad para los pacientes de Chagas."));

  // d3.select('.legend.malaria').text(iJS._("Malaria"));
  // d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));


  d3.select('#rect1')
  var r1= d3.select('#rect1').node().getBBox();

  d3.select('svg').append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", r1.width)
    .attr("height", r1.height);

  // d3.select('#rect1').attr("clip-path", "url(#clip)")

});

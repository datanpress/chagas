
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("2.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("El coste del Chagas"));
  d3.select('.source').text(iJS._("Fuente: Coalición Global de la Enfermedad de Chagas: Rompiendo el Silencio, una oportunidad para los pacientes de Chagas."));
  d3.select('.text1').text(iJS._("162 millones de dólares"));
  d3.select('.text2').text(iJS._("inversión en I+D en 10 años"));
  d3.select('.text3').text(iJS._("(2003 a 2013)"));
  d3.select('.text4').text(iJS._("7.200 millones de dólares"));
  d3.select('.text5').text(iJS._("Coste económico anual"));
  d3.select('.text1').text(iJS._("162 millones de dólares"));

  // d3.select('.legend.malaria').text(iJS._("Malaria"));
  // d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));

});


var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}



d3.xml("3.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate
  d3.select('.title').text(iJS._("Eficacia del tratamiento antiparasitario"));
  d3.select('.text1').text(iJS._("NEONATO"));
  d3.select('.text2').text(iJS._("JOVEN"));
  d3.select('.text3').text(iJS._("ADULTO CON"));
  d3.select('.text4').text(iJS._("INFECCIÓN AGUDA"));
  d3.select('.text5').text(iJS._("ADULTO CRÓNICO "));
  d3.select('.text6').text(iJS._("TEMPRANO"));

  d3.select('.text7').text(iJS._("ADULTO CRÓNICO"));
  d3.select('.text8').text(iJS._("CON ALTERACIONES"));
  d3.select('.text9').text(iJS._("CARDIACAS AVANZADAS"));

  d3.select('.text10').text(iJS._("Urge desarrollar nuevos"));
  d3.select('.text11').text(iJS._("tratamientos"));


  d3.select('.source').text(iJS._("Fuente: Coalición Global de la Enfermedad de Chagas: Rompiendo el Silencio, una oportunidad para los pacientes de Chagas."));
  // d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));

  d3.selectAll('.neonato').on("mouseover", function() {
    d3.selectAll('.neonato').classed("active",true)
  })
  d3.selectAll('.neonato').on("mouseout", function() {
    d3.selectAll('.neonato').classed("active",false)
  })

  d3.selectAll('.joven').on("mouseover", function() {
    d3.selectAll('.joven').classed("active",true)
  })
  d3.selectAll('.joven').on("mouseout", function() {
    d3.selectAll('.joven').classed("active",false)
  })

  d3.selectAll('.aguda').on("mouseover", function() {
    d3.selectAll('.aguda').classed("active",true)
  })
  d3.selectAll('.aguda').on("mouseout", function() {
    d3.selectAll('.aguda').classed("active",false)
  })

  d3.selectAll('.temprano').on("mouseover", function() {
    d3.selectAll('.temprano').classed("active",true)
  })
  d3.selectAll('.temprano').on("mouseout", function() {
    d3.selectAll('.temprano').classed("active",false)
  })

  d3.selectAll('.alteraciones').on("mouseover", function() {
    d3.selectAll('.alteraciones').classed("active",true)
  })
  d3.selectAll('.alteraciones').on("mouseout", function() {
    d3.selectAll('.alteraciones').classed("active",false)
  })

});

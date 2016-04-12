
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

  d3.select('#title').text(iJS._("Obstáculos para frenar la transmisión"));
  d3.select('#centraltext').text(iJS._("FALTA DE DIAGNÓSTICO"));
  d3.select('#vectortext1').text(iJS._("Picadura"));
  d3.select('#vectortext2').text(iJS._("Contaminación"));
  d3.select('#vectortext3').text(iJS._("DE BEBIDAS O ALIMENTOS"));
  d3.select('#wtitle1').text(iJS._("TRANSMISIÓN"));
  d3.select('#wtitle2').text(iJS._("NO VECTORIAL"));
  d3.select('#mtitle1').text(iJS._("TRANSMISIÓN "));
  d3.select('#mtitle2').text(iJS._("POR VECTOR"));
  d3.select('#mcount1').text(iJS._("PAÍSES ENDEMICOS"));
  d3.select('#mcount2').text(iJS._("PAÍSES ENDÉMICOS Y NO ENDÉMICOS"));
  d3.select('#rtext1').text(iJS._("EMBARAZO"));
  d3.select('#rtext2').text(iJS._("SIN TRATAMIENTO PREVIO"));
  d3.select('#rtext3').text(iJS._("DONACIÓN DE SANGRE"));
  d3.select('#rtext4').text(iJS._("SIN CRIBAR"));
  d3.select('#rtext5').text(iJS._("DONACIÓN DE ÓRGANOS"));
  d3.select('#rtext6').text(iJS._("SIN CRIBAR"));
  d3.select('#ltext1').text(iJS._("VINCHUCA"));
  d3.select('#ltext2').text(iJS._("REISTENCIA A"));
  d3.select('#ltext3').text(iJS._("INSECTICIDAS"));
  d3.select('#fuente').text(iJS._("Fuente: Coalición Global de la Enfermedad de Chagas: Rompiendo el Silencio, una oportunidad para los pacientes de Chagas."));


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

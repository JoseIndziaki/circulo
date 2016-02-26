$(function(){
	var cont = 1;
    $("#siguiente").click(function(){
    	console.log(cont);
    	separar(cont++);
    }); 
    $("#g9").click(function() {
      window.location = "http://anahuac.blackboard.com/webapps/blackboard/content/launchLink.jsp?course_id=_91308_1&toc_id=_163765_1&mode=cpview&mode=reset";
    });
    $("#g8").click(function() {
      window.location = "http://anahuac.blackboard.com/webapps/blackboard/content/launchLink.jsp?course_id=_91308_1&toc_id=_151682_1&mode=cpview&mode=reset";
    });
    $("#g7").click(function() {
      window.location = "http://anahuac.blackboard.com/webapps/blackboard/content/launchLink.jsp?course_id=_91308_1&toc_id=_151685_1&mode=cpview&mode=reset";
    });
    $("#g5").click(function() {
      window.location = "http://anahuac.blackboard.com/webapps/blackboard/content/launchLink.jsp?course_id=_91308_1&toc_id=_163762_1&mode=cpview&mode=reset";
    });
});
function separar(num){
	var t = num*150;
    var svgNS = "http://www.w3.org/2000/svg";
	var h = "translate(0px, -"+t+"px)";
    var contenido = '';
    $("#contenido").css("display",'none');
    if (num>4) { window.location = 'http://anahuac.blackboard.com/webapps/blackboard/content/listContent.jsp?course_id=_91308_1&content_id=_564683_1&mode=reset'}
    if(num<5){
        $("#g9").css("-webkit-transform",h);
        var newText = document.createElementNS(svgNS,"text");
        newText.setAttributeNS(null,"position","absolute");
        newText.setAttributeNS(null,"x",320);
        newText.setAttributeNS(null,"y",-40);
        var textNode = document.createTextNode("Y todo se refuerza y soporta con");
        newText.appendChild(textNode);
        if(num == 4)document.getElementById("g5").appendChild(newText);
        contenido = "<h2>Lo que sucede alrededor del aula</h2><img src='https://raw.githubusercontent.com/JoseIndziaki/nova-nuevo/master/img/alumno/a3.png'>"
        if(num == 4)$("#contenido").html(contenido);
        if(num == 4)$("button").html("INICIAR");
    }   
    if(num<4){
        $("#g7").css("-webkit-transform",h);
        var newText = document.createElementNS(svgNS,"text");
        newText.setAttributeNS(null,"position","absolute");
        newText.setAttributeNS(null,"x",390);
        newText.setAttributeNS(null,"y",230);
        var textNode = document.createTextNode("Se ejecuta con");
        newText.appendChild(textNode);
        if(num == 3)document.getElementById("g5").appendChild(newText);
        contenido = "<h2>Lo que sucede en aula</h2><img src='http://rawgit.com/JoseIndziaki/nova-nuevo/master/img/alumno/metacognicion.png'>"
        if(num == 3)$("#contenido").html(contenido);
    }
    if(num<3){
        $("#g8").css("-webkit-transform",h);
        var newText = document.createElementNS(svgNS,"text");
        newText.setAttributeNS(null,"position","absolute");
        newText.setAttributeNS(null,"x",330);
        newText.setAttributeNS(null,"y",500);
        var textNode = document.createTextNode("Se plasma y concreta en el");
        newText.appendChild(textNode);
        if(num == 2)document.getElementById("g5").appendChild(newText);
        contenido = "<h2>Modelo Educativo</h2><img style='width:200px' src='http://rawgit.com/JoseIndziaki/nova-nuevo/master/img/modelo.svg'>"
        if(num == 2) $("#contenido").html(contenido);
    }
    if(num<2){
        $("#g5").css("-webkit-transform",h);
        contenido = "<h2>Carácter + Competencia + Valores</h2><img src='https://raw.githubusercontent.com/JoseIndziaki/nova-nuevo/master/img/alumno/a3.png'><img src='http://rawgit.com/JoseIndziaki/nova-nuevo/master/img/comp3.svg'>"
        $("#contenido").html(contenido);
    }
    $("#contenido").fadeIn(500);
}
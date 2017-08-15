<?php include 'recursos/header.php'; ?>

<SCRIPT><!--
var name=prompt("Por favor, introduce tu nombre","")
// -->
</SCRIPT>

<SCRIPT language=JavaScript>

function quiz() {
        var i = 0
	var total=document.forms.length-1
	var ncorrect=0
	var response=new Array(total)	
	var theForms=new Array(total)
	var answer=new Array(total)
		  
	for (i=1; i<=total;i++)
	theForms[i]=document.forms[i-1]

	for (i=1; i <= total; i++) 
   	response[i]=theForms[i].answer.selectedIndex  
												
	for (i=1; i<=total;i++)
	answer[i]=theForms[i].correct.value
	
	var flag=true
	for (i=1; i <= total; i++) 
   			if (response[i]==0) {
alert("Atención: no has contestado la pregunta #"+i+"")
	flag=false
	}										
if (flag) { 
for (i=1; i <= total; i++) 
if (response[i]==answer[i]) ncorrect++
												document.total.score.value = ncorrect
var per =  Math.round((ncorrect / total) * 100) 
document.total.percent.value = per 
document.total.outof.value=total
								 
} //end if (flag)
				 
}
// -->
</SCRIPT>

<div align=center>
<font face="Arial" size="3">

Hola <B><SCRIPT language=Javascript><!--
document.write(name);
// -->
</SCRIPT></B>, contesta a las siguientes preguntas:

<br><br>

<!-------- PRIMA DOMANDA -------------->

<FORM action=esempio.htm method=post name=form1>

<font face="Arial" size="2"><b>¿Cuál de estos es una lenguaje de programación? </b></font><br><br>

<SELECT name=answer size=1>
<OPTION selected value=0>         
<OPTION value=1> 1. Youtube
<OPTION value=2> 2. PHP
<OPTION value=3> 3. Facebook
<OPTION value=4> 4. Servidor
<OPTION value=5> 5. Plataforma
</OPTION>
</SELECT>
<INPUT name=correct size=4 type=hidden value=2> 
</FORM>


<hr size="1" width="400" color="gray" noshade>


<!-------- SECONDA DOMANDA -------------->

<FORM action=esempio.htm method=post name=form1>

<font face="Arial" size="2"><b>¿PHP se ejecuta en el?</b></font><br><br>

<SELECT name=answer size=1>
<OPTION selected value=0>         
<OPTION value=1> 1. Navegador
<OPTION value=2> 2. Modem
<OPTION value=3> 3. Servidor
<OPTION value=4> 4. Google
<OPTION value=5> 5. Hotbot
</OPTION>
</SELECT>
<INPUT name=correct size=5 type=hidden value=3> 
</FORM>


<hr size="1" width="400" color="gray" noshade>


<!-------- TERZA DOMANDA -------------->


<FORM action=esempio.htm method=post name=form1>

<font face="Arial" size="2"><b>¿Que hace este operador * ?</b></font><br><br>

<SELECT name=answer size=1>
<OPTION selected value=0>         
<OPTION value=1> 1. Sumar
<OPTION value=2> 2. Dividir
<OPTION value=3> 3. Multiplicar
<OPTION value=4> 4. Restar
<OPTION value=5> 5. Incrementar
</OPTION>
</SELECT>
<INPUT name=correct size=4 type=hidden value=3> 
</FORM>

<br>

<FORM action=TriviaQuiz.html method=post name=total>
<INPUT name=Button onclick=quiz() type=button value="Para el resultado, haz clic aquí">

<br><br>

<B><SCRIPT language=Javascript><!--
document.write(name);
// -->
</SCRIPT></B>: has contestado correctamente a <INPUT name=score size=2> preguntas de un total de <INPUT name=outof size=2><br><br>
Has obtenido un porcentaje de calificación del <INPUT name=percent size=2>%
<BR><br>

</font>
</div>
<div class="row">
    <div class="col-xs-12 col-md-12 footercla">
      <p class="bg-primary" style="text-align: center; padding: 8px;">Desarrollado por: Delvis Tovar & Popdeztroy 2017 </p>
    </div>
</div>
<?php include 'recursos/modal.php' ?>
<?php include 'recursos/footer.php'; ?>
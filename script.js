//----> Só ir fazendo a chamada de cada questão: questao 1 é q1, a segunda q2 ... e assim vai
function q1(){
//1ª
	//A)
		document.getElementById('letraAzul').style="color: blue;"
	//B)
		//Como eu queria executar
		document.getElementById('terceiro').previousSibling.style = "font-weight:bold;";
		
		//"Gambiarra"
		document.getElementById('segundo').previousElementSibling.style = "font-weight:bold;";
		document.getElementById('terceiro').previousElementSibling.style = "font-weight:bold;";
	//C)
		document.getElementById('quinto').parentNode.style="border: dashed 1px pink;";
	//D)
		const pai = document.getElementById('quinto').parentNode;
		pai.previousElementSibling.style="color: red;";
}

function q2(){
//2ª
	const quant = prompt("Quantidade para a matriz NxN");	
	let vet = new Array(),vet2 = new Array();
	for (let i = 0; i < quant; i++) {
		for (let j = 0; j <= quant; j++) {
			vet[i] = i;
			vet2[j] = j;
		}
	}
	for (i = 0; i < quant; i++) {		
		for (let j = 0; j < quant; j++) {
			document.write("<label style='border: solid 1px black;'>"+vet[i]+"  "+vet2[j]+"</label>");
		}
		document.write("<br>");
	}
	
}

function q3(){
//3ª
	const quant = prompt("Quantidade para a matriz NxN");	
	let vet = new Array(),vet2 = new Array();
	for (let i = 0; i < quant; i++) {
		for (let j = 0; j <= quant; j++) {
			vet[i] = i;
			vet2[j] = j;
		}
	}

	for (i = 0; i < quant; i++) {		
		for (let j = 0; j < quant; j++) {
			if(i == j){
				document.write("<label class='diag1'>"+vet[i]+"  "+vet2[j]+"</label>");
			}else{
				document.write("<label style='border: solid 1px black;'>"+vet[i]+"  "+vet2[j]+"</label>");
			}
		}
		document.write("<br>");
	}
	let labels = document.getElementsByClassName("diag1");
	for (let i = 0; i < labels.length; i++) {
		labels[i].style="color: orange;border: solid 1px orange";
	}	
}

//4ª
function q4(){
	const quant = prompt("Quantidade para a matriz NxN");	
	let vet = new Array(),vet2 = new Array();
	for (let i = 0; i < quant; i++) {
		for (let j = 0; j <= quant; j++) {
			vet[i] = i;
			vet2[j] = j;
		}
	}
	for (i = 0; i < quant; i++) {		
		for (j = 0; j < quant; j++) {
			if((i+j) == quant-1){
				document.write("<label class='diag2'>"+vet[i]+"  "+vet2[j]+"</label>");
			}else{
				document.write("<label style='border: solid 1px black;'>"+vet[i]+"  "+vet2[j]+"</label>");
			}
		}
		document.write("<br>");
	}
	let labels2 = document.getElementsByClassName("diag2");
	for (let i = 0; i < labels2.length; i++) {
		labels2[i].style="color: orange;border: solid 1px orange";
	}
}


//5ª
//a)SIM, será null. Pois ao trazer seu último filho, a função tenta trzer seu último irmão, porém não existente pois na situação o elemento é filho único
//b)SIM, será null. Como foi pego o primeiro elemento da lista e tenta se usar uma função previousSibling, que busca o anterior, acaba-se por ter um null pois não existe elem.children[-1]


//6º Primeiramente não iria ser considerado uma função válida, já que o modo d e trabalhar com camadas é através de funções. Segundo que o jeito mais correto são com funções de coleta de tags filhas


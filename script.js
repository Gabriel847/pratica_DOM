function q1(){
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
//2º
	const quant = prompt("Quantidade para a matriz NxN");	
	let matriz = new Array();
	for (let i = 0; i <= quant; i++) {
		for (let j = 0; j <= quant; j++) {
			matriz = [[i],[j]];
		}
	}

	for (let i = 0; i <= quant; i++) {
		for (let j = 0; j <= quant; j++) {
			matriz = [[i],[j]];
		}
	}
	
}

q2()

	
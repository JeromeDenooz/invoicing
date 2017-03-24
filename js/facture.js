function addclient() {

	var client = document.formclient.nomclient.value,
		location = document.getElementsByClassName("tdInfoClient"),
		divclient = document.getElementsByClassName("infoclient"),
		facture = document.getElementById("listOfTask");

	if (client=='newclient') {
		var popup=document.getElementsByClassName("popupclient");
		popup[0].style.display="block";
	} else {
		var formclient = document.getElementsByClassName("formclientcl");

		location[0].innerHTML = client;
		location[1].innerHTML = "Rue et numéro de "+client;
		location[2].innerHTML = "Code postal + ville de "+client;
		divclient[0].style.visibility = "visible";
		formclient[0].style.display = "none";
		facture.style.display = "block";
	}
	return false;
}

function submitclient() {
	var name = document.getElementById("name").value,
		rue = document.getElementById("rue").value,
		codep = document.getElementById("codep").value,
		city = document.getElementById("city").value,
		country = document.getElementById("pays").value,
		tel = document.getElementById("tel").value,
		popup = document.getElementsByClassName("popupclient"),
		facture = document.getElementById("idfacture"),
		location = document.getElementsByClassName("tdinfoclient"),
		divclient = document.getElementsByClassName("infoclient"),
		formclient = document.getElementsByClassName("formclientcl");

	if (name=="" || rue=="" || codep=="" || city=="" || country=="") {
		alert("Veuillez remplir les 6 premiers champs correctement");
	} else {
		location[0].innerHTML=name;
		location[1].innerHTML=rue;
		location[2].innerHTML=codep+" "+city;
		divclient[0].style.visibility="visible";
		popup[0].style.display="none";
		formclient[0].style.display="none";
		facture.style.display="block";
	}
	return false;
}

function closepopup() {
	var popup=document.getElementsByClassName("popupclient");
	popup[0].style.display="none";
	return false;
}


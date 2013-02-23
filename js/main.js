/*
VFW Project 2
David Clark
02/17/13
*/

window.addEventListener("DOMContentLoaded", function(){

	function $(x){
		var theInput = document.getElementById(x);
		return theInput;
	}
	
		function createWeapons (){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			createSelect = document.createElement('select');
			createSelect.setAttribute("id", "weaponChoices");
		for (var i=0, j=weaponChoices.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = weaponChoices[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			createSelect.appendChild(makeOption);
		}
		selectLi.appendChild(createSelect);
	}
	
		function getGrenadeValue (){
		if($('grenade').checked){
			grenadeValue = $('grenade').value;
		}else{
			grenadeValue = "No";
		}
	}
	
		function getFoodValue (){
		if($('food').checked){
			foodValue = $('food').value;
		}else{
			foodValue = "No";
		}
	}
	
		function getDrinkValue (){
		if($('drink').checked){
			drinkValue = $('drink').value;
		}else{
			drinkValue = "No";
		}
	}
	
		function getMedicineValue (){
		if($('medicine').checked){
			medicineValue = $('medicine').value;
		}else{
			medicineValue = "No";
		}
	}
	
	function storeLoadout (){
		var keyGen					= Math.floor(Math.random()*100001);
		getGrenadeValue();
		getFoodValue();
		getDrinkValue();
		getMedicineValue();
		var loadout					= {};
			loadout.name			= ["Loadout Creator:", $('name').value];
			loadout.gearName		= ["Loadout Name:", $('gearName').value];
			loadout.dateAdded		= ["Creation Date:", $('dateAdded').value];
			loadout.weaponChoices	= ["Weapon Choice:", $('weaponChoices').value];
			loadout.magAmount		= ["Magazine Quanity:", $('magAmount').value];			
			loadout.grenade			= ["Grenade?", grenadeValue];
			loadout.food			= ["Food?", foodValue];
			loadout.drink			= ["Drink?", drinkValue];
			loadout.medicine		= ["Medicine?", medicineValue];
			loadout.comments		= ["Comments:", $('comments').value];
		localStorage.setItem(keyGen, JSON.stringify(loadout));
		alert("Loadout has been saved.");
	}
	
	function toggleNavControls (n){
		switch(n){
			case "on":
				$('addGear').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNewLoadout').style.display= "inline";
				break;
			case "off":
				$('addGear').style.display = "blocl";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNewLoadout').style.display= "none";
				$('items').style.display = "display";
				break;
			default:
				return false;
		}
	}
	
	function getLoadouts (){
		toggleNavControls("on");
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, j=localStorage.length; i<j;i++){
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
			}
		}
	}
	
	function clearLoadouts (){
		if(localStorage.length === 0){
			alert("There are no saved loadouts to delete.");
		}else{
			localStorage.clear();
			alert("All loadouts have been deleted.");
			window.location.reload();
			return false;
		}
	}
	
	var weaponChoices = [
		"--Select a Weapon--",
		"Compound Crossbow",
		"M1014",
		"Remington 870",
		"Double-barreled Shotgun",
		"Winchester 1866",
		"Bizon PP-19 SD",
		"MP5A5",
		"MP5SD6",
		"AK-74",
		"AKS-74",
		"AKS-74U",
		"L85A2 AWS",
		"M4A1",
		"M4A1 CCO",
		"M4A1 CCO SD",
		"M4A1 Holo",
		"M4A3 CCO",
		"M16A2",
		"M16A2 M203",
		"M16A4 ACOG",
		"AKM",
		"Lee Enfield",
		"FN FAL",
		"FN FAL AN/PVS4",
		"M249 SAW",
		"M240",
		"Mk 48 Mod 0",
		"CZ 550",
		"DMR",
		"M14 AIM",
		"M24",
		"SVD Camo",
		"M107",
		"AS50",
		"M136"
	],
		grenadeValue = "No",
		foodValue = "No",
		drinkValue = "No",
		medicineValue = "No";
	
	createWeapons();

	
	
	var clearDataLink = $("clear");
	clearDataLink.addEventListener("click", clearLoadouts);
	
	var displayDataLink = $('displayLink');
	displayDataLink.addEventListener("click", getLoadouts);
	
	var submit = $('submit');
	submit.addEventListener("click", storeLoadout);
	



	
});

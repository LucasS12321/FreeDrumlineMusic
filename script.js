const cadenceCanvas = document.querySelector("#cadenceCanvas");

function showCadence(type, cadence){
	sessionStorage.setItem("pdfname", type + "/" + cadence + ".pdf");
	sessionStorage.setItem("mp3name", type + "/Audio/" + cadence + ".mp3");
	window.location.href = "viewMedia.html";
}

let warmups = {
    "Sixteen Clicks" : {"Level" : 1, "Image" : "https://blog.robly.com/wp-content/uploads/2017/10/bigstock-Click-hand-icon-click-hand-i-121570961.jpg"}
};

function loadWarmups(){

	loadSongs("DrumlineWarmups", warmups);
}

let trashline = {
    "Bald 2" : {"Level" : 2, "Image" : "Images/BobRoss.JPG"},
    "Hot Garbage" : {"Level" : 1, "Image" : "https://cdn.abcotvs.com/dip/images/1275820_photodune-3595415-garbage-m.jpg?w=1280&r=16%3A9"},
    "Kitchen" : {"Level" : 2, "Image" : "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&w=1000&q=80"},
    "Primitivo" : {"Level" : 2, "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrgog2a_tkbYdSTl3I4qyEB-otGOlPv7Rrw&usqp=CAU"},
    "Smooth Groove" : {"Level" : 2, "Image" : "https://f4.bcbits.com/img/0025556617_0"},
    "Warmup" : {"Level" : 3, "Image" : "https://media.istockphoto.com/vectors/set-of-morning-exercises-men-and-women-warming-up-vector-id1148123949?k=20&m=1148123949&s=612x612&w=0&h=UJqu8WbwRPWWSBGMaC3_pLCefZ2WCi-iDB8wgtSFZk4="}
};
function loadTrashline(){

	loadSongs("Trashline", trashline);
}

let cadences =  {
"Buns" : {"Level" : 5, "Tonals" : true, "SplitCymbals" : true, "Image" : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png"},
"Centimeter" : {"Level" : 4, "Tonals" : true, "Image": "https://www.zoro.com/static/cms/product/full/Z27Euzfo5oy.JPG"},
"Combustion" : {"Level" : 4, "Tonals" : true, "SplitCymbals" : true, "Image": "https://res.cloudinary.com/mel-science/image/upload/fl_progressive:steep,q_auto:good,w_1200/v1/articles/None/image_dlys35.jpg"},
"Combustion-Lice" : {"Level" : 3, "SplitCymbals" : true, "Tonals" : true, "Image": "https://www.hairfairies.com/wp-content/uploads/gasoline-head-lice-fire.jpg"},
"Hardcore Gamers" : {"Level" : 2, "Image": "https://cdn.mos.cms.futurecdn.net/7WGiEyQV8jDdME7eTqTS96-320-80.jpg"},
"Hogwartz" : {"Level" : 2, "Image": "https://upload.wikimedia.org/wikipedia/commons/3/38/Hogwarts_model_studio_tour.jpg"},
"Hot Dog's Beat" : {"Level" : 1, "Image": "Images/HotDogStewart.JPG"},
"Landslide" : {"Level" : 2, "Tonals" : true, "Image": "https://www.smu.edu/-/media/Images/News/2021/iStock-507217748.jpg?h=1414&la=en&w=2121&hash=93C374BB971D0836F5F79BF918D48F03"},
"Lice" : {"Level" : 2, "Tonals" : true, "Image": "https://cdn-prod.medicalnewstoday.com/content/images/articles/318/318001/louse.jpg"},
"Nuts and Bolts" : {"Level" : 1, "Image": "https://essentracontent.com/assets/components/phpthumbof/cache/Featured%20-%20820%20x%20340_0000_AdobeStock_79311834.102c494827e2fa5ebf875e871ed62f87.jpg"},
"Potato" : {"Level" : 4, "Tonals" : true, "Image": "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg"},
"Rat Problem" : {"Level" : 2, "Tonals" : true, "Image": "https://holeinonepest.com/wp-content/uploads/2011/12/Rats-e1400241706267.jpg"},
"Redwing Royalty" : {"Level" : 2, "Image": "https://www.sheboygan.k12.wi.us/perch/resources/redwing-logo-w600.png"},
"Silly Little Cadence 1" : {"Level" : 2, "Image" : "https://media.istockphoto.com/vectors/number-1-one-sports-fan-foam-hand-with-raising-forefinger-vector-id614140902?k=20&m=614140902&s=612x612&w=0&h=7JPnwnkguFSAsyw6oFJL74eTuq0eHCrug5zveq8dk6I=", "Transcription" : true},
"Silly Little Cadence 2" : {"Level" : 2, "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuYGNHYXpwwNWrY-kn2uUsRi1fGHEalY9aA&usqp=CAU", "Transcription" : true},
"Silly Little Cadence 3" : {"Level" : 2, "Image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bundesstra%C3%9Fe_3_number.svg/1280px-Bundesstra%C3%9Fe_3_number.svg.png", "Transcription" : true},
"Skrimps" : {"Level" : 3, "Image": "https://www.theglobeandmail.com/resizer/bAh53S5bWYL59wN4LYnovGgyESc=/1500x1000/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/tgam/XSVF6L2BLRBYXDJLFYQ5U7KGOQ.JPG"},
"Tariff of Abominations" : {"Level" : 3, "Tonals" : true, "Image": "https://www.historycentral.com/Ant/Abominations.jpg"},
"Boom 5" : {"Level" : 2, "Image": "https://i.pinimg.com/originals/e0/71/ff/e071ffd949344a31e98528a7c4e66085.png", "Transcription": true},
"Bananas" : {"Level" : 2, "Image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cavendish_Banana_DS.jpg", "Transcription": true},
"Salt" : {"Level" : 2, "Image": "https://images.theconversation.com/files/262406/original/file-20190306-100805-2fzbbm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop", "Transcription": true}

};
function loadCadences(){

    loadSongs("DrumlineCadences", cadences);
}

let other = {
    "The Purdie Shuffle" : {"Level" : 5, "Image" : "Images/Purdie.jpg", "Solo" : true, "Drum Kit" : true, "Drums and Vocals" : true},
    "A Solo For Shaker" : {"Level" : 4, "Image" : "https://m.media-amazon.com/images/I/51F+jdNqqaL.jpg", "Solo" : true, "Shaker" : true}, 
    "Sardines And Bass" : {"Level" : 5, "Image" : "https://www.thespruceeats.com/thmb/hAX2vV6kWSXxqn4oIAaraKywtVc=/2121x1193/smart/filters:no_upscale()/ALEAIMAGE-557a699afc8f44969da69a38acbd0a75.jpg", "Solo" : true, "Bass Drum Ensemble" : true}
};

function loadOthers(){

    loadSongs("Other", other);
}

function loadSongs(type, dictionary){


	for(let cadence in dictionary){

		let div = document.createElement("div");
		div.classList.add("cadenceButton");
		div.onclick = function(){showCadence(type, cadence)};

		let h2 = document.createElement("h2");
		h2.innerHTML = cadence;
		
		let h3 = document.createElement("h3");
		h3.innerHTML = "Level " + String(dictionary[cadence]["Level"]);

		let img = document.createElement("img");
		img.setAttribute("src", dictionary[cadence]["Image"]);

		let h4 = document.createElement("h4");
		for(property in dictionary[cadence]){
			if(property != "Level" && property != "Image"){
				h4.innerHTML += property + ", ";
			}
		}

		switch(dictionary[cadence]["Level"]){
			case 1:
				div.style.borderColor = "green";
				break;
			case 2:
				div.style.borderColor = "yellowgreen";
				break;
			case 3:
				div.style.borderColor = "yellow";
				break;
			case 4:
				div.style.borderColor = "darkorange";
				break;
			case 5:
				div.style.borderColor = "red";
				break;
		}

		div.appendChild(h2);
		div.appendChild(h3);
		div.appendChild(img);
		div.appendChild(h4);
		cadenceCanvas.appendChild(div);


	}
}

function getMedia(){
	document.querySelector("#pdfViewer").setAttribute("src", sessionStorage.getItem("pdfname"));
	document.querySelector("#mp3Player").setAttribute("src", sessionStorage.getItem("mp3name"));
}


var hornAudio = new Audio("Misc/horn.mp3");
function playAudio(){
	hornAudio.play();
}

function getNumbers(){
    const cadencesLabel = document.querySelector("#numDrumlineCadences");
    const warmupsLabel = document.querySelector("#numDrumlineWarmups");
    const trashlineLabel = document.querySelector("#numTrashlineCadences");
    const otherLabel = document.querySelector("#numOther");

    cadencesLabel.innerHTML = Object.keys(cadences).length;
    warmupsLabel.innerHTML = Object.keys(warmups).length;
    trashlineLabel.innerHTML = Object.keys(trashline).length;
    otherLabel.innerHTML = Object.keys(other).length;
}

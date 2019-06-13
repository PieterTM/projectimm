var artists = [{
	  'artist': "Vincent van Gogh",
	  'nicknames': ['Vincie van cogh'],
	  'image': "./graphics/vincentpic.jpg"
	}, {
	  'artist': 'Rembrandt van Rijn',
	  'nicknames': ['Brandrem van Rijn'],
	  'image': "./graphics/rembrandtpic.jpg"
	}, {
	  'artist': "Pieter Aertsen",
	  'nicknames': ['Peter Artsen'],
	  'image': "./graphics/pieterpic.jpg"
	}, {
	  'artist': 'Lawrence Alma Tadema',
	  'nicknames': ['Lourens Tademma'],
	  'image': "./graphics/lawrencepic.jpg"
	}, {
	  'artist': 'Karel Appel',
	  'nicknames': ['Karl Apple'],
	  'image': "./graphics/karelpic.jpg"
	}, {
	  'artist': 'Hendrick Avercamp',
	  'nicknames': ['Hendrik Averkamp'],
	  'image': "./graphics/hendrickpic.jpg"
	}, {
	  'artist': "Dirck van Baburen",
	  'nicknames': ['Derrick van Babburen'],
	  'image': "./graphics/dirckpic.jpg"
	}, {
	  'artist': 'Ludolf Bakhuysen',
	  'nicknames': ['Rudolf Bakhuizen'],
	  'image': "./graphics/ludolfpic.jpg"
	}, {
	  'artist': 'Nicolaes Pietersz Berchem',
	  'nicknames': ['Nicholas Pieters Bergem'],
	  'image': "./graphics/nicolaespic.jpg"
	}, {
	  'artist': "Gerrit Adriaensz Berckheyde",
	  'nicknames': ['Gerit Adrieans Berkhyde'],
	  'image': "./graphics/gerritpic.jpg"
	}, {
	  'artist': 'Joachim Beuckelaer',
	  'nicknames': ['Jochem Buckelaer'],
	  'image': "./graphics/joachimpic.jpg"
	}];

var options = {
	minMatchCharLength: 4,
	keys: ['artist', 'nicknames']
};

var fuse = new Fuse(artists, options);
var nodes = null;
var edges = null;
var network = null;

function searchNicknames(searchBar){
	var result = document.getElementById("result");
	window.searchBar = searchBar;
	window.resultArtist = (fuse.search(searchBar)[0]);
	try{
		if(resultArtist['artist']=='Vincent van Gogh'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/vincent.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'vincent_van_gogh';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Rembrandt van Rijn'){
			document.getElementById('nameresult').style.background = "url('graphics/rembrandt.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'rembrandt_van_rijn';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Pieter Aertsen'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/pieter.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'pieter_aertsen';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Lawrence Alma Tadema'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/lawrence.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'lawrence_alma_tadema';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Karel Appel'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/karel.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'karel_appel';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Hendrick Avercamp'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/hendrick.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'hendrick_avercamp';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Dirck van Baburen'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/dirck.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'dirck_van_baburen';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Ludolf Bakhuysen'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/ludolf.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'ludolf_bakhuysen';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Nicolaes Pietersz Berchem'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/nicolaes.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'nicolaes_pietersz_berchem';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Gerrit Adriaensz Berckheyde'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/gerrit.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'gerrit_adriaensz_berckheyde';
			createResult();
			return;
		}
		if(resultArtist['artist']=='Joachim Beuckelaer'){
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/joachim.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'joachim_beuckelaer';
			createResult();
			return;
		}
		else{
			result.innerHTML = '<div><h2>No result found</h2></div>'
		}
	}
	catch{
		if (searchBar.length>3) {
			noResult();
		}
	}
}

function addToDatabase(){
	var db = firebase.firestore()
	db.collection("artists").doc(window.artistID).collection("fuzzynames").add({
		fuzzy: window.searchBar
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
	nextSlide();
}

function nextSlide(){
	var nationalityDiv = document.getElementById('nationality');
	nationalityDiv.innerHTML = 'Great, you helped 312289 people by providing your way of writing ' + resultArtist['artist'] + ' to tour database!';
}

function createResult(){
	var db = firebase.firestore();
	window.fuzzyNamez = [{id: 1, shape: 'circularImage', image: resultArtist['image'], label:resultArtist['artist'], size:40}];
	var counter = 0;
	db.collection("artists").doc(window.artistID).collection("fuzzynames").get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
	    	window.fuzzyNamez.push({id: counter+2,  shape: 'circularImage', image: './graphics/profilepic.png', label: doc.data().fuzzy});
	    	counter += 1;
	        // window.fuzzyNamez.push(doc.data().fuzzy);
	    });
	});
	console.log(fuzzyNamez);
	result.innerHTML = '<div><img src="' + resultArtist['image'] + '" height="200px"></div><h2>So with \''+ searchBar + '\' you mean: ' + resultArtist['artist'] + '?</h2><a class="active"><button class="red">No</button></a><a class="active" onclick="addToDatabase()" href="#firstPage/nationality"><button>Yes</button></a>'
}
function noResult(){
	result.innerHTML = '<div><h2>No result found</h2></div>'
	document.getElementById('nameresult').style.background = "";
}

function visualizeFuzzy(){
	// create connections between people

	edges = [];
	for(var i =2; i<=window.fuzzyNamez.length; i++){
	edges.push({from: 1, to: i});
	}

	var container = document.getElementById('mynetwork');
	container.style.height = "23vw";
	var data = {
	nodes: window.fuzzyNamez,
	edges: edges
	};
	var options = {

	nodes: {
	    size:20,
	      color: {
	      background: '#d1cff9'
	    },
	    font:{color:'#eeeeee', "size": 10},
	},

	};
	network = new vis.Network(container, data, options);

}

function generateResults(){
var request = new XMLHttpRequest()

request.open('GET', 'https://api.rkd.nl/api/instant/images?query=' + searchBar + '&format=json', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data);
  } else {
    console.log('error')
  }
}

request.send()

	// if (window.XMLHttpRequest) {
	//       // code for IE7+, Firefox, Chrome, Opera, Safari
	//       xmlhttp = new XMLHttpRequest();
	//   } else {
	//       // code for IE6, IE5
	//       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	//   }
	//   xmlhttp.onreadystatechange = function() {
	//   	if (this.readyState == 4 && this.status == 200) {
	//   		var result = JSON.parse(this.responseText);
	// 	  	displayResults(result);
	//   	}
	//   };

	//   xmlhttp.open("GET","https://api.rkd.nl/api/instant/images?query=" + searchBar + "&format=json",true);
	//   xmlhttp.send();
	// }
}
function displayResults(result){
	var searchresults = document.getElementById('searchresults');
	searchresults.innerHTML = '<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><image xlink:href="graphics/rembrandt.jpg" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">De nachtwacht</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.response.docs[0].benaming_kunstwerk[0] + '</p>\
								        	<button class="goto">Go to...</button>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><image xlink:href="graphics/rembrandt.jpg" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">De nachtwacht</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.response.docs[1].benaming_kunstwerk[0] + '</p>\
								        	<button class="goto">Go to...</button>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><image xlink:href="graphics/rembrandt.jpg" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">De nachtwacht</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.response.docs[2].benaming_kunstwerk[0] + '</p>\
								        	<button class="goto">Go to...</button>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><image xlink:href="graphics/rembrandt.jpg" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">De nachtwacht</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.response.docs[3].benaming_kunstwerk[0] + '</p>\
								        	<button class="goto">Go to...</button>\
								        </div>\
									</div>\
								</div>'

}
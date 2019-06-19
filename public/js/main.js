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

window.searchBar = '';
var fuse = new Fuse(artists, options);
var nodes = null;
var edges = null;
var network = null;

$("#searchartist").on('keyup', function (e) {
    if (e.keyCode == 13) {
    	searchNicknames(document.getElementById('searchartist').value);
        window.location = '#firstPage/nameresult';
    }
});
$("#previousowner").on('keyup', function (e) {
    if (e.keyCode == 13) {
    	generateResults();
        window.location = '#firstPage/results';
    }
});

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
	catch(err){
		if (searchBar.length>3){
			noResult();
		};
	}
};

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
	nationalityDiv.innerHTML = 'Great, you helped 312289 people by providing your way of writing ' + resultArtist['artist'] + ' to our database!';
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
	result.innerHTML = '<div><img src="' + resultArtist['image'] + '" height="200px"></div><h2>So with \''+ searchBar + '\' you mean: ' + resultArtist['artist'] + '?</h2><a class="active"><button class="red">No</button></a><a class="active" onclick="addToDatabase()" href="#firstPage/visualize"><button>Yes</button></a>'
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
	container.style.height = "60vh";
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

	buttons = document.getElementById('buttons');
	buttons.innerHTML = '<a href="#firstPage/nameresult"><button class="red"><span class="glyphicon glyphicon-chevron-left"></span> Previous step</button></a>\
						<a href="#firstPage/nationality"><button>Continue <span class="glyphicon glyphicon-chevron-right"></span></button></a>'
}

function generateResults(){
	if (window.XMLHttpRequest) {
	      // code for IE7+, Firefox, Chrome, Opera, Safari
	      xmlhttp = new XMLHttpRequest();
	  } else {
	      // code for IE6, IE5
	      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.onreadystatechange = function() {
	  	if (this.readyState == 4 && this.status == 200) {
	  		var result = JSON.parse(this.responseText);
		  	displayResults(result);
	  	}
	  };
	  if(searchBar!=''){
	  	xmlhttp.open("GET","https://www.rijksmuseum.nl/api/nl/collection?q="+resultArtist['artist']+"&v=list&s=relevance&ii=0&p=1&key=ZyRhwo3Z&format=json",true);
	  }else{
	  	xmlhttp.open("GET","https://www.rijksmuseum.nl/api/nl/collection?v=list&s=relevance&ii=0&p=1&key=ZyRhwo3Z&format=json",true);
	  }
	  xmlhttp.send();
}

function displayResults(result){
	console.log(result);
	var searchresults = document.getElementById('searchresults');
	try {
		var image1 = result.artObjects[0].webImage.url;
	}
	catch(e){
		var image1 = './graphics/noimage.jpg';
	}
	try {
		var image2 = result.artObjects[1].webImage.url;
	}
	catch(e){
		var image2 = './graphics/noimage.jpg';
	}
	try {
		var image3 = result.artObjects[2].webImage.url;
	}
	catch(e){
		var image3 = './graphics/noimage.jpg';
	}
	try {
		var image4 = result.artObjects[3].webImage.url;
	}
	catch(e){
		var image4 = './graphics/noimage.jpg';
	}
	searchresults.innerHTML = '<div class="row">\
	<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
     <image xlink:href="'+ image1 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[0].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[0].longTitle + '</p>\
								        	<a href="'+result.artObjects[0].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
      <image xlink:href="'+ image2 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[1].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[1].longTitle + '</p>\
								        	<a href="'+result.artObjects[1].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
      <image xlink:href="'+ image3 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[2].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[2].longTitle + '</p>\
								        	<a href="'+result.artObjects[2].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
      <image xlink:href="'+ image4 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[3].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[3].longTitle + '</p>\
								        	<a href="'+result.artObjects[3].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
							</div>\
				    <div style="text-align: center;">\
						<a href="#firstPage/search"><button class="red"><span class="glyphicon glyphicon-chevron-left"></span> Previous page</button></a>\
						<a href="#firstPage/results2" class="active"><button>Next page <span class="glyphicon glyphicon-chevron-right"></span></span></button></a><br>  \
				    	<a href="#firstPage/databases"><small style="color: white;">Search again</small></a>\
				    </div>'
	var searchresults2 = document.getElementById('searchresults2');
	try {
		var image5 = result.artObjects[0].webImage.url;
	}
	catch(e){
		var image5 = './graphics/noimage.jpg';
	}
	try {
		var image6 = result.artObjects[1].webImage.url;
	}
	catch(e){
		var image6 = './graphics/noimage.jpg';
	}
	try {
		var image7 = result.artObjects[2].webImage.url;
	}
	catch(e){
		var image7 = './graphics/noimage.jpg';
	}
	try {
		var image8 = result.artObjects[3].webImage.url;
	}
	catch(e){
		var image8 = './graphics/noimage.jpg';
	}
	searchresults2.innerHTML = '<div class="row">\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
     <image xlink:href="'+ image5 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[4].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[4].longTitle + '</p>\
								        	<a href="'+result.artObjects[4].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
      <image xlink:href="'+ image6 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[5].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[5].longTitle + '</p>\
								        	<a href="'+result.artObjects[5].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
      <image xlink:href="'+ image7 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[6].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[6].longTitle + '</p>\
								        	<a href="'+result.artObjects[6].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
								<div class="col-md-3">\
									<div class="intro">\
										<svg class="card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>\
      <image xlink:href="'+ image8 +'" width="100%"></image><text font-size="19px" x="50%" y="55%" text-anchor="middle" fill="#eceeef" dy=".3em">' + result.artObjects[7].title + '</text></svg>\
										<div class="card">\
								        	<p class="card-text">' + result.artObjects[7].longTitle + '</p>\
								        	<a href="'+result.artObjects[7].links.web+'"><button class="goto">Go to...</button></a>\
								        </div>\
									</div>\
								</div>\
							</div>\
				    <div style="text-align: center;">\
						<a href="#firstPage/results"><button class="red"><span class="glyphicon glyphicon-chevron-left"></span> Previous page</button></a>\
						<a href="#firstPage/results2" class="active"><button>Next page <span class="glyphicon glyphicon-chevron-right"></span></span></button></a><br>  \
				    	<a href="#firstPage/databases"><small style="color: white;">Search again</small></a>\
				    </div>'
}
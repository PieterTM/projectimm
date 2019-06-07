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
	  'image': "./graphics/vincentpic.jpg"
	}, {
	  'artist': 'Lawrence Alma Tadema',
	  'nicknames': ['Lourens Tademma'],
	  'image': "./graphics/rembrandtpic.jpg"
	}, {
	  'artist': 'Karel Appel',
	  'nicknames': ['Carl Apple'],
	  'image': "./graphics/rembrandtpic.jpg"
	}, {
	  'artist': "Dirck van Baburen",
	  'nicknames': ['Derrick van Babburen'],
	  'image': "./graphics/vincentpic.jpg"
	}, {
	  'artist': 'Ludolf Bakhuysen',
	  'nicknames': ['Rudolf Bakhuizen'],
	  'image': "./graphics/rembrandtpic.jpg"
	}, {
	  'artist': 'Nicolaes Pietersz Berchem',
	  'nicknames': ['Nicholas Pieters Bergem'],
	  'image': "./graphics/rembrandtpic.jpg"
	}, {
	  'artist': "Gerrit Adriaensz Berckheyde",
	  'nicknames': ['Gerit Adrieans Berkhyde'],
	  'image': "./graphics/vincentpic.jpg"
	}, {
	  'artist': 'Joachim Beuckelaer',
	  'nicknames': ['Jochem Buckelaer'],
	  'image': "./graphics/rembrandtpic.jpg"
	}]

var options = {
	minMatchCharLength: 4,
	keys: ['artist', 'nicknames']
};

var fuse = new Fuse(artists, options);

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
			document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/rembrandt.jpg') no-repeat";
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
	}
	catch{
		noResult();
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
}

function createResult(){
	result.innerHTML = '<div><img src="' + resultArtist['image'] + '" height="200px"></div><h2>So with \''+ searchBar + '\' you mean: ' + resultArtist['artist'] + '?</h2><a class="active"><button class="red">No</button></a><a class="active" onclick="addToDatabase()"><button>Yes</button></a>'
}
function noResult(){
	result.innerHTML = '<div><h2>No result found</h2></div>'
}
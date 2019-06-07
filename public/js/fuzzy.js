var artists = [{
	  'artist': "Vincent van Gogh",
	  'nicknames': ['Vincie van cogh'],
	  'image': "./graphics/vincentpic.jpg"
	}, {
	  'artist': 'Rembrandt van Rijn',
	  'nicknames': ['Brandrem van Rijn'],
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
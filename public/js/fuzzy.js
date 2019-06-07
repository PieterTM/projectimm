var artists = [{
	  'artist': "Vincent van Gogh",
	  'nicknames': ['Vincie van cogh']
	}, {
	  'artist': 'Rembrandt van Rijn',
	  'nicknames': ['Brandrem van Rijn']
	}]

var options = {
  keys: ['artist', 'nicknames']
};

var fuse = new Fuse(artists, options);

function searchNicknames(searchBar){
	var result = document.getElementById("result");
	window.searchBar = searchBar;
	window.resultArtist = (fuse.search(searchBar)[0]);

	if(resultArtist['artist']=='Vincent van Gogh'){
		document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/vincent.jpg') no-repeat";
		document.getElementById('nameresult').style.backgroundSize = 'cover';
		window.artistID = 'vincent_van_gogh';
	}
	if(resultArtist['artist']=='Rembrandt van Rijn'){
		document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/rembrandt.jpg') no-repeat";
		document.getElementById('nameresult').style.backgroundSize = 'cover';
		window.artistID = 'rembrandt_van_rijn';
	}	
	result.innerHTML = '<div><img src="./graphics/vincentpic.jpg" height="200px"></div><h2>So you are looking for: ' + resultArtist['artist'] + '?</h2>';
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
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
		else if(resultArtist['artist']=='Rembrandt van Rijn'){
			document.getElementById('nameresult').style.background = "url('graphics/rembrandt.jpg') no-repeat";
			document.getElementById('nameresult').style.backgroundSize = 'cover';
			window.artistID = 'rembrandt_van_rijn';
			createResult();
			return;
		}
		else{
			result.innerHTML = '<div><h2>No result foundee</h2></div>'
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
	nationalityDiv.innerHTML = '<p>Great, you have just helped 312289 other people by adding your way of writing ' + resultArtist['artist'] + ' to tour database!</p>';
}

function createResult(){
	var db = firebase.firestore();
	db.collection("artists").doc(window.artistID).collection("fuzzynames").get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
	        console.log(doc.data().fuzzy);
	    });
	});
	result.innerHTML = '<div><img src="' + resultArtist['image'] + '" height="200px"></div><h2>So with \''+ searchBar + '\' you mean: ' + resultArtist['artist'] + '?</h2><a class="active"><button class="red">No</button></a><a class="active" onclick="addToDatabase()" href="#firstPage/nationality"><button>Yes</button></a>'
}
function noResult(){
	result.innerHTML = '<div><h2>No result found</h2></div>'
	document.getElementById('nameresult').style.background = "";
}
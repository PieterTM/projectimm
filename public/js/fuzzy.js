function searchNicknames(searchBar){
	var value = searchBar;
	var books = [{
	  'artist': "Vincent van Gogh",
	  'nicknames': ['Vincie van cogh']
	}, {
	  'artist': 'Rembrandt van Rijn',
	  'nicknames': ['Brandrem van Rijn']
	}]

	var options = {
	  keys: ['artist', 'nicknames']
	};

	var fuse = new Fuse(books, options);

	var result = document.getElementById("result");
	resultArtist = (fuse.search(searchBar)[0]);
	if(resultArtist['artist']=='Vincent van Gogh'){
		document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/vincent.jpg') no-repeat";
		document.getElementById('nameresult').style.backgroundSize = 'cover';
		var id = 'vincent_van_gogh';
	}
	if(resultArtist['artist']=='Rembrandt van Rijn'){
		document.getElementById('nameresult').style.background = "#f3f3f3 url('graphics/rembrandt.jpg') no-repeat";
		document.getElementById('nameresult').style.backgroundSize = 'cover';
		var id = 'rembrandt_van_rijn';
	}	
	result.innerHTML = '<h2>So your looking for: ' + resultArtist['artist'] + '?</h2>';

	var db = firebase.firestore()
	db.collection("artists").doc(id).collection("fuzzynames").add({
		fuzzy: value
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
}
//   // Get a reference to the database service
// function firebaseE(value, id){
// 	var db = firebase.firestore()
// 	db.collection("artists").doc(id).collection("fuzzynames").add({
// 		fuzzy: value
// 	})
// 	.then(function(docRef) {
// 	    console.log("Document written with ID: ", docRef.id);
// 	})
// 	.catch(function(error) {
// 	    console.error("Error adding document: ", error);
// 	});
// }
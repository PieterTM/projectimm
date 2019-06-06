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
	result.innerHTML = '<h2>So your looking for: ' + resultArtist['artist'] + '?</h2>';
	var buttonNext = document.getElementById("buttonNext");
	buttonNext.innerHTML = '<a href="#firstPage/nationality" class="active"><button onclick="firebaseE()">Next</button></a>';

	if(resultArtist['artist']=='Vincent van Gogh'){
		document.getElementById('name').style.background = "#f3f3f3 url('graphics/vincent.jpg') no-repeat";
		document.getElementById('name').style.backgroundSize = 'cover';
		var id = 'vincent_van_gogh';
	}
	if(resultArtist['artist']=='Rembrandt van Rijn'){
		document.getElementById('name').style.background = "#f3f3f3 url('graphics/rembrandt.jpg') no-repeat";
		document.getElementById('name').style.backgroundSize = 'cover';
		var id = 'rembrandt_van_rijn';
	}	
}

// function addDatabase(){
// // Get a reference to the database service
// 	var database = firebase.database();
// 	var ref = database.ref('artists/' + id + '/fuzzynames');
// 	var data = {
// 		fuzzy: value
// 	};
// 	ref.push(data);
// }
  // Get a reference to the database service
function firebaseE(){
	var database = firebase.database();
	var ref = database.ref('artists/vincent_van_gogh/fuzzynames');
	var data = {
		fuzzy: 'vincentjeeeeemoat'
	};
	ref.push(data);
}
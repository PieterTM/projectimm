//   // Get a reference to the database service
// function firebaseE(){
// 	var db = firebase.firestore()
// 	db.collection("artists").doc("vincent_van_gogh").collection("fuzzynames").add({
// 		fuzzy: "vincievangoghie"
// 	})
// 	.then(function(docRef) {
// 	    console.log("Document written with ID: ", docRef.id);
// 	})
// 	.catch(function(error) {
// 	    console.error("Error adding document: ", error);
// 	});
// }
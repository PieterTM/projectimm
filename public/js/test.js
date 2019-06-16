function ga_SearchTerms() { 
var keywords = document.__form.Keywords.value; 
var artistName = document.__form.ArtistName.value; 
var artistNationality = document.__form.ArtistNationality.value; 
var title = document.__form.Title.value; 
var objectType = document.__form.ObjectType.value; 
var subject = document.__form.Subject.value; 
var ownerName = document.__form.OwnerName.value; 
var documentDate = document.__form.DocumentDate.value; 
var documentCity = document.__form.DocumentCity.value; 
var archConDocumentCountryList = document.__form.ArchConDocumentCountryList.value; 
var pIRecordNo = document.__form.PIRecordNo.value; 
var itemNo = document.__form.ItemNo.value; 
var parameters= 
"/" // leading slash (/) to indicate the page URL 
+ "http://www.getty.edu?coll=archcon&Keywords=&Artist=&ArtistNationality=&Title=&ObjectType=&Subject=&OwnerName=&DocumentDate=&DocumentCity=&ArchConDocumentCountryList=&PIRecordNo=&ItemNo" 
+ "&Keywords=" 
+ keywords 
+ "&Artist=" 
+ artistName 
+ "&ArtistNationality=" 
+ artistNationality 
+ "&Title=" 
+ title
+ "&ObjectType=" 
+ objectType
+ "&Subject=" 
+ subject
+ "&OwnerName=" 
+ ownerName
+ "&DocumentDate=" 
+ documentDate
+ "&DocumentCity=" 
+ documentCity
+ "&ArchConDocumentCountryList=" 
+ archConDocumentCountryList
+ "&PIRecordNo=" 
+ pIRecordNo 
+ "&ItemNo=" 
+ itemNo
; 
} 
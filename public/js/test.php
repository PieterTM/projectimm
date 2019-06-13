<?php
echo '<script type="text/javascript">',
     'alert("hello")',
     '</script>'
$searchBar = $_GET['searchBar'];

$xml = file_get_contents("https://api.rkd.nl/api/instant/images?query=".$searchBar."&format=json");
echo '<script type="text/javascript">',
     'displayResults('.$xml.');',
     '</script>'
;
?>
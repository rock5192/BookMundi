<?php

$context  = stream_context_create(array('http' => array('header' => 'Accept: application/xml')));
$url = 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml';

$xml = file_get_contents($url, false, $context);
$xml = simplexml_load_string($xml);
$jsondata = json_encode($xml);
print_r($jsondata);

?>
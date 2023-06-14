<?php

function filterListByThreshold($ids, $prices, $threshold) {
  $filteredList = array();
  for ($i = 0; $i < count($prices); $i++) {
    if ($prices[$i] > $threshold) {
      $filteredList[] = $ids[$i];
    }
  }
  return $filteredList;
}

function calculateTotalSum($prices, $filteredList) {
      $totalSum = 0;
  foreach($filteredList as $list)
  {
    $totalSum += $prices[$list-1];
    
  }
  
  return ($totalSum);
}

$ids = array(1, 2, 3, 4, 5);
$prices = array(10, 20, 30, 40, 50);
$threshold = 25;

$filteredList = filterListByThreshold($ids, $prices, $threshold);
echo "Filtered List: " . implode(", ", $filteredList) . PHP_EOL;

$totalSum = calculateTotalSum($prices, $filteredList );
echo "Total Sum: " . $totalSum . PHP_EOL;

?>
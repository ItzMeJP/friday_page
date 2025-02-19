<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$folder = "./images/friday/";
$files = glob($folder . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

if ($files === false) {
    echo json_encode(["error" => "Could not read directory"]);
} else {
    $files = array_map(fn($file) => $file, $files);
    echo json_encode($files);
}
?>

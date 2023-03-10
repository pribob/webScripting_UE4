<?php
header("Content-Type: application/json");
http_response_code(200);

$file = "./homework.json";
$data = file_get_contents($file);
$json_data = json_decode($data);


echo(json_encode($json_data));

<?php

require_once ('Solid.php');

$shapes = [
    new Circle(3),
    new Square(4)
];

$areas = new AreaCalculator($shapes);

echo $areas->output();


<?php
$nom = "Université Cadi Ayaad";
$module = "Développement Web";
$annee = 2025;

$a = 10;
$b = 5;

$addition = $a + $b;
$multiplication = $a * $b;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Page PHP</title>
</head>
<body>

    <h1>Informations PHP</h1>

    <p><strong>Nom :</strong> <?php echo $nom; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année :</strong> <?php echo $annee; ?></p>

    <h2>Calculs simples</h2>
    <p><?php echo "$a + $b = $addition"; ?></p>
    <p><?php echo "$a × $b = $multiplication"; ?></p>

</body>
</html>

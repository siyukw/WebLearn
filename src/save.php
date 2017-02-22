<?php
    $receivedName = $_POST['sendingName'];
    $receivedId = $_POST['sendingId'];

    $file = "attendance.txt";

    $content = $receivedId . ": " . $receiveName . "\n";

    file_put_contents($file, $content, FILE_APPEND);

    echo "Successsssss";
?>
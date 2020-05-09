<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// INCLUDING DATABASE AND MAKING OBJECT
require '../database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// CHECK GET ID PARAMETER OR NOT
if(isset($_GET['Documento']))
{
    //IF HAS ID PARAMETER
    $post_Documento = filter_var($_GET['Documento'], FILTER_VALIDATE_INT,[
        'options' => [
            'default' => 'all_posts',
            'min_range' => 1
        ]
    ]);
}
else{
    $post_Documento = 'all_posts';
}

// MAKE SQL QUERY
// IF GET POSTS ID, THEN SHOW POSTS BY ID OTHERWISE SHOW ALL POSTS
$sql = is_numeric($post_Documento) ? "SELECT * FROM `usuario` WHERE Documento='$post_Documento'" : "SELECT * FROM `usuario`"; 
$stmt = $conn->prepare($sql);
$stmt->execute();

//CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE POSTS ARRAY
    $posts_array = [];
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
        $post_data = [
            'Documento' => $row['Documento'],
            'Nombre' => $row['Nombre'],
            'Apellido' => html_entity_decode($row['Apellido']),
            'FechaNacimiento' => $row['FechaNacimiento'],
            'CiudadResidencia' => $row['CiudadResidencia'],
            'Barrio' => $row['Barrio'],
            'Celular' => $row['Celular'],
            'DiaCita' => html_entity_decode($row['DiaCita']),
            'medico' => $row['medico'],
            'Hora' => html_entity_decode($row['Hora']),
        ];
        // PUSH POST DATA IN OUR $posts_array ARRAY
        array_push($posts_array, $post_data);
    }
    //SHOW POST/POSTS IN JSON FORMAT
    echo json_encode($posts_array);
}
else{
    //IF THER IS NO POST IN OUR DATABASE
    echo json_encode(['message'=>'No post found']);
}
?>
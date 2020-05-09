<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require '../database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));

//CREATE MESSAGE ARRAY AND SET EMPTY
$msg['message'] = '';

// CHECK IF RECEIVED DATA FROM THE REQUEST
if(isset($data->Nombre) && isset($data->Apellido) && 
isset($data->Documento) &&  isset($data->FechaNacimiento) && 
isset($data->CiudadResidencia) && isset($data->Barrio) && 
isset($data->Celular) isset($data->DiaCita) && isset($data->Hora)&& isset($data->medico)  ) {
    
    // CHECK DATA VALUE IS EMPTY OR NOT
    if(!empty($data->Nombre) && !empty($data->Apellido) &&
     !empty($data->Documento) && !empty($data->FechaNacimiento) &&
     !empty($data->CiudadResidencia) && !empty($data->Barrio) &&
     !empty($data->Celular) && !empty($data->DiaCita) && !empty($data->Hora) && !empty($data->medico) ) {
        
        $insert_query = "INSERT INTO `usuario`(`Nombre`, `Apellido`, `Documento`, `FechaNacimiento`, `CiudadResidencia`, `Barrio`, `Celular`,`DiaCita`,`medico`,`Hora`) 
        VALUES(:Nombre,:Apellido,:Documento,:FechaNacimiento,:CiudadResidencia,:Barrio,:Celular,:DiaCita,:medico,:hora)";
        
        $insert_stmt = $conn->prepare($insert_query);
        // DATA BINDING
        $insert_stmt->bindValue(':Nombre', htmlspecialchars(strip_tags($data->Nombre)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':Apellido', htmlspecialchars(strip_tags($data->Apellido)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':Documento', intval($data->Documento), PDO::PARAM_INT);
        $insert_stmt->bindValue(':FechaNacimiento', htmlspecialchars(strip_tags($data->FechaNacimiento)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':CiudadResidencia', htmlspecialchars(strip_tags($data->CiudadResidencia)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':Barrio', htmlspecialchars(strip_tags($data->Barrio)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':Celular', intval($data->Celular),PDO::PARAM_INT);
        $insert_stmt->bindValue(':DiaCita', htmlspecialchars(strip_tags($data->DiaCita)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':medico', htmlspecialchars(strip_tags($data->Nombre)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':Hora', strftime($data->Hora),PDO::PARAM_STR);
        
        if($insert_stmt->execute()){
            $msg['message'] = 'Data Inserted Successfully';
        }else{
            $msg['message'] = 'Data not Inserted';
        } 
        
    }else{
        $msg['message'] = 'Oops! empty field detected. Please fill all the fields';
    }
}
else{
    $msg['message'] = 'Please fill all the fields | title, body, author';
}
//ECHO DATA IN JSON FORMAT
echo json_encode($msg);
?>
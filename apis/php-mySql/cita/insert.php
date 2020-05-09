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
if(isset($data->DiaCita) && isset($data->Hora) && 
isset($data->Id) &&  isset($data->Lugar) && 
isset($data->UsuarioDocumento) ) {
    
    // CHECK DATA VALUE IS EMPTY OR NOT
    if(!empty($data->DiaCita) && !empty($data->Hora) &&
     !empty($data->Id) && !empty($data->Lugar) &&
     !empty($data->UsuarioDocumento)) {
        
        $insert_query = "INSERT INTO `cita`(`DiaCita`, `Hora`, `Id`, `Lugar`, `UsuarioDocumento`) 
        VALUES(:DiaCita,:Hora,:Id,:Lugar,:UsuarioDocumento)";

        $insert_stmt = $conn->prepare($insert_query);
        // DATA BINDING

        $insert_stmt->bindValue(':Id', intval($data->Id), PDO::PARAM_INT);
        $insert_stmt->bindValue(':DiaCita', htmlspecialchars(strip_tags($data->DiaCita)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':Hora', strftime($data->Hora),PDO::PARAM_STR);
        $insert_stmt->bindValue(':Lugar', htmlspecialchars(strip_tags($data->Lugar)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':UsuarioDocumento', intval($data->UsuarioDocumento),PDO::PARAM_INT);
        
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
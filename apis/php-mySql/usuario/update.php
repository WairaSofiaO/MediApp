<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require '../database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));

//CHECKING, IF ID AVAILABLE ON $data
if(isset($data->Documento)){
    
    $msg['message'] = '';
    $post_Documento = $data->Documento;
    
    //GET POST BY ID FROM DATABASE
    $get_post = "SELECT * FROM `usuario` WHERE Documento=:post_Documento";
    $get_stmt = $conn->prepare($get_post);
    $get_stmt->bindValue(':post_Documento', $post_Documento,PDO::PARAM_INT);
    $get_stmt->execute();
    
    
    //CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
    if($get_stmt->rowCount() > 0){
        
        // FETCH POST FROM DATBASE 
        $row = $get_stmt->fetch(PDO::FETCH_ASSOC);
        
        // CHECK, IF NEW UPDATE REQUEST DATA IS AVAILABLE THEN SET IT OTHERWISE SET OLD DATA
        $post_Documento = isset($data->Documento) ? $data->Documento : $row['Documento'];
        $post_Nombre = isset($data->Nombre) ? $data->Nombre : $row['Nombre'];
        $post_Apellido = isset($data->Apellido) ? $data->Apellido : $row['Apellido'];
        $post_FechaNacimiento = isset($data->FechaNacimiento) ? $data->FechaNacimiento : $row['FechaNacimiento'];
        $post_CiudadResidencia = isset($data->CiudadResidencia) ? $data->CiudadResidencia : $row['CiudadResidencia'];
        $post_Barrio = isset($data->Barrio) ? $data->Barrio : $row['Barrio'];
        $post_Celular = isset($data->Celular) ? $data->Celular : $row['Celular'];
        
        $update_query = "UPDATE `usuario` 
        SET Documento = :Documento, Nombre = :Nombre, Apellido = :Apellido, FechaNacimiento = :FechaNacimiento, CiudadResidencia = :CiudadResidencia, Barrio = :Barrio, Celular = :Celular
        WHERE Documento = :Documento";
        
        $update_stmt = $conn->prepare($update_query);
        
        // DATA BINDING AND REMOVE SPECIAL CHARS AND REMOVE TAGS
        $update_stmt->bindValue(':Documento', $post_Documento, PDO::PARAM_INT);
        $update_stmt->bindValue(':Nombre', htmlspecialchars(strip_tags($post_Nombre)),PDO::PARAM_STR);
        $update_stmt->bindValue(':Apellido', htmlspecialchars(strip_tags($post_Apellido)),PDO::PARAM_STR);
        $update_stmt->bindValue(':FechaNacimiento', htmlspecialchars(strip_tags($post_FechaNacimiento)),PDO::PARAM_STR);
        $update_stmt->bindValue(':CiudadResidencia', htmlspecialchars(strip_tags($post_CiudadResidencia)),PDO::PARAM_STR);
        $update_stmt->bindValue(':Barrio', htmlspecialchars(strip_tags($post_Barrio)),PDO::PARAM_STR);
        $update_stmt->bindValue(':Celular', htmlspecialchars(strip_tags($post_Celular)),PDO::PARAM_STR);
        
        if($update_stmt->execute()){
            $msg['message'] = 'Data updated successfully';
        }else{
            $msg['message'] = 'data not updated';
        }   
        
    }
    else{
        $msg['message'] = 'Invlid ID';
    }  
    
    echo  json_encode($msg);
    
}
?>
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
if(isset($data->Id)){
    
    $msg['message'] = '';
    $post_Id = $data->Id;
    
    //GET POST BY ID FROM DATABASE
    $get_post = "SELECT * FROM `cita` WHERE Id=:post_Id";
    $get_stmt = $conn->prepare($get_post);
    $get_stmt->bindValue(':post_Id', $post_Id,PDO::PARAM_INT);
    $get_stmt->execute();
    
    
    //CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
    if($get_stmt->rowCount() > 0){
        
        // FETCH POST FROM DATBASE 
        $row = $get_stmt->fetch(PDO::FETCH_ASSOC);
        
        // CHECK, IF NEW UPDATE REQUEST DATA IS AVAILABLE THEN SET IT OTHERWISE SET OLD DATA
        $post_Id = isset($data->Id) ? $data->Id : $row['Id'];
        $post_DiaCita = isset($data->DiaCita) ? $data->DiaCita : $row['DiaCita'];
        $post_Hora = isset($data->Hora) ? $data->Hora : $row['Hora'];
        $post_Lugar = isset($data->Lugar) ? $data->Lugar : $row['Lugar'];
        $post_UsuarioDocumento = isset($data->UsuarioDocumento) ? $data->UsuarioDocumento : $row['UsuarioDocumento'];
       
        $update_query = "UPDATE `cita` 
        SET Id = :Id, Hora = :Hora, Lugar = :Lugar, DiaCita = :DiaCita, UsuarioDocumento = :UsuarioDocumento
        WHERE Id = :Id";
        
        $update_stmt = $conn->prepare($update_query);
        
        // DATA BINDING AND REMOVE SPECIAL CHARS AND REMOVE TAGS
        $update_stmt->bindValue(':Id', intval($post_Id), PDO::PARAM_INT);
        $update_stmt->bindValue(':DiaCita', htmlspecialchars(strip_tags($post_DiaCita)),PDO::PARAM_STR);
        $update_stmt->bindValue(':Hora', strftime($post_Hora),PDO::PARAM_STR);
        $update_stmt->bindValue(':Lugar', htmlspecialchars(strip_tags($post_Lugar)),PDO::PARAM_STR);
        $update_stmt->bindValue(':UsuarioDocumento', intval($post_UsuarioDocumento),PDO::PARAM_INT);
        
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
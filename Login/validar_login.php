<?php 
include 'conexion.php';

$correo =$_POST['correo'];
$contrasena =$_POST['contrasena'];

$validar_login= mysqli_query($conexion, "SELECT * FROM registro WHERE 
correo='$correo' and contrasena='$contrasena'");

if(mysqli_num_rows($validar_login)>0){
       header("location:../Index.php");
    exit;
}else{
    echo'
    <script>
    alert("Usuario no existe, por favor verifique los datos introducidos");
    window.location="../login.php";
    </script>
    ';
    exit;
}

?>
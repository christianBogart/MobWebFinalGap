<?php
	include_once ( "adb.php" );
class users extends adb
{	

    function users(){
        
    }

function login($user_name,$user_pass){
       $str_query= "select * from fix_users where user_name = '$user_name' AND user_pass='$user_pass' ";
		return $this->query($str_query);
		
    }

    
    function register($user_fullname,$user_name,$user_email,$user_pass){
       $str_query= "insert into fix_users set user_fullname = '$user_fullname',user_name = '$user_name', user_email = '$user_email', user_pass = '$user_pass' ";
		return $this->query($str_query);
		
    }

   

}

?>
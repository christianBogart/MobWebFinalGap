<?php
	include_once ( "adb.php" );
class advertisement extends adb
{	

    function advertisement(){
        
    }

function get_all_ads(){
       $str_query= "select * from advertisement ";
		return $this->query($str_query);
		
    }
    
    function get_ad($id){
       $str_query= "select * from advertisement where ad_id='$id'";
		return $this->query($str_query);
		
    }
    
     function get_cat($cat){
       $str_query= "select * from advertisement where category='$cat'";
		return $this->query($str_query);
		
    }
    
    function get_loc($loc){
       $str_query= "select * from advertisement where location='$loc'";
		return $this->query($str_query);
		
    }

    
    function add_ad($user_name,$title,$user_id,$category,$price,$location,$phone){
       $str_query= "insert into advertisement set user_name = '$user_name', title = '$title', user_id = '$user_id',category = '$category', price = '$price', location = '$location',phone = '$phone'  ";
		return $this->query($str_query);
		
    }

   

}

?>
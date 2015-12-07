<?php


if ( isset ( $_REQUEST [ 'cmd' ] ) )
{
    $cmd = $_REQUEST[ 'cmd' ];
    
    switch ( $cmd )
    {
        case 1:
            login();
            break;
        case 2:
            add_user();
            break;
        case 3:
            logout();
            break;
		case 4:
           get_ads();
            break;
        case 5:
            get_ad();
            break;
        case 6:
            add_ad();
            break;
        case 7:
            get_cat();
            break;
         case 8:
            get_loc();
            break;
            
            default:
            echo '{"result":0,message:"failed command"}';
            break;
    }//end of switch
    
}//

function login( ){
	include("users.php");
	$obj=new users();
	$user_name=$_REQUEST['user_name'];
	$user_pass=$_REQUEST['user_pass'];
	
	if(!$obj->login($user_name,$user_pass)){
		//return error
		echo '{"result":0,"message": "login failed"}';
		return;
	}
		else{
            
			$row=$obj->fetch();
            
            if($obj->get_num_rows()==1){
             
                echo '{"result":1,"message":"","user_id":"'.$row['user_id'].'","user_fullname":"'.$row['user_fullname'].'"}';
                
            }
            else{
		echo '{"result":0,"message": "Sorry, failed to log in"}';
	}
        }
    	
	}
	

function add_user( ){
	include("users.php");
	$obj=new users();
    $user_fullname=$_REQUEST['user_fullname'];
	$user_name=$_REQUEST['user_name'];
	$user_email=$_REQUEST['user_email'];
	$user_pass=$_REQUEST['user_pass'];
	
	
	if(!$obj->register($user_fullname,$user_name,$user_email,$user_pass)){
		echo  '{"result":0,"message": "failed to add user"}';
	}
	else{
        
		echo  '{"result":1,"message": "Successfully added user"}';
	
	}
}



function add_ad( ){
	include("advertisement.php");
	$obj=new advertisement();
    $add_name=$_REQUEST['add_name'];
    $add_user_id=$REQUEST['user_id'];
	$add_title=$_REQUEST['add_title'];
	$add_category=$_REQUEST['add_category'];
	$add_price=$_REQUEST['add_price'];
    $add_location=$_REQUEST['add_location'];
    $add_phone=$_REQUEST['add_phone'];
	
	
	if(!$obj->add_ad($add_name,$add_title,$add_user,$add_category,$add_price,$add_location,$add_phone)){
		echo  '{"result":0,"message": "failed to add ad"}';
	}
	else{
        
		echo  '{"result":1,"message": "Successfully added ad"}';
	
	}
}



function logout(){
    
    session_start();
// remove all session variables
session_unset(); 

// destroy the session 
session_destroy(); 
    
    echo  '{"result":1,"message": "Successfully logged out"}';
    
}


function edit_product( ){
	include("products.php");
	$obj=new products();
	$product_id=$_REQUEST['product_id'];
	$product_price=$_REQUEST['product_price'];
	
	
	if(!$obj->edit_product($product_id,$product_price)){
		echo  '{"result":0,"message": "failed to update product"}';
	}
	else{
		echo  '{"result":1,"message": "Successfully updated product"}';
	
	}
}


function get_ads( ){

	include("advertisement.php");
	
	$obj= new advertisement();

	
	 if(!$obj->get_all_ads()){
		//return error
		echo '{"result":0,"message": "failed to display products"}';
		return;
     }else{
	$row = $obj->fetch();
	echo '{"result":1,"ads":[';	//start of json object
	while($row){
		echo json_encode($row);			//convert the result array to json object
		$row=$obj->fetch();
		if($row){
			echo ",";					//if there are more rows, add comma 
		}
	}
	echo "]}";							//end of json array and object
     }
}

function get_ad( ){

	include("advertisement.php");
	$obj= new advertisement();
	$ad_id=$_REQUEST['ad_id'];
	
	 if(!$obj->get_ad($ad_id)){
		//return error
		echo '{"result":0,"message": "failed to display products"}';
		return;
     }else{
	$row = $obj->fetch();
	echo '{"result":1,"ads":[';	//start of json object
	while($row){
		echo json_encode($row);			//convert the result array to json object
		$row=$obj->fetch();
		if($row){
			echo ",";					//if there are more rows, add comma 
		}
	}
	echo "]}";							//end of json array and object
     }
}

function get_cat( ){

	include("advertisement.php");
	$obj= new advertisement();
	$cat=$_REQUEST['cat'];
	
	 if(!$obj->get_cat($cat)){
		//return error
		echo '{"result":0,"message": "failed to display products"}';
		return;
     }else{
	$row = $obj->fetch();
	echo '{"result":1,"ads":[';	//start of json object
	while($row){
		echo json_encode($row);			//convert the result array to json object
		$row=$obj->fetch();
		if($row){
			echo ",";					//if there are more rows, add comma 
		}
	}
	echo "]}";							//end of json array and object
     }
}

function get_loc( ){

	include("advertisement.php");
	$obj= new advertisement();
	$loc=$_REQUEST['loc'];
	
	 if(!$obj->get_loc($loc)){
		//return error
		echo '{"result":0,"message": "failed to display products"}';
		return;
     }else{
	$row = $obj->fetch();
	echo '{"result":1,"ads":[';	//start of json object
	while($row){
		echo json_encode($row);			//convert the result array to json object
		$row=$obj->fetch();
		if($row){
			echo ",";					//if there are more rows, add comma 
		}
	}
	echo "]}";							//end of json array and object
     }
}


function get_product( ){

	include("products.php");
	$obj= new products();
	$product_id=$_REQUEST['product_id'];
	
	 if(!$obj->get_product($product_id)){
		//return error
		echo '{"result":0,"message": "failed to display products"}';
		return;
     }else{
	$row = $obj->fetch();
	echo '{"result":1,"products":[';	//start of json object
	while($row){
		echo json_encode($row);			//convert the result array to json object
		$row=$obj->fetch();
		if($row){
			echo ",";					//if there are more rows, add comma 
		}
	}
	echo "]}";							//end of json array and object
     }
}

?>
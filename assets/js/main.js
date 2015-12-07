var details = new Persist.Store('User details');
var get_user_id = "";
var get_fullname = "";
var get_username = "";

function sendRequest (url)
           {
               var obj=$.ajax({url:url,async:false});
                var result=$.parseJSON(obj.responseText);
                return result;
           }//end of sendRequest function


			function login(){
			            $ ( document ).ready ( function ( )
			            {
			 				var user_name = encodeURI(document.getElementById("username").value);
							var user_pass = encodeURI(document.getElementById("password").value);
						   var url = "assets/php/controller.php?cmd=1&user_name="+user_name+"&user_pass="+user_pass;
			               var obj = sendRequest (url);
						
							var i = 0;
                            
                            
                           
                            
			                if ( obj.result === 1 )
			                {
                                   
		                    
                                get_user_id += ""+obj.user[0].user_id;
                                get_fullname += ""+obj.user[0].user_fullname;
                                get_username += ""+obj.user[0].user_name;
                                
                                details.set('user_id', get_user_id);
                                details.set('user_fullname', get_fullname);
                                details.set('user_username', get_username);
                            
								   window.location.replace("home.html");
                                    
			                 }
							 else{
								  $ ( "#status" ).text ( "login failed" );
							 
							 }
							 //$(".checkboxes").hide();
			            });
						} 

			function register(){
			            $ ( document ).ready ( function ( )
			            {
			 				var user_name = encodeURI(document.getElementById("username").value);
							var user_fullname = encodeURI(document.getElementById("fullname").value);
                            var user_email = encodeURI(document.getElementById("email").value);
                            var user_pass = encodeURI(document.getElementById("password").value);
							var user_pass2 = encodeURI(document.getElementById("password-again").value);
                            
                            var url = "assets/php/controller.php?cmd=2&user_fullname="+user_fullname+"user_name="+user_name+"&user_email="+user_email+"&user_pass="+user_pass;
                            
                            if (user_pass === user_pass2){
						   
			               var obj = sendRequest (url);
                                
                                 if ( obj.result === 1 )
			                {
								   login();

								 
			                 }
                                
                        }
							 else{
								  $ ( "#status" ).text ( "Registration  failed. Please check password" );
							 
							 }
							 //$(".checkboxes").hide();
			            });
						} 



            function add_ad(){
			            $ ( document ).ready ( function ( )
			            {
                            var add_user_id
                            
                                details.get('user_id', function(ok, id) {
                              if (ok)
                                 add_user_id = id;
                            });
                            
                            
                            
			 				var add_name = encodeURI(document.getElementById("add_user_name").value);
							var add_title = encodeURI(document.getElementById("add_title").value);
                            var category_select = document.getElementById("add_category");
                            var add_category = encodeURI(category_select.options[category_select.selectedIndex].text);
                            var location_select = document.getElementById("add_location");
                            var add_location = encodeURI(category_select.options[category_select.selectedIndex].text);
                            var add_price = encodeURI(document.getElementById("add_price").value);
                            var add_phone = encodeURI(document.getElementById("add_phone").value);
                            
                            var url = "assets/php/controller.php?cmd=6&add_name="+add_name+"&add_title="+add_title+"&user_id="+add_user_id+"&add_category="+add_category+"&add_price="+add_price+"&add_location="+add_location+"&add_phone="+add_phone;
                            var obj = sendRequest (url);
                            
                            get_ads();
                            $('#add_modal').closeModal();
							 //$(".checkboxes").hide();
			            });
						} 



        function logout(){
            
             $ ( document ).ready ( function ( )
			            {
			 				
                           
                         
                           localStorage.clear();
			                
								   window.location.replace("index.html");

								 
			                 
							
			            });
            
            
        }



            function get_ads(){
                $ ( document ).ready ( function ( )
		            {
		 			  
					   var url = "assets/php/controller.php?cmd=4";
                        
		               var obj = sendRequest (url);
					
						
		                if ( obj.result === 1 )
		                {
							   
							var i = 0;
							var ads ="";
							
							for ( ; i < obj.ads.length; i++ )
		                    {
                                var fan = "sound";
                                var charger = "charger";
                                var general = "general";
                                var motherboard = "motherboad";
                                var screen = "screen";
                                var imgUrl;
                                
                                if(obj.ads[i].category == fan){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == charger){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == general){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == motherboard){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == screen){
                                    imgUrl="";
                                }
                                
                                var modal = "'class='waves-effect waves-light btn modal-trigger'";
							
							
							ads += "<div class='row'><div class='col s12 m12'><div class='card red-grey darken-1'><div class='card-content red-text'><span class='card-title'>"+obj.ads[i].title+"</span><div id='category'><p><img src='"+imgUrl+"'>  "+obj.ads[i].category+"</p></div><div id='price'><p>GHC <b>"+obj.ads[i].price+"<b></p></div><div id='location'><p><img src=''>"+obj.ads[i].location+"</p></div></div><div class='card-action'><button class='waves-effect waves-light btn modal-trigger' data-target='ad_modal'  onClick='get_ad("+obj.ads[i].ad_id+")'>View Ad</button></div></div></div</div></div>";
                               
                                
                                var div = document.getElementById('ad_display');

                                div.innerHTML = ads;
                                
                                
                                
                                //var theDiv = document.getElementById("ad_display");
                                //var content = document.createTextNode("" + ads);
                                //theDiv.append(content);

							}
							
							
		                 }
						 
					
		            });

                                    } 


        function get_ad(id){
                $ ( document ).ready ( function ( )
		            {
		 			  
					   var url = "assets/php/controller.php?cmd=5&ad_id="+id;
                        
		               var obj = sendRequest (url);
					
						
		                if ( obj.result === 1 )
		                {
				

                            document.getElementById('ad_view_name').innerHTML = ("Posted by: " + obj.ads[0].user_name);
                            
                           document.getElementById('ad_view_title').innerHTML = ("<i class='material-icons left'>new_releases</i>" + obj.ads[0].title);
                            
                           document.getElementById('ad_view_category').innerHTML = ("<i class='material-icons left'>settings</i>" + obj.ads[0].category);
                            
                            document.getElementById('ad_view_price').innerHTML =("<i class='material-icons left'>payment</i>  GHc" + obj.ads[0].price);
                            
                           document.getElementById('ad_view_location').innerHTML = ("<i class='material-icons left'>location_on</i>" + obj.ads[0].location);
                            
                            document.getElementById('ad_view_phone').innerHTML = ("<i class='material-icons left'>call</i>" + obj.ads[0].phone);
                                
							}
							
							
		                  $('#ad_modal').openModal();
						 
					
		            });

                                    } 


            function get_cat(category){
                        $ ( document ).ready ( function ( )
		            {
		 			  
					   var url = "assets/php/controller.php?cmd=7&cat="+category;
                        
		               var obj = sendRequest (url);
					
						
		                if ( obj.result === 1 )
		                {
							   
							var i = 0;
							var ads ="";
							
							for ( ; i < obj.ads.length; i++ )
		                    {
                                var fan = "sound";
                                var charger = "charger";
                                var general = "general";
                                var motherboard = "motherboad";
                                var screen = "screen";
                                var imgUrl;
                                
                                if(obj.ads[i].category == fan){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == charger){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == general){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == motherboard){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == screen){
                                    imgUrl="";
                                }
                                
                                var modal = "'class='waves-effect waves-light btn modal-trigger'";
							
							
							ads += "<div class='row'><div class='col s12 m12'><div class='card red-grey darken-1'><div class='card-content red-text'><span class='card-title'>"+obj.ads[i].title+"</span><div id='category'><p>"+obj.ads[i].category+"</p></div><div id='price'><p>GHC <b>"+obj.ads[i].price+"<b></p></div><div id='location'><p><img src=''>"+obj.ads[i].location+"</p></div></div><div class='card-action'><button class='waves-effect waves-light btn' onClick='get_ad("+obj.ads[i].ad_id+")'>View Ad</button></div></div></div</div></div>";
                               
                                
                                var div = document.getElementById('ad_display');

                                div.innerHTML = ads;
                                
                                
                                
                                //var theDiv = document.getElementById("ad_display");
                                //var content = document.createTextNode("" + ads);
                                //theDiv.append(content);

							}
							
							
		                 }
                        });
                
                $('.button-collapse').sideNav('hide');
                    
                }

            function get_loc(location){
                        $ ( document ).ready ( function ( )
		            {
		 			  
					   var url = "assets/php/controller.php?cmd=8&loc="+location;
                        
		               var obj = sendRequest (url);
					
						
		                if ( obj.result === 1 )
		                {
							   
							var i = 0;
							var ads ="";
							
							for ( ; i < obj.ads.length; i++ )
		                    {
                                var fan = "sound";
                                var charger = "charger";
                                var general = "general";
                                var motherboard = "motherboad";
                                var screen = "screen";
                                var imgUrl;
                                
                                if(obj.ads[i].category == fan){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == charger){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == general){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == motherboard){
                                    imgUrl="";
                                }
                                
                                if(obj.ads[i].category == screen){
                                    imgUrl="";
                                }
                                
                                var modal = "'class='waves-effect waves-light btn modal-trigger'";
							
							
							ads += "<div class='row'><div class='col s12 m12'><div class='card red-grey darken-1'><div class='card-content red-text'><span class='card-title'>"+obj.ads[i].title+"</span><div id='category'><p> "+obj.ads[i].category+"</p></div><div id='price'><p>GHC <b>"+obj.ads[i].price+"<b></p></div><div id='location'><p><img src=''>"+obj.ads[i].location+"</p></div></div><div class='card-action'><button class='waves-effect waves-light btn' onClick='get_ad("+obj.ads[i].ad_id+")'>View Ad</button></div></div></div</div></div>";
                               
                                
                                var div = document.getElementById('ad_display');

                                div.innerHTML = ads;
                                
                                
                                
                                //var theDiv = document.getElementById("ad_display");
                                //var content = document.createTextNode("" + ads);
                                //theDiv.append(content);

							}
							
							
		                 }
                        });
                 $('.button-collapse').sideNav('hide');
                    
                }

             
            $(document).ready(function(){
                // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
                $('.modal-trigger').leanModal();
                   
                 $(".button-collapse").sideNav();
    
    
                $('select').material_select();
 

    
              });
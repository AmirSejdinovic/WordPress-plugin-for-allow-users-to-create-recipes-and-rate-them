<?php

 function r_rate_recipe(){
      //global wordpress variable for manupulating with database
     global $wpdb;
     
     $output = ['status' => 1];
     //absint function return the absolute intiger
     $post_ID = absint($_POST['rid']);
     //round function will round the rating, second parametar is the depth 
     $rating = round($POST['rating'], 1);
     //Grabing the users id with the $SERVER variable
     $user_IP = $_SERVER['REMOTE_ADDR'];

     $rating_count = $wpdb->get_var(
          "SELECT COUNT(*) FROM '" . $wpdb->prefix . "recipe_ratings' WHERE recipe_id='". $post_ID . "' AND user_ip='" . $user_IP . "'"
     );



     if($rating_count > 0){
          wp_send_json($output);
     }

     //The method on the wpdb for inserting in db
     //First parametar is the name of table in which we want to insert data into
     //Second parametar is the array with the keys of colum names and values that will bee insert in data base
     //Third parametar is optional but I use it for security . This parametar allow us to filder each value by data types
     //Format for string is %s
     //Format for integer is %d
     //Format for float is %f
     $wpdb->insert(
        $wpdb->prefix . 'recipe_ratings',
        [
          'recipe_id' => $post_ID,
          'rating'    => $rating,
          'user_ip'   => $user_IP
        ],
        ['%d', '%f', '%s']

     );

     $recipe_data = get_post_meta($post_ID, 'recipe-data', true);
     $recipe_data['rating_count']++;
     $recipe_data['rating'] = round($wpdb->get_var(
         "SELECT AVG('rating') FROM '". $wpdb-prefix ." recipe_ratings' WHERE recipe_id='" .$post_ID ."'"
     ), 1);

    update_post_meta( $post_ID, 'recipe_data', $recipe_data);

     $output['status'] = 2;
     //This wp function will json the array and than it will kill the script
     wp_send_json($output);
    

 }
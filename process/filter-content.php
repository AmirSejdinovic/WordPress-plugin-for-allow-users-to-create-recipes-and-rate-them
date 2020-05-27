<?php

function r_filter_recipe_contant( $content){
   //This function is_singular is checking if it is a single post. We can provide argument in this function for the post type and write the post type slug than this funciton will check if ti is the signle post of that psot type
   //Here I check oposit if it is not sigle post of the post type with slug of recipe than return the content otherwise filte the post
   if(!is_singular('recipe')){
        return $content;
   }
   
  global $post, $wpdb;
  //Grabing the metadata
  $recipe_data = get_post_meta($post->ID, 'recipe_data',true);
  //This variable store the html markup which is in the file recipe-template.php. With function file_get_contents() we include the recipe-template.php file
   $recipe_html = file_get_contents('recipe-template.php', true);
   $recipe_html = str_replace('RATE_I18N', __("Rating", "recipe"), $recipe_html);
   $recipe_html = str_replace('RECIPE_ID', $post->ID, $recipe_html);
   $recipe_html = str_replace('RECIPE_RATING', $recipe_data['rating'], $recipe_html);

   $user_IP = $_SERVER['REMOTE_ADDR'];

   $rating_count = $wpdb->get_var(
        "SELECT COUNT(*) FROM '".$wpdb->prefix . " recipe_ratings' WHERE recipe_id='".$post->ID . "' AND user_ip='".$user_IP. "'"
   );

   if($rating_count > 0){
      $recipe_html = str_replace('READONLY_PLACEHODER', 'data-rateit-READONLY="true"', $recipe_html);
   }else{
       $recipe_html = str_replace('READONLY_PLACEHODER', '',$recipe_html); 
   }

  return $recipe_html . $content;
   
}
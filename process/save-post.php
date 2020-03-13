<?php

function r_save_post_admin($post_id, $post, $update){

   //Grabing the meta data from posts
   //Function get_post_meta() has thri argi, first is the post id, second is the unique key of metadata, third parameter is whetehr we want to return an array or a single value if it is true than wp will return single value
  $recipe_data = get_post_meta($post_id, 'recipe_data', true);

  $recipe_data = empty ($recipe_data) ? [] : $recipe_data;
  $recipe_data['rating'] = isset($recipe_data['rating'])? absint($recipe_data['rating']) : 0;

  $recipe_data['rating_count'] = isset($recipe_data['rating_count'])? absint($recipe_data['rating_count']) : 0;

  //Attaching data to the post
  update_post_meta($post_id, 'recipe_data', $recipe_data);
}
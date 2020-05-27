<?php


function r_add_new_recipe_columns($columns){
    $new_columns = [];

    $new_columns['cb'] = '<input type="checkbox" />';
    $new_columns['title'] = _('Title', 'recipe');
    $new_columns['author'] = _('Author', 'recipe');
    $new_columns['categories'] = _('Categories', 'recipe');
    $new_columns['count'] = _('Ratings count', 'recipe');
    $new_columns['rating'] = _('Average Rating', 'recipe');
    $new_columns['date'] = _('Date', 'recipe');
    
    return $new_columns;
}

function r_menage_recipe_columns($column, $post_id){
      switch($column){
        case 'count':
          $recipe_data  = get_post_meta($post_id, 'recipe_data', true);
          echo isset($recipe_data['rating_count']) ? $recipe_data['rating_count'] : 0;
        break;
        case 'rating':
          $recipe_data  = get_post_meta($post_id, 'recipe_data', true);
          echo isset($recipe_data['rating']) ? $recipe_data['rating'] : N/A;
        break;
        default:
      break;
      }
}

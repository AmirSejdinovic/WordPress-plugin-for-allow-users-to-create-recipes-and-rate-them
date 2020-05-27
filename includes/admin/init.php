<?php

function recipe_admin_init(){

  include('columns.php');

  add_filter('menage_recipe_posts_columns', 'r_add_new_recipe_columns');
}
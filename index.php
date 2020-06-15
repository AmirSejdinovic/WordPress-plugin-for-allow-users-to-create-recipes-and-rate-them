<?php
/*
* Plugin Name: Recipe
* Description: This is a simple WP plugin that allows users to create recipes and reate this recipes
* Version: 1.0
* Author: Amir Sejdinovic
. text domain: recipe
*/
//Security fix. With this condition I check if the function exists if function do not exist than do the code inside code block
//This will prevent the users to directly go to the plugin via url path
if(!function_exists('add_action')){
   echo "Hi there! I'm just a plugin not much I can do when called directly. ";
   exit;
}

//Setup
//Define constant called RECIPE_PLUGIN_UIRL and set to the __FILE__ PHP variable. This will be helpful for referencing the plugin file when we enqueue our files
define('RECIPE_PLUGIN_URL', __FILE__);


//Includes
//Include the activation.php so we can use our custom functions in this file
include('includes/activate.php');
//Include init.php 
include('includes/init.php');
//Include the save-post.php
include('process/save-post.php');
//Includde the filter-content.php
include('process/filter-content.php');
//Include the enqueue.php
include('includes/enqueue.php');
//include rate-recipe.php
include('process/rate-recipe.php');
//Include init
include('includes/admin/init.php');
include('blocks/enqueue.php');



//Hooks
//Caling the function register_activation_hook() This is a special hook made special for plugins
//This function will be called when the plugin activated. This funciton has two parematers first is the pat to the plugin
//Php constant __FILE__ will allways return the path of file where it is used. So in our case it will reutrn the path to the plugin
//Second parametar is the custom funciton
register_activation_hook(__FILE__, 'r_activate_plugin');
//This hook is trigered when WP begins to inicialize the data for curent page
add_action('init','recipe_init');
//This hook is trigered when the post was saved. The _recipe will tell WP to do this action only when saving the custom post type with name of receipe
//The third parameter of the action hoock is priorty
//Forth parameter is the nubmer of arguments in the custom function
add_action('save_post_recipe', 'r_save_post_admin', 10, 3);
//Filter hoock with hoock the_content this hoock is trigeded when the content loads
add_filter('the_content', 'r_filter_recipe_contant');
//Incude rateit.js in plugin
add_action('wp_enqueue_scripts', 'r_enqueue_scripts',100);
add_action('wp_ajax_r_rate_recipe', 'r_rate_recipe');
add_action('wp_ajax_nopriv_r_rate_recipe', 'r_rate_recipe');
add_action('admin_init', 'recipe_admin_init');
add_action('enqueue_block_editor_assets', 'r_enqueue_block_editor_assets');



//Shortcodes

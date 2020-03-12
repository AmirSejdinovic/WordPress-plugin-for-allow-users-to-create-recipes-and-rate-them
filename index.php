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


//Includes
//Include the activation.php so we can use our custom functions in this file
include('includes/activate.php');
//Include init.php 
include('includes/init.php');


//Hooks
//Caling the function register_activation_hook() This is a special hook made special for plugins
//This function will be called when the plugin activated. This funciton has two parematers first is the pat to the plugin
//Php constant __FILE__ will allways return the path of file where it is used. So in our case it will reutrn the path to the plugin
//Second parametar is the custom funciton
register_activation_hook(__FILE__, 'r_activate_plugin');
//This hook is trigered when WP begins to inicialize the data for curent page
add_action('init','recipe_init');


//Shortcodes

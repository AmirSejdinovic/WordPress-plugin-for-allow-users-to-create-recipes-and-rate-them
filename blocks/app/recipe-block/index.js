//console.log(wp);
const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;

//Register the gutenburg block
registerBlockType( 'ju/recipe', {

  title:  __('Recipe', 'ju'),
  description: __('Provide a short summary of a recipe.', 'ju'),
  //common, formatting, layout, widgets, embed
  category: 'common',
  icon: 'carrot',
  keywords: [
    __('Food', 'ju'),
    __('Ingredinets', 'ju'),
    __('Meal Type','ju')
  ],
  supports: {
    html:  false
  },
  save: () => {
    return <p>Hello World</p>
  }

});
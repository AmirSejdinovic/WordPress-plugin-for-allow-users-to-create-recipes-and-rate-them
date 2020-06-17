//console.log(wp);
const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, SelectControl} = wp.components;


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
  edit: ( props )=>{
    //console.log(props);
    //return <p>Hello World</p>
    return [
      <InspectorControls>
        <PanelBody title={__('Basics', 'ju')}>
          <PanelRow>

    <p>{__('Configure the contents of your block here', 'ju')}</p>
          </PanelRow>

          <TextControl 
          label={__('Ingredients', 'ju')}  
          help={ __('Ex: tomatoes, lettuce, olive oil, etc', 'ju')} 
          value="Test" 
          onChange={ ( new_val) => {
                  console.log(new_val);
          }}/>
           <TextControl 
           label={__('Cooking time', 'ju')}  
           help={ __('How log will this take to cook', 'ju')} 
           value="Test" 
           onChange={ ( new_val) => {
                  console.log(new_val);
          }}/>
           <TextControl 
           label={__('Utensils', 'ju')}  
           help={ __('Ex: spoon, knife, post, pans', 'ju')} 
           value="Test" 
           onChange={ ( new_val) => {
                  console.log(new_val);
          }}/>

          <SelectControl
           label = { __( 'Cooking Experience', 'ju')}
           help = { __('How skilled should the reader be?', 'ju')}
           value="Beginner"
           options={[
             { value: 'Beginner', label: 'Beginner'},
             { value: 'Intermediate', label: 'Intermediate'},
             { value: 'Expert', label: 'Expert'}
           ]}
           onChange={(new_val)=>{
                 console.log(new_val);
           }}
          
          />

         <SelectControl
           label = { __( 'Meal Type', 'ju')}
           help = { __('When is this best eaten', 'ju')}
           value="Breakfast"
           options={[
             { value: 'Breakfast', label: 'Breakfast'},
             { value: 'Lunch', label: 'Lunch'},
             { value: 'Dinner', label: 'Dinner'}
           ]}
           onChange={(new_val)=>{
                 console.log(new_val);
           }}
          
          />


        </PanelBody>
       </InspectorControls>,
       <div className={ props.className }>
      <ul className="list-unstyled">
             <li><strong>{ __('Ingredients:','ju') }</strong> INGREDIENTS_PH</li>
            <li><strong>{ __('Cooking Time:','ju') }</strong> COOKING_TIME_PH</li>
            <li><strong>{ __('Utensils:','ju')} </strong> UTENSILS_PH</li>
            <li><strong>{ __('Cooking Experience:','ju') }</strong> LEVEL_PH</li>
            <li><strong>{ __('Meal Type:','ju') }</strong> TYPE_PH</li>
       </ul>
       </div>
    ];
  },
  save: ( props ) => {
    return <p>Hello World</p>
  }

});
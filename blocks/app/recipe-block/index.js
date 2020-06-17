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
  attributes:{
     ingredients: {
       source: 'text',
       

     },
     cooking_time:{
      source: 'text'
     },
     utensils: {
      source: 'text'
     },
     cooking_experience:{
      source: 'text',
      default: 'Beginner'
     },
     meal_type:{
      source: 'text',
      default: 'Breakfast'
     }
  },
  edit: ( props )=>{
    //console.log(props);
    //return <p>Hello World</p>

    const updateIngredinets = ( new_val) => {
      props.setAttributes({ingredients: new_val})
}

    return [
      <InspectorControls>
        <PanelBody title={__('Basics', 'ju')}>
          <PanelRow>

    <p>{__('Configure the contents of your block here', 'ju')}</p>
          </PanelRow>

          <TextControl 
          label={__('Ingredients', 'ju')}  
          help={ __('Ex: tomatoes, lettuce, olive oil, etc', 'ju')} 
          value={props.attributes.ingredients}
          onChange={ updateIngredinets }
          />
           <TextControl 
           label={__('Cooking time', 'ju')}  
           help={ __('How log will this take to cook', 'ju')} 
           value={props.attributes.cooking_time} 
           onChange={ ( new_val) => {
                  props.setAttributes({cooking_time: new_val})
          }}/>
           <TextControl 
           label={__('Utensils', 'ju')}  
           help={ __('Ex: spoon, knife, post, pans', 'ju')} 
           value={props.attributes.utensils} 
           onChange={ ( new_val) => {
                 props.setAttributes({utensils: new_val})
          }}/>

          <SelectControl
           label = { __( 'Cooking Experience', 'ju')}
           help = { __('How skilled should the reader be?', 'ju')}
           value={props.attributes.cooking_experience}
           options={[
             { value: 'Beginner', label: 'Beginner'},
             { value: 'Intermediate', label: 'Intermediate'},
             { value: 'Expert', label: 'Expert'}
           ]}
           onChange={(new_val)=>{
                 props.setAttributes({cooking_experience: new_val})
           }}
          
          />

         <SelectControl
           label = { __( 'Meal Type', 'ju')}
           help = { __('When is this best eaten', 'ju')}
           value={props.attributes.meal_type}
           options={[
             { value: 'Breakfast', label: 'Breakfast'},
             { value: 'Lunch', label: 'Lunch'},
             { value: 'Dinner', label: 'Dinner'}
           ]}
           onChange={(new_val)=>{
                props.setAttributes({meal_type: new_val})
           }}
          
          />


        </PanelBody>
       </InspectorControls>,
       <div className={ props.className }>
      <ul className="list-unstyled">
             <li><strong>{ __('Ingredients:','ju') }</strong> 
             {props.attributes.ingredients}
             </li>
            <li><strong>{ __('Cooking Time:','ju') }</strong>
             {props.attributes.cooking_time}
             </li>
            <li><strong>{ __('Utensils:','ju')} </strong>
            {props.attributes.utensils}
             </li>
            <li><strong>{ __('Cooking Experience:','ju') }</strong> 
            {props.attributes.cooking_experience}
            </li>
            <li><strong>{ __('Meal Type:','ju') }</strong> 
            {props.attributes.meal_type}
            </li>
       </ul>
       </div>
    ];
  },
  save: ( props ) => {
    return <p>Hello World</p>
  }

});
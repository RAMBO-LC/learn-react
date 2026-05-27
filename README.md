# Lessons short notes

1. so React is a Library of JS, but for this lesson we will use TS and learn TS step by step.

2. we used React + vite + TS.

3. we used prettier to format our code and make it more readable.

4. we used Bootstrap for making components. first we used List grouping component and added the bootstrap sniipet for listing our component.


5. Fragements : WE CANT USE DIFFENRT TAGS, ause react dont return more than one element

   So, for Eg; if i want a Heading "<h1>"

   React cannot return multiple elements directly.

   Wrong:
   return (
     <h1>Heading</h1>
     <ul>
       <li>Item</li>
     </ul>
   );
   
   
    SOLUTION 1 : We will WRAP ths whole code in a <DIV>,
                SELECT THE CODE and 'ctrl+shift+p' and seach for "Wrap with abbreviation",
                and type "div" and press enter. it will wrap the code in a div.
    Right:
   <div>
        <h1> HEADING </h1>
     <ul>
       <li>Item</li>
     </ul>
    </div>

    SOLUTION 2: we 'import {Fragament} from "react", and in place of "div" chnage it to "Fragament"

    <Fragament>
        <h1> HEADING </h1>
        <ul>
            <li>Item</li>
        </ul>
    </Fragament>

    SOLUTION 3: just add tine empty braces <> in place of <div> or <Fragment>;
     this will tell react that we are using fragments even if we remove the import


6. 

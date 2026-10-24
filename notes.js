/*
1- Angular is written in TypeScript, a typed superset of JavaScript

2- Angular apps are mostly Single Page Applications (SPAs).

3- A component = TypeScript class + HTML template(basics) + CSS styles

4- The @Component decorator defines the selector, template/templateUrl, and styles/styleUrls
styleUrls : tak array of object (multiple)
style :take pure css code or scss code

5- Interpolation shows values in the template: {{ title }}.

6- Property binding: [src]="imageUrl" sets a DOM property from the class

7- any file have in his name specific thats mean its for testing and i can remove it

8- any file have in his name map thats mean its for making us knowing were i type the scss code
(te browser dont understand any thing without html css js)


9- Based-Module: all components are connected to central component and if i want to export or 
import any thing (all components are see them because we link all of them by Central component)
tis name is app.module.ts

10- stand-alone component we link components i would to link by import and export we dont need
app.module.ts

11- we use component in the part need that (such as have many  features)

12- Event binding: (click)="myFun()" calls a method when an event happens

13- NgModule is the older way to group components, still common in existing projects

14- Structural directives change the DOM structure: *ngIf, *ngFor, *ngSwitch

15- Attribute directives change appearance or behavior: ngClass, ngStyle

16- node_modules/ contains installed packages never upload it to GitHub (it’s already in .gitignore).

17- Component styles are scoped to that component by default.

18- provideBrowserGlobalError : to make browser know the error exit where

19- bootstrap : the main of components (whats the component i will start lunch by it)

20- Zone.js : deprecated (when i update specific part in component many things in component are 
update ,and that takes time in large projects )

21- the solve where in signals (not now)

22- all files i link it in main (index.html) not app.html

23- why scss we dont watch it when we use angular??????

24- ng generate(g) --help lists everything the CLI can generate

25- ng g c component/navbar --skip-tests --type=component

26- g :generate
c : component
component/navbar : means in component folder we put navbar folder and it put all files in it
--skip-tests : dont generate testing file
--type=component: :
        means put navbar.component.html
                    instead of navbar.html

27- we use step 26 instead of we make this files and prepare it





*/

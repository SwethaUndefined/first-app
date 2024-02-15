Angular is a javascript framework, used for build single page applicaation.

npx @angular/cli new my-first-app
npx ng serve


Framework to build client side applications.
single page applicaation

Why Angular other than other JS framework?
Modular approach(clear structure)
Reusable code
Lots of inbuild capabilities such as validations, routing and so on
Unit tesable
Product from Google team and uses Typescript from microsoft


Initally Angular.js was released on 2010(huge hit)
Angular 2 - just the angular was released on 2016
Angular 3 - not released due to misalgined of router packaged vesion at 3.3.0 version
Angular 4 - just the angular was released on 2016 Dec
Angular 5 - 207 released

Like State in react, here we have two way binding option.

Services are used to encapsulate functionality that can be shared across multiple components, providing a way to centralize and manage common code or data.

main.ts is a entry point of the angular application

App.module.ts root module of our application

App.component.ts root component of our application


Component= html view called as Template, ts called as class(used to control the logic of the view),
MetaData = information angular need to deicide whether the class is angular component or normal class. Decorator in Ts, it is a function provides a information about the class associated in it.

18/05/2023
Like App.js in react, we can add many components as needed. Also this can call the component name
in the app.component.html

we can write inline html and inline css using template and styles in .ts file instead of templateurl, styleurl.


Summary:
component is a building block angular, contains class, decorator and template

Cant assign js global objects, we have to assign that in variable


$0.getAttribute("value"), will give the value in the input field, if(value="Swetha"), output is
Swetha then $0.value also gives swetha, If i change the value in the input as "Code Evalution", $0.getAttribute('value') will give "Swetha" , but $0.value will give  "Code Evalution". 


Points to note:
1. Attributes and properties are not same
2. Attributes are in html but properties are defined by DOM. 
3. Attribute initialize the DOM properties and then done. Attributes cannot change once it is initialized.
4. Values can change.


20/05/2023
Class Binding:
We cannot use class attribute and class binding together.
We can use class binding as [class.text-sucess] = "isError", this will conditionally checking.
isError = true. but this is applicable for only one class, when we want to apply for multiple classes, 
then use [ngClass]

Definition of ngClass:
conditionally apply CSS classes to HTML elements based on certain conditions or expressions. 

Style Binding:
In binding component, go to binding.........
We can condtionally giving this too...

difference b/w ngClass and ngStyle:
 ngClass is used to conditionally apply CSS classes to an element, while ngStyle is used to conditionally apply inline CSS styles to an element.
 
-------------------------------------------------
 Event Binding:
             <button (click)="greet = 'Welcome to CodeEvolution'">Click</button>
this is also possible.
-------------------------------------------------------------------------------
Template Reference Variables:

When we need to take the input value that user typed, we can take it using Template Reference Variable.
Just give #myinput(can use any name like myinput), then pass that as parameter to function, when click
(click) = 'onclick(myinput.value)' , this will give the value of the input. If we just the myinput itself
as argument then, we can get the full html. 
So Template Reference Variable is used to take the value of the input and we can get the whole html.
-----------------------------------------------------------------------------
Two Way Binding:
With two-way binding, changes made by the user in the UI element are immediately reflected in the component's property, and changes made to the component's property are immediately reflected in the UI element. This bidirectional synchronization eliminates the need for manual event handling or getter/setter methods.
-----------------------------------------------------------------------------------

21/05/2023
Structural directives:
Used to add or remove the HTML elements.

1. ngIf = conditionally render the HTML elements
2. ngSwitch = conditionally render the HTML elements
3. ngFor = List the list in the html elements

1. ngIf: <p *ngIf="false">structural-directives works!</p>
it will remove the content(structural-directives works!) from the DOM.

<ng-template> is a container, that is used for conditionally rendering the content.
-----------------------------------------------------------------------------------
Component Interaction:
1. Need data to send parent to child, we can use @Input in child component, Just assign the data in parent and send that data through the respective component in the html.
2. Need data to send child to parent, we need to use @Output in child component and use event emitter and then use event click to send the data.
-----------------------------------------------------------------------------------
Pipes:
See the pipes component to understand
1. titlecase :  first character of every word will be capitalized
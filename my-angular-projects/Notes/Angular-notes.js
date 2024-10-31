/*

********  Angular - getting Started (14 August 2024)************************************************************

// What is Angular

--- Angular is just Front-end Javascript Framework, which comes with collection of packages and tools to build the interactive User interfaces.
--- Tools and features like CLI, Debugging tools, IDE Plugins.

// Why would you use Angular ?

--- Sometimes for Trivial applications you may not need an Angular.
--- Frameworks like Angular shines when your application get complex where you need an interactive web user interfaces.
--- Angular simplifies this process by providing built in features, tools and concepts you should apply when using it.
--- Angular brings 4 main things to the table.

    --> 4 Main things

    1) Declarative code
    --- While using JavaScript we were using Imperative code.
    --- Meaning we need to write step by step instructions , which needs to be executed by Browser.
    --- Like to first we need select an DOM element then applies some condition while selecting or after selecting an element.
    --- Then after satisfying those conditions you will be executing the block of code.
    --- Basically we were need to provide the step by step instructions to browser.
    --- However in Angular we are writing  'Declarative code' approach. 
    --- Meaning you define the Target state or States, that contains some special instructions that are unlocked by Angular.
    --- These special instruction would not work in JavaScript the browser would not understand them.
    --- These special instructions are unlocked by Angular so that you can define different target sets and then you can also write
        --- some logic to activate them based upon certain validations or deactivate them based on certain events.
    --- Then its angular JOB to figure out which steps must be taken to update the visible user interface accordingly so that
        --- those target states reflected on the screen.
    --- That's what declarative code means, you don't have to manually reach out to those DOM elements instead you write the declarative
        --- code in the markup and angular does the heavy lifting.

    2) Separation of Concerns

    --- In Angular we can achieve the separation of Concerns via Components.
    --- Basically we can create a different components i.e custom HTML Elements where we can specify their styling and implementation.
    --- We can break complex application into simple building blocks of components.
    --- Split their responsibilities and concerns.
    --- Also we can build component once and reuse them often as needed.
    --- Also it helps for Better Development process.
    --- Where you can assign the different components to different team members.
    --- Share components and logic across the team which reduce the dependencies.


    3) Embraces(Support) Object oriented programming concepts and principles.
    --- Features like Dependency Injection, Classes.
    --- Which helps to build complex and scalable application.

    4) Use of Typescript
    --- Angular uses Typescript.
    --- So we can write bug-free and more static type code .
    --- This makes our code readable and maintainable.
    --- It is easy to find the simple type error like if we don't pass any required arguments to function or assigning a different value to different data types.
    --- So by using Typescript we can identify these errors during development process which leads to building code quality and possibly less errors.


// Angular's Evolution and Stability

--- The Angular team has versioning and release policy  where new Major version is release every 6-months
--- But despite labeled as major versions, these release do not break your code and "change te framework".
--- These major versions comes with Backward compatibility.

--> Note -->
    Angular 2 --> 2016
    Angular 4 --> 2017 (Angular v3 skipped)
    angular 5 --> 2017 


    Angular 14 & 15 --> 2022 --> Introduces "Standalone components"
    Angular 16 --> 2023 --> Introduces "Signals"


// Angular CLI

--- In angular we can write some HTML code which is non-standard.
--- Also we are using Typescript not Javascript.
--- The browser only understand Javascript and valid HTML code.
--- So we will need some tool which will convert the Typescript code into JS code and template code into standard HTML code.
--- In the end it will also optimize this code.
--- TO accomplished this we can use Angular CLI.

--- The Angular CLI is a command-line interface tool which allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.
--- It simplifies the creating of angular projects, because we cannot create an angular project just by creating an folder and html and js file inside in it.
--- This tool works behind the scenes by angular projects to run dev server or   when you build your app for production to perform those mentioned compilation and optimization.
--- It is crucial tool that we will use all the time. Most of the time it will use behind the scenes automatically.

--- Angular cli needs node.js in order to work, so we need to install node.js or nvm before installing angular cli.
--- Also we need  NPM i.e the package manager that comes together with Node.js in order to execute commands for installing other packages.

--> Install Angular CLI
  // Reference ==>  https://angular.dev/tools/cli

--- While creating a new Project always keep project name in lower case and keep dashes between each word.(ng new first-angular-app)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

******** Angular Essentials *************************************************************************************

--- In previous section we saw that How can we create a project using angular cli.
--- After creating an project you can see bunch of files and folders.
--- Some of them are configurations files.
--- If your project is created by using newer version of "Angular cli",  you will see the "public" folder . 
--- This "public" contains fav-icon file for our project.

--> Config files

    1) ts-config.app.json,ts-config.spec.json
    --- Ideally we should keep default setting for this typescript config files.
    --- These files contains the Typescript configurations rules (How strict typescript is and rules while writing Typescript code) and also configuration related to compilation.
    --- Meaning How exactly Typescript code will be compiled in JavaScript under the hood.
    --- This compilation will get automatically triggered by "Angular-Cli".
     --> "Kindly google the difference between both of these files."

    2) Package.json and Package.lock.json

    --- These files contains the Dependencies of our project.
    --- All the required dependencies versioning is present here.
    --> "Kindly google the difference between both of these files."


    3) Angular.json

    --- This file contains some extra configuration about the Angular CLI and Angular provided tools in general.
    --- Just as Typescript Config JSON file, we should not change anything here unless we know what we are doing.

    4) SRC folder
    --- We build our components inside the SRC folder(Inside this there is "app" folder. We usually add our components under the app folder).

    5) style.scss/style.css
    --- This file used to set some styles globally.
    --- The styles which we add in this file apply to all the components inside our application.

    6) Assets folder
    --- We can use this folder to maintain images and icons for our application.

    // "Index.html and "Main.ts""

    --- These two files plays an important role when user opens our application.
    --- Index.html is the first file which is being visited by end user.
    --- While on the other hand "main.ts" is the first file which  gets compiled in the JavaScript when your application is run in the browser.
    --- It is important file because it will be the first code file will be executed by Angular when user loads the application  in the browser.
  
    // How content is getting loaded on Screen

    --- In the index.html is the file gets loaded in the browser when user visits the application first time.
    --- This file is almost empty . There is no specific script tag.
    --- However if you closer look at it you will find there is an HTML element inside a body element which contains the element name like "<app-root></app-root>".
    --- This element is not a standard HTML element. Then what is this ?
    --- Like we learned Browser do not understand the angular the template target states,
    --- Now here this "<app-root></app-root>" is not non-recognizable html element for a browser.
    --- Now the Angular comes into the picture.
    --- As I mentioned earlier the main.ts is first file which get's executed by Angular when first time application loads in browser.
    --- In index.html you will not able to find any imports or script tag which contains main.ts file.

    --- Now when you runs your application in Browser and click on to the "View Page source", you will see the main.ts (main.js after compilation) is injected in Index.html.
    --- You will something like below

        // Code snippet

            <body><!--nghm-->
            <app-root _nghost-ng-c2283532919="" ng-version="18.1.1" ngh="0" ng-server-context="ssr"><h1 _ngcontent-ng-c2283532919="">Hello</h1></app-root>
            
            <script src="polyfills.js" type="module"></script><script src="main.js" type="module"></script>

            <script id="ng-state" type="application/json">{"__nghData__":[{}]}</script>
            
            </body>

    --- In above code snippet you can se the "main.js" file has been injected inside our index.html file.

    --> How does this happen ?

    --- Angular cli is responsible for this.
    --- Angular CLI is responsible for all the compilations and optimization of our code.
    --- All the scripts that you can see are injected by Angular CLI automatically when you build and run your application.
    --- I.e after  running "ng-serve" command.
    --- That's all about the script injection and that's how the code inside the main.ts is executed after being compiled to JS code which is done by CLI.
    --- That' why see compiled version of main.ts which main.js . because typescript would not run in the browser.

    --- Now that's how the compiled code is being executed.
    --- This code does one more important thing.

    --- If you could see the main.ts file. It contains the  "bootstrapApplication" function.
    --- This function expect a "Component" as an argument.
    --- As we saw earlier in the above sections, that we will be building the components.
    --- Now here , we are passing "AppComponent" as component to this function.
    --- So this function wants a such component which will be having "tag" (i.e "app-root" in our case) same as the tag inside "index.html" (Inside a body).
    --- Then this "bootstrapApplication" function validate the "tag" of the Component is matching with Tag that we have added inside index.html file.
    --- If it's matches the tag with our custom component's tag then it will replace that tag with our Custom component's Markup (HTML i.e TEMPLATE).
    --- Make sure whichever component that you are passing to "bootStrapApplication" that component's selector should have to be present in 'index.html'.
    --- If you are specifying "ApComponent" in "bootstrapApplication" function and if you specify different component's tag inside index.html then you will get an error.

        --> Error
            "The selector "app-root" did not match any elements."

        // Note -> While importing "ts" file , we should omit the file extension. 
    --- Now when we open our component that we have passed to "bootstrapApplication" we will couple of things are present inside a component.
    --- It is just a simple class with "Component Decorator".
    --- Basically this "Component Decorator" makes this class a component.
    --- So as Custom HTML Element by Angular we can say.
    --- Decorator is a typescript feature.
    --- Using this component decorator we can add the "metadata" to the class.
    --- Metadata is nothing but the additional information.

        // Code snippet

        import { Component } from '@angular/core';

            @Component({
                selector: 'app-root',
                standalone: true,
                imports: [RouterOutlet],
                templateUrl: './app.component.html',
                styleUrl: './app.component.scss'
            })
            export class AppComponent {
                title = 'my-angular-projects';
            }

    --- That's how the Component looks like.
    --- You can also see the "meta data" inside a @Component i.e Component decorator.
    --- This "@Component" decorator is coming from the angular framework (See imports from code snippet).

    --- If you could see "selector" property from "@Component" meta data.
    --- This property tells Angular for which elements it should look like in the HTML code so that those elements can be
        --- replaced by this Component and It's markup.
    --- Markup of that components store inside the template of that component.
    --- We are maintaining  the external template file . We can provide the path of that file to "templateUrl" property.
    --- This external file contains the markup for our component.

    --- Now because of the "selector" property we know that we are looking for this custom Element or Custom HTML tag, 
        --- i.e app-root and the content from it's markup that should be replace inside the "app-root" tag of the Index.html file.

    --- We can also have styles . which are also relying in the external file.
    --- The scope this styles are limited to this component so that do not clash with global style (More on that inside a View encapsulation Section).

    --> That's how the Angular component renders on the screen.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    // Creating First component

    --> Naming Conventions

    --- Always use below format to name the component or decorators, directive or pipes or anything.

        // Code snippet

        header.component.ts
        --- First part will provide the identity.
        --- Second party will specify what will be store inside this file. For example component, directive, pipe or any other feature.

        export class HeaderComponent {}

        --- Always use  "export" for the class, so that we can use this class in other files as well.
        --- Here For naming class, it should be always Title case . Also first part will describe the identity of component and then you have description of about the job of this class.
        --- In our case , our class will be an component, so that we have added "Component" in the end.

    // @Component decorator

    --- Kindly find the below Meta data related component decorator

    selector: 
    
    --- Defines the custom HTML tag that represents this component. 
    --- This tag can be used in other components' templates or directly in the application's HTML.
    --- Always use the selector name unique and make sure it should not collides with Standard HTML tags.

    templateUrl: 
    
    --- Specifies the relative path to the external HTML file that defines the component's view (UI).

    template: 
    
    --- An alternative to templateUrl, this allows you to write inline HTML for the component's view directly within the decorator.
    --- It is not recommended way to write a templates. You can use this if you have small markup.

    styleUrls: 
    
    --- An array of relative paths to external CSS files that define the styles specific to this component.

    styleUrl: 
    
    --- In latest version of Angular you can use "styleUrl" property . In previous versions of Angular there was "styleUrls" only.
    --- An array of relative paths to external CSS files that define the styles specific to this component.

    styles: 
    
    --- An alternative to styleUrls, this allows you to write inline CSS styles directly within the decorator.
    --- It is an array, where we can specify the styles. It is actually discouraged pattern and we should use "styleUrls" or "styleUrl" by linking external style file.

    providers: 
    
    --- Used to define the services that should be available to this component and its children.

    animations: 
    
    --- Specifies the animations that should be used in this component.

    // Standalone property
    
    --> "standalone": true
    --- This property marks this component as standalone component.
    --- If you are using Module base architecture (Prior to standalone components) then you can mark this property as "false".
    --- Then you can use the component as "Module based components."

    // What will happen if we add the following code ?


        --> Index.html

            <body>
            <app-header></app-header>
            <app-root></app-root>
            </body>

        --> Main.ts

            import { bootstrapApplication } from '@angular/platform-browser';
            import { appConfig } from './app/app.config';
            import { AppComponent } from './app/app.component';

            bootstrapApplication(AppComponent, appConfig)
            .catch((err) => console.error(err));

        --> Answer

        --- "app-header" i.e markup inside the header component will not rendered in the UI.
        --- The empty tag will be present there.
        --- Angular will ignore this component and browser not be able to recognize it. Because as part of bootstrapApplication function we have already specify the "AppComponent".
        --- ANgular do not scan all the files and components automatically.
        --- We have to let angular know that we have a component and we wanted to use it.
        --- Like we are doing in "bootstrapApplication" function, where we are telling Angular to load this component.
        --> Note : 
            --- We can only specify one component at a time as a part of "bootstrapApplication" function.
            --- And only that specified component's selector gets recognizable to Angular.
            --- But we can use bootstrapApplication function as many times by passing different components.
            --> For example

                bootstrapApplication(AppComponent, appConfig)
                .catch((err) => console.error(err));

                bootstrapApplication(HeaderComponent, appConfig)
                .catch((err) => console.error(err));

            --- This code will work.
            --- But this not a recommended approach. 
            --- Because we are creating component tree and there should be always one root component.
            --- So we should specify "app-header" inside the template of "app-root" component i.e AppComponent instead of index.html.
            --- And import "HeaderComponent" in AppComponent and put it inside "imports" array inside component metadata (Because we are using StandAlone components.)
            --- If you don't import "HeaderComponent"  and use it's selector directly in the template of AppComponent then you will get error.

                --> Error

                X [ERROR] NG8001: 'app-header' is not a known element:
                1. If 'app-header' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
                2. If 'app-header' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message. 

            --- So you need to tell the Angular that I am using this component and we are adding as part of import property inside a component's metadata.
            --- Basically we can register all standalone components inside a "imports" (The components whose selector we are using in that component's template)
                --- so that angular knows about these elements. Other wise Angular won't be able to find them.



    // Adding Images to Component's Markup

    --- Since we are storing all the images and icons inside the Assets folder , we should have make the some configuration changes in Angular.json.
    --- We have to mentioned the path of "assets" folder inside "assets" configuration.
   */ 
        //// Code snippet

            // "assets": [
            //   "src/assets",
            //   {
                // "glob": "**/*",
                // "input": "public"
            //   }
            // ],

/*

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Data Binding (15 AUGUST 2024)

--- You can access any property in template i.e html file that you have define public in class(Component).
--- Private properties are not accessible in the template.
--> Refer to "String Interpolation" and "Property Binding".
--> Also check , when to user property binding and when to use string interpolation .
--> Note
    --- Always use "string interpolation" between the tags . "<h1>{{name}}</h1>".
    --- Don't use "string interpolation" in the place of property binding.
    --- Although it will work, but it is not best practice,

        --> Do's

          <img [src]="'assets/users/' + selectedUser.avatar" [alt]="selectedUser.name" />

         --> Don'ts

             <!-- <img src="assets/users/{{ selectedUser.avatar }}" alt="{{selectedUser.name}}" /> Not recommended



// Behind the scenes "Change detection Cycle" (Overview but more on this in Change Detection section)

--- As we know that whenever the variables/properties are changed then their updated values get's reflected in the UI.
--- for example , If i have "userName" variable and I am using it inside a templates using string interpolation or property binding .
    --- If "userName" values changes then it's updated value get's updated in the template and eventually in the User interface automatically.

--> How does this work ?

--- This works due the "Change detection" mechanism of an Angular.
--> What is "Change detection" ?
--- Angular automatically automatically detects and finds out when data changes.
--- It then  simply takes a look at the template of the component and verifies whether that template,now that the data changed, maybe produces a different DOM snapshot.
--- And if that's the case, it goes ahead and updates the UI so that changes are reflected there.
--- Angular does all of that automatically, and it does all of that automatically with help of a part of the Angular framework that's called "zone.js".
--- Angular is using this zone.js thing under the hood. We don't need to explicitly use it as developer.
--- "Zone.js" automatically listens to all possible user events that could occur on a website, for example,as well as some other possible events that could occur,
    --- like a timer expiring or anything like that. 
--- And when such an event occurs, it checks the Angular application for possible changes. 
--- That's how change detection works in Angular in a nutshell.
--- That's why whenever we changes any property then it get's reflected in the UI.

// "***************** Introducing Signals "*****************"  (Overview but more on this in Signal section)

--- In previous section, we saw that how can we change  the state of an Angular application and how the zone.js and Angular change detection mechanism works.
--- That is the one way to update the state of an Angular application. Or we could say that the older way to update the state of an Application.
--- In Angular 16, the Angular team has introduced "Signals."
--- "Signals" are the most robust and effective mechanism to update the state of an Application.
--- Here we need a usage of special "signal" instruction & code to notify Angular about values changes and required UI updates.
--- They are special type of values which tells Angular when they change.


--- Basically "Signals are the Trackable Data containers".
--- They can consist or store any kind of value (any type of value, including nested objects).
--- In below example, we have set the initial values to the signal.
--- when this values changes Angular will get notify about the change.
--- Basically Angular manages the subscriptions to the signal to get notified about the values changes.
--- When any value changes occur for signal, the Angular is then able to update the part of UI where that value being used i.e Where that signal being used and it's then able to update these places.
--- That's the main idea behind the Signals. Basically you will dealing with containers that contains values and that notify Angular whenever those value changes
    --- So that Angular can update the parts of the UI where those signals are being used and that can be very efficient updating mechanism.

    --> Change the values in Signals.

    --- In below code snippet, as we are setting up the initial value to the signal.
    --- However. we can also change the value for Signal.
    --- WE can use "set" method to update the values for the Signals.
    --- We can pass the updated value to the "set" method and that will update the value in signal or will update the signal.

    --> Using Signal

    --- In below code snippet , if you refer to the  template file , you will see how we are using Signal.
    --- In the end "Signal" just an function . We need to invoke it.
    --- By invoking the signal , we are basically executes the Signal's "read" function.
    --- Once we invoke it , it will return an object (Return an updated value which is currently being store in Signal) 
        --- which contains the structure or type that we have specify at the time Initializing it.
    --- In template code you can see "we are accessing name value by simply invoking signal i.e "selectedUser().name""
    --- Make sure we are referring "selectedUser" as signal here. Because we have created "selectedUser" property to store a signal.
    --- Hence we are executing (calling/invoking) "selectedUser" property as a function to get the latest value from it.

        --> Impact of "reading signal in Template"

        --- This reading of signal is tells the Angular that we are trying to get the value of that signal in this specific place inside a template.
        --- Then Angular will able to set up  a subscription behind the scene.
        --- Which will make sure that the place inside the template where we are using signal value will get "re-evaluated", "re-rendered" and updated on the UI.
        --- Whenever that Signal value changes.
        --- Basically Angular sets up the Tracking mechanism that automatically makes sure that Ui is updated whenever underlying signal value changes.
        
        
        --> "Change detection WITHOUT SIgnals and Importance of SIgnals"
        --- "This mechanism is totally different than the Change detection Mechanism "
        --- Because there we were using "zone.js" . Which is in the end creating  the zones around your components.
        --- It is invisible grouping mechanism setup by Angular behind the scenes. where it listens for all kinds of events that could trigger State changes, 
            --- so data changes that should affect the UI.
        --- And whenever such a trigger occurs,because for example, a user clicked a button, which would be one possible trigger, whenever that happens, Angular goes ahead
            --- and checks all the Components in that zone to find out whether some data changed that now needs to be updated on the UI,
            --- so whether the UI needs to be updated in the end.

        --- That's how Angular performs that change detection without Signals, and the advantage of Signals is that Angular could get rid of Zone.js and this zone concept.
        --- So it allows Angular to perform change detection and UI updating in a more efficient manner.
        --- That's why this Signal based change detection and State management was introduced because this allows Angular to update the UI in a more fine-grained way
            --- where it doesn't have to check everything for every possible event that could occur anywhere in the application.

        --- That's the idea behind Signals and that's why even though the code is a bit more verbose than the code we had before, using Signals is definitely something you might wanna consider when working with Angular.

    --> Extract the value from Signal ("computed" function)

        --- In below code you can see , previously we were computing the "imagePath" values using the getter.
        --- However when you are signals you don't need to use getter.
        --- There "computed" function which provided by Angular("@angular/core").
        --- This "computed" function is meant to be used with Signals.
        --- The "computed" function accepts a callback function.
        --- This callback function should return a computed value which may use a Signal.
        --- In our example , we are returning a image path. This path is concatenating with values from "SelectedUser().avatar" .
        --- So Basically we are executing the signal function to read the value from It.
        --- That's how we can compute the values when we use signals.

        --> Now why would we created computed value based on Signals like this with this "computed" function?
        ---  Because when using this computed function here, Angular automatically analyzes whether you are reading some Signal value inside of that function you passed to compute it.
        --- And if that's the case, Angular again sets up a subscription to that Signal that's being used in there,so to the "selectedUser", Signal in this case.
        --- And whenever that Signal receives a new value and only then Angular will recompute the image path here.
        --- So it's a very efficient way of setting up a computed value because it will not be recomputed every time anything changes in this component or the overall application, 
            --- but instead, it will only be recomputed if one of the Signals used inside of it.
        --- So in this case, if this selected user Signal, which is the only Signal used in there, if that changes.
        
        --- Now you just also have to make sure that in the template,you also execute this computed property(imagePath), because under the hood it also creates a SignaL.
        --- You can refer ti below code snippet i.e template file where we are calling/executing/invoking this "imagePath" signal (imagePath()).
        --- In the "imagePath" will be just signal "Signal<string>" that will automatically update when the Signal it depends on.
        --- Meaning "imagePath" is a signal which will updated when the "selectedUser" signal change or update.
        --- Angular will make sure all these updating changes track automatically.


    // Code snippet


            --> Component file

            import { Component, computed, signal } from '@angular/core';
            import { DUMMY_USERS } from '../dummy-users';

            const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

            @Component({
            selector: 'app-user',
            standalone: true,
            imports: [],
            templateUrl: './user.component.html',
            styleUrl: './user.component.scss',
            })
            export class UserComponent {
            // selectedUser = DUMMY_USERS[randomUserIndex];
            
            selectedUser = signal(DUMMY_USERS[randomUserIndex]);
            --- Here we are calling an "signal function with initial value".
            --- Which will make "selectorUser" a "writable signal".

            imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

            // get imagePath () {
            //   // console.log('GETTER called')
            //   return 'assets/users/' + this.selectedUser.avatar;
            // }

            onSelectUser() {
                const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
                this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
                // this.selectedUser = DUMMY_USERS[randomUserIndex];
                console.log('Click event called.')
                }
            }


        --> Template(HTML) file

            <div>
            <button (click)="onSelectUser()">
                <!-- Using Signals -->

                <img [src]="imagePath()" [alt]="selectedUser().name" />
                <span>{{selectedUser().name}}</span>

            </button>
            </div>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
// @Inputs

--- We can use the Inputs to set the data to child component from a parent component.
--- Basically we can make our child component configurable from Parent component.
--- Angular 14 has introduced the new property for "@Inputs", which will provide the guarantee that we input is being passed from a parent component.


    // Code snippet

        @Input({ required: true }) firstName!: type;

        --- Here we can set this property as "{ required: true }".
        --- And if we do not pass this property from a parent then it will result into compile time error.


        --> Error

            "Required input 'firstName' from component UserComponent must be specified."



// Using "Signal Inputs"


--- In latest versions of Angular you can use "Signal Inputs".
--- As we saw in previous section "Signals" are the most efficient way to deal with Change detection in Angular.
--- Now we can use Input Signals as well. This is latest and another way to set the input properties.
--- Let's see how they works and get understanding about them in more detail.

--- "input" signals  are readonly signals.
--- The values for these "input" signals will only change if we change the value from the outside of this component. For example from parent component where we are setting these input values.
--- WE cannot change the value from the inside of this component , meaning where we have define these input signals.
--- WE cannot use "set" method on the input signal. Like we saw previously we can have "set" method to update the values of the signal but those signal are "writable signal".
--- " avatar = input.required<string>();", here you can see unlike "@Input decorator", we are calling an "input" signal function.
--- Which will initialize the "avatar" property with initial value which being return by calling "input signal function".
--- That internally tells Angular that this avatar property should be an input to this component so that it should be set as an attribute when that component is used.

--- Here we can also leverage the "@Input({required: true})avatar: string!" --> "required" feature from "@Input decorator "
--- If you are not using "input.required()" then you can assign the default value to input signal.
--- For example ==> "avatar: input("")" ==> Here we are assigning the default empty string to input signal.
--- However when we use "required" on the input signal then it will make sure that there will some value is going to pass to this input from parent component or outside of the current component
    --- so Angular will not allow you to set the default value in this case. 
    //Error ==> Argument needs to be an object literal that is statically analyzable.(-991010)
                // Type '""' has no properties in common with type 'InputOptionsWithoutTransform<string>'


--- This "input" signal function is an generic type function. Where we can specify the type using "<>" bracket.
--> See the Typescript notes how the generic functions works.
--- So here we are using "<string>" to specify that we will be receiving the string value as input.
--- Due to this we will get typescript support, because Typescript will understand this as signal but it will hold the value with String Type.


--> Important thing to keep in mind

--- As we have setup the input signal in child component. Then you might be thinking now how can we pass the data to these input signals.
--- Here we do not have worry about the passing the data to these inputs from parent component.
--- We can pass the data in similar way as we were passing when we were using "@Input Decorator".
--- If you can see below code snippet and observe the parent component HTML, you will see we are still sending the data in the same format and with same syntax.
--- So it is not necessary that the value that we are passing from a Parent component needs to be "Signal".
--- These are normal values i.e non-signal values to the input signal. 
--- Hence it does not matter the type of value that you are passing from outside component.

--- Another advantage that we will not get typescript error for not assigning an initial value .
--- Which we have resolved while using "@Input decorators"  , by simply adding "!" in the end property name.
---  from a technical point of view, the avatar and name properties do have values assigned to them.
--- They do have these input signal objects assigned to them,which then will, as you learned, internally hold some other value since they act as data containers and those internal values will be the actual input values.


    
        // Code snippet

            --> Child component

                // Component file

                import { Component, computed, input } from '@angular/core';

                // "input" --> Signal function refers to "lowercase 'i'" while decorator "@Input" refers to "uppercase I"

                const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

                @Component({
                    selector: 'app-user',
                    standalone: true,
                    imports: [],
                    templateUrl: './user.component.html',
                    styleUrl: './user.component.scss',
                })

                
                avatar = input.required<string>();
                name = input.required<string>();
                imgPath = computed(() => 'assets/users/' + this.avatar());


                // Template file

                <button>
                  <img  [src]="imgPath()" [alt]="name()"/>
                    <span>{{name()}}</span>
                </button>

            --> Parent component

                // Template file from where we are calling child component with the Inputs.


                       <ul id="users">
                        <li>
                            <app-user [avatar]="users[0].avatar" [name]="users[0].name"></app-user>
                        </li>
                        <li>
                            <app-user [avatar]="users[1].avatar" [name]="users[1].name"></app-user>
                        </li>
                        <li>
                            <app-user [avatar]="users[2].avatar" [name]="users[2].name"></app-user>
                        </li>
                        <li>
                            <app-user [avatar]="users[3].avatar"></app-user>
                            // Compile time error on this line , since we are not passing "required "name" input"
                            // Error --> Required input 'name' from component UserComponent must be specified.
                        </li>
                    </ul>


--> Why would you use older "@Input()" decorators and why would you use "input signals" ?

--- When working with signals, and therefore also when working with signal inputs, you get this advantage that Angular manages these behind the scenes subscriptions and 
    --- that Angular is able to update the parts of the UI or the values in your code that need updating when such a signal based value changes.
--- So it can be more efficient depending on the rest of your application and so on.


// "output" function

--- In most of the Angular projects we use the "@Output" decorator to set the output event emitter from a component.
--- However in recent version of Angular (Angular), the angular team has introduced "output" function.
--- WE can import this "output" function from "Angular core".
--- You might be thinking this will be the similar like "input" signal function ?
--- No this "output" "function do not create " any "signal" .


        // Code snippet

              @Output() select = new EventEmitter(); 
              // Older way using "@Output Decorator"


              select = output<string>();
              // Newer version using "output function".
             
             
              onSelectUser() {
                this.select.emit(this.id);
                // Note --> If we are using "output" function and we do not pass the type then typescript will gives compile time error
                // Because "output" function is having "void" as default type. So we need to explicitly specify the type of the data that we will be emitting using "<>" bracket
                // Like we did "<string>"
                // However this cannot be the issue if you are using "@Output" decorator along with "EventEmitter". Because here it consider the default as "any".
                // select = output() ==> this.select.emit(this.id) ==> Here we will get an error while emitting the data ==> Error => "Argument of type 'string' is not assignable to parameter of type 'void'"
              }


--- Ideally there is no such difference between "@Output" decorator and  "output" function.
--- Under the hood this "output" function is storing an "event emitter", so we do not need to explicitly create an "Event Emitter" any more.
--- We can still call the "emit" method on a property which has been created by this "output" function. Because it still store "Event emitter" object inside in it.
--- The difference is that "output" function is more strict than the "@Output" Decorator. I have provided details about it in above code snippet.


--> Why ANgular introduced this "output" function.
--- The "output" function is the replacement  "@Output" decorator.
--- It does the same thing as the  "@Output" decorator.
--- The first thing is we need to write small code and we do not need to use "EventEmitter" explicitly.
--- It does not create any kind of Signal or anything like that. it is still an output event emitter.
--- Unlike "input" signal function, the "output" function does not create any signal it just gives a custom event that we can emit.
// "output" function is introduced due "input" function, because when we starts working with "input" function, we will be relying on the "function" based behavior.
// While doing this we will removing "Decorator". So to keep consistency Angular has introduced "output" function. So we will be using functions only for input and output both.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Control Flow (@for and @If) (16 August 2024)


--- In this section, we are going to learn about the new syntax that has been introduced in place legacy "ngFor" and "*ngIf" syntax.
--- @for is use to iterate the list in the template while "@if" is used to manage the conditional content.
--- Let's understand both these new syntax by code snippet below.


    --> @for
        // Code snippet

        
                <ul id="users">

                    @for (user of users; track user.id) {
                    <li>
                        <app-user [user]="user" (select)="onSelectId($event)"></app-user>
                    </li>
                    }
                </ul>

                @if (selectedUser) {
                <app-tasks [selectedUserName]="selectedUser.name"></app-tasks>
                }


    --- In above code , we are using "@for" syntax to rendered the data dynamically from the list (users list in our case.)
    --- The important thing to note here to should always need specify the "track" syntax.
    --- If you could not specify then you will get an compile time error. 
        // Error ==> "@for loop must have a "track" expression"

    --> What is track or "track by" ?
    --- This track expression help Angular to keep the track of elements from the list which are being rendered on the screen.
    --- It should require an unique identifier. This unique identifier will help Angular to identify each element.
    --- Basically that identifier will be the identity of that element, and by that identity angular recognize that element from the list.
    --- This helps when the data from the list will change or may be if we shuffle items or remove items then Angular could easily reuse already rendered list items and 
        --- does not have to recreate the entire list every time the list data changes.
    --- Angular will connect this unique id to the every list item so that every item has unique id.
    --- This mechanism helps angular to update the list in more efficient way.
    --- Also it is worth to note if you are having "[]" array then you do not need specify any addition condition inside "@for".
    --- If it's find the list is empty then it will not render the content inside it.

      
    --> @if

    --- This is the new syntax for "*ngIf".
    --- Here you can use "@if" like we use in JS or TS file.
    --- You can also add the else if and else block.
        @if(condition) {
            .....
        } @else if() {
            ....
         } @else {
            ... 
         }

--- Previously "*ngFor" and "*ngIf" was structural directives .
--- However "@for" and "@if" are NOT structural directive but instead a template feature built into Angular.
--- Also if you want to use legacy "*ngFor" in your code in the latest versions of Angular then you have to include "commonModule" or "NgFor" in the imports for an respective or app(root) standalone component.

    // You will get this warning  in editor 
    The `*ngFor` directive was used in the template, but neither the `NgFor` directive nor the `CommonModule` was imported. 
    Use Angular's built-in control flow @for or make sure that either the `NgFor` directive or the `CommonModule` is included in the `@Component.imports` array of this component
    // You will get below Error in Browser
    Can't bind to 'ngForOf' since it isn't a known property of 'li' (used in the '_AppComponent' component template)


    // Both warnings and Error will occur if you don't specify or register the "commonModule".

--- The same thing applies to "*ngIf",
--- We need to either import "common module" or "NgIf" to work with legacy *ngIf.
--- One thing that we need to consider that while using "@If" we will get better typescript support. Because if you could if we check "selectedUser" in if condition then typescript will not throw an error while passing "selectedUser.name"
--- Because till that line it is confirming that "selectedUser" will define and then it will get pass to the "app-task" component.
--- However while using *ngIf , typescript does not support, hence we need to explicitly tell typescript that after executing the if condition successfully the "selectedUser" will not be undefined.
--- Refer to the below code where we are explicitly adding "!" after "selectedUser!.name".

    <ng-container *ngIf="selectedUser; else fallback">
                <app-tasks [selectedUserName]="selectedUser!.name" ></app-tasks>
            </ng-container>
            <ng-template #fallback>
                <p id="fallback">Select a user to see their tasks!</p>
            </ng-template>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Two data binding (17 August 2024)

--> ngModel

--- ngModel is the built in angular directive.
--- In Angular, directives are special classes that allow you to add behavior to elements in your Angular applications. 
--- They are a core feature of Angular and are used to extend the HTML by adding custom functionality.
--- ngModel is a directive in Angular that is used for two-way data binding. 
--- It allows you to bind the value of a form input element to a variable in your component class and automatically synchronize the value between the view (template) and the component class. 
--- This is particularly useful in forms and user input handling.
--- ngModel enables a two-way data binding between the form element and the component property. Changes to the form input are reflected in the component, and changes to the component property are reflected in the form input.
--- ngModel can be used with form control elements like <input>, <select>, <textarea>, etc.
--- The ngModel directive is typically used with the [()] "banana in a box" syntax to indicate two-way binding.
--- We cannot add two way binding syntax to every property or attributes of the element. ngModel is the directive offered by Angular which does support a two-way binding.
--- To make ngModel work, we have to register "FormsModule" in the "imports" array of the respective standalone component.
--- FormsModule is imported from "@angular/forms". It is collection of directives or other features which dealing with Forms and User inputs.
--- And as a side note, inputs in HTML will always yield string values, even if it's of type date, it will not yield a date object, instead, it will yield a string value.


--> **** Signals & Two way binding

--- Yes you heard it right, we can use signals as a two way data binding.
--- For that we need to created signals using "signal.". That's what we learned previously.
--- Then we need to set some initial value to them.
--- Let's understand how can use that below code snippet.

    // Code snippet

        --> Component file

        export class NewTaskComponent {
            @Output() cancelAddingNewTask = new EventEmitter<void>();

            // enteredTitle = '';
            // enteredSummary = '';
            // enteredDate = '';
                enteredTitle = signal('');
                enteredSummary = signal('');
                enteredDate = signal(''); 
        }

        --> HTML file

        <form>
                <p>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" [(ngModel)]="enteredTitle" />
                                                            // Using "signals in ngModel"
                </p>

                <p>
                <label for="summary">Summary</label>
                <textarea id="summary" rows="5" name="summary" [(ngModel)]="enteredSummary"></textarea>
                                                                 // Using "signals in ngModel"
                </p>

                <p>
                <label for="due-date">Due Date</label>
                <input type="date" id="due-date" name="due-date" [(ngModel)]="enteredDate" />
                                                                 // Using "signals in ngModel"
                </p>

                <p class="actions">
                <button type="button" (click)="onCancelAddNewTask()">Cancel</button>
                <button type="submit">Create</button>
                </p>
            </form>

    --- It is very easy to signal for two way binding.
    --- As we have defined and initialize signals in component file.
    --- Now , you can bind these signals in  "[(ngModel)]" as , you were doing for normal values or legacy two way binding.
    --> Note --> Here, we do not need to call the signals or execute the signal to read the values.
        --> Angular basically "read and Update" the signal values behind the scenes when we are using them in conjunction with NgModel
        --> Also when you read the signals in  "[(ngModel)]", you will get an compile time error.
            // Code -->  <input type="text" id="title" name="title" [(ngModel)]="enteredTitle()" />
            // Error -> "Unsupported expression in a two-way binding"
    --- SO basically, you just need to define the signal in component file where in Template we do not need to anything , we just use them like we used properties previously.


// Handling Form Submission

--- While working with forms, we need to submit the form after entering all the details.
--- On submit button , we usually set the button "type="submit"".
--- Now as per the default HTML behavior when you click on the button "which is having type="submit"" and that "button is a part of "form" element i.e inside a form",
    --- The data which we have entered in the form , gets loaded in the browser's url.
--- Basically it will automatically submit the form and browser will try to send the form data to the server that server the website.
--- That's a problem when working with Angular , because we have local development server is running which is not configured to take incoming data requests that wanna submit the data.
--- This server is exist to serve the index.html file.
--- Therefore we need to prevent this browser default.
--- We wanna make sure that no such request is sent so that we can instead handle the submission in JavaScript on the client side.
--- So preventing this   browser default behavior of creating and sending that request is pretty simple when using Angular, because it will actually automatically be prevented for you
    --- if you're importing that FormsModule, which we imported to unlock the ngModel.

--- Because this FormsModule inside of it includes a "component" built by the Angular team,which uses the "form" element, the standard form element tag, as a selector,
    --- and which therefore takes control of this form, under the hood automatically, simply by importing this FormsModule.

--- And this form component, which took control of this form here, will automatically listen to the submission of the form and then prevent that browser default when that submission occurs.
--- So therefore, you technically don't need to do anything to prevent that default.

--- ALso we can listen the submission event when it occurs on this form component.
--- This forms module provides us special event which will be emitted when submission happens,
--- "ngSubmit" is the event will occurs when submission of form happen.
--- We can listen this event on "form element" and that browser default was prevent.
--- Then we bind our function to that event to run implementation.

    // Code snippet

          <h2>Add Task</h2>
        <form (ngSubmit)="onSubmit()">
                // "(ngSubmit) event ==> Will prevent browser default behavior and we can bind our function to handle form submission"
            <p>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" [(ngModel)]="enteredTitle" />
            </p>

            <p>
            <label for="summary">Summary</label>
            <textarea id="summary" rows="5" name="summary" [(ngModel)]="enteredSummary"></textarea>
            </p>

            <p>
            <label for="due-date">Due Date</label>
            <input type="date" id="due-date" name="due-date" [(ngModel)]="enteredDate" />
            </p>

            <p class="actions">
            <button type="button" (click)="onCancelAddNewTask()">Cancel</button>
            <button type="submit">Create</button>
            </p>
        </form>
    
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// "Content-Projection"
--- Read details about this topic on internet , however if there are any features we will cover in Separate section.
--> Note --> Whenever you add the content inside a wrapper component and if you don't use the "content projection" or "ng-content" inside a wrapper component's template,
    --> then angular will load the content the from "wrapper component" and the content between "tag" will get override by it.
    // For example

    --> Task Component (Wrapped component where we are using card component)
        <app-card>
        <h1>Hello Task</h1>
        </app-card>

    --> Card component
        // Template i.e HTML code

        <div><h1>I am card</h1> </div>

    // Output of the above code

        <div><h1>I am card</h1></div>

    --> Note --> "Hello task will not get rendered".
    --- To make it rendered we have include "ng-content",

    --> Corrected Example

        <app-card>
        <h1>Hello Task</h1>
        <ng-content/>
        </app-card>

    --> Now you will get below output
            <div>
            <h1>I am card</h1>
            <h1>Hello Task</h1>
            </div>
    
    --- Basically, we need to  specify where we need to project that content, else the content will get override.
    
    --> Note --> Kindly read for Multi Project and Advance new content projection as well.

    --> Reference 
    https://v17.angular.io/guide/content-projection


// "PIPES"
--- Read details about this topic on internet , however if there are any features we will cover in Separate section.

    --> Reference
    https://v17.angular.io/guide/pipes-overview
    https://v17.angular.io/api/common/DatePipe

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Dependency Injection

--- As we learned that we can create  a service to to establish the communication between components.
--- However , to make this communication work , we have to inject the service into the components.
--> How can we do that ?

    --- You will say that we can created an instance of an service and then we will access that instance in the component.
    --> Like below

        // Code snippet

        --> Task Service

        export class  TasksService {
            .......
        }


        --> Task Component
        export class TasksComponent {
          private taskService = new TasksService();
        }

        --- In this code snippet , we are creating an instance of TasksService and planning to access that instance.
        --- However this not recommended way and it cause a huge problem.
        --- If we do this then basically we will be having separate TaskService instance for this Task component.
        --- Meaning if we use this "TaskService" in another component like for example "User component" , it will be having different instance.
        --- This will result into inconsistency of data between these component.
        --- "For example --> If set 10 new task from Task component into "Task service"" and if try to access those tasks in User component via Task Service,
            --- They those tasks will not be present there, because User component will be having different instance of TaskService.
            --- While we have set this new Task into another instance of TaskService which is being created and scoped till "TaskComponent"

    // What is the solution ?

    --- For such cases, Angular provided a crucial feature called as  "Dependency Injection".
    --- Basically "Dependency Injection" is oops pattern to maintain single instance across the app.
    --- However angular uses this pattern behind the scene or automatically.
    --- In angular we use "Dependency Injection with "Services".

             // Code snippet

                --> Task Service

                @Injectable({
                     providerIn: 'root'     ///// This line will create a single Instance of "TaskService" across the app.
                    }
                )
                export class  TasksService {
                    .......
                }


                --> Task Component
                export class TasksComponent {
                    constructor(private taskService: TaskService) {} 
                    //// It is shorthand provided by Typescript.
                    // In front of this parameter,and that will then automatically create a property of the same name.It's simply a shortcut that's provided by TypeScript
                    // so that this common pattern of storing a parameter in a property gets a bit more convenient.
                    
                    
                    // or 
                    private taskService: TaskService
                    constructor( taskService: TaskService) {
                        this.taskService = taskService
                    }
                    // Note --> If we specify as "public" then it can be accessible outside of the class (For example --> In HTMl file i.e Template) 
                }

            --- Here we are doing two things

            1 Injecting Task service in the constructor of  "Task Component"
            --- Because whenever Angular will create the "taskComponent" instance or will instantiate it , then this Constructor function will get call first.
            --- "Angular instantiate component when the selector of that component is used in another component and when it gets rendered , then Angular instantiate that component class"
            --- This process happen behind the scene automatically.
            --- By adding/injecting service in constructor , we tell Angular whenever this component will instantiate you can create an instance of this service.
            --- That's how Angular's dependency injection mechanism works.
            --- You specify your dependencies in your constructor function,and by clearly defining the type of the parameter you want,
            --- Angular is able to look up the class of that type and create it for you,

            2) Adding   "  @Injectable({providerIn:root})" into tasks service.
            --- In previous step we told angular to create an instance of our class.
            --- However we also need to make our service as Injectable. Also we need to register this class.
            --- To make "Dependency Injection" work we have make our class "Injectable" and need specify at "root" level to create same instance across the app.
            --- This line will create a single Instance of "TaskService" across the app.
            --- By adding this decorator like this, Angular now is aware of this service and can create such an instance when you need it.
            --- And most importantly, it will only create and reuse one instance so that different components operate on the same object in memory and therefore on the same data.


    // Alternative "Dependency Injection Mechanism"

    --- There is an another or alternative way to add the "Dependency Injection."
    --- We can achieve it using "inject" function.
    --- We can simply import "inject" function from "@angular/core".
    --- Then we can pass the "class" for which we need to inject "Dependency."

        // Code snippet

            export class NewTaskComponent {
                  private taskService = inject(TasksService);
                  // Passing "TaskService" class name as "Injection token" for injecting.
                  // We do not need to add it inside a constructor.
                  // After this line we can directly start using "taskService" in this component.
            }


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Local Storage

--> Kindly google about the  local storage and its working

--> Reference 
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



******** Angular Essentials --> Working with Modules **********************************************************************************************************************************************************


--- IN  previous section we learned a lot about the different features of the Angular.
--- Also we build the different components and added different functionalities to them.
--- However the component's that built are the standalone components .
--- In previous versions of angular prior to Angular 13 , the projects were build on "Module based component".
--- Though we can still built the "Module Based " components.
--- Now, in this section, we are basically planning to Migrate our "Standalone Component" based into "Module based components".
--- Here basically we will be covering below details.

    1) Migrating App to Module Based components from Standalone components.
    2) Use "Module Base Component" as Root component i.e Bootstrap component.
    3 Use combination of both Module Based and Standalone components.
    4) Use Standalone components in Module Base components.
    5) Shared Modules (Shared Module functionalities).


// Introduction Angular Modules (NgModules)


--- An Angular module is defined using the @NgModule decorator and typically contains components, services, directives, and pipes that are logically related.
--- Module-based components refer to components that are declared within an Angular module. These components are encapsulated and can be reused within the module or shared with other modules.
--- When in standalone components, we are basically adding other components inside an "imports" to register those components so that we can use these components into that component.
--- While in Module base architecture, we can simply "declares" or register these components at module level, so that we can use them inside that module or shared with other modules.
--- The advantage of the "Standalone" components is that you are aware that , which component is using inside your component. Which can be easily recognizable due to "imports" array.
--- While in  Modules, all the components are assembles to use .

--- We can create "Root module" , "Shared Modules" and "Feature Modules".

    --> 1) Root Module:

    --- Every Angular application has at least one module, known as the root module (often named AppModule).
    --- The root module bootstraps the application.
    
    --> 2) Feature Modules:

    --- Angular applications can have multiple feature modules that encapsulate related components, services, directives, and pipes.
    --- Feature modules help in organizing the application into smaller, more manageable parts.
    
    --> 3) Shared Modules:

    --- A shared module is designed to contain reusable components, directives, and pipes that can be used across different modules in the application.
    --- Typically, shared modules are imported into other feature modules to avoid duplicating code.


--- AS mentioned at the beginning  of this section, we will be migrating our existing standalone app into Module Based components and Mix-match of both of them.


// Creating Root Module

--- Here we are creating an root module, basically a module that will get considered root which will configure the root component as well.
--- So here, first we need to create an "module" , name  "appModule."
--- Basically it is class like component class but we can make that class as a "Module", by adding "@NgModule" decorator.
--- This  "@NgModule" decorators make the class as Module. It accepts certain properties like "declarations", "imports", "bootstraps", "exports" , "providers" and so on ..
--- Now our goal is to make "standalone" "AppComponent" as "Module baseComponent".

--- For that firstly, we will need import the "AppComponent" and needs to register it inside a "declarations" array.
--- So that Angular will understand that we are planning to use this component.

--- During this you will face an below error.

    // Code snippet

    --> App Module

    import { NgModule } from "@angular/core";
        import { AppComponent } from "./app.component";

        @NgModule({
            declarations: [ AppComponent ]
            // Error -> Component AppComponent is standalone, and cannot be declared in an NgModule. Did you mean to import it instead?
        })

        export class AppModule {}

--- This error is telling that "AppComponent" is an "standalone" component, you cannot use it inside a declarations.
--- TO Resolve this error we have to "remove ""standalone: true" property from "AppComponent's" decorator, or we can make it  "standalone:false".
--- Now the error from "AppModule" will get resolve.
--- However now we have made our "AppComponent" as Module Based component so we will face an below error.



            @Component({
            selector: 'app-root',
            // standalone: true, // You can remove or make "standalone: false"
            imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CommonModule],
            // Error on this "imports" --> 'imports' is only valid on a component that is standalone.(-992010) app.component.ts(17, 14): Did you forget to add 'standalone: true' to this @Component?
            templateUrl: './app.component.html',
            styleUrl: './app.component.scss'
            })
            export class AppComponent {
            }

--- To Resolve above error, we will remove imports from "AppComponent", because it is no more stand alone component.
--> Note --> If you are making "standalone" component to "non-standalone" component, also remove "imports" from component decorator configuration.
    --> Since it does not require for "non-standalone components."


--- So now the next is to register our "AppModule" as Bootstrap module.
--- To do that we need to modify the code from "main.ts".
--- Refer to the code snippet below for a reference.

        // Code snippet


        import { bootstrapApplication } from '@angular/platform-browser';
        import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
        import { appConfig } from './app/app.config';
        import { AppComponent } from './app/app.component';
        import { AppModule } from './app/app.module';

        // bootstrapApplication(AppComponent, appConfig)
        // .catch((err) => console.error(err));  
        ..//// This code is when "AppComponent is root and standalone component and we need to make it as bootstrap component"



        platformBrowserDynamic().bootstrapModule(AppModule).then(() => {})
        // Here we can "specify" AppModule as a bootstrap module.
        // This line of code will load the "AppModule" as a first module when user visits the application.


--- Now here, we have specify the "bootstrap" module.
--- After this we need to specify which component that needs to considered as  "bootstrap component" when the "AppModule gets loaded".

--- To achieve this we need to specify that component name in "bootstrap" array inside "@NgModule" decorators.
--- We can add "bootstrap" property inside "@NgModule of the "root module"", i.e inside the "AppModule" in our case. 
--- Refer to the below code snippet for reference.

        // Code snippet

        --> App Module

        import { NgModule } from "@angular/core";
        import { AppComponent } from "./app.component";

        @NgModule({
            declarations: [ AppComponent ],
            bootstrap: [AppComponent ]
        })

        export class AppModule {}

--- "bootstrap" property can accepts an array of a components which needs to be bootstrap.
--- Typically we only provide a "one component as bootstrap component because we need to adhere the "component tree"".
--> Note --> "bootstrap" property is only Available to Module which is register inside main.ts as a "bootstrap module."
--> Note --> Basically we can specify "bootstrap" property to any module, however that module we need to register in main.ts. Then only component that we have specified in "bootstrap" will get loaded.
    --> "Also the selector of "Bootstrap" component needs to be present in index.html"

// Add "StandAlone components inside a Module"

--- Now in our "appComponent", we are using "HeaderComponent, UserComponent, TasksComponent".
--- These are the standalone components and we have made our AppComponent as module base component. And we also saw the error that we got in the "imports" of app component.
--- To make the app workable,  "Either we can make all these components as Module based components or "We can import these components inside a "AppModule""".
--- Because somehow we will need to register these components to tell angular then only we can use them inside an AppComponent.
--- By importing "Standalone components inside AppModule", we can achieve the case to use "Standalone components inside A Module ".
--> Note --> we cannot include the "standalone components inside "declaration part" --> WE can only add "non-standalone components inside a declaration part of Module""
--> Note --> Also to make app running and executing successfully you have to include "BrowserModule" inside the imports array of AppModule.
--- BrowserModule is a critical Angular module that is essential for running an Angular application in a web browser.
--- WE can make the use of built-in directives and many other things due to this module.


// Using Modules inside a Standalone component.

--- In previous section, we saw that how can we add the standalone components inside a module.
--- However we can also add the modules inside a standalone components.
--- In fact, we have already did that in a one of the standalone component.
--- "We have imported "FormsModule"" in NewTaskComponent.
--- We also know that "FormsModule" plays an important role while dealing Two-Way data bindings, Directives and so on...
--- Kindly find the below code  for a reference.

    // Code snippet 

        @Component({
        selector: 'app-new-task',
        standalone: true,
        imports: [FormsModule],
        templateUrl: './new-task.component.html',
        styleUrl: './new-task.component.scss',
        })
        export class NewTaskComponent {

// Creating shared module

--- Sometimes we creates some generic shared components , which we need to be used across app.
--- These components are not related to specific module but they are some reusable components which can leverage across the app.
--- Hence we are creating such "SharedModule" in this section.
--- Kindly refer to the below code a for a reference.


    // Code snippet

    import { NgModule } from "@angular/core";
    import { CardComponent } from "./card/card.component";

    @NgModule({
        declarations: [CardComponent],
        exports: [CardComponent]
    })

    export class SharedModule {}

    --- Here, we need to specify the "Shared components" in the declarations as well as "exports" array.
    --- By adding them "exports" we are making these components  available to other modules for use.
    --- After this we need to register this "sharedModule", so that Angular should know about this else we will not be able make the use of it.

    --- PLease find the below code for registering the SharedModule

    // Code Snippet (AppModule.ts)

            @NgModule({
            declarations: [ AppComponent , HeaderComponent, UserComponent, TasksComponent, NewTaskComponent, TaskComponent],
            imports: [BrowserModule, FormsModule, SharedModule],
            bootstrap: [AppComponent ]
            })

        export class  AppModule {}


    --- Here, we are adding "sharedModule" in the "imports" array.
    --> By  adding "sharedModule" in the "imports" array will "merge the "exports" components from  SharedModule into the "declarations" array of AppModule behind the scenes."
    --- This way the components from sharedModule gets available to the all the components from the AppModule.
    --- We can do this other modules as well, means if we add sharedModule to "Feature Module" rather than AppMOdule then by doing above process the components from SharedModule will get available to 
        --- the components from that Feature Module.

// Creating Feature Module,

--- In previous sections, we learned about how to create the "root module and shared module."
--- In this section, we will learned how to create feature module.
--- In real world project, we usually works on the different feature which pertains different business cases.
--- So to achieve , we divide our application into the different modules.
--- Let's refer to below code snippet, where we are creating "Task  Module" which will containing Tasks Related functionality.


    // Code snippet (TasksModule.ts)


        import { NgModule } from "@angular/core";
        import { NewTaskComponent } from "./new-task/new-task.component";
        import { TaskComponent } from "./task/task.component";
        import { TasksComponent } from "./tasks.component";

        @NgModule({
            declarations:[TasksComponent, NewTaskComponent, TaskComponent],
            exports: [TasksComponent]
        })

        export class TasksModule {}


        // App.Module.ts

            @NgModule({
            declarations: [ AppComponent , HeaderComponent, UserComponent],
            imports: [BrowserModule, FormsModule, TasksModule, SharedModule],
            bootstrap: [AppComponent ]
        })

        export class  AppModule {}
    

    --- In above code snippet you can see , we are only making "TaskComponent" export from task feature module.
    --- Yes it is right, we don't necessarily export all the components from the feature or any module.
    --- We should only "export the components that are being used by the components which are declared in the another module where we are importing the module".
    --- Meaning "In our case, only the "Tasks" component is used by "AppComponent" from AppModule". No other components excepts "TaskComponent" from "TaskFeature module" used by any other components from AppModules "Declaration array"
    --- Hence we are only "exporting tasks component".

    // Important Note

    --- After running the code for  above feature module you will get an error for the components from "shared module" that those components are not know elements.
    --- Usually we face such errors when we are using an selector of the components but does not register them.
    --- You might be wondering we have already added SharedModule in AppModule then it must be available to TaskFeature Module.
    --- No it will not get available , So as of now TaskModule is not aware the components from SharedModule.
    --- So to resolve this issue we need include "SharedModule in the imports array of an feature TaskModule".
    --- It is thumb rule, every module must work on its own.
    --- So if a module needs something, it must declare or import it itself. 
    --- It can't get it from any parent module that might be using this module.
    --- Hence if we need any components from SharedModule then we have register sharedModule inside the "TaskFeature Module."
    --- Note if you need some features from "Browser Module" the you can import "commonModule" instead of it.
    --- Because "Browser Module" is only meant to be imported into the root module which bootstrap the application.



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


********  ******************* ************************************ Deep Dive ---- Components and Templates ********************************************************************************************

--- In this section, we will be learning about the Components and Templates in more depth.
--- There are some advance components features and concepts that we will learning as a part of this section.

    // High-level  glance about this section.

    1) Advance components Features and Concepts.
    2) Working with Host element.
    3) Inputs, Outputs & Two-way-Binding.
    4) Interacting with Component Views & Content.
    5) Component Lifecycle.


    //  When & How To Split Up Components.
    
    --- In Angular, the principles of "Separation of Concerns" and "Code Colocation" represent two different approaches to organizing code within an application. 
    --- These principles often need to be balanced to create maintainable, understandable, and efficient applications.

        --> Separation of Concerns (SoC) in Angular

        --- Separation of Concerns (SoC) is a design principle that encourages organizing code in a way that separates different functionalities into distinct modules, components, services, or files. 
        --- Each part of the application should handle a specific aspect of the functionality, promoting modularity, reusability, and maintainability.

        -->  Simplicity and Code Colocation in Angular

        --- Simplicity and Code Colocation is an approach that emphasizes placing related pieces of code together in the same file or directory. 
        --- This is often in contrast to SoC, as it values keeping related functionality close to each other to simplify understanding and development.

        --> Balancing Separation of Concerns and Code Colocation

        --- In practice, Angular development often requires balancing SoC and Code Colocation:

        1) Complex Features: 
        --- For complex applications, SoC might take precedence to ensure that the application remains modular, scalable, and maintainable. Code is separated into services, components, and modules with clear boundaries.

        2) Simple Features: 
        --- For smaller or less complex parts of an application, Code Colocation might be favored to keep things simple and avoid over-engineering.



    // Extending an Built-in Elements.


    --- In this section we will learn how can we apply  pattern for extending an Built-in Elements.
    --- So when we create components, these components are get's rendered in the DOM.
    --- And the content i.e Template of that component is added in between those selectors.
    --- Meaning our component's selector are always residing in the DOM they are not compiled away.
    --- Meaning

        For example

            // App-Button

            import { Component } from '@angular/core';

            @Component({
            selector: 'app-button',
            standalone: true,
            imports: [],
            templateUrl: './button.component.html',
            styleUrl: './button.component.scss'
            })
            export class ButtonComponent {

            }

            // Template Code

            <button>
                <span>
                Logout
                </span>
                <span class="icon">
                →
                </span>
            </button>

            // Usage (In another component's HTML file.)

            <app-button/>

    --- Now when we compiled this code and check the DOM , we can see below code in the Browser.

                <app-button _ngcontent-ng-c2077118811="" _nghost-ng-c3521605694="">
                        <button _ngcontent-ng-c3521605694="">
                                    <span _ngcontent-ng-c3521605694=""> Logout </span>
                                    <span _ngcontent-ng-c3521605694="" class="icon"> → </span>
                        </button>
                </app-button>



    --- In this code you can see, the "template" part of "app-button" component is being rendered inside the "app-button" selector.
    --- This happens for every component, where  that component's markup is replace or gets added between the selector tag.
    --- This is not wrong, but sometimes we can have redundant elements are in the DOM.
    --- For example, In our case, we have a "<app-button" and "button" is kind of duplication,
        --- Here, we are having a wrapper that's almost named button(app-button) around an element that's named button.
    --- we can actually change our code hereto end up with a leaner DOM, because what we essentially wanna do here with that button component is that we wanna kind of extend the built-in button component.
    --- By extending the "built-in" button component, we will be having same capabilities , we can listen same events and we have more control over its markup in this case.

    --> How to extent the Built-In elements ?

    --- Following-up to our example, we will see how can we extend the built in component.
    --- In our example , we are having below code which is residing in the "app-button" component.
            

            // app-button HTML
            <button>
                    <span>
                    Logout
                    </span>
                    <span class="icon">
                    →
                    </span>
            </button> 

        1)
        --- As a first step, we are removing the "button" element from the template and will keep only content from it .
        --- Hence after making this change the "template of ""app-button" component will look like below code.

            // app-button (After removing "button" and keeping only content)
                        <span>
                        Logout
                        </span>
                        <span class="icon">
                        →
                        </span>

        2)
        --- The second is the most important step.
        --- Here , we are changing the "selector" of "app-button" i.e "ButtonComponent".
        --- Usually, we set the selector's name as "app-button" or "app-dashboard", however we are not limited to add this kind of selector.
        --- We can have different kind of selectors as well.
        --- Angular supports  "Type(Element) Selector i.e "app-button"" (The one we commonly use), then the "Attribute selector" and last one "Class selector".

            --> Reference
            https://angular.dev/guide/components/selectors 

            --- Here, we will be extending an element using an "Attribute" selector instead of Element selector.
            --- Attribute selector is same to the "CSS attribute selector".
            --- By using the "CSS attribute selector" as a component selector, the component selector will act as CSS Selector.
            --- Let's see how can we do this as a Part of step 3.


        3)

        --- IN this step, we are adding "CSS attribute selector" as a selector of the Component.
        --- Make sure when we are adding this "CSS attribute selector" as selector, we have to name it  unique so that it will not conflict with built-in attribute names.
        --- For example you can add prefix as "app" then "CSS attribute selector" will "appButton" .
        --- Now when you add this "attribute" to any element then this component will get active and the template of this component will get added between the tag's of an element on which we are putting this attribute.
        --- On the top of it you can also combine this selector with other selector.
        --- For example, I want to active above component only when my attribute selector is applied on the "button element".
        --- So in that case you can add your selector (ButtonComponent selector) as "button[appButton]".
        --- This will activate "ButtonComponent" only when the it's selector(CSS attribute selector) is present on the "button element"

        --> After following above steps , please find the find code..

            // Button Component
            import { Component } from '@angular/core';

            @Component({
            selector: 'button[appButton]', //// Attribute selector
            standalone: true,
            imports: [],
            template:  ` 
                    <span>
                    Logout
                    </span>
                    <span class="icon">
                    →
                    </span>
            `
            })
            export class ButtonComponent { }


            // Another Component's Template where we are using this ButtonComponent

             <button appButton></button>

             --- Here we have directly adding "appButton" on the button element.
             --- Which also satisfy the attribute condition that we have specified in the "ButtonComponents" selector.
             --- Once it gets compiled and then the content "appButton i.e ButtonComponent" will get added between "button element's tag"
             --- This will rendered the below code in the DOM.



            // DOM code (Browser)

            <button _ngcontent-ng-c2916673706="" appbutton="" _nghost-ng-c19137640="">
            
            
                        <span _ngcontent-ng-c19137640=""> Logout </span>
                        <span _ngcontent-ng-c19137640="" class="icon"> → </span>
                        
            </button>

            // OLD DOM CODE

               <app-button _ngcontent-ng-c2077118811="" _nghost-ng-c3521605694="">
                        <button _ngcontent-ng-c3521605694="">
                                    <span _ngcontent-ng-c3521605694=""> Logout </span>
                                    <span _ngcontent-ng-c3521605694="" class="icon"> → </span>
                        </button>
                </app-button>


            --- By comparing above DOM , you can see how we have made our DOM linear by extending the "button element" and removing the wrapper  "app-button" component,
                --- Just by changing the selector.


            --- That's how we can take the control of built in HTMl element by our custom component.
            --- This is a pretty powerful Angular feature and pattern because it is essentially allows us to use built-in elements and extend their functionality or templates. 
            --- This pattern of selecting an element by attribute is used if you wanna extend a built-in element.
            --- Whenever you're building a brand new component that just wraps a bunch of built-in elements but doesn't really replace one,you should use the element selector as we did it before (Element i.e Type selector).

--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Content-Projection

--- As we know how can do content projection.
--> Please refer to https://v17.angular.io/guide/content-projection 
--- However content projection is more than we know.
--- We can have Multi-slot content projection and some advance project contention.

    --> Multi-slot content projection: 
    --- Allows different parts of the projected content to be placed into different slots using the select attribute.
    --- Using multi-slot content projection, we decides which contains should  go where.
    --- WE can use "select" property to decide this on "ng-content" element.
    --- "select" accepts any "CSS selector" in the end.
    --- Let's understand this by below example.
    --- Also we can use any kind of "selector" to refer the multiple slot.

        // Child - Component (Card component)

            <div class="card">
            <div class="card-header">
                <ng-content select="[card-header]"></ng-content>
            </div>
            <div class="card-body">
                <ng-content select="[card-body]"></ng-content>
            </div>
            <div class="card-footer">
                <ng-content select="[card-footer]"></ng-content>
            </div>
            </div>

        // Parent - Component 

            <card-component>
            <div card-header>Header Content</div>
            <div card-body>Body Content</div>
            <div card-footer>Footer Content</div>
            </card-component>

    --- In this example, you can see how we are using different "slots" to inject the content.
    --- Also we are using those slots(selector) name to inject the respective content.
    --- Basically Angular will inject the wrapped content (Content between the selector, like <a-component> Hi </a-component>)on the basis of the "selector" that we pass . 

    // Key Points to understand.

    --- Sometimes if we are having multi-slot content projection and if we do not pass the "selector" then Angular will not understand where to inject the content,
    --- Hence Angular will inject all content in the place of last "<ng-content>" element

            // Child Component

                <div>
                <span><ng-content></ng-content> </span>
                <span> <ng-content></ng-content> </span> //// All the content will get injected inside this second span and in the place of second ng-content.
                </div>

            // Parent component

                <app-card>
                    <h1>hello</h1>
                    <h2>hello</h2>
                </app-card>
        
            --- Like in this case,  All the content will get injected inside this second span and in the place of second ng-content.
            --- Because Angular will not understand where to inject the content.

    --- Similar case will happen if you have two(multi-slot) "ng-content" and you have added "select" to only on slot.

                  // Child Component

                <div>
                <span><ng-content ></ng-content> </span>
                <span> <ng-content select="#data"></ng-content> </span>
                </div>

            // Parent component

                <app-card>
                    <h1>hello</h1>
                    <h2 id="data">hello</h2>
                    <h3>How are you ! </h3>
                </app-card>

        --- In this case the content with selector "#data" will get injected in the respective slot.
        --- However the remaining content will get injected in the first "ng-content" slot, which does not have any selector.
        --- Basically Angular will matches the respective selector and put that content in that slot.

    --- In Summary, you can make the use of "select" to implement multi-slot projection.
    --- If "ng-content" do not have any "select" attribute i.e which does not have any configuration will then output any content that's not matched by some other ng-content element.
        --- It is not selected by any specific way by another ng-content element.


    // Advance "Content Projection"

    --> "ngProjectAs "

    --- The ngProjectAs directive enables you to specify a custom identifier for the projected content. 
    --- This is especially useful when you have multiple <ng-content> elements within a component, and you want to differentiate between them.
    --- You can provide a specific name for the content being projected, allowing the parent component to identify and use that content appropriately.
    --- ngProjectAs, that allows you to specify a CSS selector on any element.
    --- Whenever an element with ngProjectAs is checked against an <ng-content> placeholder, Angular compares against the ngProjectAs value instead of the element's identity:

    --- Let's understand "ngProjectAs" by below example.
      
    // Code snippet

        // Card component (Child component Template)
        <div class="card-shadow">

                <ng-content select="card-title"></ng-content>
        
                <div class="card-divider"></div>
        
                <ng-content></ng-content>
        </div>

        // Using the above component in Parent Component //
            <custom-card>
            <h3 ngProjectAs="card-title">Hello</h3>  //// Here, we passing an "identifier"(That we defined in child component's 'select' attribute) as a value to "ngProjectAs"
            <p>Welcome to the example</p>
            </custom-card>


        // Rendered DOM //
        <custom-card>
        <div class="card-shadow">
            <h3>Hello</h3>
            <div class="card-divider"></div>
            <p>Welcome to the example></p>
        </div>
        </custom-card>



// Defining Content Projections fallbacks

--- This is the another feature of the ng-content.
--- Here , we can specify the fallback content when we do not specify the respective ng-content value.
--- Let's understand this by below example.


        // Code snippet (Button Component)

        
                <span>
                <ng-content></ng-content>
                </span>
                <span class="icon">
                <ng-content select="icon">
                    ▶️
                </ng-content>
                </span>

        --- In this code snippet, we have specified the "fallback content" if  no specific "icon" is defined.
        --- Hence fallback content will appeared in that case.

        // Parent component

        <button appButton>
                Logout
        </button>


        --- Here we have not specified the "icon" selector for any element.
        --- Hence the fallback content will get execute.



        // DOM rendered

        <button _ngcontent-ng-c1215933227="" appbutton="" _nghost-ng-c2606595364="">
        
                    <span _ngcontent-ng-c2606595364=""> Logout </span>

                    <span _ngcontent-ng-c2606595364="" class="icon"> ▶️  <!--container--></span>
        
        </button>


// Multiple Selectors (In Content projection' select attribute and Component's selector)

--> Multiple selectors for "ng-content's select attribute"

--- Here, first we will se how can we specify the multiple selector's for "select" attribute in "ng-content".
--- By doing this we can be more restrictive towards the passing content .
--- By adding this, we can be more selective about which kind of content can  be projected in your components.
--- This will make sure that the content projection is not using in an incorrect way .

--- In below example, we have created a "control" component, which will responsible for creating controls for the form.
--- Here, we will be more selective about injecting the "controls" .
--- Let's understand it by below code snippet.

        // Code snippet

            // Controls component (HTML)

                 <p>
                    <label>{{label()}}</label>
                    <ng-content select="input, textarea"></ng-content>
                </p>

            --- In this code snippet, we are more specific about which kind of content should be injected in the component.
            --- That's why we specify the multiple element selectors.
            --- So we can only inject the "input" and "textarea" element.
            --- Any other elements will simply get omitted if we specify them as a part of wrapped content.
            --> Important to note tha, we can specify any combinations of selectors.

--> Multiple selectors in Component

--- In Angular, when you create a component, you can define multiple selectors for it. 
--- This allows the component to be used with different tag names, class names, or attribute names in your templates.

--- Like "select" attribute in "ng-content", here also you can specify the multiple selectors by adding "comma" between them.

    // Example of a Component with Multiple Selectors

        // Button Component

                import { Component } from '@angular/core';

                @Component({
                selector: 'button[appButton], a[appButton]',
                template: `
                    <button class="btn">
                    <ng-content></ng-content>
                    </button>
                `,
                styles: [`
                    .btn {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    }
                    .btn:hover {
                    background-color: #0056b3;
                    }
                `]
                })
                export class ButtonComponent { }

        // Usage of it with different selectors.


                <p>
                <button appButton> //// using here
                    Submit
                    <span ngProjectAs="icon">
                        ▶️
                    </span>
                </button>
            </p>
            <p>
                <!-- <a appButton> //// using here
                    Submit
                    <span ngProjectAs="icon">
                        ▶️
                    </span>
                </a> -->
            </p>

    --> Practice things
    --- Create multi selector component and check its behavior and validate the DOM tree.
    --- Check what will happen if we do not specify the "," between selector names.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Scoping CSS styles to Components

--- Till the time , we are adding the all the application style in global ,"style.css" or "style.scss".
--- Now, we should learn how can we add component related styling in its style sheet or style file.
--- The key difference between adding the style at component level and global level, is 
    --- The style at component level is scoped to that component only. It never mix with other component's style.
    --- However the style at global file, is available globally. So there might be chances where conflicts occur if we are having same kind selectors on different components .

--- To understand about the controlling styling we will be learning about the "View Encapsulation".

--> View Encapsulation

--- "View Encapsulation" is the another great feature provided by an Angular.
--- This feature help us to decide the scope of the style of the component.
--- We can specify the "encapsulation" as a part of the component's metadata.
--- "ViewEncapsulation" is "enum" which contains different values, which decides the scope of the component's style.
--- Let's understand it's behavior.



    // ViewEncapsulation.none


    --- To understand how this works, we can consider the following scenario.
    --- We have a "control" component, where we are using "ng-content" to inject the content.
    --- Let's understand this by code.


        // Control's component


        import { Component, input } from '@angular/core';

            @Component({
            selector: 'app-control',
            standalone: true,
            imports: [],
            template: `
          
                <p class="control">
                        <label>{{label()}}</label>
                        <ng-content select="input, textarea"></ng-content>
                    </p>

                `,
            
            styles: `
                .control label {
                    display: block;
                    font-size: 0.8rem;
                    font-weight: bold;
                    margin-bottom: 0.15rem;
                    color: #4f4b53;
                }
                
                .control input,
                .control textarea {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font: inherit;
                    font-size: 0.9rem;
                    color: #4f4b53;
                }
            
            `
            })
            
            
            
            export class ControlComponent {
            label = input.required<string>();
            }

        --- In the above code snippet if you can see we have specify the "ng-content", which is accepting "input and textarea"
            --- as content.
        --- Also we have specify the styling for "input" and "textarea".
        --- Now, here we are in the assumption of "when we will be injecting "input" or "textarea"" as wrapped content,
            --- wherever we are using this "control" component, the style that we have specify in "controls" component
            --- will get applied.
        --- Meaning we are assuming that style will get apply when "DOM structure will get created where input or text area will
            --- became part of this component after injection."
        --- But that's not the case in actual.
        --- Here, "input and textarea" are not a part of "control component".
        --- When angular scans the template, it can only see the "ng-content" selector or placeholder.
        --- Angular does not care about which content might eventually end up in your components template, it only cares about what it sees in your component template.
        --- Here it only sees the placeholder, not the actual inputs or text areas that will end up here in the  future.
        --- That's why the styles written in control component will not affect inputs or text areas that will be projected into this component. 

        --> Now, How can we resolve this scoping issue ?

        --- We can disable the scoping of this component using "ViewEncapsulation.None".
        --- This will make component style to affect other component styles.
        --- Meaning wherever we are using this similar markup or HTML , this style will get applied to it.
        --- The default value of  "encapsulation" is  "ViewEncapsulation.Emulated" --> Which is responsible for scoped styling.
        --- "ViewEncapsulation.None" will disable the style scoping.
        --- After applying this to a control component, the styles from it becomes the global style now.
        --- Hence , Now it will have affect on "inputs and textarea" when we run the application in browser.


        --- Some high level details about all the properties in ViewEncapsulation

        // ViewEncapsulation.ShadowDom

        --- In ShadowDom mode, Angular uses the browser's native Shadow DOM API to attach a shadow root to the component's host element. 
        --- The component's styles and DOM are fully encapsulated inside this shadow root, completely isolated from the rest of the document.
        --- Styles are scoped to the component naturally by the Shadow DOM. 
        --- The styles and DOM within the shadow root are completely isolated, so they do not affect the styles of other components or elements outside the shadow root.
        --- Requires browsers that support Shadow DOM. This is widely supported in modern browsers, but not in some older ones.
        --- Native Shadow DOM can be less performant in some cases due to the overhead of creating and managing shadow roots. However, it offers true encapsulation, which can be beneficial for large, complex applications.
        --- Complete isolation. Styles within the Shadow DOM do not affect, and are not affected by, styles outside the Shadow DOM.
        --- It's particularly useful for web components(JavaScript Concept) or complex UIs where you want to ensure complete isolation of a component's styles and DOM.


        // ViewEncapsulation.Emulated

        --- Angular emulates the Shadow DOM browser feature for its own components.
        --- Angular emulates Shadow DOM behavior by adding unique attributes to the component's host elements and their children. 
        --- This ensures that styles defined in the component are scoped to that component only, even though they are actually applied globally in the DOM.
        --- The component's styles are encapsulated by automatically appending unique attributes (like _ngcontent or _nghost) to the CSS selectors and corresponding elements. 
        --- This prevents styles from leaking out of the component and affecting other parts of the application.
        --- Since it doesn't rely on the browser's native Shadow DOM support, it works in all browsers, including older ones that don't support Shadow DOM.
        --- Slightly better performance than ShadowDom since it doesn't rely on the browser to manage a Shadow DOM, but rather manipulates the global styles.
        --- Styles are scoped to the component, preventing conflicts with global styles or other components, but they are still part of the global CSS tree.


        // ViewEncapsulation.None

        --- The component’s styles are added to the global stylesheet. They can affect any elements in the application, not just the ones within the component.
        --- There is no encapsulation or isolation of styles. The styles can easily leak out and affect other components, and other global styles can also affect the component.
        --- Angular does not append attribute selectors (like _ngcontent or _nghost) to the component's styles or DOM elements. The styles are applied as they are defined.
        --- ViewEncapsulation.None is typically used when you intentionally want to apply styles globally or when you want to override styles across the entire application.


        --> Inheritance Styling and Global Styles Effects
        --- Kindly practice for below scenario.
            1) Parent and Child --> ShadowDom
            2) Parent ShadowDom and Child Emulated
            3) Parent Emulated and Child ShadowDOM
            4) Parent and Child --> Emulated



    // Working with Host Elements

    --- In Angular, the term "host element" refers to the DOM element in which a component's view is rendered.
    --- Every Angular component has a Host Element.
    --- An example "A component with a selector of “app-header” targets an <app-header> element which is rendered into the real DOM".
    --- Host Element is the element that is selected by "component's selector."
    --- When it comes to styling these host elements, Angular provides a few ways to apply styles specifically to them, 
        --- making it easier to control the appearance of the component's container without affecting other elements inside or outside of the component.
    --- The :host pseudo-class selector in Angular allows you to apply styles directly to the host element of a component. 
    --- This is particularly useful when you want to style the component's container element rather than the internal content.

    --- Let's understand this by our previous "CSS attribute component" example.
    --- In previous sections we have created an Button Component by extending an Button element.
    --- Now, we will see how we can make the use of "Host" elements to style the component's markup.


        // Code Snippet

        // Button's Component

            import { Component } from '@angular/core';

            @Component({
            selector: 'button[appButton], a[appButton]',
            standalone: true,
            imports: [],
            template: `
            
                <span>
                <ng-content></ng-content>
                </span>
                <span class="icon">
                <ng-content select="icon">
                    ▶️
                </ng-content>
                </span>
            
            
            `,
            styles: `
            
            button {
                     display: inline-block;
                     padding: 0.65rem 1.35rem;
                     border-radius: 0.25rem;
                     font-size: 1rem;
                     text-align: center;
                     cursor: pointer;
                     background-color: #691ebe;
                     color: white;
                     border: none;
                   }
                    
                   button:hover {
                     background-color: #551b98;
                   }
                    
                   .icon {
                     display: inline-block;
                     margin-left: 0.5rem;
                     transition: transform 0.2s ease-in-out;
                   }
                    
                   button:hover .icon {
                     transform: translateX(4px);
                   }
            `
            })
            export class ButtonComponent {

            }

            // Using Above Button Component in below Parent Component


             <button appButton>
                    Submit
                    <span ngProjectAs="icon">
                        ▶️
                    </span>
            </button>


            --- In this code snippet, you can see we have added a  "button" related styling in button component.
            --- But, "button" element is not present in the template of Button Component.
            --- Since "we do button[appButton]" as a selector and we are using it inside a parent component.
            --- The "button" element which holds [appButton] attribute satisfies our selector condition.
            --- Hence eventually it is now our HOST element.
            --- So In above code our styling will not work as Angular will not able find "button" inside our button's component template.

            --- To resolve that issue we can apply below style in "Buttons component"

            // Styles with HOST

            // Button's Component

            import { Component } from '@angular/core';

            @Component({
            selector: 'button[appButton], a[appButton]',
            standalone: true,
            imports: [],
            template: `
            
                <span>
                <ng-content></ng-content>
                </span>
                <span class="icon">
                <ng-content select="icon">
                    ▶️
                </ng-content>
                </span>
            
            
            `,
            styles: `
            
            :host {
                display: inline-block;
                padding: 0.65rem 1.35rem;
                border-radius: 0.25rem;
                font-size: 1rem;
                text-align: center;
                cursor: pointer;
                background-color: #691ebe;
                color: white;
                border: none;
                }
                
                :host:hover {
                    background-color: #551b98;
                }
                
                .icon {
                    display: inline-block;
                    margin-left: 0.5rem;
                    transition: transform 0.2s ease-in-out;
                }
                
                :host:hover .icon {
                    transform: translateX(4px);
                }
            `

            })

            export class ButtonComponent {

            }

            --- In this code snippet we have replace "button" with "host" selector.
            --- Because in our case "button" tag is the host element and inside it our button component's markup is rendering.
            --- Hence "host" selector will apply the styles to the host element.
            --- Basically the "Component selector" i.e The Component HOST element is NOT Considered as part of component template because "Template is rendering inside it".
            --- For example "<app-header> ...... </app-header>". Here "app-header" is host element and template is rendering inside it so that styling that we are applying should only consider part 
                --- which is rendering inside it.
            --- By using "host" we can apply the style to the Component element i.e app-header 

            --> More cases discovery on CHAT GPT

// Using Host elements like Regular element.


--- We know that Component's selector is an custom html tag which represent a our component in a DOM.
--- In the end it can be rendered as element in the DOM.
--- IN previous section, we saw that we can call "HOST element" for component's selector.
--- If we could look at this, in the end it is just an element which is rendered in the DOM.
--- Therefore we leverage it for achieving our implementation.
--- Hence like other HTML elements we can set the "attributes" like "classes, id and so on ..." to this elements.
--- Make sure setting "input" properties is different and setting attribute like Regular HTML element is bit different.
--- Let's understand this by below example.


    // Code snippet


        // Control component

        import { Component, input, ViewEncapsulation } from '@angular/core';

        @Component({
        selector: 'app-control',
        standalone: true,
        imports: [],
        template: `
        
          <label> {{label()}} </label>
        
          <ng-content select="input, textarea"></ng-content>
        
        
        `,
        styles: `
        
        .control label {
                display: block;
                font-size: 0.8rem;
                font-weight: bold;
                margin-bottom: 0.15rem;
                color: #4f4b53;
            }
            
            .control input,
            .control textarea {
                width: 100%;
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                font: inherit;
                font-size: 0.9rem;
                color: #4f4b53;
            }
                    
        
        
        ` ,
        encapsulation: ViewEncapsulation.None, 
        })
        export class ControlComponent {
        label = input.required<string>();
        }

    
        // Usage in Parent component


        <form>

            <app-control label="Title">
                <input  name="title" id="title"/>
            </app-control>
            
            
            <app-control label="Request">
                <textarea  name="request" id="request" rows="3"> </textarea>
            </app-control>


        </form>

        --- IN the above code snippet, we have a "control" component, which is responsible for injecting content (For input and textarea).
        --- Now if you could look at the style for "control component", you will see we have ".control" class and then we are applying some styling on "input and textarea".
        --- But ".control class" in its template file.
        --- Here , you will say that we can use the ":host" sudo class to apply the styling directly to the host element and remove control class.
        
        --- For example, below code snippet will comes to your mind

                    :host label {
                            display: block;
                            font-size: 0.8rem;
                            font-weight: bold;
                            margin-bottom: 0.15rem;
                            color: #4f4b53;
                        }
                        
                    :host input,
                    :host textarea {
                            width: 100%;
                            padding: 0.5rem;
                            border: 1px solid #ccc;
                            border-radius: 4px;
                            font: inherit;
                            font-size: 0.9rem;
                            color: #4f4b53;
                        }

        --> Unfortunately This code snippet will not work ☹️. Why ?

        --- The first thing is our "control" component is having "encapsulation" is set to "ViewEncapsulation.None".
        --- Which is resulting our component style is no more scope to component.
        --- As we learned this style is a part of global style.
        --- These styles of this component are indeed no longer scoped to this component.
        --- Instead, they are applied as global styles to the entire page as if you would've put them into the styles.CSS file in the end.
        --- And therefore there is no real connection between these styles and these CSS rules and the component to which you attach them. 
        --- That's why this host selector doesn't target this component's host element with view encapsulation set to none.

        --- Hence in this specific case we cannot use the "host selector".

        // Solution

        --- Here, we can make the use of treating host element as regular element.
        --- For this we will add the "class" to our host element. i.e to "app-control" component.
        --- Let's understand this by below code snippet


        
                // Code snippet


                    // Control component

                    import { Component, input, ViewEncapsulation } from '@angular/core';

                    @Component({
                    selector: 'app-control',
                    standalone: true,
                    imports: [],
                    template: `
                    
                    <label> {{label()}} </label>
                    
                    <ng-content select="input, textarea"></ng-content>
                    
                    
                    `,
                    styles: `
                    
                    .control label {
                            display: block;
                            font-size: 0.8rem;
                            font-weight: bold;
                            margin-bottom: 0.15rem;
                            color: #4f4b53;
                        }
                        
                        .control input,
                        .control textarea {
                            width: 100%;
                            padding: 0.5rem;
                            border: 1px solid #ccc;
                            border-radius: 4px;
                            font: inherit;
                            font-size: 0.9rem;
                            color: #4f4b53;
                        }
                                
                    
                    
                    ` ,
                    encapsulation: ViewEncapsulation.None, 
                    })
                    export class ControlComponent {
                    label = input.required<string>();
                    }

                
                    // Usage in Parent component


                    <form>

                        <app-control label="Title" class="control">   //// "Here we are setting the "class" attribute to our host element"
                            <input  name="title" id="title"/>
                        </app-control>
                        
                        
                        <app-control label="Request" class="control">  //// "Here we are setting the "class" attribute to our host element"
                            <textarea  name="request" id="request" rows="3"> </textarea>
                        </app-control>


                    </form>

        --- Hence this is the possible solution where we can set any kind of attributes to the host element(Our own components) whenever require.
        --- This solution, will resolve our styling issue and styles from "control" component gets applied easily.
        --- That's how you can make the use of host element to achieve the implementations.

// Interactive with HOST elements from Inside Components


    --- In previous sections, we saw that how we can apply styles to host elements, how to set attributes to host elements and also how can we make the use of ":host" css selector.
    --- In previous section, we were setting up the attributes to the host element.
    --- However there might be the changes sometimes , you forgot to add any attributes and also you need to add them every time when you use component's selector.
    --- That's why Angular gives you an another way to setup this attributes.
    
    --- Basically , we can set these attributes from inside a component or host element.
    --- In previous example, we have set the "class="control"" attribute wherever we are using "app-control" as  host element.
    --- Now , we can this attribute from inside a control component.

        // Code Snippet


              // Control component

                    import { Component, input, ViewEncapsulation } from '@angular/core';

                    @Component({
                    selector: 'app-control',
                    standalone: true,
                    imports: [],
                    template: `
                    
                    <label> {{label()}} </label>
                    
                    <ng-content select="input, textarea"></ng-content>
                    
                    
                    `,
                    styles: `
                    
                    .control label {
                            display: block;
                            font-size: 0.8rem;
                            font-weight: bold;
                            margin-bottom: 0.15rem;
                            color: #4f4b53;
                        }
                        
                        .control input,
                        .control textarea {
                            width: 100%;
                            padding: 0.5rem;
                            border: 1px solid #ccc;
                            border-radius: 4px;
                            font: inherit;
                            font-size: 0.9rem;
                            color: #4f4b53;
                        }
                                
                    
                    
                    ` ,
                    encapsulation: ViewEncapsulation.None, 


                      host: {
                        class: 'control'                //// Here, we are using "host" property from component's metadata to set the attributes for a component.
                    }
                    })
                    export class ControlComponent {
                    label = input.required<string>();
                    }


        --- Here, we are using "host" property from component's metadata to set the attributes for a component.
        --- "host" accepts an object for the configuration.
        --- It will add the key value pairs , you add here as properties on your host element.
        --- Like, In our example , we have added "class" a property and "control" as a value for it.
        --- Then it will add "class" as attribute to the "controls component element (app-control)" wherever we are using.
        --- WE just need to define this once it here and it will applies to all the places where we are using  "app-control."
        --- In summary, you can make the use of "host" property from @Component's metadata to configure the host elements attribute from inside a component and it will applies these attributes in all the place,
            --- wherever we are using this component,



// When to Rely or NOT rely on HOST Elements


--- In previous sections, we learned a lot about host elements.
--- But, there few things we need to keep in mind while using HOST elements.
--- We can use host elements to style component sometimes we have non-sematic html tag's wrapper which cause redundant code.

--- For example, Let's see how can we make the use of "host" elements.

        // Code snippet (Before using HOST )


        import { Component, input } from '@angular/core';

        @Component({
        selector: 'app-dashboard-items',
        standalone: true,
        imports: [],
        template: `
                        
        <div class="dashboard-item">
                    <article>
                        <header>
                            <img [src]="image().src" [alt]="image().alt" />
                            <h2>{{header()}}</h2>
                        </header>
                            <ng-content></ng-content>
                    </article>
         </div>
                        
        
        `,
        style: `
        
            .dashboard-item {
                    display: block;
                    padding: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    background-color: #f8f8f8;
                    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
                }
                
            .dashboard-item header {
                    display: flex;
                    padding: 0;
                    gap: 0.75rem;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                
            .dashboard-item header img {
                    width: 1.5rem;
                    height: 1.5rem;
                    object-fit: contain;
                }
                
                h2 {
                    margin: 0;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    color: #504e50;
                }
                
                @media (min-width: 768px) {
                    .dashboard-item {
                    padding: 2rem;
                    }
                }

        
        `
        })
        export class DashboardItemsComponent {
        image = input.required<{
            src: string;
            alt: string;
        }>();
        header = input.required<string>();
        }

        // Using in Parent component


           <app-dashboard-items [image]="{src: 'globe.png', alt: 'A list of items'}" [header]="'Traffic'">
                    <app-traffic/>
        </app-dashboard-items>


        --- In this code, if you can see the "template" of "dashboard-item" component, we are having a "wrapper div" which is acting as container for the template.
        --- Ideally, this is redundant code, we can remove that class.

         // After removing the "dashboard-item" class and div.
        --- Our code will start breaking after removing a div with "dashboard-item" class.
        --- Our style will break, because if you can the css of "dashboard-item" component , it is still scoped to the component level.
        --- There it will check the "css selectors"(CSS style selector that we have added in scss/css file) matches inside a templates.
        --- Therefore it will not found an element which is having "dashboard-item" class.

        // Solutions

        --- To resolve this , we have 2 possible solution

        1) Make a use of "ViewEncapsulation.None" and add "dashboard-item" as class inside a "host" configurations.

        --- Below code will put the styling of the dashboard-item components in global styles.
        --- And since we are adding "class(.dashboard-item) class on a host" the style will get applied.
        --- Make sure you have to specify the respective  class that we are using inside a host configuration other will global style will not have that affect.
            --- Because it should match with css selectors that you have specified in the styles.
            
            
            import { Component, input} from '@angular/core';
            @Component({
            selector: 'app-dashboard-items',
            standalone: true,
            imports: [],
            templateUrl: './dashboard-items.component.html',
            style: `
        
            .dashboard-item {
                    display: block;
                    padding: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    background-color: #f8f8f8;
                    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
                }
                
            .dashboard-item header {
                    display: flex;
                    padding: 0;
                    gap: 0.75rem;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                
            .dashboard-item header img {
                    width: 1.5rem;
                    height: 1.5rem;
                    object-fit: contain;
                }
                
                h2 {
                    margin: 0;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    color: #504e50;
                }
                
                @media (min-width: 768px) {
                    .dashboard-item {
                    padding: 2rem;
                    }
                }

        
        `
            encapsulation: ViewEncapsulation.None,
            host: {
                class: 'dashboard-item'
            }


        2) Second solution is to use of ":host" pseudo class in the place of "dashboard-item" class.
        --- In the below code, we have directly added ":host" pseudo css selector.
        --- Here, we have replace all the ".dashboard-item" class occurrences with  ":host" pseudo class.
        --- This will resolve the issue and apply the respective styling.


            import { Component, input} from '@angular/core';
            @Component({
            selector: 'app-dashboard-items',
            standalone: true,
            imports: [],
            templateUrl: './dashboard-items.component.html',
            style: `
        
            :host {
                    display: block;
                    padding: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    background-color: #f8f8f8;
                    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
                    }

                    :host header {
                    display: flex;
                    padding: 0;
                    gap: 0.75rem;
                    align-items: center;
                    margin-bottom: 1rem;
                    }

                    :host header img {
                    width: 1.5rem;
                    height: 1.5rem;
                    object-fit: contain;
                    }

                    h2 {
                    margin: 0;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    color: #504e50;
                    }

                    @media (min-width: 768px) {
                    :host {
                        padding: 2rem;
                    }
                    }
        `

        --- That's how you can make the use of host elements to style the components and to remove the unwanted non-semantinc wrappers. 



        --> When NOT to Rely on HOST elements.

        --- Sometimes, if you are having components which is having wrapper of "form, section, article" elements then you should keep them as wrapper.
        --- Because they will provide the accessibility to your component and eventually in the application.In the end these elements are semantic elements.
        --- Practically our "host" element do not add any accessibility to component and applications.
        --- So we can consider host elements as a wrapper by removing elements like "div" or other "non-semantic" elements. 




// Interacting with  "Host Elements" via  "@HostListener and @HostBinding"

--- So far, we learned a lot for host elements.
--- There are two ways to add the attributes to the host element.

    1) Adding "host" property in a component decorators.
    --- We can add the different properties in a host object .
    --- These properties will eventually gets applied on the HOST elements.
    --- This way of adding attributes to the host element is more modern and preferred way.
    --- This option is recommended by Angular team.

    2) Using "@HostBinding" decorator.

    --- This is older way to add the attributes to the host element.
    --- You can see this option in many project where we can set the attributes to host element.

        import {HostBinding, input } from '@angular/core';
        export class ControlComponent {
            @HostBinding('class') className = 'control';
            label = input.required<string>();
        }

        --- Here we are using  "className" as variable.
        --- Because we cannot use reserve "class" keyword directly.
        --- However "@HostBinding" provide us way where we can set the "property/attribute" name aliases.
        --- HostBinding this decorator also takes an optional input, an optional argument, which allows you to define the actual property that should be bound as a string.
        --- So in our case "control" will be set as a value for "class" attribute when it runs in the browser.
        --- You only need this argument here though if you have a different property name, then you wanna bind.



    --- You should use "host" property from "@Component" decorator.
    --- @HostBinding is discourage way and it is exist due to backward compatibility and it was the common way to bind the attribute to host element in the past.


    // Event Binding on Host element  ("event in Host object and @HostListener")


    --- As we saw that how we can specify the properties/attributes to the host element.
    --- Here we will see how we can the listen the events on the host elements.
    --- Here also, there two ways to achieve it.

    1) "event" on the host property of Component decorator.

            host: {
                class: 'control',
                '(click)': 'onClick()'
                }
            })

             onClick() {
                console.log('Host element clicked !');
            }

    --- Here you can specify the event name in a "string" that you want to listen on the Host element.
    --- Also you can pass the method that you want to execute when that event happens.
    --- Make sure you can pass the "key and value" inside a string format.
    --- Basically we are telling ANgular to execute "onClick()" method when "click" event occur on the host element.
    --- Here, we have to make sure that the method that we are passing is exist otherwise it will fail.

    2) By using "@HostListener"

    --- @HostListener is a decorator to add the event on the Host element.
    --- Like @HostBinding this was common way to achieve event binding in past.
    --- We can use the @HostListener in below way.
    --- Here, we are passing event name as argument to "@HostListener". and It will execute the method that we passed to it.


                export class ControlComponent {
                @HostBinding('class') className = 'control';
                label = input.required<string>();

                @HostListener('click') onClick() {
                    console.log('Host element clicked !');
                    }
                }

    --- Here, you need specify the method immediately else you will get the compile time error.
            //Error => "TS1146: Declaration expected."


    --- In summary, in both ways we can achieve the attribute and event binding on the HOST elements.
    --- However using "host" object from @Component decorator is recommended approach by angular.
    --- While using "@HostBinding and @HostListener"  makes our code more readable.


// Accessing the HOST element Programmatically.

--- We can access the Host element programmatically.
--- To access the HOST element, we need to inject the reference of an HOST element.
--- For that we will need to inject the "ElementRef" into our component.
--- We can inject the "ElementRef" either using constructor or using angular "inject" method.
--- ElementRef is a class defined by Angular. So it's part of the Angular framework, which defines a reference to some element that's rendered to the page.
--- So it's pretty generic because it can refer to any element on the page.
--- But by injecting it into a component like below, Angular will give you access to the host element of that component.


    // Code snippet

    import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

    export class ControlComponent {
    label = input.required<string>();
    private el = inject(ElementRef); //// INjecting "ElementRef" using "inject" function
    onClick() {
        console.log('Host element clicked !', this.el); //// This will log the injected element ref for Host Element.
        }
    }

    --- Basically "ElementRef" returns an object.
    --- That contains 'nativeElement' property.
    --- This "nativeElement" property is refer to the Host Element Instance in the DOM.
    --- It is worth to note, We have to be careful while changing the properties for this ref because those are the direct ref of DOM element.


// Class Binding


--- Class binding in Angular allows you to dynamically add or remove classes from an HTML element based on a component's property values. 
--- This is useful for conditionally styling elements in response to changes in your application's state.

    --> Types of Class Binding.

    1) Single Class Binding
    --- You can bind a single class to an element using [class.className] syntax, where className is the class you want to conditionally apply.
        // Example
        <div [class.active]="isActive">This is a box</div>

    2) Multiple Classes Binding
    --- You can bind multiple classes using [class] or [ngClass]. This allows you to apply or remove multiple classes based on conditions.
        // Example
        <div [class]="isActive ? 'active highlight' : 'inactive'">This is a box</div>

    3) NgClass Directive
    --- The ngClass directive provides more flexibility and can be used to apply multiple classes conditionally. It can take an object, array, or string.
        // Example

        <div [ngClass]="{ 'active': isActive, 'highlight': isHighlighted }">
            This is a box
        </div>

    --> Important Note

    --- Angular has introduced "class" binding instead of "ngClass" binding in version 17.
    --- Hence if we are adding "ngClass" then  we must need a "commonModule" or "NgClass" in the imports of the respective standalone component.
    --- Kindly find new syntax for "class" binding

        // Code snippet

        <div [class]="{         //// Here you can use "class" instead of "ngClass".
        'status-online': currentStatus === 'online',
        'status-offline': currentStatus === 'offline',
        '.status-unknown': currentStatus === 'unknown'
        }">

    --- If you have a class which contains "-" , then you should wrapped the class name inside a  quotes.
    --- Thats how object key's work in js if you have "-" in between for keys.
    --- Other wise you would not need "quotes" for keys.

    --> References

        https://medium.com/@danyalkhan8271/angular-17-cant-bind-to-ngclass-since-it-isn-t-a-known-property-of-div-the-curious-case-of-ba6b7209dc50
        https://angular.dev/guide/templates/class-binding#binding-to-multiple-css-classes


// Style Binding

    --- Style binding in Angular allows you to dynamically set the inline styles of an HTML element based on component property values. 
    --- This is useful when you need to apply styles conditionally or dynamically at runtime.

    1. Single Style Binding

    --- You can bind a single CSS style property to an element using the [style.styleName] syntax, where styleName is the name of the CSS property you want to bind.

        // Example

        <div [style.background-color]="isActive ? 'green' : 'red'">
            This is a box
        </div>

    2.  Multiple Styles Binding

    --- You can bind multiple styles to an element using the [style] syntax or the [ngStyle] directive. 
    --- This allows you to apply multiple style properties conditionally.


        // Example

        <div [style]="{ 'background-color': isActive ? 'green' : 'red', 'font-size': fontSize + 'px' }">
            This is a box
        </div>

    3. NgStyle Directive
    
    --- The ngStyle directive is a more flexible way to apply multiple styles to an element. 
    --- It accepts an object where the keys are the CSS property names and the values are the expressions to evaluate.

        // Example

        <div [ngStyle]="{ 'background-color': isActive ? 'green' : 'red', 'font-size.px': fontSize }">
        This is a box
        </div>


     --> Important Note

     --- Similar to "ngClass" the Angular 17 does not support "ngStyle" directly.
     --- If we are using "ngStyle" then it is must to import commonModule or NgStyle in the imports array of the respective standalone component.

            // Code snippet

            [style]="{      //// Latest syntax for adding style dynamically
                     fontSize: '64px'  //// If you have '-' between property name then you can use camel casing .
            }"

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
// Component Lifecycle

--- A component's lifecycle is the sequence of steps that happen between the component's creation and its destruction. 
--- Each step represents a different part of Angular's process for rendering components and checking them for updates over time.
--- In your components, you can implement lifecycle hooks to run code during these steps. 
--- Lifecycle hooks that relate to a specific component instance are implemented as methods on your component class. 
--- Lifecycle hooks that relate the Angular application as a whole are implemented as functions that accept a callback.
--- A component's lifecycle is tightly connected to how Angular checks your components for changes over time. 
--- For the purposes of understanding this lifecycle, you only need to know that Angular walks your application tree from top to bottom, checking template bindings for changes.
--- The lifecycle hooks described below run while Angular is doing this traversal. 
--- This traversal visits each component exactly once, so you should always avoid making further state changes in the middle of the process.


--> Reference
    https://angular.dev/guide/components/lifecycle 


// Phases of LifeCycle

1) Creation Phase

--> Methods

i) Constructor

--- It is a standard JavaScript constructor method which runs when Angular instantiates the components.
--- WE can use constructor to inject the dependencies.
--- Also, we should not add any initialization  complex logic (Like sending HTTP Instructor) inside a constructor.
--- Because when the constructor method is called input values will not received.
--- WE must keep our constructor as lean as we can.
--- Though, we can add basic initializing  of property  from class in the constructor.

2) Change Detection Phase

--> Methods

--- Before start working on life cycle hook methods one thing that you keep in mind . Which is iImplementation".
--- When you want to use any method from below you must "implement" your class with the "built-in" lifecycle interfaces.
--- Because If you add the method and if mistakenly you did a type, the angular will not throw an any error.
--- Because if method does match with any lifecycle method Angular will consider it as "regular class method" and "angular will not trigger that method automatically".
--- In "implement", you basically "implements you Class of Component to a Built-in Lifecycle Interface".
--- Hence Typescript will force you add that method in the class .
--- Basically it is a job of interface to check whether the mention properties or methods are present or not.
--- This will help you to avoid a typo mistakes and you can add your lifecycle method in more concrete way.
--- "implements" and "interface" are Typescript features (Not a vanilla JS. )

1) ngOnInit

--- The ngOnInit method runs after Angular has initialized all the components "inputs" with their initial values. 
--- A component's ngOnInit runs exactly once.
--- This step happens before the component's own template is initialized. 
--- This means that you can update the component's state based on its initial input values.
--- So if your component receives any input values, those values will be initialized and will be available in ngOnInit, whereas that is not the case in the "constructor".
--- WE can add the complex initialization logic here in ngOnInit like sending an HTTP request.
    // Code snippet

    export class ChildComponent implements OnInit {
    
        constructor() {
            console.log('CONSTRUCTOR');
        }

        ngOnInit() {
            console.log('ngOnInit');
        }
    }

2) ngOnChanges

--- The ngOnChanges method runs after any component inputs have changed.
--- This step happens before the component's own template is checked. 
--- This means that you can update the component's state based on its initial input values.
--- During initialization, the first ngOnChanges runs before ngOnInit.

    --> Inspecting "changes"

    --- The ngOnChanges method accepts one SimpleChanges argument. 
    --- This object is a "Record"(Util Type in Typescript) mapping each component input name to a SimpleChange object. 
    --- Each SimpleChange contains the input's previous value, its current value, and a flag for whether this is the first time the input has changed.
    --- This changes object which will be passed into this lifecycle method automatically by Angular.
    --- So whenever the input changes Angular then automatically produces a changes object, which gives you more information about the input changes that happened.


    // Code snippet


        @Component({
            ... 
            })
        export class UserProfile {
        @Input() name: string = '';
            ngOnChanges(changes: SimpleChanges) {
                for (const inputName in changes) {
                const inputValues = changes[inputName];
                console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
                console.log(`Current ${inputName} == ${inputValues.currentValue}`);
                console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
                }
            }
        }
    --- "firstChange" is "true" when your previous value is undefined which means this is your first initial value for the input.

    --> Note
    --- If you provide an "alias" for any input properties, the SimpleChanges Record still uses the TypeScript property name as a key, rather than the alias.
    --- SOmetimes you need the details from "changes" to handle the state of your application.


3) ngOnDestroy

--- The ngOnDestroy method runs once just before a component is destroyed. 
--- Angular destroys a component when it is no longer shown on the page, such as being hidden by NgIf or upon navigating to another page.
--- This hook will then is invoked right before this Component instance is about to be thrown away, for example, because the Component is rendered conditionally and the condition is no longer met.

    // DestroyRef (Modern alternative to ngOnDestroy)

    --- As an alternative to the ngOnDestroy method, you can inject an instance of DestroyRef. 
    --- You can register a callback to be invoked upon the component's destruction by calling the onDestroy method of DestroyRef.
    --- DestroyRef is a class provided by Angular, and by injecting it and storing it in a property, 
    --- You can set up a listener with help of that property and that injected value that will trigger a function whenever the Component into which you injected DestroyRef is about to be destroyed.
    --- This feature is introduced in Angular version 16.

        // Code snippet

        @Component({
                ....
        })
        export class UserProfile {
        constructor(private destroyRef: DestroyRef) {  //// You can also inject "DestroyRef" class using "inject function", which is an alterative way to inject the dependecies.
            destroyRef.onDestroy(() => {
            console.log('UserProfile destruction');
            });
            }
        }

    --- You can pass the DestroyRef instance to functions or classes outside your component. 
    --- Use this pattern if you have other code that should run some cleanup behavior when the component is destroyed.
    --- You can use it inside any function from of your class where you need to add cleanup logic. You can use as many time inside a component.
    --- You can also use DestroyRef to keep setup code close to cleanup code, rather than putting all cleanup code in the ngOnDestroy method.

4) ngDoCheck

--- ngDoCheck is related to Angular's change detection mechanism.
--- ngDoCheck is invoked by Angular whenever Angular thinks that a UI update might be needed.
--- So whenever it detects any event or anything anywhere on the entire application, so not just in this Component but anywhere in the entire Angular application that could lead to data changes.
--- So this hook gets invoked a lot.
--- Therefore you are discouraged to use this hook unless you need to, because whatever code you execute in here will run a lot.
--- You might need it for some very advanced niche use cases, but often if you feel like you need it, there might be a better alternative solution available.
--- During initialization, the first ngDoCheck runs after ngOnInit.

// Content vs View

"ngAfterViewInit" & "ngAfterViewChecked"
--- The view of an Angular Component is its template you could say. So that's the view of the Component and all the elements that are in that template file here are part of that Angular view.
--- Technically , the "View" is an internally manage data structure that holds the reference to the DOM elements rendered by a component.
--- The "ngAfterViewInit" method runs once after all the children in the component's template (its view) have been initialized.
--- This view contains the projected content but which also includes all other elements that are in that template. 
--- The "ngAfterViewInit"  hook is executed once Angular is done initializing this Component's view. 
--- So in the end, once it rendered it to the real dom, you could say.
--- "ngAfterViewChecked" will then be executed whenever Angular performed change detection for this Component's view, 
--- so when it's checked whether some UI updates are needed because of some possible data changes.

"ngAfterViewChecked" & "ngAfterContentChecked"
--- Content refers to the content projection that we do in our component.
--- Content is any content that might be projected into a view with ngContent.component's view.
--- Content  refers to "ng-content" that we inject into a child component by adding wrapped content inside a selector where we are calling it.
--- So anything that's projected into a Component or into the template, into the view of a Component,any content that is projected here is referred to as content.
--- So "ngAfterViewChecked" is execute once any projected content has been initialized.
--- "ngAfterContentChecked" checked hook is executed whenever the content has been checked by Angular's change detection mechanism.
--- And I'll say right away that you'll probably not use these hooks too often, but if you do have some logic that should execute whenever the projected content might have changed,

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Template Reference

--- Template reference variables in Angular are a way to reference a DOM element or an Angular component within a template. 
--- They are denoted by the "#" symbol followed by the variable name, and they can be used to access properties and methods of the element or component they reference.
--- You can use template reference variables to access native DOM elements directly.
--- Reference variables can be used to interact with Angular components and directives.
--- Once we declared the variable in template , we can access anywhere in the same template.
--- The hashtag is just important to create that variable. So you use it when you add it on the elements that should be stored in the variable.
--- You use the variable name without the hashtag.
--- It returns a type of HTML Element.
--- For example in  below example "#myInput" will refer to the type "HTMLInputElement".
--- If you logged this into console you will see  all the DOM properties which are associated with "#myInput i.e HTMLInputElement"

        --> Accessing DOM Elements

            <input #myInput type="text" placeholder="Enter text" /> //// Adding "#myInput" as Template variable.
            <button (click)="logValue(myInput.value)">Log Input Value</button>


        --> Accessing Component/Directive Instance

        --- You can use template reference variables to interact with Angular components or directives within the template.
        --- You can access the instance of a Component/Directive by adding a template reference variable on Component's element selector.
        --- Note , If you are accessing an component which is extended to an built-in element (Like we did for ButtonComponent) then it that case also "first reference always to the Component instance not to the underlying DOM element."


            <app-child #childComp></app-child>
            <button (click)="childComp.someMethod()">Call Child Method</button>

            // Child Component Code

            @Component({
            selector: 'app-child',
            template: `<p>Child component</p>`
            })
            export class ChildComponent {
            someMethod() {
                console.log('Child method called!');
            }
            }




// View Child


--- In previous section, we saw that How we can access the template reference for an Element .
--- We usually  sends the "template variables" through the function on a particular event and access them in component.
--- However sometimes, we need to access the elements which has a template variable on it, without passing it to an function or without waiting for some event to be happen.
--- Because we cannot rely some event to be triggered and then we can pass the template ref variable to that function and access it the component.
--- SO "@ViewChild" provides us a way to access "template reference variable" directly in the component.
--- As name suggest it can be use to select "Child" elements from Component's View/Template.
--- So we can select any elements from that Component's view and access them inside a component class.

    --> Accessing DOM elements from Component's View

            import { Component, ViewChild, ElementRef } from '@angular/core';

            @Component({
            selector: 'app-example',
            template: `
                <input #inputRef type="text" placeholder="Enter text" />
                <button (click)="logInputValue()">Log Input Value</button>
            `,
            })
            export class ExampleComponent {
            @ViewChild('inputRef') inputElement: ElementRef<HTMLInputElement>;
            //Here we are accessing an "input" element  . we can pass the "template ref variable name" as "selector".
            // "CSS" selectors cannot be pass as the "selector" for View Child. This will not work.

            logInputValue() {
                console.log(this.inputElement.nativeElement.value);
                }
            }


    --> Accessing Child Components/Directives

    --- It allows you to access and interact with a child component, directive, or DOM element in the parent component.
    --- In below code you can access the Instance of an Child Component.
    --- ViewChild will find the respective instance of an Component and will provide you in the class of an Parent Component.


            import { Component, ViewChild } from '@angular/core';
            import { ChildComponent } from './child.component';

            @Component({
            selector: 'app-parent',
            template: `
                <app-child #childComp></app-child>
                <button (click)="callChildMethod()">Call Child Method</button>
            `,
            })
            export class ParentComponent {
            @ViewChild('childComp') childComponent: ChildComponent;

            callChildMethod() {
                this.childComponent.someMethod();
                }
            }

            // OR instead of "selector" you can also pass the ClassName of an Component.

            import { Component, ViewChild } from '@angular/core';
            import { ChildComponent } from './child.component';

            @Component({
            selector: 'app-parent',
            template: `
                <app-child></app-child>
                <button (click)="callChildMethod()">Call Child Method</button>
            `,
            })
            export class ParentComponent {
            @ViewChild(ChildComponent) childComponent: ChildComponent;  //// Passing "ChildComponent" as a Class selector instead of "template ref variable "

            callChildMethod() {
                this.childComponent.someMethod();
                }
            }

    // ElementRef

    --- ElementRef type is just a wrapper type.
    --- We can import it from an "@angular/core".
    --- Angular in the end will wrap the element it finds with help of @ViewChild selector in such an ElementRef object.
    --- That's why It is generic type that  needs extra information about the type of value that will be wrapped by it here when using ViewChild.

          export class ExampleComponent {
            @ViewChild('inputRef') inputElement: ElementRef<HTMLInputElement>;
            // Here we are wrapping "HTMLInputElement" with ElementRef.
        
            onSubmit() {
                console.log(this.inputElement.nativeElement.value);
                // "nativeElement" points to wrapped element . 
            }
        }

// Using "viewChild" signal function.

--- In previous section, we saw that how can we access the template variable with the help of @ViewChild decorator.
--- Now here, In Angular 17.3, Angular team introduces a "viewChild" signal function.
--- Yes, we can create signal with the help of "viewChild" signal function. It is imported from "@angular/core".
--- It behaves same as the @ViewChild decorator.


        // Code Snippet

        import { Component, ElementRef, viewChild, ViewEncapsulation } from '@angular/core';
        import { FormsModule } from '@angular/forms';
        import { ButtonComponent } from '../../../shared/button/button.component';
        import { ControlComponent } from "../../../shared/control/control.component";

        @Component({
        selector: 'app-new-ticket',
        standalone: true,
        imports: [ButtonComponent, ControlComponent, FormsModule],
        templateUrl: './new-ticket.component.html',
        styleUrl: './new-ticket.component.scss',
        encapsulation: ViewEncapsulation.Emulated
        })
        export class NewTicketComponent {
        // @ViewChild('form') form!: ElementRef<HTMLFormElement>;

        // form = viewChild<ElementRef<HTMLFormElement>>('form');

        form = viewChild.required<ElementRef<HTMLFormElement>>('form');


        buttonComponentInstance = viewChild.required<ButtonComponent>(ButtonComponent);
        // WE can also access the instance of an Component using viewChild function. Same as @ViewChild Decorator. 

        onSubmit(title: string, ticketText: string) {
            this.form().nativeElement.reset();
            console.log(`Submitted!`);
        }
        }

    --- Here, we can also have "required" method, which will guarantees that respective view will always be there .
    --- If we hover over "form" variable, we will see below  type or return type of viewChild Signal Function.

            "(property) NewTicketComponent.form: Signal<ElementRef<HTMLFormElement>>"
    --- Here, we are passing "required" along with "ElementRef<HTMLFormElement>" as type. That's why we are getting appropriate type.
    --- The default return type of "viewChild" function is unknown.
    --- Also it is generic function so we can pass the type using "<>" bracket to specify the type which we are going to save in the signal.
    --- Without required viewChild will return below type for "form" variable.
            "(property) NewTicketComponent.form: Signal<ElementRef<HTMLFormElement> | undefined>"
            ---"undefined" as in union because , there will no guarantee that respective element will present in to the view.
            --- While "required" will gives you that guarantee that element always be there in template.
    --- So whenever you are using "required", you should always careful about the selector that you are passing (Meaning that element must be present in the view), otherwise you will ran into the error.


// ViewChild vs ContentChild

--- In last section we have seen how the ViewChild decorator and viewChild function.
--- In this section, we are going to see how can we select the "ContentChild".
--- ViewChild is Only, use to select the child elements from a Component's View (Which are parts of your template).
--- While ContentChild is used to select the "Content which is eventually going to render in the place of the placeholder(ng-content)".
--- Using ContentChild we can get a hold of the Projected Content.

--- Like ViewChild here also we need a  "template reference variable "  to select to the Element from a respective template.
--- The important thing to keep in mind that we cannot add the  "template reference variable " in the Template where we have added a placeholder i.e  "ng-content".
--- Because in the end it is just a place holder, where the content is going to be rendered .
--- So we need to add the "template reference variable" where we are actually injecting the content.
--- That place is nothing but the component's view where we are using the "selector of this component".
--- And inside the selector when we are passing the content then in that place we can add the "template reference variable" to respective elements.
--- Let's see how it works in action.


    // Control Component (Where we have placeholder of "ng-content")

                import { AfterContentInit, Component, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

                @Component({
                selector: 'app-control',
                standalone: true,
                imports: [],
                template: `

                        <label>{{label()}}</label>
                        <ng-content select="input, textarea"></ng-content>
                `,
                styleUrl: './control.component.scss',
                encapsulation: ViewEncapsulation.None, 
                })
                export class ControlComponent implements AfterContentInit{

                @ContentChild('input') private control!: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

                ngAfterContentInit(): void {
                    console.log('After content In it',  this.control.nativeElement)
                }
        }

    // Parent Component (Where  we are injecting the content)

            import { Component, ElementRef, viewChild, ViewEncapsulation } from '@angular/core';
            import { FormsModule } from '@angular/forms';
            import { ButtonComponent } from '../../../shared/button/button.component';
            import { ControlComponent } from "../../../shared/control/control.component";

            @Component({
            selector: 'app-new-ticket',
            standalone: true,
            imports: [ButtonComponent, ControlComponent, FormsModule],
            templateUrl: `
            
            <form (ngSubmit)="onSubmit(titleInput.value, textArea.value)" #form>
            <app-control label="Title">
                <input  name="title" id="title" #titleInput #input/>  //// "Adding "input"" as "template reference variable for content child"
            </app-control>
            <app-control label="Request" >
                <textarea  name="request" id="request" rows="3" #textArea #input> </textarea>  //// "Adding "input"" as "template reference variable for content child"
            </app-control>
            
            </form>
            
            `,
            styleUrl: './new-ticket.component.scss',
            encapsulation: ViewEncapsulation.Emulated
            })
            export class NewTicketComponent {
            // @ViewChild('form') form!: ElementRef<HTMLFormElement>;

            // form = viewChild<ElementRef<HTMLFormElement>>('form');
            form = viewChild.required<ElementRef<HTMLFormElement>>('form');
            buttonComponentInstance = viewChild.required<ButtonComponent>(ButtonComponent);


            onSubmit(title: string, ticketText: string) {
                this.form().nativeElement.reset();
                console.log(`Submitted!`);
                }
            }


        // Explanation

        --- In above example, we are injecting a content from parent component to child component .
        --- Now, as mentioned earlier in the child component we only have the "ng-content" as a placeholder i.e selector. Where eventually the content will be rendering.
        --- There we can define the "template reference variable"  in the "parent component" on the content that we are injecting from parent to child.
        --- Then we can use that "template reference variable" in the child component and access it inside the child component using  "@ContentChild" inside the "ngAfterContentInit".

        --- @ContentChild will guarantees that the selected Content will always be accessible inside the "ngAfterContentInit".
        --- Here also we are using "ElementRef" as generic type selector for accessing elements that we defined using template reference variable.

        // Key Points to note in above example.

        1) You can use the "same template reference variable name if you have "multiple selectors(Like "OR" condition)" specified in the ng-content"
        --- You can see we have defined the "input" as template reference variable name for both"input and textarea element",
            --- The reason behind it ism if you can see the child component's template where we have place the "ng-content" placeholder,
            --- There we have specified multiple selectors i.e " <ng-content select="input, textarea"></ng-content>",
            --- So after injecting the code the DOM will look like this

            <form _ngcontent-ng-c4062816453="" novalidate="" class="ng-untouched ng-pristine ng-valid">
            
                <app-control _ngcontent-ng-c4062816453="" label="Title" class="control" ng-reflect-label="Title">
                <label>Title</label><input _ngcontent-ng-c4062816453="" name="title" id="title">
                
                </app-control>
                
                <app-control _ngcontent-ng-c4062816453="" label="Request" class="control" ng-reflect-label="Request">
                <label>Request</label><textarea _ngcontent-ng-c4062816453="" name="request" id="request" rows="3"> 
                </textarea></app-control>
                
               </form>
            --- Here , you can see we have different instance of "Control i.e Child component is created".
            --- Because in our template code (See in example's template code), we are using different instances of "Control Component".
            --- SO every time either we are using "input" or "textArea" .
            --- Therefore we can us the "same template reference variable" name , because only of them is rendering in the single instance of an component.
            --- However you can use "ContentChildren" if you have multiple elements that you want to inject and access from the single instance of an component.

        2) Different template variable names for "ViewChild" and "ContentChild"
        --- Make sure you can have a different template reference variable name for both "ViewChild" and "ContentChild".
        --- Because if you trye to access the template reference variable of "ViewChild inside the Content Child " then you will get a error.

    
    // contentChild "signal function"

    --- Similar to viewChild signal function, Angular also support "contentChild" as signal function.
    --- The usage of "contentChild" is same as viewChild.
    --- Kindly follow the below syntax for the reference.


            // Control Component (Where we have placeholder of "ng-content")

               import { AfterContentInit, Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

                @Component({
                selector: 'app-control',
                standalone: true,
                imports: [],
                template: `

                        <label>{{label()}}</label>
                        <ng-content select="input, textarea"></ng-content>
                `,
                styleUrl: './control.component.scss',
                encapsulation: ViewEncapsulation.None, 
                })
                export class ControlComponent implements AfterContentInit{

                private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

                ngAfterContentInit(): void {
                    console.log('After content In it',  this.control().nativeElement)
                }
            }

            // Parent Component (Where  we are injecting the content)

            import { Component, ElementRef, viewChild, ViewEncapsulation } from '@angular/core';
            import { FormsModule } from '@angular/forms';
            import { ButtonComponent } from '../../../shared/button/button.component';
            import { ControlComponent } from "../../../shared/control/control.component";

            @Component({
            selector: 'app-new-ticket',
            standalone: true,
            imports: [ButtonComponent, ControlComponent, FormsModule],
            templateUrl: `
            
            <form (ngSubmit)="onSubmit(titleInput.value, textArea.value)" #form>
            <app-control label="Title">
                <input  name="title" id="title" #titleInput #input/>  //// "Adding "input"" as "template reference variable for content child"
            </app-control>
            <app-control label="Request" >
                <textarea  name="request" id="request" rows="3" #textArea #input> </textarea>  //// "Adding "input"" as "template reference variable for content child"
            </app-control>
            
            </form>
            
            `,
            styleUrl: './new-ticket.component.scss',
            encapsulation: ViewEncapsulation.Emulated
            })
            export class NewTicketComponent {
            // @ViewChild('form') form!: ElementRef<HTMLFormElement>;

            // form = viewChild<ElementRef<HTMLFormElement>>('form');
            form = viewChild.required<ElementRef<HTMLFormElement>>('form');
            buttonComponentInstance = viewChild.required<ButtonComponent>(ButtonComponent);


            onSubmit(title: string, ticketText: string) {
                this.form().nativeElement.reset();
                console.log(`Submitted!`);
                }
            }

        --- Here, we are "contentChild" signal. Similar to viewChild this function is also generic function which needs type otherwise it consider it as 'unknown' type of signal
        --- By calling "required" function on signal we are ensuring that the respective content projection will happen .
        --- As always we are reading the signal value by executing it.



// Decorator-based Queries & Lifecycle Hooks

--- Here, we will take a closer look at ngAfterViewInit and ngContentInit.
--- What is idea behind using "ngAfterViewInit" ?
--- In "ngAfterViewInit", you are guaranteed to have access to the elements that have been selected with view child, unless you of course specified some selector that can't be found.
--- "ngAfterViewInit" guarantees that the template has been initialized and Angular therefore is able to select elements in there.

--> Key difference when you are using "@ViewChild Decorator" and "viewChild function"
--- There is a one major difference when you are querying the elements using "@ViewChild Decorator" and "viewChild function"
--- When you use ""@ViewChild Decorator" to select the element and tries to access that element in "ngOnInIt", you get the  result as "undefined".
--- While in "ngAfterViewInit" , you can get a hold of the expected output.
--- While if you are using "viewChild" signal function , you will get hold of expected output in "ngOnInt" as well.

--- This is the main difference that you need to keep in mind while using @ViewChild decorator and @ViewChild function.
--- that decorator for selecting an element and storing it in a property and you then wanna do something with that element, you can only do so in after view Init
    --- or any of your methods that are triggered from the template but not inside of NgOnInit because there it would still be undefined.

--> ngAfterContentInit

--- For "ngAfterContentInIt" things are bit different that "ngAfterContentInit"
--- Here, we can access the content safely(For correct selector).
--- ContentChild decorator or function do not produce a value inside "ngOnInit".
--- Therefore inside the "ngAfterContentInit" we guaranteed to get of the values that we are selecting with content child decorator or signal function.

--> Reference
    https://angular.dev/guide/signals/queries



// afterRender and afterNextRender

--- These are rendering hooks , which are introduces in Angular 16.
--- These hooks are not related component's lifecycle but more to the Application life cycle.
--- Also unlike other lifecycle methods, we can access these methods inside the "constructor" of the component.

    --> afterRender

    --- afterRender will executing again and again.
    --- Not for something has changes on the component, but if anything changes in the Overall application.
    --- afterRender will execute a lot because it listens to all future changes.
    --- AfterRender is locked over and over again whenever any change occurs.

    --> afterNextRender
    --- whereas, afterNextRender is not locked again.
    --- afterNextRender will only be triggered for the next change anywhere in the entire application.

--- The idea behind these hooks is is that they allow you to define functions that should be executed whenever anything changes anywhere in the entire Angular application
    --- or after the next change anywhere in the entire Angular application.
--- So here we always talks about the Application. Whereas other lifecycle hooks like ngOnInit and others ends on refer to the component to which they belong.
--- whenever anything changes anywhere or afterNext change anywhere in your application, these two special hooks,

    --> Reference
    https://angular.dev/guide/components/lifecycle#afterrender-and-afternextrender


// Signal Effects

--- Signals are useful because they notify interested consumers when they change. 
--- An "effect" is an operation that runs whenever one or more signal values change. 
--- You can create an effect with the effect function.
--- AS we learn that to whenever we read the value from a signal , the Angular setups the subscription in that place (Wherever we are reading that value.)
--- However, this can good thing when you are reading the values in template. So if signal is updated those template part will rerendered and update with latest value.
--- The downside is in the Typescript code if if we tries to read that values ini same manner it won't update them when signal changes.
--- I know, we can use the "compute" function to achieve it. compute function will help Angular to setup the subscription with Signal so that we can received the latest and updated values from the respective signals.
--- But, there is another important function that you can use here.
--- That function is  "effect" function.
--- We can import "effect" function from "@angular/core".
--- We can use this "effect" function inside the "constructor."
--- The "effect" function accepts a callback function , which executes when any signal changes . Basically the  changing the value of signal that we are using inside that callback function.
--- By doing this Angular setups the subscription of signals in the component,so that we can received the notification of the updated signal values.
--- Angular will automatically cleanup this subscription when that component should ever get removed from the DOM.
--- Therefore "effect" is the another important feature along with the lifecycle hooks that we learned.

        // Code snippet

                import { Component, DestroyRef, effect, inject, signal} from '@angular/core';

                @Component({
                selector: 'app-server-status',
                standalone: true,
                // imports: [CommonModule],
                templateUrl: './server-status.component.html',
                styleUrl: './server-status.component.scss'
                })
                export class ServerStatusComponent {

                currentStatus = signal<  'online' | 'offline' | 'unknown'>('online');
                
                private interval!: NodeJS.Timeout;
                private destroyRef = inject(DestroyRef);

                constructor() {

                    effect(()=> {
                        console.log('Signal Updated', this.currentStatus())
                        // This line will get logged whenever "currentStatus" value changes.
                        // effect should always be call inside the constructor.
                    })

                const interval = setInterval(()=> {

                        const rnd = Math.random();
                        if(rnd < 0.5) {
                        this.currentStatus.set('online');
                        } else if (rnd < 0.9) {
                        this.currentStatus.set('offline');
                        } else {
                        this.currentStatus.set('unknown');
                        }

                    }, 2000);

                    this.destroyRef.onDestroy(() => {
                    clearInterval(interval);
                    })
                }

                ngOnDestroy(): void {
                    clearTimeout(this.interval);
                }
                }


        --- Effects always run at least once. When an effect runs, it tracks any signal value reads. 
        --- Whenever any of these signal values change, the effect runs again. 
        --- Similar to computed signals, effects keep track of their dependencies dynamically, and only track signals which were read in the most recent execution.
        --- Effects always execute asynchronously, during the change detection process.

        --> Reference for more details 
        https://angular.dev/guide/signals

// Signal Effects Cleanup function

--- When working with Signal effects, you sometimes might need to perform some cleanup work before the effect function runs again (e.g., to clear some timer or something like that).
--- Angular's effect() allows you to do that!.
--- It does provide you with an "onCleanup" hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time:

        effect((onCleanup) => {
        const tasks = getTasks();
        const timer = setTimeout(() => {
            console.log(`Current number of tasks: ${tasks().length}`);
        }, 1000);
        onCleanup(() => {
            clearTimeout(timer);
        });
        });
    
// Templates "@for loops" deep dive

--- As we learned earlier about the "@for loops" in templates.
--- Here, we will take a closer look at the it and  learn about the other features .
--- The below syntax is only available, if you are using Angular version 17 or later.


        // Code snippet

        @for (item of items; track item.name) {
        <li>{{ item.name }}</li>
        } @empty {
        <li>There are no items.</li>
        }

    --> @empty
    --- @empty can be use to display fallback content if the provided iterable is empty.
    --- In above example, if "items" array is empty then the block from @empty will get rendered in the UI.

    --- Along with @empty there couple of variables that we can access within the scope of @for loop block ({} --> Between Curly braces of @for loop). 

        --> $count	
        --- Number of items in a collection iterated over
        
        --> $index	
        --- Index of the current row

        --> $first	
        --- Whether the current row is the first row
        
        --> $last	
        --- Whether the current row is the last row
        
        --> $even	
        --- Whether the current row index is even
        
        -->$odd	
        --- Whether the current row index is odd

    --- These variables are always available with these names, but can be aliased via a let segment:

        @for (item of items; track item.id; let idx = $index, e = $even) {
        Item #{{ idx }}: {{ item.name }}
        }


    // Custom Two way binding

    --- As we learn about the how we establish the two way binding.
    --- However we can also build our Custom two data binding.
    --- This custom two way data binding is very useful when you are having component communication between two components.
    --- To understand this concept we will be referring to the below example.

    --- In below example, we have a  'rect' component , which will accept the "size" from a parent (app) component.
    --- This size contains the height and width . Based on this height and width the size of rectangle will change inside the rect component.
    --- Also when we click on the rectangle , we must reset the size to the original size.
    --- For that we will need to emit the event from child to parent to update 'size' from a parent.
    --- Therefore, based on our learning, there should be one input which will take the size and there should one output will emit the size from a child.
    --- Then we will handle that emit event inside a parent to update the size .
    --- These are the steps that we can apply to update and reset the size , based on what we learned.
    --- Now, you can say where is the two way binding ? And Why do we need it in this case ?

    --- As we learned, two way binding is something where we can read and write the data.
    --- In above sections , we used '[(ngModel)]' to accomplish the two way data binding.
    --- Now, in our example,  we have to do something like this only, but that should happen between two components.
    --- I.e We are planning to use custom two way binding.

    --- We will see below code snippet and will try to understand how two way binding plays and important role here.

        --> Code snippet

                --> app.component.ts

                    import { Component } from '@angular/core';
                    import { RectComponent } from './rect/rect.component';
                    import { FormsModule } from '@angular/forms';

                    @Component({
                    selector: 'app-root',
                    standalone: true,
                    templateUrl: `
                    
                    <div id="inputs">
                        <p>
                            <label>Width</label>
                            <input type="number" step="1.0" [(ngModel)]="rectSize.width" />
                        </p>
                        <p>
                            <label>Height</label>
                            <input type="number" step="1.0" [(ngModel)]="rectSize.height" />
                        </p>
                        </div>
                        <app-rect [(size)]="rectSize"/>

                    `,
                    imports: [RectComponent, FormsModule],
                    })
                    export class AppComponent {
                    rectSize = {
                        width: '100',
                        height: '100',
                        };
                    }



                --> rect.component.ts

                import { Component, EventEmitter, Input, Output } from '@angular/core';

                        @Component({
                        selector: 'app-rect',
                        standalone: true,
                        imports: [],
                        templateUrl:   `
                        
                        <div
                            id="rect"
                            [style.width]="size.width + 'px'"
                            [style.height]="size.height + 'px'"
                            (click)="onReset()"
                            ></div>
                        
                        `,
                        styleUrl: './rect.component.css',
                        })
                        export class RectComponent {

                        @Input({ required: true }) size!: { width: string; height: string };
                        @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();


                        onReset() {
                            // this.size = {
                            //   width: '100',   // Incorrect way to change the value of the reference of an Input. Sooner, This will lead to unexpected result
                            //   height: '100',
                            // };
                        
                            
                            this.sizeChange.emit({
                            width: '100',
                            height: '100'
                            })
                        }
                        }


    --- Here in our example, 'size' is the input from rect component, where we are receiving the size from an app component.
    --- @Input and @Output plays an important role in the custom two way data binding .
    --- In the end two way data binding is the combination of accepting (Input) and updating(Output) the value.
    
    --> Important Note

    --- Here the important note about the naming convention of an output variable.
    --- We need to use specific pattern while deciding the name of an output variable.
    --- Because that will help Angular to recognize and establish the two way data binding.
    --- The variable name should be 'Input variable name' + 'change'.
    --- In our example , it should 'sizeChange'.
    --- This will tell angular that we need to use 'size' as a two way bindable property.
    --- The output property name must be follow the above rule for a naming convention , then only two way binding will establish on the specified input property.

    --- After doing this , now we have created 'size' as two way bindable property.
    --- Now we have do one more thing in the parent component i.e where we are using the selector of this child component.
    --- Here, instead of using property binding , we must have to change the syntax.
    --- For example, in our case instead of [size] , we must change to the "[(size)]".
    --- Because it is two way bindable property.

    --- That's how you can build the custom two way bindable properties in angular.
    --- This will help reduce the additional code that require where we can write the function inside a parent to listen the events from a child component.
    --- Angular do the all heavy lifting for us.


    // Custom two way data binding using "model" function.

    --- In previous section, we saw that how can we implement the custom two way data binding using an Input and Output property.
    --- However there is an alternative way to achieve the same in modern angular version.
    --- Angular 17.2 and onwards versions provides the 'model' function.
    --- The "model" is bindable signal function that helps you to build the custom data binding without having an additional code. It saves you the effort require for adding an Input and Output.
    --- Let's see it in the action.


                --> rect.component.ts

                import { Component, model} from '@angular/core';

                        @Component({
                        selector: 'app-rect',
                        standalone: true,
                        imports: [],
                        templateUrl:   `
                        
                        <div
                            id="rect"
                            [style.width]="size().width + 'px'"  //// Executing "size" modelSignal for reading the values. 
                            [style.height]="size().height + 'px'"
                            (click)="onReset()"
                            ></div>
                        
                        `,
                        styleUrl: './rect.component.css',
                        })
                        export class RectComponent {

                         size = model.required<{ width: string; height: string }>();
                         // model function returns the 'ModelSignal' with provided data type. In our case it is "ModelSignal<{  width: string;  height: string;}"
                         // We can update this signal as well.


                        onReset() {
                          this.size.set({
                            width: '100',
                            height: '100'
                            });
                        }


            --- In above code, you can see how we can use  the "model" signal to create custom two way data binding.
            --- However, the code from the "app component" will remain as it is . There is no changed in app.component's html.
            --- We already learned that , Even if are using signal as input we can pass the values to them as same as we pass for @Input decorator i.e Non-Signal value.
            --- Here this "model" function is the combination of "@Input" and "@Output".
            --- In our case, model function creates "size" as input property and also it make "size to sizeChange" in the background.
            --- Therefore we can pass the value the size and also update it.
            --- And, by updating the signal Angular will then automatically be notified about this update in the Component that provided the value for the two-way binding, so in the AppComponent.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


******** Deep Dive - Directives *****************************************************************************************************************************************************************


--- Till the time we learned a lot about the components.
--- In this section  we will be taking a deep dive into the "Directives".
--- Directives are "enhancements" for elements (Built-in or Components).
--- They can change the configuration (attributes, properties) , styling or behavior of elements.
--- Unlike components,  "Directives do not have templates".
--- In other words, components are the directives with Templates.
--- Sometimes components also enhance the elements with the component selector.
--- For example, we learned about how to extend the built in HTML elements using css attribute selector (Button component example),
--- where we have injected the "template" of the button component between the built-in button element.
--- So components can also enhance the elements by bringing their own template.


// Attribute Directive (ngModel)

--- In previous sections we saw that how can we use ngModel .
--- The main goal of using using ngModel to achieve the two way data binding.
--- For that we have been using "[(ngModel)]" on the select, input or textarea elements, where we can read and update the value.
--- The "ngModel" enhance these elements such that they support two way data binding through it, but it does not comes up with own template unlike component.
--- Apart from this ngModel also provide some built in angular classes on element where we place the ngModel.
--- There are different classes like "ng-pristine, ng-touched, ng-untouched, ng-dirty, ng-valid, ng-invalid ".
--- Since these classes are starting with "ng" , we confirm that angular is adding these classes internally whenever we use ngModel on a particular element.
--- Each of these classes have some different purpose based on the user interaction with that element.
--- The attribute directives are responsible for changing the functionality or style of the element i.e appearance of that element without altering structure.
--- Previously we learned that how can setup our custom two way data-binding.
--- Just recap --> If we are having an input for example "size" and we are using "sizeChange" as "output event emitter" then we can simply consider/make the "size" property as two way bindable.
    --- Therefore then the syntax will become [(size)] , which will help the angular that "size" property is two way bindable property and angular will treat that property according to it.
--- According to this rule , now we can understand how  "[(ngModel)]" works i.e two way binding in angular.
--- We can use "ngModel" as directive  as well, meaning if we do not wanted to use it for two way data binding (i.e If we do  not need of "[(ngModel)]").
--- If we use "ngModel" on element then we can use above mentioned css classes , and based  upon the user interactions we can style the input dynamically .
--- In the end , we can say that ngModel is an attribute directive which can help us to achieve the two way data binding or managing css classes by enhancing an input/select/textarea element.

--- To understand the code of "ngModel", we have gone through the git hub repo of an angular.
--- Where we have found that "[ngModel]" is an input property , where "(ngModelChange)" is an output event emitter.
--- Hence , As per our rule or pattern we can achieve the two way data binding on "[(ngModel)]".
--- We can called "ngModel" as an attribute directive, because we are adding it as an attribute to an element then it is enhancing/changing that element.
--- Like it can property or event listing or two way binding features.

    --> Reference
        https://github.com/angular/angular/blob/main/packages/forms/src/directives/ng_model.ts 


// Structural directives (ngIf, ngFor, ngSwitch)

--- In Angular, structural directives are directives that change the structure of the DOM by adding or removing elements. 
--- They differ from attribute directives in that they don't just modify existing elements—they can insert or remove elements based on conditions or iterate over data. 
--- Structural directives use an asterisk (*) prefix as shorthand to indicate that they are modifying the structure of the DOM.
--- In Angular 17 and above we do not use built in structural directive anymore, because they been replaced by the template features like "@for , @If".
--- However, if we wish to use to it then we can use them directly.
--- But if we are using standalone components then we need to import the "NgIf, NgFor, NgSwitch" from "@angular/common" to tell the angular that we are using it.
--- Also you can import "commonModule" as well instead of separately importing them.

--- 


// Custom Directives (attribute)

--- In previous part, we saw that  what are  attribute and structural directives .
--- In this section, we will be learning about how can we create our structural directive.
--- As we learned the directives are similar to the component but without template.
--- So we can create same structure as we are creating for components.
--- The main difference is about the decorator and selector.
--- Here, we will be using "@Directive" decorator and the selector will the css attribute selector.
--- We cannot use "element selector here" directly , because we wanted to enhance the element not to create an element.
--- Though we can use "element selector with conjunction of CSS attribute selector" like "a[appSafeLink]" --> i.e "appSafeLink" attribute will only apply when the element is "a i.e anchor tag."


--- Here, we are creating an custom directive . The directive will be placed on anchor element.
--- So when we clicked on the link the directive will populate the confirmation message before redirecting to the external link.

    --> Code snippet

        // Directive code

        import { Directive, input } from '@angular/core';

            @Directive({
            selector: 'a[appSafeLink]',
            standalone: true,
            host: {
                '(click)': 'onConfirmLeavePage($event)',
            },
            })
            export class SafeLinkDirective {
                queryParam = input('myapp', {alias: 'appSafeLink'});
            constructor() {
                console.log('SafeLinkDirective is active!');
            }

            onConfirmLeavePage(event: MouseEvent) {
                const wantsLeave = window.confirm('Do you want to leave the app?');
                const address =  (event.target as HTMLAnchorElement).href; 
                (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
                if (wantsLeave) {
                return;
                }
                event?.preventDefault();
                }
            }

        // Usage in "learning-resources.component.html"

        <p>Helpful resources you might want to use in addition to this course.</p>
            <ul>
            <li>
                <!-- <a href="https://angular.dev" appSafeLink queryParam="myapp-docs-link">Angular Documentation</a> -->
                <a href="https://angular.dev" appSafeLink="myapp-docs-link">Angular Documentation</a>
            </li>
            <li>
                <a href="https://academind.com/courses"  appSafeLink="myapp-course-link">Academind Courses</a>
            </li>
            <li>
                <a href="https://www.google.com/search?q=angular"  appSafeLink="myapp-google-link">Google</a>
            </li>
            </ul>

        --- In this example, we built the directive and also gone through the couple of features like inputs and how handle event on host element (Where we place our directive.)
        --- Important thing that we learned that how can we simplify the usage of our directive.
        --- Basically we have created an "queryParam" as input , but we had kept its alias name same as to the "selector" of the directive.
        --- Hence you can see we can pass the values to directive directly and it will work same as it is.
              <a href="https://angular.dev" appSafeLink="myapp-docs-link">Angular Documentation</a>


        --> Apart from this you can also inject the host element reference into directives.
        --- Basically that will gives you an reference to the host element so that you can perform operations using it.

        --> Final code using both the solutions


        import { Directive, ElementRef, inject, input } from '@angular/core';

        @Directive({
        selector: 'a[appSafeLink]',
        standalone: true,
        host: {
            '(click)': 'onConfirmLeavePage($event)',
        },
        })
        export class SafeLinkDirective {
            queryParam = input('myapp', {alias: 'appSafeLink'});
            hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
        constructor() {
            console.log('SafeLinkDirective is active!');
        }

        onConfirmLeavePage(event: MouseEvent) {
            const wantsLeave = window.confirm('Do you want to leave the app?');

            // 1. Solution using event, which will generate on click of the host element.

            // const address =  (event.target as HTMLAnchorElement).href; 
            
            // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            
            
            // 2. Solution by Injecting the HOST element Ref

            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();


            if (wantsLeave) {
            return;
            }
            event?.preventDefault();
        }
        }



// Custom Directives (Structural)

--- In previous section, we learned about creating an Custom Attribute directive.
--- In this section, we will be learning about the Custom structural directive and couple of other things which revolve around it.
--- The purpose of this custom structural directive is to show and hide the content based upon the condition.
--- Similar to *ngIf.

--- Let's first write a code and then we will be going through each and every thing that we are using to built this directive.


    --> For example

    // Auth.directive

        import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
        import { Permission } from '../auth/auth.model';
        import { AuthService } from '../auth/auth.service';

        @Directive({
        selector: '[appAuth]',
        standalone: true
        })
        export class AuthDirective {
        userType = input.required<Permission>({ alias: 'appAuth' });

        private authService = inject(AuthService);
        private templateRef = inject(TemplateRef);
        private viewContainerRef = inject(ViewContainerRef);

        constructor() {
            effect(() => {
            if (this.authService.activePermission() === this.userType()) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainerRef.clear();
            }

            })
            }

        }

    //  Usage  (app.component.html)


        <ng-template appAuth="admin">
            <p>Only admins should see this !</p>
        </ng-template>


    --> Explanation 


    --- In the above code snippet you can see different types of features or keywords .
    --- We will go through it one by one to get the better understanding about the "Custom Structural Directive."

    1) Ng Template

    --- Now you will say , the structural directive should be append with "*".
    --- Yes, that is the another way to add the structural directive and we will touch base it after this approach.
    --- "ng-template" is the special template provided by an Angular and you can use it, inside your component to wrap some content.
    --- In our case, this paragraph, which should not be shown on the screen initially. 
    --- So whatever you put inside of an ng-template will not be rendered on the screen.
    --- Instead the idea behind the "ng-template" is that you can define some content like this ("<p>" in our case) that eventually(After long time) be rendered onto the screen.
    --- So that we can control when exactly that content show up on the screen instead of always showing it.
    --- That's idea behind the ng-template.
    --- It allows you to prepare some markup that should eventually be shown and you can control and we will soon control when exactly this wrapped markup, this paragraph here should be shown.
    --- And structural directives always need such a template though this template can be added automatically behind the scenes if you use this asterisk (We will take closer look at this very soon).
    --- Also you can use the built in directive similarly without asterisk (*).

               <ng-template [ngIf]="'admin'">
                    <p>Only admins should see this !</p>
            </ng-template>

    --- Basically "asterisk" is just adding an syntactical sugar for automatically adding this "ng-template" behind the scene (if we use *ngIf directly on a element like below)
            <p *ngIf="'admin'">Only admins should see this ! </p>
    --- Behind the scene angular will add this "<p>" inside the "ng-template" and will put the content inside init.
             <ng-template [ngIf]="'admin'">
                    <p>Only admins should see this !</p>
            </ng-template>

    2) Why are we adding "attribute directive" on ng-template not on "p" ?
    --- But that's important, onto ng-template, not onto the element that should be rendered conditionally.
    --- So we don't add it like an attribute directive onto the element that should be changed, but instead onto a template that contains the content that might eventually end up in the DOM.
    --- So that's the first important step.
    --- Basically as a part of the first step, we have put the "authDirective" on the "ng-template".

    --- In the second step i.e inside the "authDirective" we will we deciding the what and where the content should rendered.
    --- In the auth directive , we have been injecting two things.
        1) TemplateRef
        2) ViewContainerRef
    --- Both can be imported from the "@angular/core"

        "TemplateRef"
    --- By injecting the "TemplateRef" you are telling the Angular that we want to hold the template i.e "ng-template" and implicitly (inherently) the content inside the template  .
    --- So in our case there is only one element i.e <p>, but there might be the chances the template contains the long list of elements, that could be any markup.
    --- Therefore, we can get the hold of template content using the "TemplateRef".
    --- This is the super important step while creating a structural directive.

        "ViewContainerRef"
    --- This ViewContainerRef in the end is a reference to the place in the DOM where this template is being used.
    --- We will see later how this place looks like and how the template gets injected at this place.


    --- So the TemplateRef in the end gives you access to the content of the template you could say.
    --- The ViewContainerRef gives you access to the place in the DOM where this directive is being used.
    --- So where this template is being used, therefore in the end. 
    --- And you need both pieces of information to tell Angular where to render what.

        "createEmbeddedView"
    --- This method is available on "ViewContainerRef".
    --- We can use this method to tell the Angular to render some new content into a certain place in the DOM.
    --- This method needs a "TemplateRef" as an argument.
    --- Therefore we are passing "TemplateRef" as an argument to this function.
    --- Basically this will tell the Angular to render the content between "ng-template" tag's where the directive is being used instead of ng-template.

        "clear"
    --- This method is available on "ViewContainerRef".
    --- This will remove if any embedded view that has been rendered.

        "important note"
    --- The content inside the "ng-template"(i.e content between the "ng-template" tags) is not rendered by default.
    --- So basically it is a part of your code in the template but it is not rendered on to the screen therefore it will not load initially on the page.
    --- Instead , it will only show up there once you call create embedded view and you pass the template ref to create an embedded view.

        "After loading the page"
    --- By doing above thing we finally build our own structural directive.
    --- As mentioned when we load our page, we cannot see the "content inside the "ng-template"" initially.
    --- When you inspect, you will find below code at that place inside a DOM.

            <!--bindings={
            "ng-reflect-user-type": "admin"
            }-->

    --- Basically this is marker for an Angular , so that it internally is able to find the place where this content should be rendered if the specified directive decides that it must be rendered.
    --- Now once you fulfill the conditions to rendered the directive the respective code will executed and when you inspect the DOM, you will see below code.

        <p _ngcontent-ng-c1317779650="">Only admins should see this !</p>
        <!--bindings={
            "ng-reflect-user-type": "admin"
            }-->

    --- Therefore by using the marker , Angular can easily identify the place where it can rendered the content.

    // Structural Directive and Syntactic Sugar (*)

    --- As I mentioned earlier , we can use "*" before the directive instead of  using ngTemplate.
    
         <p *appAuth="'admin'">Only admins should see this !</p>

    --- Basically adding an "asterisk" before the structural directive is common naming patter for Angular to identify and create an "ng-template" and wrapped the content inside init where we have put this structural directive.
    --- Another important thing that this "*" syntax expects a proper binding.
    --- Meaning it expects a typescript expression as value.
    --- Hence you can see instead passing "admin" directly, we are passing "'admin'" as string value.
    --- Because we do not "admin" variable which return a string value.
    --- That's it for this "asterisk" syntax. Everything will taken care by Angular .
    --- This just a shorter syntax to the implementation that we did it using "ng-template."



// Directive Composition API

    --- Angular directives offer a great way to encapsulate reusable behaviors— directives can apply attributes, CSS classes, and event listeners to an element.
    --- The directive composition API lets you apply directives to a component's host element from within the component TypeScript class.

        --> Adding directives to a component

        --- You apply directives to a component by adding a hostDirectives property to a component's decorator. We call such directives host directives.
        --- In this example, we apply the directive MenuBehavior to the host element of AdminMenu. This works similarly to applying the MenuBehavior to the <admin-menu> element in a template.
       

        --> For example

            @Component({
            standalone: true,
            selector: 'admin-menu',
            template: 'admin-menu.html',
            hostDirectives: [MenuBehavior],
            })
            export class AdminMenu { }


        --- When the framework renders a component, Angular also creates an instance of each host directive. 
        --- The directives' host bindings apply to the component's host element. By default, host directive inputs and outputs are not exposed as part of the component's public API. 

        --> Notes
        --- Angular applies host directives statically at compile time. You cannot dynamically add directives at runtime.
        --- Directives used in hostDirectives must be standalone: true.
        --- Angular ignores the selector of directives applied in the hostDirectives property.


        // Including Inputs and Outputs

        --- When you apply hostDirectives to your component, the inputs and outputs from the host directives are not included in your component's API by default. 
        --- You can explicitly include inputs and outputs in your component's API by expanding the entry in hostDirectives:

            @Component({
            standalone: true,
            selector: 'admin-menu',
            template: 'admin-menu.html',
            hostDirectives: [{
                directive: MenuBehavior,
                inputs: ['menuId'],
                outputs: ['menuClosed'],
            }],
            })
            export class AdminMenu { }

        --- By explicitly specifying the inputs and outputs, consumers of the component with hostDirective can bind them in a template:

            <admin-menu menuId="top-menu" (menuClosed)="logMenuClosed()">

        --- Furthermore, you can alias inputs and outputs from hostDirective to customize the API of your component:


            @Component({
            standalone: true,
            selector: 'admin-menu',
            template: 'admin-menu.html',
            hostDirectives: [{
                directive: MenuBehavior,
                inputs: ['menuId: id'],
                outputs: ['menuClosed: closed'],
            }],
            })
            export class AdminMenu { }

            <admin-menu id="top-menu" (closed)="logMenuClosed()">


        // Adding directives to another directive


        --- You can also add hostDirectives to other directives, in addition to components. This enables the transitive aggregation of multiple behaviors.
        --- In the following example, we define two directives, "Menu" and "Tooltip". 
            --- We then compose the behavior of these two directives in "MenuWithTooltip". Finally, we apply "MenuWithTooltip" to "SpecializedMenuWithTooltip".


                    @Directive({...})
                    export class Menu { }

                    @Directive({...})
                    export class Tooltip { }
                    
                    // MenuWithTooltip can compose behaviors from multiple other directives
                    
                    @Directive({
                    standalone: true,
                    hostDirectives: [Tooltip, Menu],
                    })
                    
                    export class MenuWithTooltip { }
                    // CustomWidget can apply the already-composed behaviors from MenuWithTooltip
                    
                    @Directive({
                    standalone: true,
                    hostDirectives: [MenuWithTooltip],
                    })


                    export class SpecializedMenuWithTooltip { }


        --> Reference
            https://angular.dev/guide/directives/directive-composition-api
            --- You can refer to other details on the above reference link (Like Execution Order and Dependency injection).
        
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


******** DEEP Dive - PIPES ***************************************************************************************************************************************************************************


--- Pipes are a special operator in Angular template expressions that allows you to transform data declaratively in your template. 
--- Pipes let you declare a transformation function once and then use that transformation across multiple templates. 
--- Angular pipes use the vertical bar character (|), inspired by the Unix pipe.


// Built-in types

--- Angular includes a set of built-in pipes in the @angular/common package:
--- While using the custom pipes in latest angular versions either you can import the commonModule or specific pipe class name .
--- In below reference link, you will find the list of built-in pipes in Angular along with their usage notes.

    --> Reference
    https://angular.dev/guide/templates/pipes#built-in-pipes

// Custom Pipes

--- So far, we learned about how to use the built-in Pipes, but sometimes we need to transform the values based on our need.
--- There might be the some business cases at enterprise level applications where we need to transform the values as per business needs.
--- In such situation , we can create our own custom pipes.
--- Let's understand the implementation of it,  with example.


    --> For example

    --- In below example, we have created a custom pipe which basically transforms the value into "Fahrenheit" and  "Celsius" based on the input type.

        // temperature.pipe.ts

        import { Pipe, PipeTransform } from '@angular/core';

        @Pipe({
        name: 'temperature',
        standalone: true
        })
        export class TemperaturePipe implements PipeTransform {

        transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): string | null {
            console.log('pipe value', value)
            let val: number;
            if(!value) {
            return null;
            }

            if(typeof value === 'string') {
            val = parseFloat(value);
            } else {
            val = value;
            }

            let outputTemp: string = '';

            if(inputType === 'cel'&& outputType === 'fah') {
            outputTemp = (val * (9 / 5) + 32).toFixed(2) + '' + '°F'
                // outputTemp = (val * (9 / 5) + 32).toString() + '' + '°F';
            } else if(inputType === 'fah' && outputType === 'cel') {
            outputTemp =  ((val - 32) * (5 / 9)).toFixed(2) + '' + '°C';
            // outputTemp =  ((val - 32) * (5 / 9)).toString() + '' + '°C';
            } else {
            outputTemp = val.toString() + '' + `${inputType === 'cel' ? '°C' : '°F'}`;
            }
            return outputTemp;
        }

        }

        // Explanation

        --- Here in this custom pipe , we are using "@Pipe" decorator.
        --- Similar to "@Component" and "@Directive" decorator , the "@Pipe" Decorator also contains the "metadata".
        --- Here we have "selector" , "pure" and "standalone" property for config.
        --- This "@Pipe" decorator makes our class a  Pipe.
        --- Alone this configuration will not make pipe executable. Because we need a  "transform" method to execute the pipe.
        --- We can add this method on to the our class directly as well.
        --- As we saw in the lifecycle hooks section, Angular provides us some "Interfaces" to implement on our class so that we cannot miss the required method on our classes.
        --- Similar to that , we can import "PipeTransform"  interface from "@angular/core".
        --- This "PipeTransform" interface forces us to add "transform" method on our class.
        --- This "transform" method will automatically gets called by Angular  behind the scene when hook that pipe in our code for usage.
        
        "transform" method.
        --- The transform method is the core function of an Angular pipe, defining the transformation logic that takes an input value and converts it into a desired output format. 
        --- It’s part of the PipeTransform interface, which is implemented by custom pipes to specify how data should be transformed in the template.
        --- The "first" argument is the value on which we are applying the PIPE.
        --- Then after that we can pass as many as arguments to configure the pipe based on our need.
        --- In our example, we have set the different arguments like inputType and outputType to make our transformation more configurable.


    // Chaining of PIPE

        --- In Angular, chaining of pipes means applying multiple pipes in sequence to an expression in the template. 
        --- Each pipe transforms the data and then passes it to the next pipe, allowing you to perform complex formatting or transformations in a concise and readable way.

        --> How to Chain Pipes

        --- To chain pipes, use the | operator and specify multiple pipes, separated by |. Angular processes them from left to right, with each pipe receiving the output of the previous one.

            --> For example

            <p>{{ '2024-10-25T08:30:00' | date:'fullDate' | uppercase }}</p>

            --- The date pipe formats the date into a human-readable string, such as "Friday, October 25, 2024".
            --- The uppercase pipe then converts the formatted date string into uppercase: "FRIDAY, OCTOBER 25, 2024".


    // Reference vs Primitive values

    --- In previous example, we saw that how can we transform the "primitive" values like "string" , "number" or any other primitive data value.
    --- However pipes are not limited to primitive values. We can also pass the objects and array for transforming them into some desired output.

    --- In case of reference values i.e to "objects" and "arrays" there is precaution that we  need to take care.
    --- Let's understand about it in detail.

        --> For example

        --- Suppose we have a "filterPipe" that filters an array of items based on a condition. This pipe is a pure pipe, meaning it only re-evaluates if it detects a change in the reference.

                // Pipe code snippet

                import { Pipe, PipeTransform } from '@angular/core';
                @Pipe({
                name: 'filter',
                standalone: true,
                pure: true // This is the default setting
                })
                export class FilterPipe implements PipeTransform {
                transform(items: any[], searchTerm: string): any[] {
                    return items.filter(item => item.includes(searchTerm));
                    }
                }


                // Usage -- Component Code snippet

                    export class AppComponent {
                    items = ['apple', 'banana', 'cherry'];
                    searchTerm = 'a';

                    addItem(newItem: string) {
                        this.items.push(newItem); // This modifies the array, but not its reference
                        }
                    }
                // Component Template 
                <div *ngFor="let item of items | filter:searchTerm">{{ item }}</div>


        --- Pipes are pure by default.
        --- Meaning they are adhere  to the caching mechanism.
        --- In our example, When "addItem" is called, the items array is modified, but because the array reference remains the same, Angular does not trigger the filter pipe to run again. 
        --- Because transform method is potentially executing  a lot. Meaning if anything changes in the component it executes again n again.
        --- Therefore , by default Angular prevents this behavior by implementing caching mechanism.
        --- Angular only triggers the transform method in the pipe when the "value" which is being passed to it changes.
        --- Now you could say that, we have change the value because we have added a new item in the items array.
        --- Technically Angular see's that the "items" array value is not modified. The value inside the "items" array is modified.
        --- In javascript Non-Primitive values are having reference to Heap and in the Heap the actual data is being store.
        --- Here when we perform the push method, we are changing the value inside the heap. Where the transform method refers to reference/address as  value from a callstack to heap.
        --- Meaning that reference or address is not yet change , only the data inside the array is change.
        --- Therefore Angular does not see this as a value change, because the "input" value that we are passing to pipe is just a pointer to the array or object in a memory not a actual value.

            --> More on this
            https://academind.com/tutorials/reference-vs-primitive-values

        --- Now we have seen that what is issue , but not let's find the solution to overcome this issue.
        --- Typically there are two solution that we can implement.

        1) Create a New Reference:

        ---  In addItem, instead of modifying the array directly, create a new array. This way, Angular detects the change in reference and re-evaluates the pipe.

                addItem(newItem: string) {
                this.items = [...this.items, newItem]; // Creates a new array reference
                }
        --- This will create a new reference/pointer/address for an array and that will consider it as a change in value.

        2) Make the Pipe Impure:

        --- Set pure: false in the pipe’s metadata. This will force Angular to check the pipe on every change detection cycle.
        --- By making the pipe as impure will ignore the caching mechanism and Angular will execute the pipe's transform method on every single change detection happens in a component.
        --- However this is not a recommended approach because this could lead to potential impact on your applications performance.










    





*/





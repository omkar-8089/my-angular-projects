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

*/





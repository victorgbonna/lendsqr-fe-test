# Lendsqr Frontend Test
#### I was given this work in my capacity as a frontend developer by Lendsqr.

## About The Project
#### Frameworks, languages and libraries used
- Javascript - Programming Language. 
- TypeScript- Javascript but with a strongly typed syntax.
- React - Javascript Frontend Library.
- SCSS- A more advanced variant of CSS.

### Getting started 
#### To get a local copy up and running follow these simple example steps
#### Installation

- Clone the repo
- npm install
- npm start
### Map 
###### This would entail every folder une main "src" folder and their uses
- pages- This folder contains  root components of every page.
- components- This folder contains the reusable components.
- hooks - This folder contains my custom hooks.
- reducer - This folder contains the files involving the useReducer hook.
- constants- This folder contains static data that are reusable but do not change states.
-fonts- this folder was made as an alternative for the "Avenir Next" font as it was not available on google fonts.

The routes are :- /login, /dashboard, /users, /users/detail.
### Pages 
- login- The file is the root component for the login page
- dashboard- The file is the root component for the dashboard page 
- userdetail- The file is the root component for the user detaiĺs page
P/S- the users page contains similar components to the dashboard page, so the file was not created, rather the dashboard component was reused. 

### Components
- Button- This folder holds the component for buttons.
- Card- This folder holds each card section displayed in the users and dashboard pages.
- InputGroup - This folder holds the component for the login inputs.
- Logo - This folder renders the logo; it redirects to the home page when clicked upon.
- Navbar- This folder renders the nav bar.
- Paginator - This folder renders the pagination buttons.
- Select - This folder renders a customized html select tag with a list of options passed in as an argument.
- Sidebar- This folder renders the sidebar on the dashboard, users and the user detail page. It does not display on a mobile screen, but its child components are being reused on the navbar component. 
- Spinner - This folder holds a spinner component that renders when an api is being fetched
- Maintable- This folder holds the table for rendering the users array. There are child components: TableEntry, TableForPc, AccordionForMobile and filterForm. 
             TableForPc holds the html table for rendering users on a pc screen, while TableEntry are the table body/entries.
             AccordionForMobile holds the html div for rendering users on a mobile screen. Filterform is the pop up form for filtering the users listed.

### Hooks
- UseAxios- This custom hook is for making API calls. It returns a dymamic response, error and loading state.
- UsePagination- This custom hook is for getting the paginated buttons.

### Constants
- baseUrl- This holds the api baseUrl.
- sideBarLinks- This holds all the links on the side bar.

### Reducer
- PaginatorReducer- Due to the complex usestates and functionality needed for pagination - including selecting the number of rows and the functionality in the filter form, I decided to make use of the useReducer to handle such in a clean and tidy way. This folder has that. 

## Difficulties
Doing this task was not that easy at all but I gave my all and learnt some things along the way. 

My major challenge was with Typescript. I had a tough time tackling it, as I had little experience in it before the task.

Time was not on my side too; I had to work on this while doing my 9-5 too. 

### Contact 
- Email- victorgbonna@gmail.com
- Whatsapp - +234 8102603301
- Linkedln - [https://www.linkedin.com/in/victor-ogbonna-5a3113230](https://www.linkedin.com/in/victor-ogbonna-5a3113230)
-  Site Link - [https://victor-ogbonna-lendsqr-fe-test.vercel.app](https://victor-ogbonna-lendsqr-fe-test.vercel.app/)



# Country Facts SPA

## Introduction
The Country Facts web application is a basic single page application which allows users to search for countries and find out more information about them.

## Getting Started
To see the live application goto: [Country Facts](https://daniel-collings.github.io/country-facts/) hosted on GitHub Pages.
For getting the application running locally assuming the repo is cloned and you're in the root of the project:
1. `npm install`
2. `npm run dev`

## Features
- Dynamic searching of countries
- 'Did you mean?' view to navigate to the correct page when one of more results are returned.
- Testing
- Error Handling with limited retries on fetch requests.
- Random fun facts on for population and area of a respective country.
- DaisyUI theme integration.
- Theme switcher integrated with DaisyUI.
- React Router integration with the hash router integrated. Hash router chosen to work with GitHub Pages. 
- Deploys to Github Pages.
- Runs pre-commit checks and tests during the deployment pipeline.
- Dynamic data viewer based on the response of the respective country being searched for.

## Further Development
There are several areas that require further development to improvement this project.
- Google Maps - the project would benefit from Google Maps integrate for visualising the country one is searching for. In addition, a new feature could be allowing a user to interact with the map, selecting a country to see its respective information.
- Continents view - an additional page to view countries by continent would also be a helpful feature for users exploring the web app.
~~- Error handling - increased error handling to ensure a smooth UX throughout the users use would be beneficial.~~
- Cookie Consent - being able to store information on the clients device could be beneficial in improving the UX such as with the theme context suggested improvement.
- Google Analytics (GA) - integration of GA to see how the user journey through the web app could be improved.
~~- Theme - DaisyUI has been used as the theming for the project but to give the users a better experience the project would benefit from a theme context provider to switch from light to dark mode for example.~~
- DynamicDataView.tsx - this component requires time to build up a bespoke library of components that perfectly illustrate the data for each data type.
- Internationalisation - with the nature of Country Facts being a geo-explorer, it would be beneficial to have internationalisation across the web app.
- Testing - reflect on current testing and increase testing specifically around behaviour driven and integration tests.
- Refactor the components used within `/src/routes/countries.tsx` to not have the `LayoutWithNav` wrapper.
- Reflect upon the components built so for an look for optimising code reuse.
- Consider whether to debounce state updates on `/#/countries`.
- Bug found with `Netherlands`, will always go to 'Did you mean' page as there's a country called `Caribbean Netherlands`. Need to look at resolving this.
- Show current time and weather of the country.
- Introduce caching beyond TanStack Query i.e. Redis or backend server.
- For further professional development, develop a API gateway to have further control over the data being served to the client.
- Dockerise the web application to increase scalability.
- Deploy to AWS.

## Notes
This project will continue to be developed as I come up with new ideas for the project.

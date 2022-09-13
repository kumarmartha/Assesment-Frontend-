## Project detail
```
- Technology used
1) React
2) JavaScript
3) Jest
4) Testing library
```


## UI following atomic design, 
```
Atoms: where Atoms are very small losely coupled
components which can be used throughout the project
```
```
Molecules: Combination of atoms and own functionality
```
```
Organisms: Combination of atoms, molecules and their own functionality which make bigger component
```
## Detail description
```
In the landing page, User will have option to enter the price value and add into table. 
On click of add reward will be calculated using util method(calculateRewards) and 
add into transaction list

In the same landing page, User has an option to filter the data like 
"GetAllRecords", "GetThreeMonthsRecord", "GetTotalRewards", "GetPerMonthRecord". 
All filters use utility helper method to fetch the record and display accordingly
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

To get the test coverage for all the files

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


# Weather radar
## About

A weather radar app that shows
weather data for the current day in the cities: \
`Tampere, Jyväskylä, Kuopio, Espoo`.\
The application displays the following weather information every three hours: \
`Temperature, Wind speed, humidity (in percent), precipitation (in millimeters)`.\
The weather data is retrieved from the [OpenWeatherMap Service](https://openweathermap.org/api).


## Installation of necessary modules
You need to download [download](https://github.com/portfolio-vm/weather-radar/archive/refs/heads/master.zip) or clone [clone](https://github.com/portfolio-vm/weather-radar.git) the project [Weather radar](https://github.com/portfolio-vm/weather-radar).

From the root directory of the project, 
you must enter the command in the console:

### ``` npm install ```

installs the necessary modules to run the project


## Additional settings before starting

The application uses the  [OpenWeatherMap Services API](https://openweathermap.org/api). \
And you need to [register](https://home.openweathermap.org/users/sign_up) 
to get a personal identifier in the OpenWeatherMap service.

Registration for the service is free.\
The registration form can be found at: https://home.openweathermap.org/users/sign_up

After registration, you will receive an identifier (API key), 
which must be added to the project file at:

```
├─── weather-radar
     ├─── src
          ├───constants
              ├───> Constants.js

...    ...    ...    ...   ...   ...  ...

export const API_KEY = {API key};
```
After completing the steps above, you can run the project.

### ``` npm start ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

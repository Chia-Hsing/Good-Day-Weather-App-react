# Good-Day-Weather-App

# Development stack
- Use __Create-React-App__ as the app build tool.
- Redux
- thunk
- react-router-dom

# External packages

# APIs

## APIs used
  - Weather forecast data are fetched from [Open Weather Map API](https://openweathermap.org/api)
    - current weather and daily weather are fetched from [One Call API](https://openweathermap.org/api/one-call-api)
    - hourly weather is fetched from [5 Day / 3 Hour Forecast](https://openweathermap.org/forecast5)
  - Client's current coordinates are fetched by [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview)
  - Location is positioned through [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) by latitude and longitude.
## Get API keys
  ### Google API Key
  1. Sign in your Google account.
  2. Create or select a project on [Google Cloud Platform](https://console.developers.google.com/)
  3. From the menu, click the __APIs and services__ .
  4. On the APIs and services page, click __ENABLE APIs and services.
  5. Search out the API you are going to use. (which are Geocoding API and Geolocation API)
  6. From the menu, click __Credentials__.
  7. Click __Create credentials__.
  8. Click __API key__, then the API key would be showed on the dialog box.
  ### Open Weather API
  1. Sign up on [Open Weather](https://home.openweathermap.org/).
  2. You can find the __API Key__ at the personal page.

# Running
  ## Clone
  ```
  $ git clone https://github.com/Chia-Hsing/Good-Day-Weather-App-react.git
  ```
  
  ## Setup
  1. Access the Good-Day-Weather-App-react file.
  ```
  $ cd Good-Day-Weather-App-react
  ```
  2. Install packages.
  ```
  $ npm install
  ```
  3. Create a .env file.
  ```
  $ touch .env
  ```
  4. Store your API Key in .env file and save.
  ```
  REACT_APP_OPEN_WEATHER_API_KEY = 
  REACT_APP_GOOGLE_GEO_API_KEY = 
  ```
  5. Then you can view the app locally on http://localhost:3000/Good-Day-Weather-App-react
  ```
  $ npm start
  ```
# App Display

![image](https://github.com/Chia-Hsing/Good-Day-Weather-App-react/blob/master/src/img/1.png)

![image](https://github.com/Chia-Hsing/Good-Day-Weather-App-react/blob/master/src/img/2.png)

# Live Demo

[Good Day Weather App](https://chia-hsing.github.io/Good-Day-Weather-App-react/)

# Current progress

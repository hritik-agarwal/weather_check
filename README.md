# Weather Check

## Features

- It is a weather app that shows next 7 days weather forecast.
- The data is layed out in a table manner.
- It also allows to see result for multiple cities at the same time.

## Live Demo

[https://weatherweek.netlify.app/](https://weatherweek.netlify.app/) ↗️

## Postman Collection

https://api.postman.com/collections/25139606-ea1a954c-ab27-4521-9c94-ccca0b409daf?access_key=PMAT-01H1M979MRX9NA89P820B71M8E

## APIs Description

- It uses api from https://openweathermap.org/ under the hood to fetch location and weather details.
- There are 2 main apis
    - Location API
        - It gives search suggestions.
        - Use it here : ```https://weather-check-backend.onrender.com/api/suggestion?city=<city>```
    - Weather API
        - It gives next 7 days weather.
        - Use it here : ```https://weather-check-backend.onrender.com/api/weather?lat=<lat>&lon=<lon>```


## To run in Local

1. Clone the repo & run ```npm install``` in client and server folder.
2. Create ```.env``` file in both client and server.
3. In .env of server, add ```OPEN_WEATHER_API_KEY=<your_api_key>```
4. In .env of client, add ```REACT_APP_INTERNAL_API_PATH=<your_backend_server_path>```
5. Run ```npm start``` in client and server in seperate terminal.


## **WeatherApp Description**
The project was built with React using the Open Weather API. The WeatherApp is a widget which allows users to view the weather within their location using the navigator.geolocation and Open Weather API.  



## Whats inside
ReactJS  

Axios(API call)


## Dependencies/prerequisites
node: v.14.15.4  

npm: v 6.14.10  

Axios: v 0.21.1

React: v 17.0.2


## Installation and Usage
This is a basic projected created with npx create-react-app. To get started you can directly clone the repository.

cd weather-app
npm install 
Install dependancies 

Afterwards start the server using npm start


## Findings

By using React I am able to seperate different components of the app making it easier to create user interfaces. Seperating components also makes it easier for scalability in future. 

I had used hooks because they are a new feature of react. You also able to write cleaner components because you don't have to search for various this.setState within the application.

Components for the application were used in a seperate folder called 'components' for best practice.

After doing some research, using the navigator.geolocation was quite simple too implement.

I used axios too request data because it has easy error handling and makes code more readable as you don't have to parse the response to json. 

In regards to conversions (compassConverter & Fairenheight) I decided to use a function to do so as I thought it would be less taxing than making another request.

Please ignore 'added lat and long too dependency in useState' it should have been useEffect*

## Assumptions
I decided to keep the API key open, however, if this were production code I would have created a .ENV file for it too be hidden.  

I changed the titles of the widget assuming it was just a placeholder.  

For the title of the location I made it so that the value of the input is displayed while the user is typing. I also did this because there was no submit button.  

since the spec was loose I decided make requests with axios.

Assuming I didn't need to make another request to change the temperature to fairenheight as well as the wind speed I made a function to convert it.

I also decided in using hooks as it is a newer feature opposed to classes.

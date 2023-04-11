# YouTube Clone Application 

This is a modern YouTube clone application built with React JS and Material UI 5, and powered by Rapid API. The application allows users to search for and watch YouTube videos just like the actual YouTube website. 

Building and deploying a modern YouTube clone application using the latest technology stack has become easier with React JS, Material UI 5, and Rapid API. React JS is a popular frontend development library that allows developers to create reusable UI components efficiently. Material UI 5 is a set of pre-built components and design guidelines that help developers create beautiful and responsive UIs without investing much time. Rapid API is a platform that provides access to thousands of APIs, making it easier to integrate third-party services like YouTube.

By using React JS and Material UI 5, developers can create a modern and responsive YouTube clone that works seamlessly across different devices. The application can also be easily customizable, making it easier to add new features and functionality based on user requirements. The integration with Rapid API enables developers to access a vast array of YouTube APIs, allowing them to incorporate various functionalities such as search, video playback, and more.

The deployment of the YouTube clone application can be done on a cloud-based platform like AWS, Google Cloud Platform, or Azure. These platforms offer a range of hosting services, ensuring that the application remains scalable, reliable, and secure. The use of modern development tools, frameworks, and APIs has made it easier to build and deploy applications in a shorter time frame while ensuring better performance and user experience.

## Project Setup 

To get started with the project, you can clone the repository and install the necessary dependencies by running the following commands: 

```sh
git clone `https://github.com/CodeKaito/React-YT`
cd React-ZT
npm install 
```

## Running the Application 

To run the application locally, you can run the following command:

```sh
npm start 
```

This will start the application on your local machine, and you can access it by opening your browser and navigating to `http://localhost:3000`. 

## Rapid API 

This application uses the YouTube API provided by Rapid API to search for videos and retrieve relevant video data. You will need to sign up for a Rapid API account and subscribe to the YouTube API before using this application. Once you have subscribed to the API, you will receive an API key that you can use to authorize your requests. 

You should store your API key as an environment variable, and use it to make requests to the Rapid API YouTube endpoint. 

```js
const API_KEY = process.env.REACT_APP_API_KEY;

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json', 'x-rapidapi-key': API_KEY },
};

const BASE_URL = 'https://youtube-search1.p.rapidapi.com/';
const SEARCH_URL = `${BASE_URL}/search`;

export const searchVideos = async (query) => {
  const response = await fetch(`${SEARCH_URL}?q=${query}`, requestOptions);
  const data = await response.json();

  return data.items;
};
```

This code shows an example of how to make a request to the Rapid API YouTube endpoint to search for videos. 

## Material UI 5 

This application uses Material UI 5 as the UI component library for styling the application. Material UI provides a range of pre-built React components that can be easily customized and styled to fit your application's design needs. 

## Contributing 

If you would like to contribute to the project, you can fork the repository and submit a pull request with your changes. Make sure to include a detailed description of your changes and any relevant information. 

## License 

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

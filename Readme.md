# The Thumbnail-project
The aim is to provide an authenticated api endpoint, that provides 50*50 thumbnail for a submitted image url. Here we have used typescript type compilation for better typechecking

# To start
- In the server directory terminal
- ``npm install`` to install dependencies as listed in package.json
- ``npm start`` to start

# Interface
I have made an added bonus frontend for this project. To view please go to
- localhost:8000 in your browser
or
- the process.env in your server viewport

# The api endpoints includes
- /api/auth/login 
    - Method : POST
    - parameters
        - username
        - password


- /api/tool/resize-image 
    - Method : POST
    - params
        - imageUrl

# Technology stack used
- Cookie Parser 
- Pino prettier - for linting
- sharp - for high performance node.js image processing
- supertest - to make HTTP requests easy 
- express framework
- Body parser(Middle-Ware)
- Jest - for Unit testing
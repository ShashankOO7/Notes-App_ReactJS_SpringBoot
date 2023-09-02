
# Project Title

This is a simple web application to take Notes and information, where user can sign up, sign in, add, remove or edit the Notes details.


## Acknowledgements

 - [reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)



## API Reference

#### 1. API Description for User related action
base = /api

| METHOD | PATH     | DESCRIPTION                |
| :-------- | :------- | :------------------------- |
| `POST` | `/users` |  new user registration |
| `PUT` | `/users` |  update user |
| `GET` | `/users/{id}` | find and view user |
| `DELETE` | `/users/{id}` |  delete user |
| `POST` | `/users/verifyByphone` |  user login |
| `GET` | `/users/{id}` |  all users |

#### 2. API Description for Notes related action
base = /api

| METHOD | PATH     | DESCRIPTION                |
| :-------- | :------- | :------------------------- |
| `POST` | `/notes/{user_id}` |  add new note |
| `PUT` | `/notes/{user_id}` |  update note |
| `GET` | `/notes/{id}` | find and view note |
| `DELETE` | `/notes/{id}` |  delete note |
| `GET` | `/notes/byUser-ID/{user_id}` |  all notes |

Takes two numbers and returns the sum.


## Screenshots


![App Screenshot](https://github.com/ShashankOO7/Notes-App_ReactJS_SpringBoot/blob/main/Screenshots/AddNote.jpeg?raw=true)

![App Screenshot](https://github.com/ShashankOO7/Notes-App_ReactJS_SpringBoot/blob/main/Screenshots/Home.jpeg?raw=true)


![App Screenshot](https://github.com/ShashankOO7/Notes-App_ReactJS_SpringBoot/blob/main/Screenshots/Responsive.jpeg?raw=true)

![App Screenshot](https://github.com/ShashankOO7/Notes-App_ReactJS_SpringBoot/blob/main/Screenshots/SignIn.jpeg?raw=true)

## Features

- sign up, sign in
- email verification
- responsive web design
- secured REST end points
- CRUD operations
- search notes


## Built With

- React.js 16
- ReactStrap
- Spring Boot 2.3.0
- MySQL
## Prerequisites

- Maven
- Node package manager(npm)
- MySQL Workbench
- Spring-Boot Framework
- ReactJS (functional components)
## License

- This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@ShashankOO7](https://www.github.com/ShashankOO7)


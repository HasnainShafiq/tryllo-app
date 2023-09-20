# A work-in-progress kanban board

### Errors
- As of this moment, there is a mongoose error which I have been unable to fix; when trying to run database queries via the api, either it is unable to connect to my mongoDB Atlas or there is something else which I have overlooked. As a result, no data is loading on the client side.

- I will continue troubleshooting until either I have fixed the issue, or I may have to choose another db to use.

### Tech Stack
- The frontend is built using React, the backend is built using Express.js, and the database I chose to use is MongoDB. 

### Features
- When working, the tryllo app runs full CRUD functions on the database, allowing users to create, read, update, and delete tasks from their board.
- I am leaning towards integrating react-query/websockets or both to allow for data refetching and automatic page updates when a change is detected in the database.
- I plan on adding user registration and authentication, allowing users to create multiple boards, and adding drag and drop functionality. 

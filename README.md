# rest-api
## SKELETON

Route 

| Route          | HTTP           | Desciption                                                  |
| ---------------|:--------------:| -----------------------------------------------------------:|
| /api/users     | GET            | Get all the user info (Admin only)                          |
| /api/users/:id | GET            | Get a single user info (Admin and Aunthenticated user)      |
| /api/users     | POST           | Create a user (Admin only)                                  |
| /api/users/:id | DELETE         | Delete a user (Admin only)                                  |
| /api/users/:id | PUT            | Update a user with new info (Admin and Aunthenticated user) |


| Route          | HTTP           | Desciption                                                  |
| ---------------|:--------------:| -----------------------------------------------------------:|
| /api/signup    | POST           | Sign up with new user info                                  |
| /api/signin    | POST           | Sign in and get an access token based credentials           |



link : https://strawberry-custard-25258.herokuapp.com

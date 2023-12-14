# TicketSystem-Rest API

## Table of content


## Endpoints
| Endpoint  | Method | Response | Description |
| ------------- | ------------- | ------------- | ------------- |
| /api/auth/login | POST | returns jwt and user data | consumes email and password |
| /api/auth/register  | POST | returns ok of badrequest | consumes user register data | 
| -------------------------- |
| /api/user/{id} | GET / PUT | returnst userdata | params: firstName, lastName, telephone, emai|
| /api/flights | GET | returs all flights | |
| /api/flights/{id} | GET | returns flight data by id | |
| -------------------------- |
| /api/tickets | GET | returns all tickets by user | |
| /api/tickets/{id } | GET | returns ticket data| |
|||||

##


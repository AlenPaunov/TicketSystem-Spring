# TicketSystem-Rest API

## Table of content


## Endpoints
| Endpoint  | Method | Response | Parameters |
| ------------- | ------------- | ------------- | ------------- |
| /api/auth/login | POST | jwt and userData | email, password ```{ "email": "", "password": "" } ```|
| /api/auth/register  | POST |  | userRegisterData ``` { "fistname" : "", "lastName": "", "telephone": "", "email": "", "password": "" } ```| 
| |
| /api/user/{id} | GET | userData |userData: ``` { "fistname" : "", "lastName": "", "telephone": "" "email": "", "password": "" }```|
| /api/user/{id} | PUT | userData |userData: ``` { "fistname" : "", "lastName": "", "telephone": "", "email": "", "password": "" }```|
| |
| /api/flights | GET | flights | optional status |
| /api/flights | POST | flight | flightData |
| /api/flights/{id} | GET | flightData | |
| |
| /api/tickets | GET | tickets | optional status |
| /api/tickets | POST | ticket | ticketData|
| /api/tickets/{id } | GET | ticketData| |
| /api/tickets/{id } | PUT | ticketData| |
|||||

##


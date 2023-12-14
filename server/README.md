# TicketSystem-Rest API

## Table of content


## Endpoints
| Endpoint  | Method | Response | Parameters |
| ------------- | ------------- | ------------- | ------------- |
| /api/auth/login | POST | jwt and userData | email, password ```{
"email": "",
"password": ""
} ```|
| /api/auth/register  | POST |  | user register data ``` {
"fistname" : "", 
"lastName": "", 
"email": "",
"password": ""
} ```| 
| |
| /api/user/{id} | GET | userData |user data ``` {
"fistname" : "", 
"lastName": "", 
"email": "",
"password": ""
}```|
| /api/user/{id} | PUT | userData |user data ``` {
"fistname" : "", 
"lastName": "", 
"email": "",
"password": ""
}```|
| |
| /api/flights | GET | flights | optional status |
| /api/flights/{id} | GET | flightData | |
| |
| /api/tickets | GET | tickets | optional status |
| /api/tickets/{id } | GET | ticketData| |
|||||

##


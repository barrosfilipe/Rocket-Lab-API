# API v1 Info Resource
Endpoints allowing you to get information related to Rocket Lab API.

Info
| [Launches](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/launches.md)
| [Payloads](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/payloads.md)
| [Rockets](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/rockets.md)

## Info Base Path
[https://rocketlab-api.now.sh/v1](https://rocketlab-api.now.sh/v1)

## Info `GET /v1`
* Expected HTTP **status code** `200 OK`
* Expected **Content-Type** `application/json`
* Expected **Body**: `↴`
```json
{
  "name": "Rocket-Lab-API",
  "version": "1.0.0",
  "description": "An Open Source REST API for rocket, pad and launch data",
  "github": "https://github.com/barrosfilipe/Rocket-Lab-API",
  "author": "Filipe Barros <filipebarrossi@gmail.com>",
  "license": "MIT"
}
```

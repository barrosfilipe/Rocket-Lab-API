# API v1 Rockets Resource
Endpoints allowing you to get information related to Rocket Lab rockets.

[Info](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/info.md)
| [Launches](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/launches.md)
| [Payloads](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/payloads.md) | Rockets

## Rockets Base Path
[https://rocketlab-api.now.sh/v1/rockets](https://rocketlab-api.now.sh/v1/rockets)

## All Rockets `GET /v1/rockets`
* Expected HTTP **status code** `200 OK`
* Expected **Content-Type** `application/json`
* Expected **Body**: `↴`
```json
[{"id": 1, "name": "Electron", "active": true, "cost_currency": "U.S. dollar", "..."}, "..."]
```

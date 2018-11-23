# API v1 Payloads Resource
Endpoints allowing you to get information related to Rocket Lab payloads.

[Info](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/info.md)
| [Launches](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/launches.md)
| Payloads | [Rockets](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1/rockets.md)

## Payloads Base Path
[https://rocketlab-api.now.sh/v1/payloads](https://rocketlab-api.now.sh/v1/payloads)

## All Payloads `GET /v1/payloads`
* Expected HTTP **status code** `200 OK`
* Expected **Content-Type** `application/json`
* Expected **Body**: `↴`
```json
[
  {
    "norad_id": 43163,
    "name": "Dove Pioneer",
    "nationality": "United States",
    "configuration": "CubeSat",
    "type": [
      "Earth observation"
    ],
    "customer_name": "Planet Labs",
    "manufacturer": "Planet Labs",
    "mass_kg": 5,
    "orbit": "LEO"
  }
]
```

## One Payloads by `name` `GET /v1/payloads/Proxima 1`
* Expected HTTP **status code** `200 OK`
* Expected **Content-Type** `application/json`
* Expected **Body**: `↴`
```json
[
  {
    "norad_id": null,
    "name": "Proxima 1",
    "nationality": "United States",
    "configuration": "CubeSat",
    "type": [
      "Communication",
      "IoT"
    ],
    "customer_name": "Fleet Space Technologies",
    "manufacturer": "Pumpkin Space Systems",
    "mass_kg": null,
    "orbit": "LEO"
  }
]
```

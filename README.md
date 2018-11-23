<p align="center"><img src="https://i.imgur.com/Jbdc6V0.png"></p>
<p align="center"><img src="https://i.imgur.com/Z62dypG.jpg"></p>
<p align="center">Image from <b>It's Business Time</b> Rocket Lab Mission</p>

<p align="center"><img src="https://i.imgur.com/I7qwZNB.png" width="80"></p>

<h1 align="center">Rocket Lab REST API</h1>

<p align="center">
<a href="https://en.wikipedia.org/wiki/Representational_state_transfer"><img src="https://img.shields.io/badge/interface-REST-brightgreen.svg?longCache=true&style=flat"></a>
</p>

<h3 align="center">An Open Source REST API for rocket and launch data</h3>

## Usage

**Example Response**

```bash
curl -s https://rocketlab-api.now.sh/v1/launches/latest | jq
```

```json
{
  "flight_number": 3,
  "mission_name": "It's Business Time",
  "upcoming": false,
  "launch_year": "2018",
  "launch_date_unix": 1541908260,
  "launch_date_utc": "2018-11-11T03:51:00.000Z",
  "launch_date_local": "2018-11-11T16:51:00+13:00",
  "rocket": {
    "name": "Electron",
    "first_stage": { "engines": 9, "type": "Rutherford" },
    "second_stage": { "engines": 1, "type": "Rutherford" },
    "kick_stage": { "engines": 1, "type": "Curie" },
    "payloads": [
      {
        "norad_id": 43693,
        "name": "Irvine 01",
        "nationality": "United States",
        "configuration": "CubeSat",
        "type": ["Educational"],
        "customer_name": "Irvine Public School Foundation",
        "manufacturer": "Irvine CubeSat STEM Program",
        "mass_kg": 1,
        "orbit": "LEO"
      },
      {
        "norad_id": 43690,
        "name": "CICERO 10",
        "nationality": "United States",
        "configuration": "CubeSat",
        "type": ["Earth observation"],
        "customer_name": "GeoOptics",
        "manufacturer": "Tyvak Nano-Satellite Systems",
        "mass_kg": 10,
        "orbit": "LEO"
      },
      {
        "norad_id": null,
        "name": "NABEO",
        "nationality": "Germany",
        "configuration": "CubeSat",
        "type": ["Technology", "Deployable ADEO-nano drag sail"],
        "customer_name": "HPS GmbH",
        "manufacturer": "HPS GmbH",
        "mass_kg": 1.3,
        "orbit": "LEO"
      },
      {
        "norad_id": null,
        "name": "Lemur-2 Zupanski",
        "nationality": "United States",
        "configuration": "CubeSat",
        "type": ["Earth observation", "Traffic monitoring"],
        "customer_name": "Spire Global",
        "manufacturer": "Spire Global",
        "mass_kg": 4,
        "orbit": "LEO"
      },
      {
        "norad_id": null,
        "name": "Lemur-2 Chanusiak",
        "nationality": "United States",
        "configuration": "CubeSat",
        "type": ["Earth observation", "Traffic monitoring"],
        "customer_name": "Spire Global",
        "manufacturer": "Spire Global",
        "mass_kg": 4,
        "orbit": "LEO"
      },
      {
        "norad_id": null,
        "name": "Proxima 1",
        "nationality": "United States",
        "configuration": "CubeSat",
        "type": ["Communication", "IoT"],
        "customer_name": "Fleet Space Technologies",
        "manufacturer": "Pumpkin Space Systems",
        "mass_kg": null,
        "orbit": "LEO"
      },
      {
        "norad_id": null,
        "name": "Proxima 2",
        "nationality": "United States",
        "configuration": "CubeSat",
        "type": ["Communication", "IoT"],
        "customer_name": "Fleet Space Technologies",
        "manufacturer": "Pumpkin Space Systems",
        "mass_kg": null,
        "orbit": "LEO"
      }
    ]
  },
  "telemetry": null,
  "launch_site": {
    "name": "Mahia LC-1",
    "name_long": "Rocket Lab Launch Complex 1"
  },
  "launch_success": true,
  "links": {
    "articles": [
      "https://www.rocketlabusa.com/news/updates/its-business-time-at-rocket-lab/",
      "https://www.rocketlabusa.com/news/updates/rocket-lab-moves-its-business-time-launch-window/",
      "https://www.rocketlabusa.com/news/updates/rocket-lab-confirms-new-its-business-time-launch-window-and-bolsters-manifest/",
      "https://www.rocketlabusa.com/news/updates/rocket-lab-to-launch-its-business-time-and-elana-xix-missions-weeks-apart/",
      "https://www.rocketlabusa.com/news/updates/fleet-space-technologies-joins-rocket-lab-manifest-for-its-business-time-mission/",
      "https://www.rocketlabusa.com/news/updates/rocket-lab-reaches-orbit-again-deploys-more-satellites/"
    ],
    "videos": [
      "https://www.youtube.com/watch?v=sPwMuUxSrcA",
      "https://www.youtube.com/watch?v=MUyJQiWzefQ"
    ],
    "mission_patch": {
      "original": "https://images2.imgbox.com/b8/cd/Q0pMwUBz_o.png",
      "small": "https://images2.imgbox.com/54/d4/STMRNThy_o.png"
    }
  },
  "details": null
}
```

## Contributions
See the [contribution](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/CONTRIBUTING.md) guide for detailed steps

## Documentation
See the `v1 documentation` [here](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/v1)

## Local Development
Follow the quick guide [here](https://github.com/barrosfilipe/Rocket-Lab-API/blob/master/docs/development.md)

## Technical Details
* Deployed on [▲ZEIT](https://zeit.co/)
* Using [Node.js](https://nodejs.org/en/) with the [Express](https://expressjs.com/) framework
* Using [Jest](https://facebook.github.io/jest/) and [Supertest](https://github.com/visionmedia/supertest) for tests
* All data stored in a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 3 node replica set cluster
* Latest database with MongoDB collections in JSON files available [here](https://drive.google.com/file/d/1Cpn0DpeKrPz-wyjKqkVL82qBb1zj9BYK/view)

## FAQ's
* If you have any questions or corrections, please open an issue and we'll get it merged ASAP
* All data and photos are property of [ROCKET LAB USA](https://www.rocketlabusa.com/)
* I am not affiliated with Rocket Lab in any way, shape, form, or fashion. Just a fun side project for me
* For any other questions or concerns, just shoot me an email
* Yes, this project is inspired by [SpaceX-API](https://github.com/r-spacex/SpaceX-API/)

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbarrosfilipe%2FRocket-Lab-API.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbarrosfilipe%2FRocket-Lab-API?ref=badge_large)

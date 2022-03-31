# 🕹 ITU LAN Services
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)

> ITU LAN is a student driven organization at the [IT University of Copenhagen](https://en.itu.dk/). ITU LAN is responsible for organizing and hosting the biannual LAN event at the IT University.

This repository contains the source code for ITU LAN's different web services. The current services include:

- The website: [itulan.dk](https://itulan.dk)
- Mail forwarding service for applications - [source](https://github.com/itulan/itulan.dk/tree/master/functions)

## ▶️ Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### 🧰 Prerequisites

The user should have installed the following:

- [Node.js](https://nodejs.org/en/)
- [Vue CLI](https://cli.vuejs.org/)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Setup

The following commands will get you up and running:

### Install

```bash
$ npm install
```

### Run

```bash
$ npm run serve
```

### Build

Build files will be placed in `./dist`.

```bash
$ npm run build
```

To check that everything is ok, serve static build files using [serve](https://github.com/vercel/serve#readme) is recommended.

```bash
$ serve dist
```

## 🔥 Deployment

Deployment can be done in two different ways.

1. Push code to master and GitHub Actions will build and deploy the code to Google Firebase.
2. Deploy to Google Firebase by running the following command:

```bash
$ npm run deploy
```

## 🛠 Built With

- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework

## 🖋 Authors

- **Kasper Olsen** - _Initial work_ - [GitHub](https://github.com/svopper) | [LinkedIn](https://www.linkedin.com/in/olsenkasper/)

See also the list of [contributors](https://github.com/itulan/itulan.dk/graphs/contributors) who participated in this project.

## 📝 License

MIT License

## 🤝 Contributing

Pull requests are welcome, but feel free to contact me on _kasper@itulan.dk_, if you want to be a collaborator.

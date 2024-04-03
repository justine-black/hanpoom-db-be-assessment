<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Hanpoom DB & BE Exam

Hello, World! This is my take on an assessment given by Hanpoom as part of my application to their open BE / DB Developer role.

I believe I overdid myself as I took a different approach on this exam because although I could have just used frameworks that I'm already familiar with, I implemented it using 100% of the company's tech stack as mentioned in their job ad. I believe I also went beyond what was asked. Let's begin!

### Exam Questions

https://docs.google.com/document/d/1AzSC_j2DdER6zlHCfFLDom6nCaggd15uv7vEaZHkSKw/edit

### My Answer Sheet

## Installation

Prerequisites:

- Node.js (version >= 16)
- Docker

```bash
$ npm install
```

## Running the app

```bash
# Creating the database (docker-compose)
$ npm run create:db

# running the app in watch mode
$ npm run start:dev
```

### Seeding data

To seed the data for the database tables, I created a graphql endpoint that runs the seeding

Create and run the followin GQL mutation.
It is important to run these in order to avoid issues with table relations and foreign key constraints

```bash
API URL = localhost:3000/graphql
```

GraphQL Bodies

```bash
# Seeding picking_slips data
mutation {
    seedPickingSlips
}

# Seeding picking_slip_dates data
mutation {
    seedPickingSlipDates
}

# Seeding picking_slip_items data
mutation {
    seedPickingSlipItems
}
```

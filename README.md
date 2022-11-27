# Stone FrontEnd - Challenge

Hi, this is a project for a challeng focused on the Frontend stack

## How to start

You will need to create an .env file based on the .env.example in the repository with your own GOOGLE_MAPS_GEOCODING_PROVIDER_KEY

And you need to have Docker up and running (if you are using linux the deploy file will install docker, if you do not have it installed)

[Docker site](https://www.docker.com/)

## Deploying - (Linux based OS)

First you need to clone this github repo using:

ps: ("--config core.autocrlf=input") this config is to not have conflicts with filesystems neither from Windows nor Linux

```bash
  git clone git@github.com:gabrielpires01/Delivery-App-Stone.git --config core.autocrlf=input
```

Move to project file

```bash
  cd stone-front
```

Now just deploy with:

```bash
  sh ./deploy.sh
```

## Deploying - Windows(PowerShell)

First you need to clone this github repo using:

ps: ("--config core.autocrlf=input") this config is to not have conflicts with filesystems neither from Windows nor Linux

```bash
  git clone git@github.com:gabrielpires01/Delivery-App-Stone.git --config core.autocrlf=input
```

Move to project file

```bash
  cd stone-front
```

Now just deploy with:

```bash
  docker-compose up --build
```

## Accessing

Your application should be running on localhost now:

http://localhost

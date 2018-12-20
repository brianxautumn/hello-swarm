# hello-swarm
Create a swarm of hello worlds

## Building the base image
First build the image to create the swarm. Check out https://github.com/brianxautumn/hello-docker if you missed creating a basic image.
For this first part, we will assume there is just one machine, and you have built this image locally. If you want more workers, then the image should be pushed to a registry like dockerhub or somewhere they can all reach.

```
$ docker build -t hello-swarm .
```
Then check to make sure it built correctly.
```
$ docker image ls
```
If so, run it with docker 

```
$ docker run -d -p 3000:3000 hello-swarm
```
If working correctly at port 3000, stop it with
```
$ docker container stop <container id>
```

## Creating a stack
First enter swarm mode.
```
$ docker swarm init
```
Then deploy the stack with a name.
```
$ docker stack deploy -c docker-compose.yml swarm-of-hellos
```
save the output so that more machines can join later
> docker swarm join --token xxx

To take down the stack
```
$ docker stack remove swarm-of-hellos
```

Then leave the swarm
```
docker swarm leave --force
```
# Portfolio

Build Container
```
docker run -it \
  -p 4321:4321 \
  --memory=3g \
  --cpus=2 \
  --name portfolio \
  -v /home/raul/Documents/proyectos/personales/portfolio:/app \
  portfolio:node-20
```

npm init
npm i express axios nodemon

docker build -t uvinitharindi/commits-service:latest .
docker container -d -p 3000:3000 uvinitharindi/commits-service:latest

docker build -t uvinitharindi/issues-servic:latest .
docker container -d -p 3001:3001 uvinitharindi/issues-servic:latest

docker build -t uvinitharindi/pulls-servic:latest .
docker container -d -p 3002:3002 uvinitharindi/pulls-servic:latest

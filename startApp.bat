SETLOCAL ENABLEEXTENSIONS
SET CURDIR=%~dp0

start "%CURDIR%\software\mongodb\bin\mongod.exe --dbpath %CURDIR%\data"

SET NODE_ENV=dev

%CURDIR%\software\nodejs\App\NodeJS\node.exe %CURDIR%\src\server\server.js 


PAUSE
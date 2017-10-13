echo "Starting the MongoDB Server"
_cwd="$PWD"

_mydir="$(pwd)"
echo "My working dir: $_mydir/database/dbData"

# Start the MongoDB server
mongod --dbpath database/dbData --fork --logpath database/dbLogs/mongodb.log
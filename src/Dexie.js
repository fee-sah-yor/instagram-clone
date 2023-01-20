import Dexie from 'dexie';

export const db = new Dexie('myinsta') 
db.version(1).stores({
    bio:'name,about',
    gallery:'++id,url'
})

  // to change version number of database it has to be in whole numbers
    // and can only go higher and not lower
    // in dexie js the first value will be its primary key
    // and can be changed when making changes to the structure of the database
    //eg; adding favourites to the bio object.
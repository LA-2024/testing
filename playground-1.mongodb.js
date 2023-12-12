/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');
//1
/* 
client=MongoClient() 
db = client['TestPython']
print(db) */
//2

//3
/* db.publication.insertOne({
    "type": "livre",
    "titre": "Voyage autour du monde",
     "annee": 1995, 
    "realisateur": ["Louis-Antoine "],
     "source": " Bablio "
   }
   ) */
//4
/* db.publication.insertMany([
    {
        "type": "article ",
        "titre": "le monde",
         "annee": 2000, 
        "realisateur": ["Louis-Antoine "],
         "source": " Bablio "
       },
       {
        "type": "article ",
        "titre": "DD",
         "annee": 2020, 
        "realisateur": ["Louis-Antoine "],
         "source": " Bablio "
       }
       
]) */
//5
/* db.publication.insertMany([
    {
        "type": "audiovisuel",
        "titre": "Voyage à USA ",
         "annee": 2000, 
        "realisateur": ["Louis-Antoine "],
         "source": " Bablio "
       },
       {
        "type": "audiovisuel",
        "titre": "le monde des animaux ",
         "annee": 2020, 
        "realisateur": ["Louis-Antoine "],
         "source": " Bablio "
       }
       
]) */
//6?
//7
/* 
selection={}
resultat=db.publication.find(selection) */
//8
/* 
selection={}
resultat=db.publication.findOne(selection) */
//9
/* def AffichResultat(t=''){
    selection={}
    selection[titre]=t
    resultat= db.publication.find(selection)
    for i in resultat[:]:
        print(i)
} */
//10
/* AffichResultat('article') */
//11
/* 
resultat=db.publication.findOne({annee:{$gt:1990}})
for i in resultat[:]:
  print(i)
 */
//12
/* db.publication.find({titre:/Voyage.+/}) */
//13
b.publication.aggregate([
    {$group: {_id: "$type", total : {$sum:"$annee"}}}
])












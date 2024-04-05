const jsf = require("json-schema-faker");
const fs = require("fs");

// Load your JSON schema
const schema = require("./superviseur.json");

// Generate 100 objects
const numObjects = 100;
const fakeData = Array.from({ length: numObjects }, () => jsf.generate(schema));

// Write generated data to a JSON file
fs.writeFileSync("superviseur-data.json", JSON.stringify(fakeData, null, 2));

console.log("Fake data generated and saved to generated-data.json");

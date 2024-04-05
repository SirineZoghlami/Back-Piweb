const jsf = require("json-schema-faker");
const fs = require("fs");

// Define your JSON schema
const schema = {
    type: "object",
    properties: {
        equipementair: { type: "string" },
        superviseur: { type: "string" },
        date_entretien: { type: "string", format: "date" },
        dateperiodesecheur: { type: "string", format: "date" },
        nbrhprochain: { type: "integer", minimum: 0 },
        hfonctionnement: { type: "integer", minimum: 0 },
        remarque: { type: "string" },
        niveauprobleme: { type: "string" },
        dateajout: { type: "string", format: "date-time" },
        datemodif: { type: "string", format: "date-time" },
        datesuppression: { type: "string", format: "date-time" },
        suppression: { type: "boolean" },
    },
    required: [
        "equipementair",
        "superviseur",
        "date_entretien",
        "dateperiodesecheur",
        "nbrhprochain",
        "hfonctionnement",
        "remarque",
        "niveauprobleme",
        "dateajout",
        "datemodif",
        "datesuppression",
        "suppression",
    ],
};

const numObjects = 100;
const fakeData = Array.from({ length: numObjects }, () => jsf.generate(schema));

// Write generated data to a JSON file
fs.writeFileSync("generated-data-2.json", JSON.stringify(fakeData, null, 2));

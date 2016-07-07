let Schemas = {};

Schemas.MenuItems = new SimpleSchema({
    Category: {
        type: String,
        label: "Category:",
        max: 200
    },
    Name: {
        type: String,
        label: "Name:",
        optional: false,
        max: 2000
    },
    Description: {
        type: String,
        optional: false,
        label: "Description:"
    },
    Price: {
        type: Number,
        optional: false,
         label: "Price:"
    },
    Vegetarian: {
        type: Number,
        label: 'Vegetarian?'
    },
    "Undercooked Warning": {
        type: Number,
        label: 'Undercooked Warning?',
    }
});


MenuItems = new Mongo.Collection("MenuItems");

MenuItems.attachSchema(Schemas.MenuItems);


MenuItems.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});
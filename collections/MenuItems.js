let Schemas = {};

/*Meyhane Snacks
Meze
Vegetables
Shish
Sarma
Dessert
Pancakes, Pie & Pide*/

Schemas.MenuItems = new SimpleSchema({
    Category: {
        type: String,
        label: "Category:",
        max: 50,
        autoform: {
            type: "select",
            options: function () {
            return [
                {label: "Meyhane Snacks", value: "Meyhane Snacks"},
                {label: "Meze", value: "Meze"},
                {label: "Vegetables", value: "Vegetables"},
                {label: "Shish", value: "Shish"},
                {label: "Sarma", value: "Sarma"},
                {label: "Dessert", value: "Dessert"},
                {label: "Pancakes, Pie & Pide", value: "Pancakes, Pie & Pide"}
            ];
            }
        }
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
        label: "Price:",
        min: 0,
        max: 100
    },
    Vegetarian: {
        type: Number,
        label: 'Vegetarian?',
        autoform: {
            type: "select",
            options: function () {
            return [
                {label: "yes", value: 1},
                {label: "no", value: 0},
            ];
            }
        }
    },
    "Undercooked Warning": {
        type: Number,
        label: 'Undercooked Warning?',
        autoform: {
            type: "select",
            options: function () {
            return [
                {label: "yes", value: 1},
                {label: "no", value: 0},
            ];
            }
        }
    }
});


MenuItems = new Mongo.Collection("MenuItems");

MenuItems.attachSchema(Schemas.MenuItems);


MenuItems.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});
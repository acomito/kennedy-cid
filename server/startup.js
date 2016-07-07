    // import data only when Products collection is empty

    if (MenuItems.find().count() === 0) {
        console.log("Importing private/products.json to db")

        var data = JSON.parse(Assets.getText("menu_items.json"));

        data.forEach(function (item, index, array) {
            MenuItems.insert(item);
        })
    }
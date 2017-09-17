browser.contextMenus.create({
    id: "unique-selector-grabber",
    title: "Grab Unique Selector",
    contexts: ["page", "image"],
});


browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "unique-selector-grabber") {
        console.log(info);
        console.log(tab);
    }
});
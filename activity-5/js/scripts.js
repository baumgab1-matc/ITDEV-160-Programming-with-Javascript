(function() {

var data = [
    {
        rank: 1,
        name: 'Settings Sync',
        description: "The Settings Sync extension, previously known as Visual Studio Code Settings Sync, synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines. I think this is probably one of the most important and useful extensions that ensures no matter what computer you're on, you can have all the tooling you're used to.",
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/visual-studio-code-extensions-settings-sync.jpg?v=1593002110',
        author: 'Shan Khan',
        command: 'ext install Shan.code-settings-sync',
        downloads: 2765985,
        stars: 683,
        price: 0.00,
        selector: 'p1',
        link: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync'
    },
    {
        rank: 2,
        name: 'Path Intellisense',
        description: 'Visual Studio Code plugin that autocompletes filenames.',
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/visual-studio-code-extensions-path-intellisense.gif?v=1593002562',
        author: 'Christian Kohler',
        command: 'ext install christian-kohler.path-intellisense',
        downloads: 5526390,
        stars: 94,
        price: 0.00,
        selector: 'p2',
        link: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense'
    }
];

function Package(data) {
    this.rank = data.rank;
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.author = data.author;
    this.command = data.command;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector; 
    this.link = data.link;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    }

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    }
}


var getTodaysDate = function () {
    return new Date().toDateString();
}

var getEl = function (id) {
    return document.getElementById(id);
}


var writePackageInfo = function(package) {

    //get references
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        imageEl = getEl(selector + '-image'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');
        buttonEl = getEl(selector + '-button');

    //use references to write data to DOM elements
    nameEl.textContent = package.rank + ". " + package.name;
    descEl.textContent = package.description;
    imageEl.src = package.image;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
    buttonEl.textContent = package.name;
    buttonEl.href = package.link;
}

//add todays date
dateElement = getEl('date');
dateElement.textContent = getTodaysDate();

//write package data
for (var i = 0; i < data.length; i++) {
    var package = new Package(data[i]);
    writePackageInfo(package);
}


}());
function displayProperties() {

    var properties = [];
    for (var prop in window) {
        properties.push(prop);
    }

    properties.sort();

    console.log(properties.join('\n'));

}

displayProperties();
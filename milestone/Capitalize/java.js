function capitalizeFirstLetter(name) {
    // Check if the first letter is lowercase
    let modifiedName = (name.charAt(0) === name.charAt(0).toLowerCase()) 
        ? name.charAt(0).toUpperCase() + name.slice(1) 
        : name;

    return modifiedName;
}


var supply = [];

function addItem(name, num) {
    var itemExists = false;

    for(var i = 0; i < supply.length; i++) {
        if(supply[i].itemName === name) {
            itemExists = true;
            break;
        }
    }

    if(itemExists) {
        alert("Error: That item already exists in the inventory!");
    } else {
        supply.push({itemName: name, noOfItem: num});
        populateDropdownItem();
        toggleForms('break');
        displayItems();
    }
}


function addNoOfItem(name, num) {
    for(var i = 0; i <= (supply.length); i++) {
        if(supply[i]["itemName"] == name) {
            var finalStock = supply[i]["noOfItem"] + num;
            supply[i] = {itemName: name, noOfItem: finalStock};
            break;
        }
    }
    populateDropdownItem();
    toggleForms('break');
    displayItems();
}

function subNoOfItem(name, num) {
    for(var i = 0; i <= (supply.length) ; i++) {
        if(supply[i]["itemName"] == name) {
            var currentStock = supply[i]["noOfItem"];
            if(num > currentStock) {
                alert("Error: Item supply cannot be negative!");
                break;
            } else {
                var finalStock = currentStock - num;
                supply[i] = {itemName: name, noOfItem: finalStock};
                populateDropdownItem();
                toggleForms('break');
                displayItems();
                break;
            }
        }
    }
}

function removeItem(name) {
    for(var i = 0; i <= (supply.length) ; i++) {
        if(supply[i]["itemName"] == name){
            if(confirm("Warning: Are you sure you want to delete the item '" + name + "'?")) {
                supply.splice(i, 1);
                populateDropdownItem();
                toggleForms('break');
                displayItems();
                break;
            } else {
                break;
            }
        }
    }
}

function displayItems() {
    var stonksTable = "<table>";
    stonksTable += "<thead><tr><th>ITEM</th><th>SUPPLY</th></tr></thead>";
    for(var i = 0; i < supply.length; i++) {
        stonksTable += "<tr><td>" + supply[i]["itemName"] + "</td><td>" + supply[i]["noOfItem"] + "</td></tr>";
    }
    stonksTable += "</table>";

    document.getElementById("stonksTable").innerHTML = stonksTable;
}

function populateDropdownItem() {
    var dropdowns = document.querySelectorAll('[id^="InameDropdown_"]');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.innerHTML = '';
        
        supply.forEach(function(item) {
            var option = document.createElement('option');
            option.textContent = item.itemName;
            option.value = item.itemName;
            dropdown.appendChild(option);
        });
    });
}

function toggleForms(displayCase) {
    if(displayCase == 1) {
        forms1.style.display = 'block';
        forms2.style.display = 'none';
        forms3.style.display = 'none';
        forms4.style.display = 'none';
        addItemBtn.style.display = 'none';
        addNoItemBtn.style.display = 'none';
        removeNoItemBtn.style.display = 'none';
        removeItemBtn.style.display = 'none';
        displayInventoryBtn.style.display = 'none';
    } else if(displayCase == 2) {
        forms1.style.display = 'none';
        forms2.style.display = 'block';
        forms3.style.display = 'none';
        forms4.style.display = 'none';
        addItemBtn.style.display = 'none';
        addNoItemBtn.style.display = 'none';
        removeNoItemBtn.style.display = 'none';
        removeItemBtn.style.display = 'none';
        displayInventoryBtn.style.display = 'none';
    } else if(displayCase == 3) {
        forms1.style.display = 'none';
        forms2.style.display = 'none';
        forms3.style.display = 'block';
        forms4.style.display = 'none';
        addItemBtn.style.display = 'none';
        addNoItemBtn.style.display = 'none';
        removeNoItemBtn.style.display = 'none';
        removeItemBtn.style.display = 'none';
        displayInventoryBtn.style.display = 'none';
    } else if(displayCase == 4) {
        forms1.style.display = 'none';
        forms2.style.display = 'none';
        forms3.style.display = 'none';
        forms4.style.display = 'block';
        addItemBtn.style.display = 'none';
        addNoItemBtn.style.display = 'none';
        removeNoItemBtn.style.display = 'none';
        removeItemBtn.style.display = 'none';
        displayInventoryBtn.style.display = 'none';
    } else {
        forms1.style.display = 'none';
        forms2.style.display = 'none';
        forms3.style.display = 'none';
        forms4.style.display = 'none';
        addItemBtn.style.display = 'inline';
        addNoItemBtn.style.display = 'inline';
        removeNoItemBtn.style.display = 'inline';
        removeItemBtn.style.display = 'inline';
        displayInventoryBtn.style.display = 'inline';
    }
}
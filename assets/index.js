const models = {
    A3: [
        {
            id: 1,
            name: 'A3 SE',
            engine: '35 TFSI',
            modification: '',
            price: 30500,
        },
        {
            id: 2,
            name: 'A3 SE',
            engine: '35 TFSI',
            modification: 'Advance',
            price: 32600,
        },
        {
            id: 3,
            name: 'A3 SE',
            engine: '35 TFSI',
            modification: 'S-line',
            price: 34500,
        },
        {
            id: 4,
            name: 'A3 SE',
            engine: '30 TDI',
            modification: '',
            price: 31500,
        },
        {
            id: 5,
            name: 'A3 SE',
            engine: '30 TDI',
            modification: 'Advance',
            price: 33600,
        },
    ],
    Q3: [
        {
            id: 6,
            name: 'Q3',
            engine: '35 TFSI',
            modification: '',
            price: 32500,
        },
        {
            id: 7,
            name: 'Q3',
            engine: '35 TFSI',
            modification: 'Advance',
            price: 35800,
        },
        {
            id: 8,
            name: 'Q3',
            engine: '35 TFSI',
            modification: 'S-line',
            price: 37000,
        },
        {
            id: 9,
            name: 'Q3',
            engine: '35 TDI',
            modification: '',
            price: 36500,
        },
        {
            id: 10,
            name: 'Q3',
            engine: '35 TDI',
            modification: 'Advance',
            price: 39800,
        },
        {
            id: 11,
            name: 'Q3',
            engine: '35 TDI',
            modification: 'S-line',
            price: 41000,
        },
        {
            id: 12,
            name: 'Q3',
            engine: '45 TFSIe',
            modification: '',
            price: 41500,
        },
        {
            id: 13,
            name: 'Q3',
            engine: '45 TFSIe',
            modification: 'S-line',
            price: 46800,
        },
    ],
};
const optionalEquipment = [
    {
        id: 1,
        name: 'S-line Interior',
        price: 1820,
        model: 'Q3',
    },
    {
        id: 2,
        name: 'Panoramic glass sunroof',
        price: 1550,
        model: 'Q3',
    },
    {
        id: 3,
        name: '3-zone climate control system',
        price: 350,
        model: 'Q3',
    },
    {
        id: 4,
        name: 'Auto-dimming interior rearview mirror',
        price: 350,
        model: 'Q3',
        availableForModifications: ['Advance', 'S-line'],
    },
    {
        id: 5,
        name: 'Black Appearance package Plus',
        price: 890,
        model: 'Q3',
        availableForModifications: ['Advance', 'S-line'],
    },
    {
        id: 6,
        name: 'Plus package',
        price: 3680,
        model: 'Q3',
        availableForModifications: [''],
    },
    {
        id: 7,
        name: 'Sports seats in front',
        price: 430,
        model: 'A3',
        availableForModifications: ['', 'Advance'],
    },
    {
        id: 8,
        name: 'Armrest in leatherette',
        price: 190,
        model: 'A3',
    },
    {
        id: 9,
        name: 'Ambient Lighting package',
        price: 200,
        model: 'A3',
        availableForModifications: [''],
    },
    {
        id: 10,
        name: 'Ambient Lighting package plus',
        price: 340,
        model: 'A3',
        availableForModifications: ['Advance'],
    },
    {
        id: 11,
        name: 'Ambient Lighting package plus',
        price: 140,
        model: 'A3',
        availableForModifications: ['S-line'],
    },
    {
        id: 12,
        name: 'Carbon roof spoiler',
        price: 1650,
        model: 'A3',
        availableForModifications: ['S-line'],
    },
    {
        id: 13,
        name: 'Solid Color',
        price: 0,
        model: 'A3',
        group: 'Color',
    },
    {
        id: 14,
        name: 'Metalic Paint',
        price: 850,
        model: 'A3',
        group: 'Color',
    },
    {
        id: 15,
        name: 'Solid Color',
        price: 0,
        model: 'Q3',
        group: 'Color',
    },
    {
        id: 16,
        name: 'Solid Color Pulse Orange',
        price: 440,
        model: 'Q3',
        group: 'Color',
    },
    {
        id: 17,
        name: 'Metalic Paint',
        price: 850,
        model: 'Q3',
        group: 'Color',
    },
];

let selectedModel;

function selectModel() {
    if (selectedModel) {
        let element = document.querySelector("select.modification");
        element.innerHTML = "";
        element.insertAdjacentHTML("afterbegin", "<option disabled selected>выберите двигатель</option>");
    }
    selectedModel = document.querySelector('input[name="model"]:checked').value;
    fillSelect()
}

function fillSelect() {
    const arr = models[selectedModel];
    for (let i = 0; i < arr.length; i++) {
        let data = `${arr[i].engine} ${arr[i].modification}`;
        let id = arr[i].id;
        addOption(data, id);
    }
}

function addOption(data, id) {
    let option = document.createElement("option");
    option.value = id;
    option.innerHTML = data;
    document.querySelector("select.modification").appendChild(option);
}

function showSum() {
    let sum = calcSum();
    document.querySelector("div.sum").innerHTML = "&#8364;" + sum;
}

function calcSum() {
    const baseModification = getSelectedModification();
    const sumOptionalEquipments = selectOptionalEquipment();
    return baseModification.price + sumOptionalEquipments;
}

function getSelectedModification() {
    const id = Number(document.querySelector("select.modification").value);
    let arr = models[selectedModel];
    return arr.find(function (e) {
        return id === e.id;
    });
}
function selectModification() {
    let elem = getSelectedModification();
    addOptionalEquipment(elem);
    return elem;
}

function addCheckboxes(id, name, price) {
    document.querySelector(".optionalEquipment_other").insertAdjacentHTML("beforeend", `<input type="checkbox" id="${id}" value="${price}"><label for="${id}">${name}</label><br>`);
}

function addRadio(id, name, group, price) {
    document.querySelector(".optionalEquipment_color").insertAdjacentHTML("beforeend", `<input type="radio" name="${group}" id="${id}" value="${price}"><label for="${id}">${name}</label><br>`);
}

function addOptionalEquipment() {
    let optionalEquipmentsFiltered = getOptionalEquipment();
    document.querySelector(".optionalEquipment").innerHTML = "";
    document.querySelector(".optionalEquipment").insertAdjacentHTML(
        "afterbegin",
        ` <fieldset class="optionalEquipment_color">
            <legend>выберите цвет:</legend>
        </fieldset>
        <fieldset class="optionalEquipment_other">
            <legend>и другие плюшки:</legend>
        </fieldset>`
    )
    for (let i = 0; i < optionalEquipmentsFiltered.length; i++) {
        let {id, name, group, price} = optionalEquipmentsFiltered[i];
        if (group === 'Color') {
            addRadio(id, name, group, price);
        } else {
            addCheckboxes(id, name, price);
        }
    }
}

function getOptionalEquipment() {
    return optionalEquipment.filter(filterOptEqui)
}

function filterOptEqui(elem) {
    const modification = getSelectedModification();
    if (elem.model !== selectedModel) {
        return false;
    } else {
        if (elem.availableForModifications === undefined) {
            return true;
        } else if (elem.availableForModifications.includes(modification.modification)) {
            return true;
        }
    }
}

function selectOptionalEquipment() {
    let priceColor = 0;
    let priceOptions = sumOptionals();
    if (document.querySelector('input[name="Color"]:checked')){
        priceColor += Number(document.querySelector('input[name="Color"]:checked').value);
    }
    return priceColor + priceOptions;
}

function sumOptionals() {
    let sum = 0;
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < checked.length; i++) {
        sum += Number(checked[i].value);
    }
    return sum;
}



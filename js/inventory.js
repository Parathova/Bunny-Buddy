var carrotNum;
var strawberryNum;
var lettuceNum;
var pizzaNum;
var tutuNum;
var sunhatNum;
var sunglassesNum;
var chainNum;
var coatNum;
var coinTotal = localStorage.getItem("coin-total");


function checkEnoughCoin() {
    if (Number(coinTotal) - 3 >= 0) {
        return true;
    }
    return false;
}


/* for the carrot */
function carrotMinus() {

    var element = document.getElementById("carrot-value");

    carrotNum = element.innerHTML;

    --carrotNum;
    if (carrotNum >= 0) {
        document.getElementById("carrot-value").innerHTML = carrotNum;
        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        carrotNum++;
    }

}

function carrotPlus() {
    var element = document.getElementById("carrot-value");
    carrotNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++carrotNum;
        console.log(carrotNum);
        document.getElementById("carrot-value").innerHTML = carrotNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the strawberry */
function strawberryMinus() {
    var element = document.getElementById("strawberry-value");
    strawberryNum = element.innerHTML;
    --strawberryNum;
    if (strawberryNum >= 0) {
        console.log(strawberryNum);
        document.getElementById("strawberry-value").innerHTML = strawberryNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        strawberryNum++;
    }
}

function strawberryPlus() {
    var element = document.getElementById("strawberry-value");
    strawberryNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++strawberryNum;
        console.log(strawberryNum);
        document.getElementById("strawberry-value").innerHTML = strawberryNum;
        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the lettuce */
function lettuceMinus() {
    var element = document.getElementById("lettuce-value");
    lettuceNum = element.innerHTML;
    --lettuceNum;
    if (lettuceNum >= 0) {
        console.log(lettuceNum);
        document.getElementById("lettuce-value").innerHTML = lettuceNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        lettuceNum++;
    }
}

function lettucePlus() {
    var element = document.getElementById("lettuce-value");
    lettuceNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++lettuceNum;
        console.log(lettuceNum);
        document.getElementById("lettuce-value").innerHTML = lettuceNum;
        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the pizza */
function pizzaMinus() {
    var element = document.getElementById("pizza-value");
    pizzaNum = element.innerHTML;
    --pizzaNum;
    if (pizzaNum >= 0) {
        console.log(pizzaNum);
        document.getElementById("pizza-value").innerHTML = pizzaNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        pizzaNum++;
    }
}

function pizzaPlus() {
    var element = document.getElementById("pizza-value");
    pizzaNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++pizzaNum;
        console.log(pizzaNum);
        document.getElementById("pizza-value").innerHTML = pizzaNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the sunhat */
function sunhatMinus() {
    var element = document.getElementById("sunhat-value");
    sunhatNum = element.innerHTML;
    --sunhatNum;
    if (sunhatNum >= 0) {
        console.log(sunhatNum);
        document.getElementById("sunhat-value").innerHTML = sunhatNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        sunhatNum++;
    }
}

function sunhatPlus() {
    var element = document.getElementById("sunhat-value");
    sunhatNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++sunhatNum;
        console.log(sunhatNum);
        document.getElementById("sunhat-value").innerHTML = sunhatNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the tutu */
function tutuMinus() {
    var element = document.getElementById("tutu-value");
    tutuNum = element.innerHTML;
    --tutuNum;
    if (tutuNum >= 0) {
        console.log(tutuNum);
        document.getElementById("tutu-value").innerHTML = tutuNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        tutuNum++;
    }
}

function tutuPlus() {
    var element = document.getElementById("tutu-value");
    tutuNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++tutuNum;
        console.log(tutuNum);
        document.getElementById("tutu-value").innerHTML = tutuNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the sunglasses */
function sunglassesMinus() {
    var element = document.getElementById("sunglasses-value");
    sunglassesNum = element.innerHTML;
    --sunglassesNum;
    if (sunglassesNum >= 0) {
        console.log(sunglassesNum);
        document.getElementById("sunglasses-value").innerHTML = sunglassesNum;
        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        sunglassesNum++;
    }

}

function sunglassesPlus() {
    var element = document.getElementById("sunglasses-value");
    sunglassesNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++sunglassesNum;
        console.log(sunglassesNum);
        document.getElementById("sunglasses-value").innerHTML = sunglassesNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the chain */
function chainMinus() {
    var element = document.getElementById("chain-value");
    chainNum = element.innerHTML;
    --chainNum;
    if (chainNum >= 0) {
        console.log(chainNum);
        document.getElementById("chain-value").innerHTML = chainNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        chainNum++;
    }

}

function chainPlus() {
    var element = document.getElementById("chain-value");
    chainNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++chainNum;
        console.log(chainNum);
        document.getElementById("chain-value").innerHTML = chainNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }
}

/* for the crown */
function crownMinus() {
    var element = document.getElementById("crown-value");
    crownNum = element.innerHTML;
    --crownNum;
    if (crownNum >= 0) {
        console.log(crownNum);
        document.getElementById("crown-value").innerHTML = crownNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) + 3;
        coinTotal = Number(coinTotal) + 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    } else {
        crownNum++;
    }

}

function crownPlus() {
    var element = document.getElementById("crown-value");
    crownNum = element.innerHTML;
    if (checkEnoughCoin()) {
        ++crownNum;
        console.log(crownNum);
        document.getElementById("crown-value").innerHTML = crownNum;

        document.getElementById("coin-total").innerHTML = Number(coinTotal) - 3;
        coinTotal = Number(coinTotal) - 3;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
    }

}

//**********************************START OF JS FOR TO DO LIST **************************/

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".add-bttn");
const deleteButton = document.getElementById("delete-button");

document.addEventListener("DOMContentLoaded", function () {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteTasks);
    displayTasks();
});

function addTask() {
    const newTask = todoInput.value.trim();
    if (newTask !== "") {
        todo.push({
            text: newTask,
            disabled: false,
        });
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
    }
}

function deleteTasks() {
    todo = [];
    saveToLocalStorage();
    displayTasks();
}

function displayTasks() {
    todoList.innerHTML = "";
    todo.forEach((item, index) => {
        const e = document.createElement("e");
        e.innerHTML = `
            <div class = "todo-container">
                <input type="checkbox" class = "todo-checkbox" id = "input-${index}" ${item.disabled ? "checked" : ""}>
            <p id = "todo-${index}" class = "${item.disabled ? "disabled" : ""}">
            ${item.text}
            </p> 
            </div>
        `;
        e.querySelector(".todo-checkbox").addEventListener("change", () => {
            toggleTask(index);
        });
        todoList.appendChild(e);
    });
    todoCount.textContent = todo.length;
    document.getElementById("coin-total").innerHTML = Number(coinTotal);
}

function toggleTask(index) {
    if (!todo[index].disabled) {
        todo[index].disabled = !todo[index].disabled;

        coinTotal = parseInt(coinTotal) + 10;
        localStorage.setItem("coin-total", JSON.stringify(coinTotal));//change
        document.getElementById("coin-total").innerHTML = coinTotal;
    }
    saveToLocalStorage();
    displayTasks();
}

function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo));
}

/*
let boolean = [];

for (let i = 0; i < 12; i++) {
    boolean.push(i);
}
    */

var det = -1;

function dressCrown() {
    det = 1;
    console.log(det);


}
/*
function costumeCrown() {
    console.log(det);
    document.getElementById("bun").src = "./img/add.png";

}
    */
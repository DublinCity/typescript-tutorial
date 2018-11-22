"use strict";
const getCells = cells => {
    const ulTag = document.getElementById("ulTag");
    cells.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element.title;
        ulTag.append(li);
    });
};
const postCells = (index, title, parentId, childrenId) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log("fetch");
            const cells = JSON.parse(xhr.responseText);
            getCells(cells);
        }
        else {
            console.error("no response");
        }
    };
    xhr.open("post", "/mandalart");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({ index, title, parentId, childrenId }));
};
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    if (xhr.status === 200) {
        console.log("fetch");
        const cells = JSON.parse(xhr.responseText);
        getCells(cells);
    }
    else {
        console.error("no response");
    }
};
xhr.open("get", "/mandalart");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();
const registerBtn = document.querySelector('input[name="register"]');
registerBtn.addEventListener('click', e => {
    const index = document.getElementById('index');
    const title = document.getElementById('title');
    const parentId = document.getElementById('parentId');
    const childrenId = document.getElementById('childrenId');
    console.log(index.value, title.value, parentId.value, childrenId.value);
    postCells(index.value, title.value, parentId.value, childrenId.value);
});
//# sourceMappingURL=index.js.map
function updatelocal() {
    let title = document.getElementById('Title').value;
    let desc = document.getElementById('Description').value;
    let arr = [];
    if (localStorage.getItem('jso') != null) {
        arr = JSON.parse(localStorage.getItem('jso'));
    }
    localStorage.removeItem('jso');
    arr.push([title, desc]);
    localStorage.setItem('jso', JSON.stringify(arr));
    update();
}
function update() {
    if (localStorage.getItem('jso') != null) {
        let arr = JSON.parse(localStorage.getItem('jso'));
        //updating table
        let str = "";
        arr.forEach((el, index) => {
            str += `
           <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${el[0]}</td>
                    <td>${el[1]}</td>
                    <td><button class="btn btn-danger" onclick = "clearitem(${index})">Delete</button></td>
         </tr>
           `;
        });
        document.getElementById("table").innerHTML = str;
    }
    else {
        document.getElementById("table").innerHTML = `
        <tr>
                                <th scope="row">0</th>
                                <td>none</td>
                                <td>none</td>
                                <td><button class="btn btn-danger" disabled">Delete</button></td>
                     </tr>`
    }
}
function clearitem(index) {
    let arr = JSON.parse(localStorage.getItem('jso'));
    localStorage.removeItem('jso');
    arr.splice(index, 1);
    if (arr.length != 0) localStorage.setItem('jso', JSON.stringify(arr));
    update();
}
function clearTable() {
    if (confirm("Do you Want To clear Table??") == 1) {
        localStorage.removeItem('jso');
        update();
    }
}
add = document.getElementById('add');
add.addEventListener("click", updatelocal);
update();
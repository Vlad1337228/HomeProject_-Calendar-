const arr = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

window.onload = createCalendar(document.getElementById('calendar'), 2022, 1);
window.onload = createBigCalendar(document.getElementById('bigCalendar'), 2022, 1);
window.onload = createSelectorDate(document.getElementById('select-date'));

function createCalendar(elem, year, month) {

    let table = document.getElementsByClassName('calendar-table')[0];
    if (!table) {
        table = document.createElement('table');
        table.setAttribute('class', 'calendar-table');
        
    }

    let cur_date = new Date(year, month - 1, 1);
    let fin_date = new Date(year, month, 0);

    while (cur_date.getDate() != 1) {
        cur_date.setDate(cur_date.getDate() - 1);

    }

    table.innerHTML = "";
    table.innerHTML = "<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th>";

    let numbDayWeek = cur_date.getDay();
    if (numbDayWeek == 0)
        numbDayWeek += 7;

    if (cur_date <= fin_date) {
        let tr = document.createElement('tr');
        for (var i = 1; i < 8; i++) {
            if (i >= numbDayWeek) {
                let td = document.createElement('td');
                td.setAttribute('class', 'calendar-item');

                if (cur_date.getMonth() == month - 1) {
                    td.textContent = cur_date.getDate();
                }
                tr.append(td);
                cur_date.setDate(cur_date.getDate() + 1);
            }
            else {
                let td = document.createElement('td');
                td.setAttribute('class', 'calendar-item');
                if (cur_date.getMonth() == month - 1) {
                    td.textContent = '';
                }
                tr.append(td);
            }
        }
        table.append(tr);
    }

    while (cur_date <= fin_date) {
        let tr = document.createElement('tr');
        for (var i = 1; i < 8; i++) {
            let td = document.createElement('td');
            td.setAttribute('class', 'calendar-item');

            if (cur_date.getMonth() == month - 1) {
                td.textContent = cur_date.getDate();
            }
            tr.append(td);
            cur_date.setDate(cur_date.getDate() + 1);
        }
        table.append(tr);
    }
    elem.append(table);
}


function createSelectorDate(elem) {
    let selecter = document.createElement('select');
    selecter.setAttribute('id', 'month');
    selecter.setAttribute('onchange', 'setNewDate()');

    for (var i = 0; i < 12; i++) {
        let month = document.createElement('option');
        let nameMonth = arr[i];

        month.text = nameMonth;
        month.setAttribute('class', 'optStyle');
        selecter.append(month);
    }

    elem.append(selecter);


    let selecter1 = document.createElement('select');
    selecter1.setAttribute('id', 'year');
    selecter1.setAttribute('onchange', 'setNewDate()');

    for (var i = 2000; i < 2030; i++) {
        let year = document.createElement('option');
        year.text = i;
        year.setAttribute('class', 'optStyle');
        selecter1.append(year);
    }
    selecter1.value = 2022;
    elem.append(selecter1);
}

function setNewDate() {
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    let yearText = 2000;
    let monthText = 1;

    yearText = year.value;
    monthText = month.value;

    let numbMonth = 1;
    for (var i = 0; i < arr.length; i++) {
        if (monthText == arr[i])
            numbMonth = i + 1;
    }

    createCalendar(document.getElementById('calendar'), yearText, numbMonth);
    createBigCalendar(document.getElementById('bigCalendar'), yearText, numbMonth);
}

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

function createBigCalendar(elem, year, month) {
    let table = document.getElementsByClassName('bigCalendar-table')[0];
    if (!table) {
        table = document.createElement('table');
        table.setAttribute('class', 'bigCalendar-table');

    }

    let cur_date = new Date(year, month - 1, 1);
    let fin_date = new Date(year, month, 0);

    while (cur_date.getDate() != 1) {
        cur_date.setDate(cur_date.getDate() - 1);

    }

    table.innerHTML = "";
    table.innerHTML = "<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th>";

    let numbDayWeek = cur_date.getDay();
    if (numbDayWeek == 0)
        numbDayWeek += 7;

    if (cur_date <= fin_date) {
        let tr = document.createElement('tr');
        for (var i = 1; i < 8; i++) {
            if (i >= numbDayWeek) {
                let td = document.createElement('td');
                td.setAttribute('class', 'bigCalendar-item');

                if (cur_date.getMonth() == month - 1) {
                    td.textContent = cur_date.getDate();
                }
                tr.append(td);
                cur_date.setDate(cur_date.getDate() + 1);
            }
            else {
                let td = document.createElement('td');
                td.setAttribute('class', 'bigCalendar-item');
                if (cur_date.getMonth() == month - 1) {
                    td.textContent = '';
                }
                tr.append(td);
            }
        }
        table.append(tr);
    }

    while (cur_date <= fin_date) {
        let tr = document.createElement('tr');
        for (var i = 1; i < 8; i++) {
            let td = document.createElement('td');
            td.setAttribute('class', 'bigCalendar-item');

            if (cur_date.getMonth() == month - 1) {
                td.textContent = cur_date.getDate();
            }
            tr.append(td);
            cur_date.setDate(cur_date.getDate() + 1);
        }
        table.append(tr);
    }
    elem.append(table);
}


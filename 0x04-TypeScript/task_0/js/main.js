var student1 = {
    firstName: 'Karabo',
    lastName: 'Makganyoga',
    age: 22,
    location: 'Gauteng',
};
var student2 = {
    firstName: 'Koketso',
    lastName: 'Makganyoga',
    age: 22,
    location: 'Gauteng',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);

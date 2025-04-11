const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

let students = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const place = document.getElementById("place").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name && place && phone) {
    students.push({ name, place, phone });
    renderTable();
    form.reset();
  }
});

function renderTable() {
  tableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.place}</td>
      <td>${student.phone}</td>
      <td>
        <button class="action-btn view-btn" onclick="viewStudent(${index})">View</button>
        <button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function deleteStudent(index) {
  if ('confirm'("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    renderTable();
  }
}

function editStudent(index) {
  const student = students[index];
  const newName = prompt("Edit Name:", student.name);
  const newPlace = prompt("Edit Place:", student.place);
  const newPhone = prompt("Edit Phone:", student.phone);

  if (newName && newPlace && newPhone) {
    students[index] = {
      name: newName.trim(),
      place: newPlace.trim(),
      phone: newPhone.trim(),
    };
    renderTable();
  }
}

function viewStudent(index) {
  const student = students[index];
  alert(`Student Details:\n\nName: ${student.name}\nPlace: ${student.place}\nPhone: ${student.phone}`);
}

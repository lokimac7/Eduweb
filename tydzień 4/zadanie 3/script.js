function Student (StudentName, StudentSurname) {
  this.name = StudentName;
  this.surname = StudentSurname;
}

function updateTable(record) {
  var $tableBody = $('#students tbody'),
      newRecord;
  
  newRecord = '<tr> \
    <td>' + students.length + '</td> \
    <td>' + record.name + '</td> \
    <td>' + record.surname + '</td> \
  </tr>';
  
  $tableBody.append($(newRecord));
}

function isFormValid() {
  var error = false;
  
  $('form input').each(function(index, element) {
    if (!$(element).val()) {
      $(element).addClass('error');
      error = true;
    } else {
      $(element).removeClass('error');
    }    
  });
  
  return error ? false : true;
}


var $createButton = $('#create'),
    students = [];

$createButton.click(function(event) {

  event.preventDefault();
  
  var $name = $('#name'),
      $surname = $('#surname'),
      student;
  
  if (isFormValid()) {    
    student = new Student($name.val(), $surname.val());

    students.push(student);
    updateTable(student);
  }
});



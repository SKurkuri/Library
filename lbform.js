function formValidation()
{
    var name=document.registration.username;
    var usn=document.registration.USN;
    var email=document.registration.email;
    var ph=document.registration.phno;
    var dob=document.registration.dob;
    var gender = document.registration.sex;
    var sem=document.registration.sem;

    if(allLetter(name))
    {
        if(alphanumeric(usn,12))
        {
            if(validateGender(gender))
            {
                if(semselect(sem))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

         }
            
    }
    return false;
}

function allLetter(name)
{
    var letters=/^[a-zA-Z]+$/;
    if(name.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username should contain only alphabets');
        name.focus();
        return false;
    }

}

function alphanumeric(usn,mx)
{
    var apnm=/[a-zA-Z0-9]+$/;
    if(usn.value.match(apnm) && usn.value.length == mx)
    {
        return true;
    }
    else
    {
        alert('USN should contain alphanumeric 12 characters only');
        usn.focus();
        return false;
    }
}

function validateGender(gender) 
{
    if (gender.value === "Male" || gender.value === "Female") 
    {
        return true;
    } 
    else 
    {
        alert('Please select a gender');
        gender[0].focus(); 
        return false;
    }
}

function semselect(sem)
{
    if(sem.value== "Default")
    {
        alert('Select the semester');
        sem.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');  
        return true; 
    }
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.forms['registration'].addEventListener('submit', function (event) 
    {
        event.preventDefault(); // Prevent the default form submission

        if (formValidation()) 
        {
            GetSelected();
        }
    });
});


function GetSelected() 
{
    var name = document.registration.username.value;
    var usn = document.registration.USN.value;
    var email = document.registration.email.value;
    var ph = document.registration.phno.value;
    var dob = document.registration.dob.value;

    var genderRadios = document.getElementsByName('sex');
    var selectedGender = '';
    for (var i = 0; i < genderRadios.length; i++) 
    {
        if (genderRadios[i].checked) 
        {
            selectedGender = genderRadios[i].value;
            break;
        }
    }

    var books = [];
    var bookCheckboxes = document.getElementsByName('nb');
    for (var i = 0; i < bookCheckboxes.length; i++) 
    {
        if (bookCheckboxes[i].checked) 
        {
            books.push(bookCheckboxes[i].value);
        }
    }

    var semester = document.registration.sem.value;

    var selectedValues = "Selected Values:\n" +
        "\nName: " + name + "\n" +
        "\nUSN: " + usn + "\n" +
        "\nEmail: " + email + "\n" +
        "\nPhone Number: " + ph + "\n" +
        "\nDate of Birth: " + dob + "\n" +
        "\nGender: " + selectedGender + "\n" +
        "\nBooks: " + books.join(', ') + "\n" +
        "\nSemester: " + semester;

    alert(selectedValues);
    
    //document.getElementById("selectedValues").innerHTML = selectedValues;

    document.write(selectedValues);
}

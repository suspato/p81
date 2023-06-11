nameOfTheStudentArray=[]

function submit()
{
    var displayStudentArray = [];
    for (var j = 1; j <=4; j++) 
    {

         var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
         console.log(nameOfTheStudent);
         nameOfTheStudentArray.push(nameOfTheStudent);
    } 

         console.log(nameOfTheStudentArray); 
    
    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(nameOfTheStudentArray)
    
    for(var k=0; k<nameOfTheStudentArray; k++)
    {
       displayStudentArray.push("<h4>Name -")nameOfTheStudentArray[k]+("<h4>");
       console.log(displayStudentArray);
    }  
    console.log(nameOfTheStudentArray);
    document.getElementById("displayNamesWithCommas") .innerHTML=displayStudentArray;

    var removecommas=displayStudentArray.join(" ")
    console.log(removecommas)
    document.getElementById("displayNamesWithoutCommas").innerHTML=removecommas
    
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sorttButton").style.display="inline-block";
}
function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);


    var displayStudentArraySorting = []

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length
    console.log(lenghtOfNameOfStudentsArray);

    for( k=0; k<lenghtOfNameOfStudentsArray; k++)
    {
       displayStudentArraySorting.push"<h4> Name -"+nameOfTheStudentArray[k]+"</h4>";
       console.log(displayStudentArraySorting)   
    }

    var removecommas=displayStudentArraySorting.join(" ");
    console.log(removecommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removecommas;
}

    
    


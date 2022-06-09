// define players using arrays
var joelEmbiid = new Array("Joel","Embiid","C","21","March 16, 1994","7'2","280 lbs","Kansas","4","Jo-Jo, The Process, Troel");
var benSimmons = new Array("Ben","Simmons","PG","25","July 20, 1996","6'10","240 lbs","LSU","3","Fresh Prince, The Yank");
var tobiasHarris = new Array("Tobias","Harris","PF","12","July 15, 1992","6'8","226 lbs","Tennesse","9","Tobi");
var sethCurry = new Array("Seth","Curry","SG","31","August 23, 1990","6'2","185 lbs","Duke","6","Seth's Brother");
var dannyGreen = new Array("Danny","Green","SG","14","June 22, 1987", "6'6","215 lbs","UNC","12","Icy-Hot, GreenRanger");
var matisseThybulle = new Array("Matisse","Thybulle","SG","22","March 4, 1997", "6'5","201 lbs","Washington","1","Mathief");
var shakeMilton = new Array("Shake","Milton","SG","18","September 26, 1996", "6'5","205 lbs","SMU","3","Protien Shake");
var tyreseMaxey = new Array("Tyrese","Maxey","SG","0","November 4, 2000", "6'2","205 lbs","Kentucky","1","Rese");
var furkanKorkmaz = new Array("Furkan","Korkmaz","SG","30","July 24, 1997", "6'7","202 lbs","Turkey","4","Furky");
var shakeMilton = new Array("Andre","Drummond","C","1","August 10, 1993", "6'10","279 lbs","UConn","11","Big Penguin");
var georgesNiang = new Array("Georges","Niang","PF","0","June 17, 1993", "6'7","230 lbs","Iowa State","5","Minivan");
var anthonyToliver = new Array("Anthony","Toliver","PF","43","June 1, 1985", "6'8","240 lbs","Creighton","13","ato");
var charlesBassey = new Array("Charles","Bassey","C","23","October 28, 2000", "6'11","235 lbs","Western Kentucky","R","");
var isiahJoe = new Array("Isiah","Joe","PG","7","July 02, 1999", "6'4","165 lbs","Arkansas","1","");
var filipPetrusev = new Array("Filip","Petrusev","C","0","April 15, 200-", "6'11","234 lbs","Gonzaga","R","");
var paulReed = new Array("Paul","Reed","PF","44","June 14, 1999", "6'9","210 lbs","DePaul","R","BBall Paul");
var jalenSpringer = new Array("Jalen","Springer","PG","11","September 25, 2002", "6'4","204 lbs","Tennesse","R","");
function buildTable()
{
  // create the table and its headings
  document.write("<table id=" + "playerTable" + ">");
  var tableHeadings = new Array("First","Last","Position","Number","Birthday","Age","Height","Weight","College","Experience","Nicknames");
  document.write("<tr>");
  for (var i = 0; i < tableHeadings.length ; i++)
  {
    document.write("<th>" + tableHeadings[i] + "</th>" );
  }
  document.write("</tr>");


  var playerArray = new Array(joelEmbiid, matisseThybulle, furkanKorkmaz, benSimmons, tyreseMaxey, sethCurry, tobiasHarris, dannyGreen,
    georgesNiang, shakeMilton, anthonyToliver, paulReed, jalenSpringer, filipPetrusev, charlesBassey, isiahJoe  );
  // for each player create their table rows
  for (var i = 0; i < playerArray.length; i++)
  {
    createPlayer(playerArray[i]);
  }
  // end the table tag
  document.write("</table>");
}

function writeBirthdayAndAge(birthday) {
  birthMonth = birthday.getMonth() + 1;
  birthYear = birthday.getFullYear();
  birthDate = birthday.getDate();
  // write the result as a table header
  document.write("<td>" + birthMonth + "/" + birthDate + "/" + birthYear + "</td>");

  // calculate the age and write the result as the next table header
  today = new Date();
  thisYear = today.getFullYear();
  thisMonth = today.getMonth() + 1;
  thisDate = today.getDate();
  // if the birthdate is before todays date subtract 1 from the Age
  age = thisYear - birthYear;
  age = (birthDate < thisDate) && (birthMonth < thisMonth) ? age : age - 1;
  document.write("<td>" + age + "</td>")
}

function createPlayer(player){

  document.write("<tr>");
  for (var i = 0; i < player.length ; i++)
  {
    // when the element reaches the 4 index, call the writeBirthdayAndAge function instead and skip 2 lines
    if (i == 4)
    {
      var birthday = new Date(player[4]);
      writeBirthdayAndAge(birthday);
    }
    else
    {
      document.write("<td>" + player[i] + "</td>");
    }
  }
  document.write("</tr>");
}

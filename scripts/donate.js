function checkForm()
{
  // Check if donation amount is selected
  if (document.forms["donationForm"]["amount"].value == "0")
  {
    alert("Select a donation amount");
    document.forms["donationForm"]["amount"].focus();
    return false;
  }

  // Check if contact info is filled
  if (document.forms["donationForm"]["fname"].value == "")
  {
    alert("Enter your first name");
    document.forms["donationForm"]["fname"].focus();
    return false;
  }
  if (document.forms["donationForm"]["lname"].value == "")
  {
    alert("Enter your last name");
    document.forms["donationForm"]["lname"].focus();
    return false;
  }
  if (document.forms["donationForm"]["city"].value == "")
  {
    alert("Enter your city");
    document.forms["donationForm"]["city"].focus();
    return false;
  }
  return true;
}

function skillsMember() {
  var skills = document.getElementById("skills");
  var skillsMember = document.getElementById("skillsMember");
  var skillsMemberValue = skillsMember.value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberText = skillsMemberText.toLowerCase();
  var skillsMemberText = skillsMemberText.replace(/\s/g, '');
  if (skillsMemberText == "other") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
}
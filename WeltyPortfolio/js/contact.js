"use strict";

var $ = function(id) {
  return document.getElementById(id);
};

var joinList = function() {
  var emailAddress1 = $("email_address1").value;
  var firstName = $("name").value;
  var isValid = true;

  // validate the entries
  if (emailAddress1 == "") {
    $("email_address1").nextElementSibling.firstChild.nodeValue = "*";
    isValid = false;
  } else {
    $("email_address1").nextElementSibling.firstChild.nodeValue = "";
  }


  if (firstName == "") {
    $("first_name").nextElementSibling.firstChild.nodeValue =
      "Name is required.";
    isvalid = false;
  }

  // submit the form if all entries are valid
  // otherwise, display an error message
  if (isValid) {
    $("email_form").submit();
  }
};

window.onload = function() {
  $("join_list").onclick = joinList;
  $("name").focus();
};

<?php

if (isset($_POST['submit']))
{
  $subject = $_POST['subject']

$mailTo = "elizabethnguyen02@gmail.com";
$headers = "From: My Website"
$txt = "You have received an email from your website".\n\n".$subject;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.html?mailsend");
}

"use strict";

module.exports = function (_ref) {
  var user = _ref.user,
      avatar = _ref.avatar,
      title = _ref.title,
      date = _ref.date,
      body = _ref.body;
  return "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n<meta name=\"format-detection\" content=\"telephone=no\">\n<meta name=\"viewport\" content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=9; IE=8; IE=7; IE=EDGE\" />\n\n<title>" + title + "</title>\n\n<style type=\"text/css\">\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400');\n\nbody {\n  width: 100% !important;\n  -webkit-text;\n  size-adjust:100%;\n  -ms-text-size-adjust:100%;\n  margin: 0;\n  padding: 0;\n}\ntable td { border-collapse: collapse; }\n\n@media screen and (max-width: 630px) {\n  /* This sets elements to 100% width and fixes the height issues too, a god send */\n  *[class=\"100p\"] { height:auto !important; }\n\n  *[class=\"20pad\"] { padding-left: 20px; padding-left: 20px }\n}\n\n</style>\n</head>\n\n<body style=\"padding: 0; margin: 0\">\n\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin: 0; padding: 0\" width=\"100%\">\n<tr>\n  <td align=\"center\" valign=\"top\">\n\n    <!-- BEGIN - Centered-Container -->\n    <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"100p\" style=\"max-width: 600px\">\n      <tr>\n        <td align=\"center\" valign\"top\">\n\n          <!-- BEGIN - Header -->\n          <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"100p\" style=\"max-width: 600px\">\n            <tr>\n              <td bgcolor=\"#f7f7f7\" valign=\"top\" class=\"100p\">\n\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"20\" class=\"100p\">\n                  <tr>\n                    <td width=\"100%\" align=\"left\" style=\"font-size:16px; color:#462814; padding-left: 40px\">\n                      <font face=\"'Open Sans', Arial, sans-serif\">\n                        <a href=\"https://like.co\" style=\"font-size: 16px; color: #28646E; text-decoration: none;\">\n                          <img width=\"224px\" height=\"88px\" src=\"https://static.like.co/logo.png\" alt=\"like.co\" />\n                        </a>\n                      </font>\n                    </td>\n                  </tr>\n                </table>\n\n              </td>\n            </tr>\n          </table>\n\n          <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"100p\">\n            <tr>\n              <td width=\"100%\" valign=\"top\" class=\"100p\">\n\n                <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"16\">\n                  <tr>\n                    <td width=\"100%\" background=\"https://static.like.co/email/images/banner_bg.png\" style=\"background-image:url('https://static.like.co/email/images/banner_bg.png'); background-repeat: repeat-y; background-size: 100%;\">\n                      <div style=\"text-align: center;\">\n                        <a href=\"https://like.co/in\">\n                          <img width=\"110px\" height=\"110px\" object-fit=\"contain\" src=" + avatar + " alt=" + user + " \n                            style=\"overflow: hidden; border: 1px solid rgba(0,0,0,.2); border-radius: 50%;\" />\n                        </a>\n                      </div>\n                      <div>\n                        <font face=\"'Open Sans', Arial, sans-serif\">\n                          <h1 style=\"font-size: 28px; line-height: 1; font-weight: 600; color: #462814; text-align: center; margin-bottom: 0px;\">\n                            " + title + "\n                          </h1>\n                        </font>\n                      </div>\n                      <div>\n                        <font face=\"'Open Sans', Arial, sans-serif\">\n                          <h3 style=\"font-size: 14px; line-height: 2; color: #4a4a4a; text-align: center; margin-top: 0px; margin-bottom: 0px\">\n                            " + date + "\n                          </h3>\n                        </font>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n\n              </td>\n            </tr>\n          </table>\n          <!-- END - Header -->\n\n          <!-- BEGIN - Body -->\n          <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#\" class=\"100p\" style=\"max-width: 600px\">\n            <tr>\n              <td bgcolor=\"#f7f7f7\" valign=\"top\" class=\"100p\">\n                <div>\n\n                  <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"40\" class=\"100p\">\n                    <tr>\n                      <td align=\"left\" valign=\"top\" style=\"color:#462814; font-size:18px;\">\n\n                        <font face=\"'Open Sans', Arial, sans-serif\">\n                          " + body + "\n                        </font>\n\n                      </td>\n                    </tr>\n                  </table>\n\n                  <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"100p\">\n                    <tr>\n                      <td height=\"20\">\n                      </td>\n                    </tr>\n                  </table>\n\n                </div>\n              </td>\n            </tr>\n          </table>\n          <!-- END - Body -->\n\n          <!-- BEGIN - Footer -->\n          <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"100p\" style=\"max-width: 600px\">\n            <tr>\n              <td align=\"center\" valign=\"top\" class=\"100p\">\n\n                <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"100p\">\n                  <tr>\n                    <td height=\"24\">\n                    </td>\n                  </tr>\n                </table>\n\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"10\" width=\"240\">\n                  <tr>\n                    <td width=\"28\" height=\"28\" align=\"center\">\n                      <a href=\"https://t.me/likecoin\">\n                        <img  width=\"28\" height=\"28\" src=\"https://static.like.co/email/images/links/telegram.png\" />\n                      </a>\n                    </td>\n                    <td width=\"28\" height=\"28\" align=\"center\">\n                      <a href=\"https://medium.com/likecoin\">\n                        <img  width=\"28\" height=\"28\" src=\"https://static.like.co/email/images/links/medium.png\" />\n                      </a>\n                    </td>\n                    <td width=\"28\" height=\"28\" align=\"center\">\n                      <a href=\"https://twitter.com/likecoin_fdn\">\n                        <img  width=\"28\" height=\"28\" src=\"https://static.like.co/email/images/links/twitter.png\" />\n                      </a>\n                    </td>\n                    <td width=\"28\" height=\"28\" align=\"center\">\n                      <a href=\"https://github.com/likecoin/\">\n                        <img  width=\"28\" height=\"28\" src=\"https://static.like.co/email/images/links/github.png\" />\n                      </a>\n                    </td>\n                    <td width=\"28\" height=\"28\" align=\"center\">\n                      <a href=\"https://www.facebook.com/groups/likecoin/\">\n                        <img  width=\"28\" height=\"28\" src=\"https://static.like.co/email/images/links/facebook.png\" />\n                      </a>\n                    </td>\n                  </tr>\n                </table>\n\n                <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"5\" class=\"100p\">\n                  <tr>\n                    <td align=\"center\" valign\"top\">\n                      <font face=\"'Open Sans', Arial, sans-serif\">\n                        <a href=\"https://help.like.co\" style=\"color: #28646E;\">\n                          help centre\n                        </a>\n                      </font>\n                    </td>\n                  </tr>\n                </table>\n\n                <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"100p\">\n                  <tr>\n                    <td height=\"50\">\n                    </td>\n                  </tr>\n                </table>\n\n              </td>\n            </tr>\n          </table>\n          <!-- END - Footer -->\n\n        </td>\n      </tr>\n    </table>\n    <!-- END - Centered-Container -->\n\n  </td>\n</tr>\n</table>\n\n</body>\n</html>";
};
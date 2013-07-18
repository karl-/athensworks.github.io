gistURL = "https://api.github.com/gists/5332681";
window.users = [];

function saveMember(data) {
  window.users.push(data.entry[0]);
};

// function displayMember(index, profile){
//   var member = {
//     name         : profile.name["givenName"] + " " + profile.name["familyName"],
//     profileURL   : profile.profileUrl,
//     thumbnailURL : profile.thumbnailUrl,
//     aboutMe      : jQuery.trim(profile.aboutMe).substring(0, 144).trim(this) + "..."
//   };
// 
//   $('div#members').append(_.template($('#member-template').html(), member ));
// };

$(function(){
  console.log("blah");
  console.log(window.users);
  $.each(window.users, displayMember);
});

jQuery.getJSON(gistURL, function(data) {
  var members = [];
  var json_content = data.files["athensworks_members.json"].content;
  members = JSON.parse(json_content);

  for (var count = 0; count < members.length; count++) {
    var username = members[count];
    var gravatarURL = "http://en.gravatar.com/" + username + ".json?callback=saveMember";
    document.write("<script type='text/javascript' src='" + gravatarURL + "'></script>");
  }
});
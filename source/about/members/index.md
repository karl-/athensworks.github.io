---
layout: page
title: "Members"
comments: false
sharing: true
footer: true
member_list: true
---

<!-- Member template -->
<script type='test/template' id='member-template'>
  <div class='member'>
    <h3>
      <a href="<%= profileURL %>"><%= name %></a>
    </h3>
    <img src='<%= thumbnailURL %>'/>
    <p class='about'><%= aboutMe %></p>
  </div>
</script>

<!-- The Codes -->
<script type="text/javascript" charset="utf-8">
  // This is the Gist ID -- change this if create a new gist
  var gistURL = "https://api.github.com/gists/5332681?callback=?";
  
  $.getJSON(gistURL, function(data) {
    jsonMembers = data.data.files["athensworks_members.json"].content;
    members = $.parseJSON(jsonMembers);
    
    // console.log(members);
    
    members.forEach(function(gravatar_id){
      var scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src = "http://www.gravatar.com/" + gravatar_id + ".json?callback=displayMember";
      
      // console.log(scriptElement);
      $("head").append(scriptElement);
    });
  });
  
  function displayMember(profileData){
    profile = profileData.entry[0];
    
    var member = {
      name         : profile.name["givenName"] + " " + profile.name["familyName"],
      profileURL   : profile.profileUrl,
      thumbnailURL : profile.thumbnailUrl,
      aboutMe      : jQuery.trim(profile.aboutMe).substring(0, 144).trim(this) + "..."
    };
    
    $('div#members').append(_.template($('#member-template').html(), member ));
  }
</script>

<!-- Empty members div -->
<div id="members">
</div>


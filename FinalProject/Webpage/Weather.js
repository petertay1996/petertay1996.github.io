jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/1e87c7e6b0a2bb1e/geolookup/conditions/q/Japan/Sapporo.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_c = parsed_json['current_observation']['temp_c'];
  alert("Current temperature in " + location + " is: " + temp_c);
  }
  });
});
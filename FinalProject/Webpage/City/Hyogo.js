jQuery(document).ready(function($) {
  $.ajax({
  //url : "http://api.wunderground.com/api/1e87c7e6b0a2bb1e/geolookup/conditions/q/Japan/Sapporo.json",
  url : "http://api.wunderground.com/api/1e87c7e6b0a2bb1e/forecast10day/q/Japan/Hyogo.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  //var date_0 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['day'];
  //var day_0 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['weekday_short'];
  //var month_0 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['monthname_short'];
  var conds  = [];
  var dates  = [];
  var days   = [];
  var months = [];
  var lows   = [];
  var highs  = [];
  
  var cond = parsed_json['forecast']['txt_forecast']['forecastday'][0]['fcttext_metric'];
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][0]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][1]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][1]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][1]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][2]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][2]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][2]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][2]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][2]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][2]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][3]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][3]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][3]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][3]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][3]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][3]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][4]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][4]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][4]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][4]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][4]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][4]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][5]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][5]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][5]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][5]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][5]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][5]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][6]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][6]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][6]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][6]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][6]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][6]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][7]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][7]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][7]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][7]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][7]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][7]['conditions']);
  
  dates.push(parsed_json['forecast']['simpleforecast']['forecastday'][8]['date']['day']);
  days.push(parsed_json['forecast']['simpleforecast']['forecastday'][8]['date']['weekday_short']);
  months.push(parsed_json['forecast']['simpleforecast']['forecastday'][8]['date']['monthname_short']);
  highs.push(parsed_json['forecast']['simpleforecast']['forecastday'][8]['high']['celsius']);
  lows.push(parsed_json['forecast']['simpleforecast']['forecastday'][8]['low']['celsius']);
  conds.push(parsed_json['forecast']['simpleforecast']['forecastday'][8]['conditions']);
  
  var weekday = ["一","二","三","四","五","六","日"];
  var today = (days[0]=="Mon")?1:(days[0]=="Tue")?2:(days[0]=="Wed")?3:(days[0]=="Thu")?4:(days[0]=="Fri")?5:(days[0]=="Sat")?6:(days[0]=="Sun")?7:0;
  var i,j;
 
  document.writeln('<h3 style="color:#cc0000;">兵庫 Hyogo</h3><hr>');

  document.writeln('<h3 style="color:#cc0000;font-size: 14px;">(' + days[0] +') '+ dates[0] + ' ' + months[0] + ' : '+ lows[0] + ' ~ '+ highs[0] + ' Celsius <br>' + conds[0] + '<br>' + cond +'</h3>');
  document.writeln('<table style="border:1px #ffbb99 solid;">');
  document.writeln('<br><tr><td colspan="20" style="text-align: center;border:1px #ffbb99 solid; color:#cc0000;">'
				+ '即時天氣預告 Forecast'
				+ '</td></tr>');
  for(i=0;i<8;i++)
  {
  	for(j=0;j<4;j++)
  	{
  		switch(j){
  			case 0: 
 				if(i==0){
					document.writeln('<tr><td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#cc0000;">'
									+ '星期'
									+ '</td>');
				}
				else{
					document.writeln('<td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#ff9999;">' + weekday[((today-2+i)%7)] + '</td>');
				}
				break;
			case 1:
				if(i==0){
				document.writeln('<td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#cc0000;">'
								+ '氣候'
								+ '</td>');
				}
				else{
					document.writeln('<td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#ff9999;">' + conds[i-1] + '</td>');
				}
				break;
			case 2:
				if(i==0){
				document.writeln( '<td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#cc0000;">'
								+ '最低溫 (Celsius)'
								+ '</td>');
				}
				else{
					document.writeln('<td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#ff9999;">' + lows[i-1] + '</td>');
				}
				break;
			case 3:
				if(i==0){
				document.writeln( '<td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#cc0000;">'
								+ '最高溫 (Celsius)'
								+ '</td>'
								+'</tr>');
				}
				else{
					document.writeln('<td colspan="5" style="text-align: center;border:1px #ffbb99 solid; color:#ff9999;">' + highs[i-1] + '</td>' + '</tr>');
				}
				break;
		}
	}
  }
  document.writeln("</table>");
  document.writeln('<p style="color:#cc0000;"> 特產： 神戶牛肉 。。。 </p>');
  //alert("("+ days[0] +") "+ dates[0] + " " + months[0] + " : "+lows[0] + " ~ "+ highs[0] + " Celsius \n" + conds[0] + "\n" + cond);
  }
  });
});
var i,j,count=0;
	for(i=0;i<6;i++)
	{
		if(i%3==0)document.writeln('<div>');
		document.writeln("<table>");
		document.writeln('<tr><td colspan="8">'
						+ '第 ' + (i+1) + ' 張卡片'
						+ '<input type="checkbox" id="myCard' + (i+1) + '" value="' + (i+1) + '">'
						+ '</td></tr>');
		for(j=0;j<64;j++)
		{
			if(j&(1<<i)){
				if((count%8)==0) document.writeln('<tr>');
				document.write('<td>'
							+ j
							+ '</td>');
				count++;
			}
		}
		document.writeln("</table>");
		if(i%3==2)document.writeln('</div>');
	}
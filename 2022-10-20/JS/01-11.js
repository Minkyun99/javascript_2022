let list = '';
console.log(typeof(list));    
list +=  '<table>';
list += '<tr>';
list +='<td>0</td> <td>0</td> <td>0</td>';
list +='</tr>';
list +='<tr><td>true</td> <td>true</td> <td>true</td></tr>';
list +='<tr><td>False</td> <td>True</td> <td>False</td></tr>';
list +='<tr><td>True</td> <td>False</td> <td>False</td></tr>';
list +='<tr><td>False</td> <td>False</td> <td>False</td></tr>';
list += '</tr>';
list +=  '</table>';
    document.write(list)  
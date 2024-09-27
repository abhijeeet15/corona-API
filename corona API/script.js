function show()
{
  fetch('https://api.rootnet.in/covid19-in/stats/latest')
  .then((res)=>res.json())
  .then((data)=>{
      // console.log(data.data. regional)
      const region =data.data.regional
      console.log(region)
      const table = document.getElementById('tableData')

      region.forEach(e => {
          // console.log(e)
          const row = document.createElement('tr');
          const col1 = document.createElement('td');
          col1.innerText = e.loc;
          const col2 = document.createElement('td');
          col2.innerText = e.confirmedCasesForeign;
          const col3 = document.createElement('td');
          col3.innerText = e.	confirmedCasesIndian;
          const col4 = document.createElement('td');
          col4.innerText = e.discharged;
          const col5 = document.createElement('td');
          col5.innerText = e.deaths;
          const col6 = document.createElement('td');
          col6.innerText = e.totalConfirmed;


          row.appendChild(col1);
          row.appendChild(col2);
          row.appendChild(col3); 
           row.appendChild(col4);
           row.appendChild(col5);
           row.appendChild(col6);
          table.appendChild(row)

      });
  })
  .catch((err)=>console.log(err))
}
show();
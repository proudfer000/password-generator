var select = '';
for (i=1;i<=100;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#selector').html(select);
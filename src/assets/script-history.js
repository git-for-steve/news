$(document).ready(function () {
    //showing results
    var history = sessionStorage.getItem("history");
    if (history == null) {
        history = "[]";
    }
    var parsedHistory = JSON.parse(history);
    $('table').bootstrapTable("destroy");
    $('table').bootstrapTable({
        data: parsedHistory
    });
    $('table').bootstrapTable('refresh')
});

function dateSorter(a, b) {
    return (new Date(a).getTime() - new Date(b).getTime());
}

function dateFormat(value, row, index) {
    var d = new Date(value);
   return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
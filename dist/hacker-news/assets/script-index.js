$(document).ready(function () {
    //API
    const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search';

    //BUTTON Click
    $('#btn-search').on('click', function () {
        $('#btn-search').prop('disabled', true);
        var searchValue = $('#input').val();
        axios.get(`${API_ENDPOINT}?query=${searchValue}`)
            .then(nakedData => {
                //showing results
                var result = nakedData['data']['hits'];
                $('table').bootstrapTable("destroy");
                $('table').bootstrapTable({
                    data: result
                });
                $('table').bootstrapTable('refresh')
                $('#btn-search').prop('disabled', false);

                //adding in history
                var history = sessionStorage.getItem("history");
                if (history == null) {
                    history = "[]";
                }
                var parsedHistory = JSON.parse(history);
                var historyItem = {
                    date: new Date(),
                    query: searchValue
                }
                parsedHistory.push(historyItem);
                sessionStorage.setItem("history", JSON.stringify(parsedHistory));
            });
    });

    //Enter Button Action
    var input = document.getElementById("input");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("btn-search").click();
        }
    });
});
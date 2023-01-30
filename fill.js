var url = 'url.ru'
var script_hidden_url = 'htt...url.js'
var script_url = 'https://urlurl.js'
var obf = "&#10004";
var vt = "0/60"

for (let i = 0; i < 3; i++) {
    $(".responsive-table").append(`
    <li class="table-row">
        <div class="col col-1">${url}</div>
        <div class="col col-2"><a href="${script_hidden_url}">${script_url}</a></div>
        <div class="col col-3">${obf}</div>
        <div class="col col-4">${vt}</div>
    </li>`);
}

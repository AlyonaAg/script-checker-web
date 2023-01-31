var url = 'url.ru'
var script_hidden_url = 'htt...url.js'
var script_url = 'https://urlurl.js'
var obf = "&#10004";
var vt = "0/60"


/*for (let i = 0; i < 3; i++) {
    $(".responsive-table").append(`
    <li class="table-row">
        <div class="col col-1">${url}</div>
        <div class="col col-2"><a href="${script_hidden_url}">${script_url}</a></div>
        <div class="col col-3">${obf}</div>
        <div class="col col-4">${vt}</div>
    </li>`);
}*/

current_page = 1;

async function getData(url) {
    let res = await fetch(url).then((response) => response.json())
    .then((scripts) => {
        return scripts.scripts;
    });
    return res
}

function fillTable(scripts){
    const res = () => {
        scripts.then((a) => {
          a.forEach(element => {
            console.log(element)
            
            obf = ""
            if (element.result == true) {
                obf = "&#10004";
            }

            script = String(element.script)
            script_hidden_url = script
            if (script.length > 50){
                script_hidden_url = script.substring(0, 24) + '...' + script.substring(script.length - 24, script.length)
            }

            $(".responsive-table").append(`
            <li class="table-row">
                <div class="col col-1"><a href="${element.url}">${element.url}</a></div>
                <div class="col col-2"><a href="${script}">${script_hidden_url}</a></div>
                <div class="col col-3">${obf}</div>
                <div class="col col-4">${element.virustotal}</div>
            </li>`);
          });
        });
      };

    res();
}

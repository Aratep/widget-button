var script = document.getElementsByTagName('script')[0];
var data_config = JSON.parse(script.getAttribute('data-config'));

function createButton(config) {
    var bg_color = config.bg_color || "#23869B";
    var margin = config.location.margin || "margin: 100px";
    var button_text = config.button_text || "Click Me";
    var icon = config.icon;

    var button = document.createElement("BUTTON");
    var t = document.createTextNode(button_text);

    button.style = 'background: #' + bg_color + ';'
        + 'margin:' + margin
    button.appendChild(t);
    button.onclick = function () {
        modal()
    }
    document.body.appendChild(button)
}

function modal() {
    var modal = document.createElement("DIV");
    var modal_content = document.createElement("DIV");
    var span = document.createElement("SPAN");
    var iframe = document.createElement("IFRAME");

    span.onclick = function () {
        modal.style = 'display: none'
    }
    span.innerHTML = "&times;";
    modal.style = 'position: fixed; ' +
        'z-index: 1; ' +
        'display: flex; ' +
        'justify-content: center;' +
        'align-items: center; ' +
        'left: 0; ' +
        'top: 0; ' +
        'width: 100%; ' +
        'height: 100%; ' +
        'overflow: auto;' +
        'background-color: rgb(0,0,0); ' +
        'background-color: rgba(0,0,0,0.4);';
    modal_content.style = 'background-color: #fefefe; ' +
        // 'margin: auto; ' +
        // 'padding: 20px; ' +
        'border: 1px solid #888;' +
        'width: 80%;';
    span.style = 'float: right';
    iframe.style = 'background: grey'
    modal_content.appendChild(span);
    modal_content.appendChild(iframe);
    modal.appendChild(modal_content);
    document.body.appendChild(modal)
};


createButton(data_config)

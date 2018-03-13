var script = document.getElementsByTagName('script')[0];
var data_config = JSON.parse(script.getAttribute('data-config'));

function createButton(config) {
    var bg_color = config.bg_color || "#23869B";
    var color = config.color || "#FFFFFF";
    var margin = config.location.margin || "margin: 100px";
    var button_text = config.button_text || "Поддержка";
    var icon = config.icon;
    var transform = config.location.transform || "rotate(-90deg)";
    var left = config.location.left || "-67px";

    var button = document.createElement("DIV");
    var t = document.createTextNode(button_text);

    button.style = 'background: #' + bg_color + ';'
        + 'color: #' + color + ';'
        + 'transform:' + transform + ';'
        + 'left:' + left + ';'
        + 'min-width: 150px;'
        + 'box-sizing: content-box;'
        + 'text-align: center;'
        + 'cursor: pointer;'
        + 'position: fixed;'
        + 'top: 45%;'
        + 'font-size: 15px;'
        + 'letter-spacing: 1px;'
        + 'font-size: 16px;'
        + 'z-index: 99999;'
        + 'padding: 10px;'
    button.appendChild(t);
    // button.appendChild(icon);
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
        'height: 400px; ' +
        'border: 1px solid #888;' +
        'width: 60%;';
    span.style = 'float: right' +
        'height: 25px;' +
        'width: 25px;' +
        'color: rgb(255, 255, 255);' +
        'cursor: pointer;' +
        'line-height: 25px;' +
        'text-align: center;' +
        'background: rgb(0, 0, 0);' +
        'float: right;' +
        'border-radius: 90px;';
    iframe.style = 'background: grey'
    modal_content.appendChild(span);
    modal_content.appendChild(iframe);
    modal.appendChild(modal_content);
    document.body.appendChild(modal)
};


createButton(data_config)


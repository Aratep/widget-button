(function () {
    // all your code goes here
    // nobody outside of your code can reach your top level variables here
    // your top level variables are not on the window object

    var script = document.getElementById('widget_button');
    var data_config = JSON.parse(script.getAttribute('data-config'));
    var data_host = script.getAttribute('data-host');

    function createButton(config) {
        var bg_color = config.bg_color || "#23869B";
        var color = config.color || "#FFFFFF";
        var button_text = config.button_text || "Поддержка";
        var transform = config.location.transform || "rotate(-90deg)";
        var left = config.location.left || "-67px";
        var min_width = config.location.min_width || '150px';
        var position = config.location.position || 'fixed';
        var top = config.location.top || '45%';
        var z_index = config.location.z_index || '99999';
        var padding = config.location.padding || '10px';
        var icon_path = config.icon;

        var button = document.createElement("BUTTON");
        var icon = document.createElement("IMG");
        var span = document.createElement('SPAN');
        icon.setAttribute("src", icon_path);

        button.className = 'button';

        button.style = 'background: #' + bg_color + ';'
            + 'color: #' + color + ';'
            + 'transform:' + transform + ';'
            + 'left:' + left + ';'
            + 'min-width: ' + min_width + ';'
            + 'box-sizing: content-box;'
            + 'text-align: center;'
            + 'cursor: pointer;'
            + 'position: ' + position + ';'
            + 'top: ' + top + ';'
            + 'font-size: 15px;'
            + 'letter-spacing: 1px;'
            + 'border: none;'
            + 'font-size: 16px;'
            + 'z-index: ' + z_index + ';'
            + 'padding: ' + padding + ';';
        icon.style = 'height: 14px;' +
            'width: 17px;';
        span.style = 'margin: 5px';

        span.innerHTML = button_text;
        button.appendChild(span);
        button.appendChild(icon);

        button.onclick = function () {
            modal(button);
        }

        document.body.appendChild(button)
    }


    function modal(button) {
        var modal = document.createElement("DIV");
        var modal_content = document.createElement("DIV");
        var span = document.createElement("SPAN");
        var iframe = document.createElement("IFRAME");
        var createA = document.createElement('A');
        createA.setAttribute('href', "http://google.com");
        iframe.src = 'https://' + data_host;
        // iframe.src = '//localhost:3000';

        span.onclick = function () {
            modal.style = 'display: none';
            button.disabled = false
        }
        modal.onclick = function () {
            modal.style = 'display: none';
            button.disabled = false
        }

        modal_content.className = 'modal-content';

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
            'height: 65%; ' + // 95% 400px
            'position: relative;' +
            'margin: auto;' +
            'width: 60%;';

        span.style = 'float: right' +
            'height: 25px;' +
            'width: 25px;' +
            'color: rgb(255, 255, 255);' +
            'cursor: pointer;' +
            'line-height: 25px;' +
            'text-align: center;' +
            'background: rgb(0, 0, 0);' +
            'position: absolute;' +
            'right: -8px ;' +
            'top: -12px ;' +
            'border-radius: 90px;';
        iframe.style = 'background: grey;' +
            'height: 100%;' +
            'width: 100%;' +
            'border: none;';

        modal_content.appendChild(span);
        modal_content.appendChild(iframe);
        modal.appendChild(modal_content);
        document.body.appendChild(modal)
        button.disabled = true

    };

    createButton(data_config)

})();


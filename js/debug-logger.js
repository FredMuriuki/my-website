(function () {
    // Create debug container
    var debugDiv = document.createElement('div');
    debugDiv.id = 'visual-console-log';
    debugDiv.style.cssText = 'position: fixed; bottom: 0; right: 0; width: 400px; height: 300px; background: rgba(0,0,0,0.8); color: lime; overflow-y: scroll; z-index: 99999; padding: 10px; font-family: monospace; font-size: 12px; pointer-events: none; opacity: 0.9; border-top-left-radius: 10px;';
    document.body.appendChild(debugDiv);

    function logToScreen(msg, type) {
        var p = document.createElement('p');
        p.style.margin = '2px 0';
        p.style.borderBottom = '1px solid #333';
        if (type === 'error') p.style.color = '#ff5555';
        if (type === 'warn') p.style.color = '#ffaa00';
        p.textContent = '[' + new Date().toLocaleTimeString() + '] ' + msg;
        debugDiv.appendChild(p);
        debugDiv.scrollTop = debugDiv.scrollHeight;
    }

    // Override console methods
    var originalLog = console.log;
    var originalError = console.error;
    var originalWarn = console.warn;

    console.log = function () {
        originalLog.apply(console, arguments);
        logToScreen(Array.from(arguments).join(' '), 'log');
    };

    console.error = function () {
        originalError.apply(console, arguments);
        logToScreen(Array.from(arguments).join(' '), 'error');
    };

    console.warn = function () {
        originalWarn.apply(console, arguments);
        logToScreen(Array.from(arguments).join(' '), 'warn');
    };

    console.log("Visual Logger Initialized.");
    console.log("Checking for Google Translate Element...");

    // Initial Environment Check
    setTimeout(function () {
        var gtElement = document.getElementById('google_translate_element');
        console.log("google_translate_element exists: " + !!gtElement);
        if (gtElement) {
            console.log("gtElement visibility: " + gtElement.style.display + " / op: " + gtElement.style.opacity);
        }

        var combo = document.querySelector('.goog-te-combo');
        console.log("goog-te-combo exists immediately: " + !!combo);
    }, 2000);

})();

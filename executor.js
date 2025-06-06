
let keysPressed = new Set();

document.addEventListener("keydown", function (e) {
  keysPressed.add(e.key.toLowerCase());

  if (keysPressed.has("shift") && keysPressed.has("d") && keysPressed.has("g")) {
    keysPressed.clear();
    e.preventDefault();

    const win = window.open(
      "",
      "DogeExecutor",
      "width=600,height=400,resizable=yes,scrollbars=no"
    );
    if (!win) {
      alert("Please allow popups for this site!");
      return;
    }

    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Doge Executor - Much wow, very code</title>

<!-- Fonts and Icons -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
  rel="stylesheet"
/>

<style>
  html, body {
    margin: 0; padding: 0; height: 100%; width: 100%;
    font-family: 'Roboto', sans-serif;
    background: #111;
    overflow: hidden;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #gui {
    position: fixed;
    inset: 0;
    background: url('https://th.bing.com/th/id/R.3fa2ae16376fd5860ab10ce0840ffc42?rik=tSoX2OoTaiUzow&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f2%2f3%2f9581.jpg&ehk=A5Dp7HTqNX5YiH4axPYsxdWCkWweSpDJ9NC7YGfLW6c%3d&risl=&pid=ImgRaw&r=0') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(12px);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .topbar {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background: rgba(255 204 0 / 0.85);
    color: #3b2e00;
    font-size: 28px;
    font-weight: 900;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    letter-spacing: 1.5px;
    user-select: none;
    text-shadow: 1px 1px 3px #3b2e00cc;
  }

  flexgrow {
    flex-grow: 1;
  }

  .icnbtn {
    cursor: pointer;
    background-color: #3b2e00;
    border-radius: 12px;
    color: #fffbcc;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    font-size: 28px;
    font-weight: bold;
    box-shadow: 0 0 6px #ffcc0066;
    transition: all 0.3s ease;
    user-select: none;
  }

  .icnbtn:hover {
    background-color: #ffcc00;
    color: #3b2e00;
    box-shadow: 0 0 15px #ffcc00;
    transform: scale(1.1);
  }

  .scriptcontainer {
    flex-grow: 1;
    margin: 20px 40px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-right: 8px;
  }

  .script {
    background: rgba(255 204 0 / 0.3);
    border-radius: 18px;
    padding: 14px 22px;
    font-weight: 700;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-size: 22px;
    color: #3b2e00;
    box-shadow: inset 0 0 8px #3b2e0044;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease;
  }

  .script:hover {
    background: rgba(255 204 0 / 0.6);
  }

  .scriptname {
    flex-grow: 1;
  }

  .scriptdelete {
    background: #3b2e00cc;
    border-radius: 12px;
    width: 38px;
    height: 38px;
    color: #ffcc00;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s ease;
    margin-left: 16px;
  }

  .scriptdelete:hover {
    background: #ffcc00;
    color: #3b2e00;
    box-shadow: 0 0 8px #ffcc00;
  }

  .editorpopup {
    position: fixed;
    inset: 0;
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  .editorpopup.hide {
    opacity: 0;
    pointer-events: none;
  }

  .editorcontainer {
    background: #3b2e00;
    width: 90%;
    max-width: 800px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 35px #ffcc0099;
    font-family: 'Comic Sans MS', cursive, sans-serif;
  }

  #scriptname {
    width: 100%;
    padding: 14px 20px;
    font-size: 24px;
    border: none;
    outline: none;
    background: #ffcc00;
    color: #3b2e00;
    font-weight: 900;
    box-sizing: border-box;
    font-family: 'Comic Sans MS', cursive, sans-serif;
  }

  #scriptedior {
    flex-grow: 1;
    overflow: hidden;
    background: #3b2e00;
  }

  .icnbtnrow {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding: 14px 20px;
    background: #2a2300;
    border-top: 2px solid #ffcc00;
  }

  /* Doge notification style */
  #doge-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ffcc00;
    color: #3b2e00;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-weight: 900;
    padding: 12px 18px;
    border-radius: 12px;
    box-shadow: 0 0 15px #ffcc0099;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
    z-index: 10000;
    user-select: none;
    max-width: 260px;
  }

  #doge-notification.show {
    opacity: 1;
    pointer-events: auto;
  }
</style>
</head>
<body>
  <div id="gui">
    <div class="topbar">
      Doge Executor - Much wow, very code
      <flexgrow></flexgrow>
      <a
        class="icnbtn"
        title="Reset Scripts - Such danger!"
        onclick="resetScripts()"
      >
        <span class="material-symbols-rounded">restart_alt</span>
      </a>
      <a
        class="icnbtn"
        title="Devtools (Eruda) - So inspect"
        onclick="execute(`(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init() } })();`)"
      >
        <span class="material-symbols-rounded">code</span>
      </a>
      <a
        class="icnbtn"
        title="Add New Script - Wow add"
        onclick="openEditor()"
      >
        <span class="material-symbols-rounded">add</span>
      </a>
    </div>

    <div class="scriptcontainer"></div>
  </div>

  <div class="editorpopup hide">
    <div class="editorcontainer">
      <input type="text" id="scriptname" placeholder="Script Name" />
      <textarea id="scriptedior" style="flex-grow:1; background:#3b2e00; color:#fff; border:none; padding:10px; font-family: monospace; font-size: 14px;"></textarea>
      <div class="icnbtnrow">
        <a
          class="icnbtn"
          title="Cancel - Much no"
          onclick="closeEditor()"
        >
          <span class="material-symbols-rounded">close</span>
        </a>
        <a
          class="icnbtn"
          title="Save Script - Very important"
          onclick="saveEditor()"
        >
          <span class="material-symbols-rounded">save</span>
        </a>
      </div>
    </div>
  </div>

  <div id="doge-notification"></div>

<script>
  // Doge messages for notifications
  const dogeMessages = [
    "Much execute!",
    "Very script!",
    "Wow, so code!",
    "Such run!",
    "Much power!",
    "Very wow!",
    "Much amaze!",
    "Wow such script!",
    "So magic!",
    "Much wowee!",
    "Very executee!",
    "Such fun!",
    "Much skills!",
    "Very much code!",
    "Wow, amaze!",
    "Much excite!",
    "So quick!",
    "Very wowzer!",
    "Much smart!",
    "Wow, wow, wow!"
  ];

  // Show Doge notification in top-right for 3 seconds
  function showDogeNotification(message) {
    const notif = document.getElementById("doge-notification");
    notif.textContent = message;
    notif.classList.add("show");

    clearTimeout(notif.hideTimeout);
    notif.hideTimeout = setTimeout(() => {
      notif.classList.remove("show");
    }, 3000);
  }

  // Run the given script code safely and show doge message
  function execute(code) {
    try {
      // Use new Function() to safely evaluate code, better than eval
      new Function(code)();

      // Pick random doge message to celebrate
      const msg = dogeMessages[Math.floor(Math.random() * dogeMessages.length)];
      showDogeNotification(msg);
    } catch (e) {
      alert("Oops! Such error: " + e.message);
    }
  }

  // Load saved scripts from localStorage
  function init() {
    const stored = localStorage.getItem("scripts");
    if (stored) {
      const scripts = JSON.parse(stored);
      scripts.forEach(({ name, code }) => addScript(name, code));
    } else {
      localStorage.setItem("scripts", JSON.stringify([]));
    }
  }

  // Clear and reload script list
  function reloadScripts() {
    document.querySelector(".scriptcontainer").innerHTML = "";
    init();
  }

  // Add a script button with delete and tooltip
  function addScript(scriptName, code) {
    const script = document.createElement("div");
    script.classList.add("script");

    const scriptNameDiv = document.createElement("div");
    scriptNameDiv.classList.add("scriptname");
    scriptNameDiv.textContent = scriptName;
    script.appendChild(scriptNameDiv);

    // Doge tooltip text on script name
    scriptNameDiv.title = "Very scripter";

    // Clicking runs the script
    scriptNameDiv.onclick = () => execute(code);

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("scriptdelete");
    deleteBtn.innerHTML = "✕";
    deleteBtn.title = "Much delete";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteScript(scriptName);
    };

    script.appendChild(deleteBtn);

    document.querySelector(".scriptcontainer").appendChild(script);
  }

  // Save script to localStorage, then reload
  function saveScript(scriptName, code) {
    const scripts = JSON.parse(localStorage.getItem("scripts"));
    scripts.push({ name: scriptName, code: code });
    localStorage.setItem("scripts", JSON.stringify(scripts));
    reloadScripts();
  }

  // Delete script and reload
  function deleteScript(scriptName) {
    const scripts = JSON.parse(localStorage.getItem("scripts"));
    const filtered = scripts.filter((s) => s.name !== scriptName);
    localStorage.setItem("scripts", JSON.stringify(filtered));
    reloadScripts();
  }

  // Reset all saved scripts with confirm
  function resetScripts() {
    if (confirm("Are you sure you want to clear all saved scripts? Such risk!")) {
      localStorage.setItem("scripts", JSON.stringify([]));
      reloadScripts();
    }
  }

  // Editor popup controls
  function openEditor() {
    document.querySelector(".editorpopup").classList.remove("hide");
    document.getElementById("scriptname").value = "";
    document.getElementById("scriptedior").value = "";
    document.getElementById("scriptname").focus();
  }

  function closeEditor() {
    document.querySelector(".editorpopup").classList.add("hide");
  }

  function saveEditor() {
    const nameInput = document.getElementById("scriptname");
    const codeInput = document.getElementById("scriptedior");

    const scriptName = nameInput.value.trim();
    const code = codeInput.value;

    if (!scriptName) {
      alert("Please enter a script name before saving. Much important!");
      nameInput.focus();
      return;
    }
    if (!code) {
      alert("Script code cannot be empty. Very empty!");
      codeInput.focus();
      return;
    }

    saveScript(scriptName, code);
    closeEditor();
  }

  // Init on page load
  init();
</script>
</body>
</html>
    `;

    win.document.write(htmlContent);
    win.document.close();

    window.addEventListener("message", function (event) {
      if (typeof event.data === "string" && event.data.startsWith("execute:")) {
        try {
          const script = event.data.slice("execute:".length);
          eval(script);
          showDogeNotification();
        } catch (error) {
          alert("Doge error: " + error.message);
        }
      }
    });

    const dogeMessages = [
      "Very script!",
      "Much wow!",
      "Such execute!",
      "Wow, so code!",
      "Much power!",
      "Very hack!",
      "Much skill!",
      "Such amaze!",
      "Wow, very run!",
      "Much debug!",
      "Very fast!",
      "Such epic!",
      "Wow, so neat!",
      "Much wowee!",
      "Such wowzers!",
      "Much code power!",
      "Very skillz!",
      "Much legend!",
      "Wow, very doge!",
      "Such script!"
    ];

    function showDogeNotification() {
      const msg = dogeMessages[Math.floor(Math.random() * dogeMessages.length)];
      let notif = document.createElement("div");
      notif.textContent = msg;
      notif.style.position = "fixed";
      notif.style.top = "12px";
      notif.style.right = "12px";
      notif.style.background = "#ffcc00";
      notif.style.color = "#3b2e00";
      notif.style.padding = "10px 16px";
      notif.style.borderRadius = "12px";
      notif.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
      notif.style.fontWeight = "900";
      notif.style.boxShadow = "0 0 10px #ffcc00aa";
      notif.style.zIndex = 9999999;
      notif.style.userSelect = "none";
      document.body.appendChild(notif);
      setTimeout(() => notif.remove(), 3000);
    }
  }
});

document.addEventListener("keyup", function (e) {
  keysPressed.delete(e.key.toLowerCase());
});

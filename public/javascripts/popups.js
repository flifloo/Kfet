export function alert(message) {
    return new Promise(next => {
        if (document.getElementById("popup-container"))
            throw new Error("Popup already exist !")
        document.querySelector("body").insertAdjacentHTML("afterend", `<div id="popup-container">
    <div id="popup">
        <h1>${message}</h1>
        <div id="popup-validation">
            <div class="container-contact2-form-btn">
                <div class="wrap-contact2-form-btn">
                    <div class="contact2-form-bgbtn"></div>
                    <a><button id="popup-ok" class="contact2-form-btn">Ok</button></a>
                </div>
            </div>
        </div>
    </div>
</div>`);
        document.getElementById("popup-ok").addEventListener("click", () => {
            document.getElementById("popup-container").remove();
            next();
        });
    });
}

export function confirm(message) {
    return new Promise(next => {
        if (document.getElementById("popup-container"))
            throw new Error("Popup already exist !")
        document.querySelector("body").insertAdjacentHTML("afterend", `<div id="popup-container">
    <div id="popup">
        <h1>${message}</h1>
        <div id="popup-validation">
            <div class="container-contact2-form-btn">
                <div class="wrap-contact2-form-btn">
                    <div class="contact2-form-bgbtn"></div>
                    <a><button id="popup-cancel" class="contact2-form-btn">Cancel</button></a>
                </div>
            </div>
            <div class="container-contact2-form-btn">
                <div class="wrap-contact2-form-btn">
                    <div class="contact2-form-bgbtn"></div>
                    <a><button id="popup-ok" class="contact2-form-btn">Ok</button></a>
                </div>
            </div>
        </div>
    </div>
</div>`);
        document.getElementById("popup-ok").addEventListener("click", () => {
            document.getElementById("popup-container").remove();
            next(true);
        });
        document.getElementById("popup-cancel").addEventListener("click", () => {
            document.getElementById("popup-container").remove();
            next(false);
        });
    });
}

export function prompt(message, inputArgs) {
    return new Promise(next => {
        if (document.getElementById("popup-container"))
            throw new Error("Popup already exist !")
        document.querySelector("body").insertAdjacentHTML("afterend", `<div id="popup-container">
    <div id="popup">
        <h1>${message}</h1>
        <div class="wrap-input2">
            <input class="input2" ${inputArgs ? inputArgs: 'type="text"'}>
        </div>
        <div id="popup-validation">
            <div class="container-contact2-form-btn">
                <div class="wrap-contact2-form-btn">
                    <div class="contact2-form-bgbtn"></div>
                    <a><button id="popup-cancel" class="contact2-form-btn">Cancel</button></a>
                </div>
            </div>
            <div class="container-contact2-form-btn">
                <div class="wrap-contact2-form-btn">
                    <div class="contact2-form-bgbtn"></div>
                    <a><button id="popup-ok" class="contact2-form-btn">Ok</button></a>
                </div>
            </div>
        </div>
    </div>
</div>`);
        document.getElementById("popup-ok").addEventListener("click", () => {
            let val = document.querySelector("#popup input").value
            document.getElementById("popup-container").remove();
            next(val);
        });
        document.getElementById("popup-cancel").addEventListener("click", () => {
            document.getElementById("popup-container").remove();
            next(null);
        });
    });
}

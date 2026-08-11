/* Remove old form data from URL */

if (window.location.search) {
    window.history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.hash
    );
}

/* =========================================================
PRATIMA GOPE - PORTFOLIO
MAIN JAVASCRIPT
========================================================= */

/* =========================================================
MOBILE NAVIGATION
========================================================= */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

```
menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});
```

}

/* =========================================================
CLOSE MOBILE MENU AFTER CLICKING NAV LINK
========================================================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

```
link.addEventListener("click", function () {

    if (navbar) {
        navbar.classList.remove("active");
    }

    if (menuBtn) {

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});
```

});

/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const sendMessageBtn = document.getElementById("sendMessageBtn");

if (contactForm && sendMessageBtn) {

    sendMessageBtn.addEventListener("click", function () {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all the fields.");

            return;
        }

        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


/* =========================================================
CURRENT YEAR IN FOOTER
========================================================= */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

```
const currentYear = new Date().getFullYear();

footerYear.innerHTML =
    "&copy; " + currentYear +
    " Pratima Gope. All Rights Reserved.";
```

}

/* =========================================================
CERTIFICATE IMAGE ERROR HANDLING
========================================================= */

const certificateImages =
document.querySelectorAll(".certificate-image img");

certificateImages.forEach(function (image) {

```
image.addEventListener("error", function () {

    image.style.display = "none";

    const parent = image.parentElement;

    if (parent) {

        parent.innerHTML =
            "<p style='color:#777; text-align:center;'>" +
            "Certificate image could not be loaded." +
            "</p>";

    }

});
```

});

/* =========================================================
PROFILE IMAGE ERROR HANDLING
========================================================= */

const profileImages =
document.querySelectorAll(".profile-circle img");

profileImages.forEach(function (image) {

```
image.addEventListener("error", function () {

    image.style.display = "none";

});
```

});

/* =========================================================
CONSOLE MESSAGE
========================================================= */

console.log(
"Pratima Gope Portfolio loaded successfully."
);

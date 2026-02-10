/* =========================
   EmailJS Initialization
   ========================= */

// OLD
// (function () {
//   emailjs.init("gMf40xF0SYQhX9_sx");
// })();

// NEW
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("KuELqMK6_WcnBpOc8");

  const form = document.getElementById("contact");
  const submitBtn = document.getElementById("form-submit");

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Prevent spam clicking
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    emailjs.sendForm(
      "service_v8o65xv",
      "template_sjc62yu",
      this
    ).then(
      function () {
        submitBtn.innerText = "Sent ✓";
        form.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerText = "Send Now";
        }, 2000);
      },
      function (error) {
        console.error(error);
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Failed";
      }
    );
  });
});


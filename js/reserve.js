/* =========================================================
   270° ROOFTOP — Reserve page
   ========================================================= */
(function () {
  "use strict";

  const reserveForm = document.getElementById("reserveForm");
  if (!reserveForm) return;

  const rDate = document.getElementById("rDate");
  const today = new Date().toISOString().split("T")[0];
  rDate.min = today;
  rDate.value = today;

  const rGuests = document.getElementById("rGuests");
  rGuests.innerHTML =
    '<option value="">#</option>' +
    Array.from({ length: 10 }, (_, i) => i + 1).map((n) => `<option>${n}${n === 10 ? "+" : ""}</option>`).join("");

  const confirmModal = document.getElementById("confirmModal");
  const confirmCode = document.getElementById("confirmCode");
  const confirmDetails = document.getElementById("confirmDetails");

  function setFieldError(field, msg) {
    const wrap = field.closest(".field");
    wrap.classList.toggle("invalid", !!msg);
    wrap.querySelector(".error-msg").textContent = msg || "";
  }

  function validateForm() {
    let valid = true;
    const name = reserveForm.name;
    const phone = reserveForm.phone;
    const email = reserveForm.email;
    const date = reserveForm.date;
    const time = reserveForm.time;
    const guests = reserveForm.guests;

    if (name.value.trim().length < 2) { setFieldError(name, "Please enter your full name"); valid = false; }
    else setFieldError(name, "");

    const phoneDigits = phone.value.replace(/\D/g, "");
    if (phoneDigits.length < 9) { setFieldError(phone, "Enter a valid phone number"); valid = false; }
    else setFieldError(phone, "");

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { setFieldError(email, "Enter a valid email"); valid = false; }
    else setFieldError(email, "");

    if (!date.value) { setFieldError(date, "Pick a date"); valid = false; }
    else setFieldError(date, "");

    if (!time.value) { setFieldError(time, "Pick a time"); valid = false; }
    else setFieldError(time, "");

    if (!guests.value) { setFieldError(guests, "Select guests"); valid = false; }
    else setFieldError(guests, "");

    return valid;
  }

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  }

  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) {
      window.showToast("Please fix the highlighted fields");
      return;
    }
    const submitBtn = reserveForm.querySelector(".btn-full");
    submitBtn.classList.add("loading");

    setTimeout(() => {
      submitBtn.classList.remove("loading");
      const code = "270-" + Math.floor(100000 + Math.random() * 900000);
      const booking = {
        code,
        name: reserveForm.name.value.trim(),
        phone: reserveForm.phone.value.trim(),
        date: reserveForm.date.value,
        time: reserveForm.time.value,
        guests: reserveForm.guests.value,
        occasion: reserveForm.occasion.value,
      };
      localStorage.setItem("r270-booking", JSON.stringify(booking));

      confirmCode.textContent = code;
      confirmDetails.innerHTML = `
        <div><strong>${booking.name}</strong></div>
        <div>${formatDate(booking.date)} at ${booking.time}</div>
        <div>${booking.guests} guest${booking.guests > 1 ? "s" : ""}${booking.occasion ? " · " + booking.occasion : ""}</div>
      `;
      confirmModal.classList.remove("hidden");
      if (window.r270RenderUpcoming) window.r270RenderUpcoming();
      reserveForm.reset();
      rDate.value = today;
    }, 900);
  });

  document.getElementById("modalClose").addEventListener("click", () => confirmModal.classList.add("hidden"));
  document.getElementById("modalDone").addEventListener("click", () => confirmModal.classList.add("hidden"));
  document.getElementById("modalNewBooking").addEventListener("click", () => {
    confirmModal.classList.add("hidden");
    document.getElementById("rName").focus();
  });
  confirmModal.addEventListener("click", (e) => { if (e.target === confirmModal) confirmModal.classList.add("hidden"); });
})();

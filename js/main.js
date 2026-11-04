/* My Nail Paradise — interactions. Progressive enhancement: content is visible without JS. */
(function () {
  "use strict";

  /* Mobile nav */
  var head = document.querySelector(".site-head");
  var toggle = document.querySelector(".menu-toggle");
  if (toggle && head) {
    toggle.addEventListener("click", function () {
      var open = head.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Reveal on scroll */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".rv");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* Service tabs */
  document.querySelectorAll("[data-tabs]").forEach(function (wrap) {
    var btns = wrap.querySelectorAll(".tab-btn");
    var panels = wrap.querySelectorAll(".tab-panel");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btns.forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        panels.forEach(function (p) { p.classList.remove("active"); });
        btn.setAttribute("aria-selected", "true");
        var panel = wrap.querySelector("#" + btn.getAttribute("aria-controls"));
        if (panel) panel.classList.add("active");
      });
    });
  });

  /* Pricing filter */
  document.querySelectorAll("[data-price-filter]").forEach(function (wrap) {
    var btns = wrap.querySelectorAll(".tab-btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        btns.forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        btn.setAttribute("aria-selected", "true");
        wrap.querySelectorAll("[data-cat]").forEach(function (card) {
          card.style.display = (f === "all" || card.getAttribute("data-cat") === f) ? "" : "none";
        });
      });
    });
  });

  /* Booking flow */
  var flow = document.getElementById("bookFlow");
  if (flow) {
    var steps = Array.prototype.slice.call(flow.querySelectorAll(".bstep"));
    var bars = Array.prototype.slice.call(document.querySelectorAll(".book-steps .b"));
    var state = { service: "", date: "", time: "", name: "", phone: "", notes: "" };
    var idx = 0;

    function paint() {
      steps.forEach(function (s, i) { s.classList.toggle("active", i === idx); });
      bars.forEach(function (b, i) {
        b.classList.toggle("on", i === idx);
        b.classList.toggle("done", i < idx);
      });
      var sum = document.getElementById("bookSummary");
      if (sum && idx === 2) {
        sum.innerHTML =
          "<p><strong>Service:</strong> " + esc(state.service || "—") + "</p>" +
          "<p><strong>Preferred:</strong> " + esc(state.date || "—") + (state.time ? " · " + esc(state.time) : "") + "</p>";
      }
      flow.querySelector(".bstep.active").scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    function esc(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }

    flow.querySelectorAll(".opt[data-service]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        flow.querySelectorAll(".opt[data-service]").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        state.service = btn.getAttribute("data-service");
      });
    });

    flow.querySelectorAll("[data-next]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (idx === 0 && !state.service) { shake(flow); return; }
        if (idx === 1) {
          var d = document.getElementById("fDate"), t = document.getElementById("fTime");
          var ok = true;
          if (!d.value) { markInvalid(d, true); ok = false; } else { markInvalid(d, false); }
          if (!t.value) { markInvalid(t, true); ok = false; } else { markInvalid(t, false); }
          if (!ok) return;
          state.date = d.value; state.time = t.value;
        }
        if (idx < steps.length - 1) { idx++; paint(); }
      });
    });
    flow.querySelectorAll("[data-back]").forEach(function (btn) {
      btn.addEventListener("click", function () { if (idx > 0) { idx--; paint(); } });
    });

    function markInvalid(input, bad) {
      var f = input.closest(".field");
      if (f) f.classList.toggle("invalid", bad);
      input.setAttribute("aria-invalid", bad ? "true" : "false");
    }
    function shake(el) {
      el.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }],
        { duration: 260, easing: "ease-out" }
      );
    }

    var form = document.getElementById("bookForm");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var name = document.getElementById("fName"), phone = document.getElementById("fPhone"), consent = document.getElementById("fConsent");
        var ok = true;
        if (!name.value.trim()) { markInvalid(name, true); ok = false; } else markInvalid(name, false);
        if (!/^[+\d][\d\s\-()]{5,}$/.test(phone.value.trim())) { markInvalid(phone, true); ok = false; } else markInvalid(phone, false);
        if (!consent.checked) { ok = false; consent.focus(); }
        if (!ok) return;
        state.name = name.value.trim(); state.phone = phone.value.trim();
        state.notes = document.getElementById("fNotes").value.trim();
        document.getElementById("bookSteps").style.display = "none";
        document.getElementById("bookDone").style.display = "block";
        document.getElementById("doneName").textContent = state.name;
        document.getElementById("doneDetail").textContent =
          (state.service || "your treatment") + " · " + (state.date || "") + (state.time ? " at " + state.time : "");
      });
    }
    paint();
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

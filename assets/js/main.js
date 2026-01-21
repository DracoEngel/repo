document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("hidden");
    });

    // Close menu when clicking a link
    menu.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") {
        btn.setAttribute("aria-expanded", "false");
        menu.classList.add("hidden");
      }
    });
  }

  // Chart init (guarded)
  const canvas = document.getElementById("impactChart");
  if (canvas && window.Chart) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // eslint-disable-next-line no-undef
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Semana 1", "Semana 4", "Semana 8", "Semana 12"],
        datasets: [
          {
            label: "Capacidad Operativa (Bots)",
            data: [100, 400, 1200, 3500],
            borderColor: "#2563eb",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });
  }
});



const logo = document.querySelector('.topbar .logo');
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
  sidebar.classList.remove('hide');
});

logo.addEventListener('click', () => {
  sidebar.classList.add('hide');
  sidebar.classList.remove('active');
});

// ======= RIGHT SIDEBAR (category) =======
const categorySidebar = document.getElementById("categorySidebar");
const openCategoryBtn = document.getElementById("openCategoryBtn");
const closeCategoryBtn = document.getElementById("closeSidebar");

if (openCategoryBtn && categorySidebar) {
  openCategoryBtn.addEventListener("click", () => {
    categorySidebar.classList.add("active");
  });
}

if (closeCategoryBtn && categorySidebar) {
  closeCategoryBtn.addEventListener("click", () => {
    categorySidebar.classList.remove("active");
  });
}


const ctx = document.getElementById("salesChart");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [{
      label: "Revenue($)",
      data: [300, 470, 900, 1050, 370, 600, 500],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 0.7,
      fill: false,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return '$' + value;
          }
        }
      }
    },
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: {
        callbacks: {
          label: function (context) {
            return '$' + context.parsed.y;
          }
        }
      }
    }
  }
});

// 🌟 JavaScript for Toggling the Pop-up 🌟
document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openPopup');
    const closeButton = document.getElementById('closePopup');
    const popup = document.getElementById('categoryPopup');
    openButton.addEventListener('click', () => {
        popup.classList.add('active');
    });

    function closePopup() {
         popup.classList.remove('active');
    }
    closeButton.addEventListener('click', closePopup);

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
});
 const searchBox = document.getElementById('searchBox');
  const tbody = document.getElementById('tableBody');
  searchBox.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    Array.from(tbody.rows).forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(q) ? '' : 'none';
    });
  });


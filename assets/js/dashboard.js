$(function () {


  // =====================================
  // Profit
  // =====================================
  var profit = {
    series: [
      {
        name: "Profit",
        data: [18, 7, 15, 29, 18, 18, 7, 15, 29, 18, 12, 9],
      },
      {
        name: "Expenses",
        data: [-13, -18, -9, -14, -15, -13, -18, -9, -14, -5, -17, -15],
      },
    ],
    colors: ["var(--bs-primary)", "#fb977d"],
    chart: {
      type: "bar",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      width: "100%",
      height: 350,
      stacked: true,
      toolbar: {
        show: !1,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 6,
      colors: ["transparent"],
    },

    grid: {
      borderColor: "transparent",
      padding: { top: 0, bottom: -8, left: 20, right: 20 },
    },
    tooltip: {
      theme: "dark",
    },
    toolbar: {
      show: false,
    },
    xaxis: {
      categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  var chart = new ApexCharts(document.querySelector("#profit"), profit);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var grade = {
    series: [5368, 3500, 4106],
    labels: ["5368", "Refferal Traffic", "Oragnic Traffic"],
    chart: {
      height: 170,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#c6d1e9",
    },

    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },

    colors: ["#e7ecf0", "#fb977d", "var(--bs-primary)"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    stroke: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          background: "none",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "12px",
              color: undefined,
              offsetY: 5,
            },
            value: {
              show: false,
              color: "#98aab4",
            },
          },
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#grade"), grade);
  chart.render();




  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#8763da",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})
// =====================================
// selected input 
// =====================================

//submit form when inter value in input "veiw per page" 
function submitForm(formId) {
  document.getElementById(formId).submit();
}

//select all rows and show numbers row checked 
document.getElementById('selectAllAuthors').addEventListener('change', function () {
  var authorCheckboxes = document.getElementsByClassName('author');
  for (var i = 0; i < authorCheckboxes.length; i++) {
    authorCheckboxes[i].checked = this.checked;
  }
  //show buttons when check all row
  var controls = document.getElementById('controls');
  controls.style.display = this.checked ? 'table-cell' : 'none';
  updateAuthorCount();
});

var authorCheckboxes = document.getElementsByClassName('author');
for (var i = 0; i < authorCheckboxes.length; i++) {
  authorCheckboxes[i].addEventListener('change', function () {
    updateAuthorCount();
  });
}

function updateAuthorCount() {
  var checkedCount = document.querySelectorAll('input[class="author"]:checked').length;
  document.getElementById('authorCount').textContent = checkedCount + " selected";
}

//change color span status when textContent changes
var statuses = document.getElementsByClassName("status-text");

for (var i = 0; i < statuses.length; i++) {
  var content = statuses[i].textContent.trim().toLowerCase();

  if (content === "available") {
    statuses[i].classList.add("bg-light-success", "text-success");
  }
  else if (content === "completed") {
    statuses[i].classList.add("bg-light-primary", "text-primary");
  } else if (content === "deactivated") {
    statuses[i].classList.add("bg-light-danger", "text-danger");
  } else if (content === "upcoming") {
    statuses[i].classList.add("bg-light-warning", "text-warning");
  }
}

//change color input status when selected 
var selectElement = document.getElementById("status-select");
var selectClass = 'select-input-status ';
var options = selectElement.options;
for (var i = 0; i < options.length; i++) {
  if (options[i].value == 'available' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-success rounded-pill text-success px-3 py-2 fs-3 text-center';
  }
  else if (options[i].value == 'upcoming' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-warning rounded-pill text-warning px-3 py-2 fs-3 text-center';
  }
  else if (options[i].value == 'deactivated' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-danger rounded-pill text-danger px-3 py-2 fs-3 text-center';
  }
  else if (options[i].value == 'completed' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-primary rounded-pill text-primary px-3 py-2 fs-3 text-center';
  }
}

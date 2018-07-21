function query(id) {
    document.getElementById(id).click();
};

function fill_form(id, content) {
    document.getElementById(id).value = content; 
};

function dropdown_select(id, content) {
    document.getElementById(id).innerHTML = content + ' <span class="caret"></span>';
};

var scroll = new SmoothScroll('a[href*="#"]');

var rank_market_cap_chart = new Chart(document.getElementById("rank_market_cap_chart"), {
    type: 'horizontalBar',
    data: {
        labels: company_name_array,
        datasets: [{
            label: "市值",
            data: market_cap_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: '',
        },
    }
});

var rank_industry_overview_chart = new Chart(document.getElementById("rank_industry_overview_chart"), {
    type: 'doughnut',
    data: {
        labels: industry_array,
        datasets: [{
            label: "資訊硬體",
            data: industry_percentage_array,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', 
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)', 
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)', 
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
        },
    ],
    },
    options: {
        responsive: true,
        legend: {
            display: true,
        },
        scales: {
            xAxes: [{
                display: true,
            }],
            yAxes: [{
                display: false,
            }]
        },
        title: {
            display: true,
            text: '',
        },
    }
});

var rank_industry_chart = new Chart(document.getElementById("rank_industry_chart"), {
    type: 'bar',
    data: {
        labels: date_array,
        datasets: [{
            label: "資訊硬體",
            data: industry0_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },{
            label: "電商",
            data: industry1_array,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },{
            label: "網路服務",
            data: industry2_array,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },{
            label: "軟體",
            data: industry3_array,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },{
            label: "半導體",
            data: industry4_array,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },{
            label: "電信",
            data: industry5_array,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
        },{
            label: "通訊設備",
            data: industry6_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },{
            label: "材料",
            data: industry7_array,
            backgroundColor:  'rgba(54, 162, 235, 0.2)',
        },{
            label: "工業",
            data: industry8_array,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },{
            label: "電子",
            data: industry9_array,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },{
            label: "機電設備",
            data: industry10_array,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },{
            label: "資訊服務",
            data: industry11_array,
            backgroundColor: 'rgba(255, 159, 64, 0.2)'
        },{
            label: "儲存",
            data: industry12_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },{
            label: "保全系統",
            data: industry13_array,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },{
            label: "電子電路",
            data: industry14_array,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },
    ],
    },
    options: {
        responsive: true,
        legend: {
            display: true,
        },
        scales: {
            xAxes: [{
               stacked: true,
            }],
            yAxes: [{
               stacked: true,
               ticks: {
            }
            }]
        },
        title: {
            display: true,
            text: '',
        },
    }
});

var rank_industry_compare_chart = new Chart(document.getElementById("rank_industry_compare_chart"), {
    type: 'bar',
    data: {
        labels: season_array,
        datasets: [{
            label: "資訊硬體",
            data: industry0_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },{
            label: "電商",
            data: industry1_array,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },{
            label: "網路服務",
            data: industry2_array,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },{
            label: "軟體",
            data: industry3_array,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },{
            label: "半導體",
            data: industry4_array,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },{
            label: "電信",
            data: industry5_array,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
        },{
            label: "通訊設備",
            data: industry6_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },{
            label: "材料",
            data: industry7_array,
            backgroundColor:  'rgba(54, 162, 235, 0.2)',
        },{
            label: "工業",
            data: industry8_array,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },{
            label: "電子",
            data: industry9_array,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },{
            label: "機電設備",
            data: industry10_array,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },{
            label: "資訊服務",
            data: industry11_array,
            backgroundColor: 'rgba(255, 159, 64, 0.2)'
        },{
            label: "儲存",
            data: industry12_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },{
            label: "保全系統",
            data: industry13_array,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },{
            label: "電子電路",
            data: industry14_array,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },
    ],
    },
    options: {
        responsive: true,
        legend: {
            display: true,
        },
        scales: {
            xAxes: [{
               stacked: false,
            }],
            yAxes: [{
               stacked: false,
               ticks: {
            }
            }]
        },
        title: {
            display: true,
            text: '',
        },
    }
});

var rank_industry_trend_chart = new Chart(document.getElementById("rank_industry_trend_chart"), {
    type: 'line',
    data: {
        labels: date_array,
        datasets: [{
            label: "資訊硬體",
            data: industry0_array,
            borderColor: 'rgba(255, 99, 132, 0.2)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
        },{
            label: "電商",
            data: industry1_array,
            borderColor: 'rgba(54, 162, 235, 0.2)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
        },{
            label: "網路服務",
            data: industry2_array,
            borderColor: 'rgba(255, 206, 86, 0.2)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: false,
        },{
            label: "軟體",
            data: industry3_array,
            borderColor: 'rgba(75, 192, 192, 0.2)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
        },{
            label: "半導體",
            data: industry4_array,
            borderColor: 'rgba(153, 102, 255, 0.2)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: false,
        },{
            label: "電信",
            data: industry5_array,
            borderColor: 'rgba(255, 159, 64, 0.2)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            fill: false,
        },{
            label: "通訊設備",
            data: industry6_array,
            borderColor: 'rgba(255, 99, 132, 0.2)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
        },{
            label: "材料",
            data: industry7_array,
            borderColor:  'rgba(54, 162, 235, 0.2)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
        },{
            label: "工業",
            data: industry8_array,
            borderColor: 'rgba(255, 206, 86, 0.2)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: false,
        },{
            label: "電子",
            data: industry9_array,
            borderColor: 'rgba(75, 192, 192, 0.2)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
        },{
            label: "機電設備",
            data: industry10_array,
            borderColor: 'rgba(153, 102, 255, 0.2)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: false,
        },{
            label: "資訊服務",
            data: industry11_array,
            borderColor: 'rgba(255, 159, 64, 0.2)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            fill: false,
        },{
            label: "儲存",
            data: industry12_array,
            borderColor: 'rgba(255, 99, 132, 0.2)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
        },{
            label: "保全系統",
            data: industry13_array,
            borderColor: 'rgba(54, 162, 235, 0.2)',            
            backgroundColor: 'rgba(54, 162, 235, 0.2)',            
        },{
            label: "電子電路",
            data: industry14_array,
            borderColor: 'rgba(255, 206, 86, 0.2)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },
    ],
    },
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        responsive: true,
        legend: {
            display: true,
        },
        scales: {
            xAxes: [{
               stacked: false,
            }],
            yAxes: [{
               stacked: false,
               ticks: {
            }
            }]
        },
        title: {
            display: true,
            text: '',
        },
    }
});
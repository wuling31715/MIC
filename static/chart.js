alert(2)
function query(id) {
    document.getElementById(id).click();
};

function fill_form(id, content) {
    document.getElementById(id).value = content; 
}

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
                max: 4000000000000000,
            }
            }]
        },
        title: {
            display: true,
            text: '',
        },
    }
});
alert(3)
alert(324)

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


var ctx = document.getElementById("top100_chart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: company_name_array,
        datasets: [{
            label: "",
            data: market_cap_array,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: '',
        },
    }
});
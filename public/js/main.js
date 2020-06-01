const numbers_url = './numbers.txt';
const dates_url = './dates.txt';
//declare var globalNumbers
const getNumbers = () => {
    return fetch(numbers_url).then(res => {
        return res.text();
    }).then(text => {
        const numbers = JSON.parse(text);
        //console.log("FROM FETCH",numbers)
        return numbers;
    });
};
const getDates = () => {
    return fetch(dates_url).then(res => {
        return res.text();
    }).then(text => {
        const dates = JSON.parse(text);
        return dates;
    });
};
const initializeGraph = async () => {
    const user_numbers = await getNumbers();
    const user_dates = await getDates();
    console.log(user_numbers);
    console.log(user_dates);
    displayGraph(user_dates, user_numbers);
};
//.then() is passing the data into the NEXT function
const displayGraph = (user_dates, user_numbers) => {
    //console.log("FROM GRAPH", graphnumbers)
    const canvas = document.getElementById('line-chart');
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: user_dates,
            datasets: [{
                    fill: false,
                    borderColor: 'rgb(255,99,132)',
                    data: user_numbers
                }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Kloak platform total users'
            },
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            stepSize: 10
                        },
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of total users'
                        },
                    },
                ],
            },
        },
    });
};
initializeGraph();
//console.log(graphnumbers)

const numbers_url = './numbers.txt';
const dates_url = './dates.txt';
const getNumbers = () => {
    return fetch(numbers_url).then(res => {
        return res.text();
    }).then(text => {
        const numbers = JSON.parse(text);
        console.log("FROM FETCH", numbers);
        return numbers;
    });
};
const storeNumbers = async () => {
    globalNumbers = await getNumbers();
    console.log(globalNumbers);
};
/*const getNumbers = () => {
   return fetch(numbers_url).then(res => {
        return res.text()
    }).then(text => {
        const numbers = JSON.parse(text)
        console.log("FROM FETCH",numbers)
        return numbers

        
    })
    }

const storeNumbers = async () => {
    const globalNumbers = console.log(await getNumbers())
    displayGraph(globalNumbers)
    

}*/
//.then() is passing the data into the NEXT function
/*getNumbersandDates = () => {
    Promise.all([
        fetch(numbers_url),
        fetch(dates_url)

    ]).then((res) => {
        return res.map(function(res)
        {return res.text()})
    }).then((text) => {
        console.log('from promise.all', text)
        const [numbers, dates] = text
        //const graph_numbers = JSON.parse(numbers)
        //const graph_dates = JSON.parse(dates)
        console.log(graph_numbers)
        console.log(graph_dates)
        //displayGraph(graph_numbers,graph_dates)
    })
}*/
const displayGraph = (graphnumbers) => {
    console.log("FROM GRAPH", graphnumbers);
    const canvas = document.getElementById('line-chart');
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5'],
            datasets: [{
                    fill: false,
                    borderColor: 'rgb(255,99,132)',
                    data: graphnumbers
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
const graphnumbers = storeNumbers();
console.log(graphnumbers);
displayGraph(graphnumbers);

var ctx = document.getElementById('KloakUserChartbrowser').getContext('2d');
            console.log('hi', ctx)
            var Kloak_User_Chart_Browser = new Chart(ctx, {
                type: 'line',
                data : {
                    labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5'],
                    datasets: [{
                        fill: false,
                        borderColor: 'rgb(255,99,132)',
                        data : [10, 20, 30, 40, 50]
                    }]
                },
                    options: {
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Kloak platform total users'
                        },
                        scales : {
                            xAxes : [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Month'
                                }
                            }],
                            yAxes : [{
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

            })
            
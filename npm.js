const moment = require('moment');
// import moment from 'moment';

const Chart = require('chart.js');
const emoji = require('emoji-wine-glass');

let date = moment().format('LLLL');
document.querySelector('.date').innerHTML = date + emoji


document.addEventListener("DOMContentLoaded", function (event) {

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Eugenii ' + emoji, 'Irina ' + emoji, 'Vera ' + emoji, 'Vassily ' + emoji, 'Mikhail ' + emoji, 'Alexey'],
            datasets: [{
                label: 'glasses a week',
                data: [10, 12, 3, 5, 2, 0],
                backgroundColor: [
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)'
                ],
                borderColor: [
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)',
                    'rgba(128, 0, 0)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }


            }

        }

    });

    const ctx1 = document.getElementById('myChart1').getContext('2d');
    const myChart1 = new Chart(ctx1, {
        type: 'radar',
        data: {
            labels: ['Eugenii', 'Irina', 'Vera', 'Vassily', 'Mikhail', 'Alexey'],
            datasets: [{
                label: 'well-being on a ten-point system',
                data: [5, 6, 5, 3, 9, 10],
                backgroundColor: [
                    'rgba(128, 0, 0)',
                    'rgba(25, 25, 112)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true

                }
            }
        }
    });

    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Eugenii', 'Irina', 'Vera', 'Vassily', 'Mikhail', 'Alexey'],
            datasets: [{
                label: 'Age',
                data: [40, 43, 58, 67, 22, 6],
                backgroundColor: [
                    'rgba(128, 0, 0)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {

                }
            }
        }
    });

})
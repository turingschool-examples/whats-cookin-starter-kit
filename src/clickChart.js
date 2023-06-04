import Chart from 'chart.js/auto';
import { pageData } from './apiCalls';
import { sortByHits } from './recipes';

const makeRecipeClickChart = () => {
    const chartContainer = document.querySelector('#chartContainer');
    chartContainer.innerHTML = `<canvas id="clickChart"></canvas>`;
    const sortedRecipes = sortByHits(pageData.allRecipes).slice(0, 9);
    new Chart(document.querySelector('#clickChart'),
        {
            type: 'bar',
            data: {
                labels: sortedRecipes.map(recipe => splitLabelLength(recipe.name)),
                fontColor: 'white',
                datasets: [
                    {
                        label: 'Hits',
                        data: sortedRecipes.map(recipe => recipe.hits),
                        borderColor: '#fbbf83',
                        backgroundColor: '#fbbf83',
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                elements: {
                    bar: {
                        borderWidth: 2,
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Recipes by Number of Clicks',
                        color: 'white'
                    }
                },
                scales: {
                    x: {
                        ticks:{
                            display: true,
                            color: 'white',
                            stepSize: 1
                        }
                    },
                    y: {
                        ticks:{
                            display: true,
                            color: 'white',
                            autoSkip: false
                        }
                    },
                },
                tooltips:{
                    mode:'index'
                }
            }
        }
    );
}

const splitLabelLength = (recipeName) => {
    if (recipeName.split(' ').length > 3) {
        return recipeName.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,2}\b/g);
    } else {
        return recipeName;
    }
}

export { makeRecipeClickChart }

import Chart from 'chart.js/auto';
import { pageData } from './apiCalls';
import { sortByHits } from './recipes';

const makeRecipeClickChart = () => {
    const chartContainer = document.querySelector('#chartContainer');
    chartContainer.innerHTML = `<canvas id="clickChart"></canvas>`;
    const sortedRecipes = sortByHits(pageData.allRecipes).slice(0, 10);
    new Chart(document.querySelector('#clickChart'),
        {
            type: 'bar',
            data: {
                labels: sortedRecipes.map(recipe => splitRecipeName(recipe.name)),
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
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Top 10 Recipes by Clicks',
                        font: {
                            size: 40
                        },
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

const splitRecipeName = recipeName => {
    const splitRecipeName = recipeName.split(" ");
    const recipeNameArray = [];
    let threeWordString;
    const numberOfWords = splitRecipeName.length;

    for (var i = 0; i < numberOfWords/3; i++) {
        if (!splitRecipeName.length < 3) {
            threeWordString = splitRecipeName.splice(0,3).join(" ");
        } else {
            threeWordString = splitRecipeName.splice(0, splitRecipeName.length - 1).join(" ");
        }

        recipeNameArray.push(threeWordString);
    }

    return recipeNameArray;
}

export { makeRecipeClickChart }

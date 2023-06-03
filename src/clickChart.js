import Chart from 'chart.js/auto'

  new Chart(
    document.getElementById('clickChart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Recipes by Number of Clicks',
            data: data.map(row => row.count),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            options: {
                indexAxis: 'y',
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each horizontal bar to be 2px wide
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
                    text: 'Recipes by Number of Clicks'
                    }
                }
            },
          }
        ]
      }
    }
  );
  
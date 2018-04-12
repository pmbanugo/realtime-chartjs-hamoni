let hamoni = new Hamoni(
  "13a54c4a-a6ee-431f-b865-51c73f36c218",
  "f0e4f758d8f74b2c9b767af1d6c24921"
);

hamoni
  .connect()
  .then(response => {
    // -- Set new default font family and font color to mimic Bootstrap's default styling
    // Chart.defaults.global.defaultFontFamily =
    //   '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    // Chart.defaults.global.defaultFontColor = "#292b2c";

    // -- Bar Chart Example
    hamoni
      .get("election")
      .then(statePrimitive => {
        console.log("state retrieved");

        renderChart(statePrimitive.get());

        statePrimitive.onUpdated(state => {
          renderChart(state);
        });
      })
      .catch(console.log);
  })
  .catch(error => console.log(error));

function renderChart(state) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",
    // The data for our dataset
    data: {
      labels: state.map(s => s.candidate),
      datasets: [
        {
          label: "Elections 2018",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: state.map(s => s.vote)
        }
      ]
    },
    // Configuration options go here
    options: {
      scales: {
        xAxes: [
          {
            time: {
              unit: "Vote"
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 30,
              maxTicksLimit: 10
            },
            gridLines: {
              display: true
            }
          }
        ]
      },
      legend: {
        display: true
      }
    }
  });
}

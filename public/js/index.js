function renderChart(state) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",
    // The data for our dataset
    data: {
      labels: state.map((s) => s.candidate),
      datasets: [
        {
          label: "Elections 2018",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: state.map((s) => s.vote),
        },
      ],
    },
    // Configuration options go here
    options: {
      scales: {
        xAxes: [
          {
            time: {
              unit: "Vote",
            },
            gridLines: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 6,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 30,
              maxTicksLimit: 10,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      legend: {
        display: true,
      },
    },
  });
}

async function execute() {
  const accountId = "YOUR_ACCOUNT_ID";
  const appId = "YOUR_APP_ID";

  const response = await fetch("https://api.sync.hamoni.tech/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ accountId, appId }),
  });

  const token = await response.json();

  let hamoni = new Hamoni(token);

  hamoni
    .connect()
    .then((response) => {
      hamoni
        .get("election2018")
        .then((statePrimitive) => {
          console.log("state retrieved");

          renderChart(statePrimitive.get());

          statePrimitive.onUpdated((state) => renderChart(state));
        })
        .catch(console.log);
    })
    .catch((error) => console.log(error));
}

execute();

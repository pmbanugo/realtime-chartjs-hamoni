# realtime-chartjs-hamoni

real-time chart using ChartJS and Hamoni Sync - Blogged about on [Dev.to](https://dev.to/pmbanugo/real-time-chart-in-javascript-with-chartjs-and-hamoni-sync-1nkb)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_271D2C4415082D830A5E129B885A0502958EA9373BF02DC765D6BC3010DA0C13_1523603994116_hamoni-chartjs.gif)

# Setup

1.  Clone this repo - `https://github.com/pmbanugo/realtime-chartjs-hamoni.git`
2.  Install dependencies - `npm install`
3.  Login to [Hamoni dashboard](dashboard.hamoni.tech) and copy your app and account ID. If you don't already have one, you need to register and create an app when you login.
4.  Open server.js and go to line 43. Replace the string placeholder with your app and account ID.
5.  Open index.js located in the directory **public/js**. Replace the placeholder for a hamoni account and app ID with your account and app ID copied from your dashboard.
6.  Start the app - `npm start`
7.  Open your browser and navigate to [localhost:5000](localhost:5000) to see the chart, and [localhost:5000/vote.html)](localhost:5000/vote.html) to vote.


**Accompanying blog post can be read [here](https://dev.to/pmbanugo/real-time-chart-in-javascript-with-chartjs-and-hamoni-sync-1nkb)**

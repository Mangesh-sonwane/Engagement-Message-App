import Highcharts from 'highcharts';

const EngagementHelper = {
  engagementMessageOverTimeChartOptions: (messageCountList, channels) => {
    const getChannelMessages = (channel) =>
      messageCountList.filter((message) => message.channelId === channel.id);

    const seriesData = channels
      .filter((channel) => getChannelMessages(channel).length > 1)
      .map((channel) => ({
        name: channel.name,
        data: getChannelMessages(channel).map((message) => [
          Date.parse(message.timeBucket),
          parseInt(message.count),
        ]),
      }));

    // Prepare the options for Highcharts
    const options = {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Engagement Messages Over Time',
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 24 * 3600 * 1000,
      },
      yAxis: {
        title: {
          text: 'Message Count',
        },
      },
      tooltip: {
        formatter: function () {
          return `<b>${this.series.name}</b><br/>${this.y} message${
            this.y > 1 ? 's' : ''
          } on ${Highcharts.dateFormat('%d %b', this.x)}`;
        },
      },
      series: seriesData,
    };

    return options;
  },
};

export default EngagementHelper;

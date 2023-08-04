/* eslint-disable react/prop-types */
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const EngagementChart = ({ seriesData }) => {
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementChart;

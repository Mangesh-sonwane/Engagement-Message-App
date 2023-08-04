const EngagementDataProcessor = (messageCountList, channels) => {
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

  return seriesData;
};

export default EngagementDataProcessor;

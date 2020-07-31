var client  = mqtt.connect('ws://ismaillowkey.xyz:8083/mqtt')

const vueApp = new Vue({
  el: '#app',
  data: { 
   topicName : '',
   payload : ''
  },
  mounted() {
  }
});

client.on('connect', function () {
  client.subscribe('iot/+');
  window.console.log('connected to broker')
})

// when message received
client.on('message', function (topic,message) {
  vueApp.topicName = topic;
  vueApp.payload = message.toString();
  if (topic == 'topic1'){
    //blablabla
  }

  window.console.log('message received => ' + topic + ' : ' + message.toString()) 
})


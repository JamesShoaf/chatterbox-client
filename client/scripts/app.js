var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //start auto-refresh function
  },

  post: function () {
    console.log('Posted!');
    Parse.readAll((data) => {
      // examine the response from the server request:
      window.data = data;
      document.getElementById('message').value = '';
      $('#chats').prepend(MessageView.render(data.results[0]));
    });
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      window.data = data;
      data.results.forEach((msg) => {
        if (!msg.username || !msg.text) {
          return; // $('#chats').append('<p style="color:red">Hacker Detected</p>');
        }
        return $('#chats').append(MessageView.render(msg));
      });

      console.log(data.results);

      callback();
    });
  },

  refresh: function() { //STILL WORKING ON THIS ONE
  //create new post array
  var newPosts = []
  //set a variable (allPosts) to the array of all elements on page

  //set a variable (lastPost) to the 0th index of window.data
  //find index of lastPost in the allPosts array
  //set window.data to allPosts
  //set variable newPosts to -> slice index 0 - indexOf lastPost
  //prepend newPosts to #chats
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

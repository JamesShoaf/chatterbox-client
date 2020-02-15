var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  //POST /messages
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var dataObj = {
      objectId: "",
      username: "anonymous",
      roomname: "undefined",
      text: $('#message').val(),
      createdAt: "",
      updatedAt: "",
    }
    console.log('this is the message', $('#message').val());
    console.log(Parse.create(dataObj));

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
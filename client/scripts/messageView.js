var MessageView = {

  render: _.template(
    "<div class='chat'>" +
    "<div><%= username %><%= createdAt %> ></div>" +
    "<div> <%= text %> </div>" +
    "</div>"
  )

};

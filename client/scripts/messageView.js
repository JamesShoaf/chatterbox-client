var MessageView = {

  render: _.template(
    "<div class='chat'>" +
    "<div><%- createdAt %> ></div>" +
    "<div> <%- text %> </div>" +
    "</div>"
  )

};

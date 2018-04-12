let $form = $("#vote-form");
$("#alert").hide();
$form.submit(event => {
  event.preventDefault();
  let formData = $form.serializeArray();
  let data = JSON.stringify({
    voterId: formData[0].value,
    candidate: formData[1].value
  });

  fetch("/vote", {
    method: "post",
    body: data,
    headers: {
      "content-type": "application/json"
    }
  })
    .then(function(response) {
      console.log("success");
      $("#alert").show();
      setTimeout(() => $("#alert").hide(), 3000);
      $form[0].reset();
    })
    .catch(function(data) {
      console.log("error occured");
    });
});

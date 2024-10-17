function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_2j29upd";
  const templateID = "template_qwudo1f";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message was sent successfully.',
        confirmButtonColor: '#14AAD8'
      });
    })
    .catch(err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#14AAD8'
      });
    });
}

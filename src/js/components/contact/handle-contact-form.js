//Handle Contact Form On Submit

export function handleContactForm(formId) {
  const MAX_SUBMISSIONS = 5;
  const submitionCount = localStorage.getItem('submissionCount') || 0;
  const formBtn = document.querySelector('.form-btn');

  if (submitionCount >= MAX_SUBMISSIONS) {
    formBtn.setAttribute('disabled', 'true');
    formBtn.textContent = 'Limit reached!';
  } else {
    document
      .getElementById(formId)
      .addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_537vprn', 'template_9breohg', this).then(
          () => {
            let newCount =
              parseInt(localStorage.getItem('submissionCount')) || 0;
            newCount++;
            localStorage.setItem('submissionCount', newCount);

            if (newCount >= MAX_SUBMISSIONS) {
              formBtn.setAttribute('disabled', 'true');
              formBtn.textContent = 'Limit reached!';
            }

            alert('SUCCESS! sent emails ' + newCount);
          },
          error =>
            alert(
              error +
                '. Something went wrong! please check your internet connection.'
            )
        );
      });
  }
}

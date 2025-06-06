/* Email */

document.addEventListener("DOMContentLoaded", function () {
  const user = "ajoyvmon";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;
  const link = `mailto:${email}`;

  const emailLinkSpan = document.getElementById("email-link");
  const emailLinkA = document.createElement("a");
  emailLinkA.href = `${link}`;
  emailLinkA.setAttribute("aria-label", `Email me at ${email}`);
  emailLinkA.textContent = `${email}`;
  emailLinkSpan.appendChild(emailLinkA);
});

/* Phone number */
document.addEventListener("DOMContentLoaded", function () {
  const phoneNumber = "15104581254";
  const phoneElement = document.getElementById("phone");
  const phoneLinkA = document.createElement("a");

  phoneLinkA.href = `tel:${phoneNumber}`;
  phoneLinkA.setAttribute("aria-label", `Call me at ${phoneNumber}`);
  phoneLinkA.textContent = `${phoneNumber}`;
  phoneElement.appendChild(phoneLinkA);
});

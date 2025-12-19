document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const Address = document.getElementById("Address").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      const message = `🛠 *Quick Solution Booking Request*%0A` +
        `🔹 Name: ${encodeURIComponent(name)}%0A` +
        `🏠︎ Address: ${encodeURIComponent(Address)}%0A` +
        `📞 Phone: ${encodeURIComponent(phone)}%0A` +
        `🧰 Service: ${encodeURIComponent(service)}%0A` +
        `📅 Date: ${encodeURIComponent(date)}%0A` +
        `⏰ Time: ${encodeURIComponent(time)}%0A%0A` +
        `💰 Survey Charges: 150 PKR (adjustable in final bill)%0A` +
        `*Please confirm this booking.*`;

      const whatsappNumber = "923182086906";
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(whatsappLink, "_blank");
    });
  }
});


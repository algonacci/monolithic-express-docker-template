//  Script untuk file yang digunakan di template layout (yang akan sering di panggil)
let currentTime = new Date();
let year = currentTime.getFullYear();

$(".footer p").text(
  `Copyright © ${year} Braincore.id`
);

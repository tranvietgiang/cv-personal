const text = "Web developer";
const typedEl = document.getElementById("typed");

let index = 0;

function typeChar() {
  if (index < text.length) {
    typedEl.innerHTML += text.charAt(index); // Sử dụng innerHTML để cập nhật nội dung
    index++;
    setTimeout(typeChar, 200); // tốc độ gõ từng ký tự
  } else {
    setTimeout(() => {
      typedEl.innerHTML = ""; // Xóa toàn bộ văn bản sau khi đã gõ xong
      index = 0; // Đặt lại chỉ số
      typeChar(); // Gọi lại để gõ lại từ đầu
    }, 2000); // Đợi 2 giây trước khi gõ lại
  }
}

typeChar();
const text2 = "TRANSFORMING IDEAS INTO SEAMLESS DIGITAL EXPERIENCES";
const typedEl2 = document.getElementById("typed-text");

let index2 = 0;
let hasTyped = false; // Tránh gõ lại nhiều lần khi scroll

function typeChar2() {
  if (index2 < text2.length) {
    typedEl2.innerHTML += text2.charAt(index2); // Gõ từng ký tự
    index2++;
    setTimeout(typeChar2, 100); // Tốc độ gõ từng ký tự
  }
}

function checkScroll() {
  const rect = typedEl2.getBoundingClientRect(); // Sửa đúng ID
  if (rect.top <= window.innerHeight && rect.bottom >= 0 && !hasTyped) {
    typedEl2.style.opacity = 1;
    hasTyped = true; // Đảm bảo chỉ gõ một lần
    typeChar2();
  }
}

window.addEventListener("scroll", checkScroll);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Lấy tất cả các liên kết trong navbar
  const sections = document.querySelectorAll("section"); // Lấy tất cả các phần tử section

  window.addEventListener("scroll", function () {
    let current = "";

    // Kiểm tra vị trí của các phần tử trong trang
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.pageYOffset >= sectionTop - 50 &&
        window.pageYOffset < sectionTop + sectionHeight - 50
      ) {
        current = section.getAttribute("id");
      }
    });

    // Thay đổi màu của liên kết trong navbar dựa trên phần tử hiện tại
    navLinks.forEach((link) => {
      link.classList.remove("text-danger"); // Loại bỏ màu đỏ từ tất cả các liên kết
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("text-danger"); // Thêm màu đỏ cho liên kết đang được cuộn đến
      }
    });
  });
});

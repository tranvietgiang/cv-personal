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

/** skill */
/** section 2 */

// Additional random movement
const icons = document.querySelectorAll(".tech-icon");

function updateIconPositions() {
  icons.forEach((icon, index) => {
    // Add small random movements to make the animation more natural
    const randomX = Math.sin(Date.now() / 1000 + index) * 5;
    const randomY = Math.cos(Date.now() / 1500 + index) * 5;

    icon.style.marginLeft = `${randomX}px`;
    icon.style.marginTop = `${randomY}px`;
  });

  requestAnimationFrame(updateIconPositions);
}

updateIconPositions();

/** education and work EXPERIENCE */
// Reset animations on page refresh
window.addEventListener("load", () => {
  const firstLine = document.querySelector(".first-line");
  const secondLine = document.querySelector(".second-line");
  const leftLine = document.querySelector(".left-line");
  const rightLine = document.querySelector(".right-line");

  // Reset animations
  firstLine.style.animation = "none";
  secondLine.style.animation = "none";
  leftLine.style.animation = "none";
  rightLine.style.animation = "none";

  // Force reflow
  void firstLine.offsetWidth;

  // Restart animations
  firstLine.style.animation = "slideTextRight 1.5s ease 0.5s forwards";
  secondLine.style.animation = "slideTextLeft 1.5s ease 0.5s forwards";
  leftLine.style.animation = "slideInLeft 1.5s ease forwards";
  rightLine.style.animation = "slideInRight 1.5s ease forwards";
});

/* Animation Script */
document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe heading container
  const headingContainer = document.querySelector(".heading-container");
  observer.observe(headingContainer);

  // Observe timeline items for additional animations if needed
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.8s ease";

    observer.observe(item);
  });

  // Add animation class to timeline items when they come into view
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 200); // Staggered delay
        }
      });
    },
    { threshold: 0.1 }
  );

  timelineItems.forEach((item) => {
    timelineObserver.observe(item);
  });
});

//phần click vào to ảnh
function showLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function hideLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* mouse move */
const cursor = document.querySelector(".cursor-2");

// Set initial position to center of screen to avoid cursor jumping
cursor.style.top = "50%";
cursor.style.left = "50%";

document.addEventListener("mousemove", (e) => {
  // Update cursor position with smooth following effect
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Optional: Change cursor size on click
document.addEventListener("mousedown", () => {
  cursor.style.width = "35px";
  cursor.style.height = "35px";
});

document.addEventListener("mouseup", () => {
  cursor.style.width = "40px";
  cursor.style.height = "40px";
});

// Handle cursor leaving the window
document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

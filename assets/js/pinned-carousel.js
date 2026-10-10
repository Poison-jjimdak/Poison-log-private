document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".pinned-posts");
  const pagination = document.querySelector(".pinned-pagination");

  if (!container || !pagination) return;

  const slides = Array.from(
    container.querySelectorAll(".pinned-slide")
  );

  if (slides.length === 0) {
    pagination.hidden = true;
    return;
  }

  let currentIndex = 0;
  let startX = 0;
  let startY = 0;
  let dragging = false;
  let pointerId = null;

  const SWIPE_THRESHOLD = 45;

  // 페이지 표시기 생성
  pagination.replaceChildren();

  const dots = slides.map((slide, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "pinned-page";
    button.setAttribute("aria-label", `${index + 1}페이지`);

    button.addEventListener("click", () => {
      showSlide(index);
    });

    pagination.appendChild(button);
    return button;
  });

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === currentIndex;

      slide.hidden = !active;
      slide.setAttribute("aria-hidden", String(!active));
      slide.classList.toggle("is-active", active);

      if (active) {
        slide.removeAttribute("inert");
      } else {
        slide.setAttribute("inert", "");
      }
    });

    dots.forEach((dot, i) => {
      const active = i === currentIndex;

      dot.classList.toggle("is-active", active);

      if (active) {
        dot.setAttribute("aria-current", "page");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }

  // 터치 및 마우스 스와이프
  container.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    // 링크나 버튼을 누를 때는 드래그 시작 안 함
    if (event.target.closest("a, button")) return;

    startX = event.clientX;
    startY = event.clientY;
    dragging = true;
    pointerId = event.pointerId;
  });

  container.addEventListener("pointerup", (event) => {
    if (!dragging || event.pointerId !== pointerId) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    dragging = false;
    pointerId = null;

    // 세로 스크롤은 유지하고 가로로 충분히 움직였을 때만 전환
    if (
      Math.abs(deltaX) < SWIPE_THRESHOLD ||
      Math.abs(deltaX) < Math.abs(deltaY) * 1.2
    ) {
      return;
    }

    showSlide(currentIndex + (deltaX < 0 ? 1 : -1));
  });

  function cancelDrag() {
    dragging = false;
    pointerId = null;
  }

  container.addEventListener("pointercancel", cancelDrag);
  container.addEventListener("lostpointercapture", cancelDrag);

  // 키보드 좌우 방향키
  container.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      showSlide(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
      showSlide(currentIndex - 1);
    }
  });

  // 최초 화면
  showSlide(0);
});

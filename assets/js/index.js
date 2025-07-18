    // 가이드 탭 클릭 시 콘텐츠 변경
    $('.question-tabs button').on('click', function () {
      const tab = $(this).data('tab');
  
      // 탭 버튼 활성화
      $('.question-tabs button').removeClass('active');
      $(this).addClass('active');
  
      // 하단 콘텐츠 전환
      $('.guide-content').removeClass('active');
      $(`.guide-content[data-tab="${tab}"]`).addClass('active');
    });
  
    // 시뮬레이션용 정답 맞추기 버튼 클릭 시 점수 단계 이미지 변경
    $('#mockAnswer').on('click', function () {
      const steps = $('.step-list li');
      const currentIndex = steps.findIndex((el) => $(steps[el]).find('img').attr('src') === './assets/img/step-off.svg');
  
      if (currentIndex !== -1) {
        $(steps[currentIndex]).find('img').attr('src', './assets/img/step-on.svg');
      }
    });



    // Figma에서 설정한 1ms delay 반영
    // 토스트 보여주기 함수
    function showToast() {
      const toast = document.getElementById('toast');
      setTimeout(() => {
        toast.classList.add('show');
        toast.classList.remove('hide');
      }, 1); // ✅ 1ms 후 등장 (Delay: 1ms)
      
      setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
      }, 2000); // ✅ 2초 뒤 사라짐 (별도 설정 가능)
    }
    // 실행
    showToast();








    // 힌트보기 플로팅 애니메이션
    const toggleBtn = document.getElementById('toggleBtn');
const toggleIcon = document.getElementById('toggleIcon');
const hintBubble = document.getElementById('hintBubbleInner');
const hintText = document.getElementById('hintText');
const bubbleCard = document.getElementById('bubbleCard');

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  // 아이콘 회전
  toggleIcon.classList.remove('rotate-to-x', 'rotate-to-plus');
  toggleIcon.classList.add(isOpen ? 'rotate-to-x' : 'rotate-to-plus');

  // 반동 초기화
  hintBubble.classList.remove('bounce-expand', 'bounce-shrink');

  if (isOpen) {
    // ▶ 텍스트 → 이미지
    hintText.classList.add('faded'); // 텍스트 사라짐

    // 말풍선 확장 & 반동
    hintBubble.classList.add('expanded', 'bounce-expand');

    // 이미지 보이기
    setTimeout(() => {
      bubbleCard.classList.add('show');
    }, 100);

  } else {
    // ▶ 이미지 → 텍스트
    // 이미지 먼저 사라짐
    bubbleCard.classList.remove('show');

    // 말풍선 축소 + 반동
    hintBubble.classList.remove('expanded');
    hintBubble.classList.add('bounce-shrink');

    // 텍스트 다시 나타남
    setTimeout(() => {
      hintText.classList.remove('faded');
    }, 150);
  }
});

    
    

      

      
      
    // 정답입력 button enabled
    const input = document.querySelector('.answer-input');
    const button = document.querySelector('.answer-submit');

    input.addEventListener('input', () => {
      const hasValue = input.value.trim().length > 0;
      button.disabled = !hasValue;
    });





    // 도움말 클릭시
    document.addEventListener("DOMContentLoaded", function () {
      const helpButton = document.querySelector(".help-button");
      const dimmedArea = document.getElementById("dimmedArea");
      const cancelButton = document.querySelector(".btn-go");
    
      // 팝업 초기 상태 숨기기
      dimmedArea.style.display = "none";
    
      // 도움말 버튼 클릭 시 팝업 보이기
      helpButton.addEventListener("click", function () {
        dimmedArea.style.display = "flex";
      });
    
      // 취소 버튼 클릭 시 팝업 숨기기
      cancelButton.addEventListener("click", function () {
        dimmedArea.style.display = "none";
      });
    });






  // 더블탭 줌 방지 JS 코드 (iOS 전용)
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault(); // 더블탭 줌 방지
    }
    lastTouchEnd = now;
  }, false);

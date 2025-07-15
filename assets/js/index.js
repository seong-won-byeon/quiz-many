$(function () {
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





      // 힌트보기 플로팅 클릭시
      const toggleBtn = document.getElementById('toggleBtn');
      const toggleIcon = document.getElementById('toggleIcon');
      const catImg = document.getElementById('catImg');
      const hintBubble = document.getElementById('hintBubbleInner');
      const hintText = hintBubble.querySelector('p');
      const bubbleCard = document.getElementById('bubbleCard');
      
      let isOpen = false;
      
      toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
      
        toggleIcon.classList.toggle('rotated');
        catImg.classList.toggle('down');
        hintBubble.classList.toggle('expanded');
        hintText.classList.toggle('hidden');
        bubbleCard.classList.toggle('show');
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

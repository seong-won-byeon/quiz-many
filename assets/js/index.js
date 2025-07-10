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
//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) { //min~max 범위
    //toFixed()를 통해 반환된 문자 데이터를,
    //parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingCircle(item, delayAfter, size) {
    gsap.to(
        item, //선택자
        random(1.5, 2.5), //1.5~2.5초 사이의 랜덤한 애니메이션 동작 시간
        {
            delay: random(0, delayAfter), //몇초 뒤에 애니메이션을 실행, 지연 시간 설정
            y: size, //transform: translateY(수치)와 같음. 수직으로 움직이는 크기
            repeat: -1, //몇 번 반복하는지를 설정, -1은 무한 반복.
            yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생-위아래 움직임
            ease: Power1.easeInOut //easing 함수 적용
        }
    );
}

floatingCircle('.pI1', 0.5, 25);
floatingCircle('.pI2', 1, 20);
floatingCircle('.pI3', 1.5, 10);


// 스크롤 이벤트를 감지하는 함수
window.onscroll = function() {
    var logo = document.querySelector('.logo');
    if (window.scrollY > 50) { // 스크롤이 50px 이상 내려갔을 때
        logo.style.opacity = '1'; // 로고를 보이게 함
    } else {
        logo.style.opacity = '0'; // 스크롤이 위로 올라가면 다시 숨김
    }
};


// 배너 좌우 슬라이딩 모바일
let currentIndex = 0;
const sliderWrapper = document.querySelector('.m_m_bannerImg_container');
const totalSlides = document.querySelectorAll('.m_m_bannerImg_container .bannerImg').length;

function showNextSlideMobile() {  // 모바일용 함수 이름 변경
    currentIndex = (currentIndex + 1) % totalSlides;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
}

// 3초마다 슬라이드 변경
setInterval(showNextSlideMobile, 3000);


// 배너 좌우 슬라이딩 PC
let currentIndexpc = 0;
const sliderWrapperpc = document.querySelector('.p_m_bannerImg_container');
const totalSlidespc = document.querySelectorAll('.p_m_bannerImg_container .bannerImg').length;

function showNextSlidePC() {  // PC용 함수 이름 변경
    currentIndexpc = (currentIndexpc + 1) % totalSlidespc;
    sliderWrapperpc.style.transform = `translateX(-${currentIndexpc * 100 / totalSlidespc}%)`;
}

// 3초마다 슬라이드 변경
setInterval(showNextSlidePC, 3000);

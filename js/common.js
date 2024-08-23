// 모바일 버전에서 토글 클릭 시 사이드메뉴바가 나오는 이벤트
// 사이드바 열기
document.getElementById('main-toggle').addEventListener('click', function(event) {
    document.getElementById('siderBar').classList.add('active');
    event.stopPropagation(); // 이 이벤트가 상위 요소로 전파되지 않도록 중지
});

// 사이드바 닫기
document.getElementById('side-toggle').addEventListener('click', function(event) {
    document.getElementById('siderBar').classList.remove('active');
    event.stopPropagation(); // 이 이벤트가 상위 요소로 전파되지 않도록 중지
});

// 바탕화면 클릭 시 사이드바 닫기
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('siderBar');
    if (sidebar.classList.contains('active') && !sidebar.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// 검색아이콘을 눌렀을 때 검색 팝업창이 뜨고 검색아이콘이 취소아이콘으로 변경되는 이벤트
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("searchBtn");
    const toggleIcon = document.getElementById("searchIcon");
    const popupSearch = document.getElementById("side-popup-search");
    let isOpen = false;

    toggleButton.addEventListener("click", function() {
        if (isOpen) {
            // 팝업 닫기
            popupSearch.style.display = "none";
            toggleIcon.src = "./images/com/SearchBtn.svg"; // 검색 아이콘으로 복구
        } else {
            // 팝업 열기
            popupSearch.style.display = "block";
            toggleIcon.src = "./images/com/closeBtn.svg"; // 닫기 아이콘으로 변경
        }
        isOpen = !isOpen; // 상태를 토글
    });

    // 팝업 외부를 클릭했을 때 팝업 닫기
    document.addEventListener("click", function(event) {
        const isClickInsidePopup = popupSearch.contains(event.target);
        const isClickOnButton = toggleButton.contains(event.target);

        if (!isClickInsidePopup && !isClickOnButton && isOpen) {
            popupSearch.style.display = "none";
            toggleIcon.src = "./images/com/SearchBtn.svg"; // 검색 아이콘으로 복구
            isOpen = false; // 상태를 닫힌 상태로 설정
        }
    });
});

// 챗 아이콘을 눌렀을 때 챗 팝업창이 뜨고 챗 아이콘이 취소아이콘으로 변경되는 이벤트
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("chatBtn");
    const toggleIcon = document.getElementById("chatIcon");
    const popupSearch = document.getElementById("chatPopup");
    let isOpen = false;

    toggleButton.addEventListener("click", function() {
        if (isOpen) {
            // 팝업 닫기
            popupSearch.style.display = "none";
            toggleIcon.src = "./images/com/sidePopupChatBot.svg"; // 검색 아이콘으로 복구
        } else {
            // 팝업 열기
            popupSearch.style.display = "block";
            toggleIcon.src = "./images/com/closeBtn.svg"; // 닫기 아이콘으로 변경
        }
        isOpen = !isOpen; // 상태를 토글
    });

    // 팝업 외부를 클릭했을 때 팝업 닫기
    document.addEventListener("click", function(event) {
        const isClickInsidePopup = popupSearch.contains(event.target);
        const isClickOnButton = toggleButton.contains(event.target);

        if (!isClickInsidePopup && !isClickOnButton && isOpen) {
            popupSearch.style.display = "none";
            toggleIcon.src = "./images/com/sidePopupChatBot.svg"; // 검색 아이콘으로 복구
            isOpen = false; // 상태를 닫힌 상태로 설정
        }
    });
});
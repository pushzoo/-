# Duksun Design Guide
    1. KEYWORD
    #레트로 #픽셀 #고전
    
    2. COLOR
    #DF1900, #022CFF, #FCEFE8
    - 강렬한 빨강과 시원한 파랑의 대조가 부드러운 베이지 톤과 균형을 이루어,
    에너제틱하면서도 세련된 느낌을 주도록 함.
    
    3. FONT
    - 기본 폰트 : G마켓 산스
    - 포인트 폰트 : Neo둥근고딕Pro


# Duksun 작업 일지

## 240823
* main pc - 상품 썸네일, 텍스트 전체 변경
* common - main, detail header 스타일 분리
* main - 배너 좌우 슬라이드 이벤트 구현
* main pc - 배너 아이콘 구조 변경, 위치 수정
* main - 최종 점검 완료
* detail - 최종 점검 완료
* cart - 폰트, 이미지 전체 변경
* cart - 최종 점검 완료


## 240822
* detail mobile - 키워드 버튼 클릭 시 색상 변경 이벤트 구현
* common mobile - 좌측 사이드 토글 메뉴 디자인, 기능 구현
* common pc - 우측 하단 상시 팝업 아이콘 디자인, 기능 구현
* detail mobile, pc - 완료
* cart mobile, pc - 완료

## 240821
* GIT HUB - VS CODE 연동
* detail mobile - 수량 버튼 작동 시 금액 계산 이벤트 구현
* detail mobile - 상품 썸네일 디자인 구현


# Duksun 이슈 해결

■ __상품 키워드 클릭 시 배경, 텍스트 색상 변경 이벤트 이슈 (detail mobile)__
<br>
<br>
&emsp;▶ ___이슈 내용___<br> &emsp;&emsp;'.pk' 클릭 시 '.active'에 설정한 배경, 텍스트 색상으로 변경되는 스크립트를 넣었지만 작동되지 않는 문제<br>
&emsp;▶ ___이슈 원인___<br> &emsp;&emsp;'.pk'가 들어간 요소에 클릭 이벤트가 발생하면 '.active' 클래스를 추가하는 스크립트를 넣었기 때문에 클릭을 하면 class="pk active" 상태가 되는데, css에서 '.active' 속성에 변경될 색상을 설정했기 때문<br>
&emsp;▶ ___해결 방법___<br> &emsp;&emsp;css에서 변경될 색상을 '.pk.active'에 설정하여 해결<br>
<br>
<br>

■ __수량 버튼 작동 시 변경될 수량 이벤트 이슈 (detail pc)__
<br>
<br>
&emsp;▶ ___이슈 내용___<br> &emsp;&emsp;pc 사이즈에서 수량 버튼 작동 시 가격은 정상적으로 변경되지만 변경될 수량이 바뀌지 않는 문제<br>
&emsp;▶ ___이슈 원인___<br> &emsp;&emsp;동일한 input 필드가 2개 이상 존재하는 경우, 첫 번째 필드만 선택되기 때문<br>
&emsp;▶ ___해결 방법___<br> &emsp;&emsp;pc 구조에서의 input name명, id명 등을 변경 후 pc 버전 이벤트 스크립트를 새로 넣어 해결<br>
<br>
<br>

■ __상품 메인 썸네일 클릭 시 가변 사이즈 어긋나는 이슈 발생 (detail pc)__
<br>
<br>
&emsp;▶ ___이슈 내용___<br> &emsp;&emsp;min-width, max-width 값을 설정한 width: 100% 크기의 썸네일이 가변되는 중간 사이즈에서 크기가 어긋나는 문제 <br>
&emsp;▶ ___이슈 원인___<br> &emsp;&emsp;원본 이미지 파일 사이즈가 서로 다르기 때문<br>
&emsp;▶ ___해결 방법___<br> &emsp;&emsp;원본 이미지 파일의 사이즈를 동일하게 변경하여 해결하였지만 css 내에서 해결할 수 있는 방법이 있는지 추후 알아볼 예정<br>
<br>
<br>

// 서브 썸네일 클릭 시 메인 썸네일 변경
function productThumbnail1() {
    document.getElementById("thumbnail").src = "./images/detail/productMain.jpg";
  }
function productThumbnail2() {
    document.getElementById("thumbnail").src = "./images/detail/productSub.jpg";
  }
// 서브 썸네일 클릭 시 메인 썸네일 변경 pc
function productThumbnail1p() {
    document.getElementById("thumbnailp").src = "./images/detail/productMain.jpg";
  }
function productThumbnail2p() {
    document.getElementById("thumbnailp").src = "./images/detail/productSub.jpg";
  }

// 수량 버튼 이벤트
function add() {
  var pmp = document.querySelector('input[name="amounts"]');
  var sell_price = document.querySelector('input[name="sell_price"]').value;
  pmp.value = parseInt(pmp.value) + 1;
  var check = parseInt(pmp.value) * parseInt(sell_price);
  document.getElementById("check_price").innerText = check.toLocaleString('ko-KR');
  document.getElementById("total_price").innerText = check.toLocaleString('ko-KR');
}
function del() {
  var pmp = document.querySelector('input[name="amounts"]');
  var sell_price = document.querySelector('input[name="sell_price"]').value;
  if (pmp.value > 1) {
      pmp.value = parseInt(pmp.value) - 1; 
      var check = parseInt(pmp.value) * parseInt(sell_price); 
      document.getElementById("check_price").innerText = check.toLocaleString('ko-KR');
      document.getElementById("total_price").innerText = check.toLocaleString('ko-KR'); 
  }
}
// 수량 버튼 이벤트 pc
function addp() {
  var pmpp = document.querySelector('input[name="p_amounts"]');
  var sell_pricep = document.querySelector('input[name="p_sell_price"]').value;
  pmpp.value = parseInt(pmpp.value) + 1;
  var checkp = parseInt(pmpp.value) * parseInt(sell_pricep);
  document.getElementById("p_check_price").innerText = checkp.toLocaleString('ko-KR');
  document.getElementById("p_total_price").innerText = checkp.toLocaleString('ko-KR');
}
function delp() {
  var pmpp = document.querySelector('input[name="p_amounts"]');
  var sell_pricep = document.querySelector('input[name="p_sell_price"]').value;
  if (pmpp.value > 1) {
      pmpp.value = parseInt(pmpp.value) - 1; 
      var checkp = parseInt(pmpp.value) * parseInt(sell_pricep); 
      document.getElementById("p_check_price").innerText = checkp.toLocaleString('ko-KR');
      document.getElementById("p_total_price").innerText = checkp.toLocaleString('ko-KR'); 
  }
}

// 상품 키워드 클릭 시 배경 색상 변경 이벤트
document.querySelectorAll('.pk').forEach(function(element) {
  element.addEventListener('click', function() {
      this.classList.toggle('active');
  });
});

// 상품 상세 이미지 펼치기/접기 이벤트
function toggleImages() {
  var sumImg = document.querySelector('.sumImg');
  var sumBtn = document.querySelector('.sumBtn');
  
  if (sumImg.style.display === 'none' || sumImg.style.display === '') {
      sumImg.style.display = 'block';
      sumBtn.textContent = '상세정보 숨기기';
  } else {
      sumImg.style.display = 'none';
      sumBtn.textContent = '상세정보 펼치기';
  }
}
// 상품 상세 이미지 펼치기/접기 이벤트 pc
function toggleImagesp() {
  var sumImgp = document.querySelector('.sumImgp');
  var sumBtnp = document.querySelector('.sumBtnp');
  
  if (sumImgp.style.display === 'none' || sumImgp.style.display === '') {
      sumImgp.style.display = 'block';
      sumBtnp.textContent = '상세정보 숨기기';
  } else {
      sumImgp.style.display = 'none';
      sumBtnp.textContent = '상세정보 펼치기';
  }
}
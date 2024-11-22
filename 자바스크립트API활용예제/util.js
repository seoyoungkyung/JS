function writeColor(array, tag, color) {
    // 배열에 있는 각 요소를 출력할 태그를 생성
    array.forEach(function(item) {
        // 새로운 태그 생성
        const element = document.createElement(tag);
        // 요소의 텍스트 설정 (item 자체가 객체일 경우 item.toString() 호출)
        element.textContent = item.toString();
        // 텍스트 색상 설정
        element.style.color = color;
        // 문서의 body에 태그를 추가
        document.body.appendChild(element);
    });
}

// 건강 계산소 공통: 결과 공유
window.shareResult = function () {
  const t = window.__share || document.title;
  const url = location.origin + location.pathname;
  if (navigator.share) { navigator.share({ title: '건강 계산소', text: t, url: url }).catch(function () {}); }
  else {
    const f = t + '\n' + url + '\n#건강계산소';
    if (navigator.clipboard) navigator.clipboard.writeText(f).then(function () { alert('결과가 복사됐어요! 원하는 곳에 붙여넣기 하세요 🩺'); }).catch(function () { prompt('아래 내용을 복사하세요', f); });
    else prompt('아래 내용을 복사하세요', f);
  }
};

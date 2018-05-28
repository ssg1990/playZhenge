const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const clickDebounce = (fn, gapTime) => {
  let gTime = parseInt(gapTime);
  if (isNaN(gTime)) {
    gTime = 1500
  }
  let _lastTime = 0
  return () => {
    let _nowTime = +new Date();
    if (_nowTime - _lastTime > gTime) {
      fn();
      _lastTime = _nowTime;
    }
  }
}

module.exports = {
  formatTime: formatTime,
  clickDebounce: clickDebounce
}


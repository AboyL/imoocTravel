let city = ''
try {
  if (localStorage.city) {
    city = localStorage.city
  } else {
    city = '上海'
  }
} catch (e) {
  city = '上海'
}
export default {
  city
}

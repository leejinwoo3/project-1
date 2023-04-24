//1. 전체 url가져오기
const currentURL = location.href;

//2. 쿼리스트링 파라메터 가져오기
const urlObj = new URL(currentURL);
const params = urlObj.searchParams;

const id = params.get("id");

console.log(id);

const personURL = `https://api.themoviedb.org/3/movie/${id}?api_key=982ae81859ec91d54685c660abf01049&language=ko-KR`;
$.ajax({
  type: "GET",
  url: personURL,
  dataType: "json",
  async: false,
  success: function (data) {
    console.log("전체 data:", data);
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
const person_detailURL = `https://api.themoviedb.org/3/person/${id}?api_key=982ae81859ec91d54685c660abf01049&language=ko-KR`;
$.ajax({
  type: "GET",
  url: personURL,
  dataType: "json",
  async: false,
  success: function (data) {
    console.log("person전체 data:", data);
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

const personURL =
  "https://api.themoviedb.org/3/person/popular?api_key=982ae81859ec91d54685c660abf01049&language=ko-KR&page=1";
$.ajax({
  type: "GET",
  url: personURL,
  dataType: "json",
  async: false,
  success: function (data) {
    console.log("전체 data:", data);

    const results = data.results;
    console.log("사람 이름", results);
    for (const result of results) {
      console.log(result);
      console.log("이름: ", result.title);
      console.log("성별: ", result.gender);
      console.log("인기: ", result.popularity);
      console.log("프로필: ", result.profile_path);
      console.log("생일", result.birthday);

      let imgURL = "https://image.tmdb.org/t/p/w500" + result.profile_path;

      $(".images").append(
        ` 

        
        <div class="col-md-2">
        <a href = "https://www.themoviedb.org/person/${result.id}?language=ko" target="_blank" class ="imagess">
        <img src="${imgURL}" alt=""
          width="100%" height="80%"  >
          </a>
          <span style=" text-align: center; display: block; font-weight : bold;
          " class="style";>이름 : ${result.name}
          </span>
         <span style=" text-align: center; display: block; font-weight : bold;
          " class="style";>id번호:${result.id}
          </span>
          <span style=" text-align: center; display: block; font-weight : bold;
          " class="style";>성별 :${result.gender}
         
          </span>
              <span style=" text-align: center; display: block; font-weight : bold;
          " class="style";>인기순위 : ${result.popularity}
        
        `
        // ``<a href="./detail.html?id=${result.name}"><img src=""></a>`
      );
    }
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

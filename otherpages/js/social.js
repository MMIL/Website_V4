const ACCESS_TOKEN =
  "IGQVJXRWFDb2ZAVX2x6MTFmM3hvTUsxcTEySEo5cjFXVy1Da3ZAKTEVOQVFad0JpaV9aYzZArLWE1eHAyMzNuc01HSWJXazVzNy1GODVJQmtTTkZAtbHNFYm14MW5uM2xOZA3FSam1xZA3ZA2ZATk5cDJXcS1MdQZDZD";

const FIELDS = "id,permalink";
const config = {
  method: "get",
  url: `https://graph.instagram.com/me/media?fields=${FIELDS}&access_token=${ACCESS_TOKEN}`,
};

const igTab = document.getElementById("ig-post");

const instaData = () => {
  axios(config)
    .then((res) => {
      data = res.data.data;
      data.length = 3;
      return data;
    })
    .then((finalData) => {
      const igF = finalData
        .map(
          (el) =>
            `<div class="igp">
              <iframe width="320" height="460" src="${el.permalink}embed" frameborder="0"></iframe>
            </div>`
        )
        .join("");
      igTab.innerHTML = igF;
    });
};

instaData();

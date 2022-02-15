const ACCESS_TOKEN =
  "IGQVJVZADRQVEZA0QXU4cnVtbFVNRklzQm4wdmVmZAnhCTFRQQzByOFdDTGwxdmtaSkEtanl4bTRub1NxT3hmaEM4a21icEZAqNkp1QnRMZAFZAOZAVl3c3kwdlBvUEtlRFdWUXdScHJ2RGZApOHFmZATVVMWN5YgZDZD";

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

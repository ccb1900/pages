function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function test() {
  let data = []
  const nodes = document.querySelectorAll(".third .title");
  let count=0
  for(let i=0;i<nodes.length;i++) {
    nodes[i].click();
    await sleep(2000)
    if (document.querySelector("video")) {
      console.log(i + "url::", document.querySelector("video").currentSrc);
      const link = document.querySelector("video").currentSrc;
      // 顶级标题
      const title = document
        .querySelector(".title.active .titlespan.noScore")
        .parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(
          ".titlespan"
        ).innerText;
      const second = document
        .querySelector(".title.active .titlespan.noScore")
        .parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(
          ".titlespan"
        ).innerText;
      const third = document.querySelector(
        ".title.active .titlespan.noScore"
      ).innerText;
      count++;
      datum = {
        link: link,
        title: title,
        second: second,
        index: count,
        third: third,
      };

      data.push(datum);
      console.log(datum)
    }
  }

  console.log("latest", JSON.stringify(data));

  return data;
}

test().then(res => {
  console.log("res",res)
})


// 先去除引号，再去除 前面的数字  ^[0-9: ]+

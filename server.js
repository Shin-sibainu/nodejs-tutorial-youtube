console.log("welcome nodejs");
const PORT = 8080;
const html = require("fs").readFileSync("./index.html");
const http = require("http");
//webサーバーを作成
const server = http.createServer((req, res) => {
  //ブラウザからアクセスが来た時の処理
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); //クライアントに返すヘッダー情報
  res.write(html);
  res.end();

  if (req.method === "POST") {
    //ここに処理を記述する
  }

  if (req.method === "POST") {
    let postData = "";

    req
      .on("data", function (chunk) {
        postData += chunk;
      })
      .on("end", function () {
        res.end("あなたが送信したのは、" + postData);
      });
  }
});

server.listen(PORT, () => {
  console.log("server running!");
});

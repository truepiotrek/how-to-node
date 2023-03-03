const fs = require("fs")

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter teh message</title></head>");
    res.write("<body><form action='/message' method='POST'><input name='message' type='text' /><button type='submit'>Send data</button></form></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("pushing chunk", chunk);
      body.push(chunk);
    })

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    })
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>my First node js  response</title></head>");
  res.write("<body>Hello</body>");
  res.write("</html>");
  res.end();
}


module.exports = requestHandler
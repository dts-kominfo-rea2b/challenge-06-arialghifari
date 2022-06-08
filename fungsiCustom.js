// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const fs = require("fs");
  let messageArray = [];

  fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
    if (err) return fnCallback(err, null);
    messageArray.push(JSON.parse(data).message.split(" ")[1]);

    fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
      if (err) return fnCallback(err, null);
      messageArray.push(JSON.parse(data)[0].message.split(" ")[1]);

      fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
        if (err) return fnCallback(err, null);
        messageArray.push(JSON.parse(data)[0].data.message.split(" ")[1]);

        return fnCallback(err, messageArray);
      });
    });
  });

  /* fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
    const arrayOfObject = JSON.parse(data);
    const modifiedMessage = arrayOfObject.message.split(" ")[1];
    arr.push(modifiedMessage);

    fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
      const arrayOfObject = JSON.parse(data);
      const modifiedMessage = arrayOfObject[0].message.split(" ")[1];
      arr.push(modifiedMessage);

      fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
        const arrayOfObject = JSON.parse(data);
        const modifiedMessage = arrayOfObject[0].data.message.split(" ")[1];
        arr.push(modifiedMessage);

        fnCallback(err, arr);
      });
    });
  }); */

  // const modifiedMessage = arrayOfObject.message.split(" ")[1];
  // const modifiedMessage = arrayOfObject[0].message.split(" ")[1];
  // const modifiedMessage = arrayOfObject[0].data.message.split(" ")[1];
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

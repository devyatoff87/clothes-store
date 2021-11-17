import { MongoClient } from "mongodb";
const url = "строка подключения к базе данных";
const baza = "test1";

export function getUser(email) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        reject(err);
      }
      client
        .db(baza)
        .collection("users")
        .find({ email: email })
        .toArray(function (err, results) {
          if (err) {
            reject(err);
          }
          client.close();
          resolve(results);
        });
    });
  });
}

export function getToken(token) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        reject(err);
      }
      client
        .db(baza)
        .collection("token")
        .find({ token: token })
        .toArray(function (err, results) {
          if (err) {
            reject(err);
          }
          client.close();
          resolve(results);
        });
    });
  });
}

export function add(tabl, data) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        reject(err);
      }
      client
        .db(baza)
        .collection(tabl)
        .insertOne(data, function (err, results) {
          if (err) {
            reject(err);
          }
          client.close();
          resolve(results.ops[0]);
        });
    });
  });
}

const _delete = function (email) {
  return new Promise((resolve, reject) => {
    //const id = new ObjectID(zadacaId);
    MongoClient.connect(url, function (err, client) {
      if (err) {
        reject(err);
      }
      client
        .db(baza)
        .collection("token")
        .deleteMany({ login: email }, function (err, results) {
          if (err) {
            reject(err);
          }
          client.close();
          resolve(results);
        });
    });
  });
};

export { _delete as delete };

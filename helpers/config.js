// npm install @azure/cosmos
// npm install --save @azure/identity
// Db config
const config = {
  endpoint: "https://mahtabsyedcom.documents.azure.com:443/",
  key: "bEttwcxTGflTBJyilGma7V0sQmgac1cDe0WrlqBpz4rctKcwpkJQRMZN0VPEqClWcvbWql3r6GBDoBESOOPrZQ==",
  databaseId: "mahtabsyedcomdev",
  newsletterContainerId: "newsletter",
  contactContainerId: "contact",
  partitionKey: { kind: "Hash", paths: ["/category"] },
};

module.exports = config;

// To debug
// Message: {"Errors":["Your account is currently configured with a total throughput limit of 1000 RU\/s. This operation failed because it would have increased the total throughput to 1400 RU\/s. See https:\/\/aka.ms\/cosmos-tp-limit for more information."]}
// ActivityId: 49ade00e-e55c-4a82-b472-c5f2c8e5ea61, Request URI: /apps/d8296123-aa52-49d0-b5a5-9556a32b1cbc/services/bf3e423b-65d2-4af5-9484-ff1c85d85135/partitions/e5d3059f-f438-4f9e-be2d-e01878119e91/replicas/133062891018979060p, RequestStats: , SDK: Microsoft.Azure.Documents.Common/2.14.0

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = ""
  const sql1 = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('254af6f2-9b37-461c-8056-7c4c7c172ab7', '1Mariane72@gmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('25d5fddf-1f15-44ec-8f48-668a5ba6efa0', '9Donna.Zieme55@yahoo.com', 'Edward King', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('36469552-ad74-4d0c-aef6-c5541ece28cf', '25Wyman74@gmail.com', 'Bob Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c976db74-dcfe-4805-a107-75ccfd0e267c', '33Manley_Stiedemann9@gmail.com', 'Diana Prince', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7923336a-8de7-488f-86b1-302c9341a70b', '41Olaf_Lueilwitz@gmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv456def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8b7820dc-c086-4814-9191-08c372746275', '49Eric_Collier74@gmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('db490221-91c6-41e3-a2e1-23f475ec9ce3', '57Elissa_Bergstrom57@yahoo.com', 'Diana Prince', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('18f6e9b7-78e7-4579-826f-e0736f039ef1', '65Cale46@gmail.com', 'Diana Prince', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2fdb2947-7090-4cf2-ab4a-7f86d84bc485', '73Ruby13@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv456def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('05afc726-bbc3-4916-9717-1509a70cc3b1', 'New proposal received from 0x123...abc', 'c976db74-dcfe-4805-a107-75ccfd0e267c');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('e23f90a3-440c-4585-acec-03b05ca5928d', 'Reminder Sign the smart contract to complete your marriage', 'db490221-91c6-41e3-a2e1-23f475ec9ce3');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8f524c1b-9a1e-43a5-a94f-db2b38343700', 'Your marriage certificate NFT is ready to mint', '18f6e9b7-78e7-4579-826f-e0736f039ef1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('020cb3ab-751d-476e-a22d-f674019c3b1f', 'Proposal accepted by 0x456...def', '2fdb2947-7090-4cf2-ab4a-7f86d84bc485');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('c6fc6ef5-339a-4d7b-a0aa-dd33e918cc35', 'New proposal received from 0x123...abc', '2fdb2947-7090-4cf2-ab4a-7f86d84bc485');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('51b1adf5-93d4-49e7-aaab-994a13030f34', 'Proposal accepted by 0x456...def', '18f6e9b7-78e7-4579-826f-e0736f039ef1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('5db877cb-8023-4e3d-bac2-c9617c69e5c8', 'Proposal accepted by 0x456...def', 'db490221-91c6-41e3-a2e1-23f475ec9ce3');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('269aae5f-dbbe-4925-bb51-ca9f4d0ba103', 'New proposal received from 0x123...abc', '36469552-ad74-4d0c-aef6-c5541ece28cf');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('0d4337c4-8fb4-4065-90b7-384efb01461b', 'Proposal accepted by 0x456...def', '25d5fddf-1f15-44ec-8f48-668a5ba6efa0');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('481b56fb-438f-4744-addd-4b397d319551', 'Reminder Sign the smart contract to complete your marriage', 'db490221-91c6-41e3-a2e1-23f475ec9ce3');

INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('2421b5b3-4662-4269-8065-8d31eec24877', 'Lets make our love eternal with a smart contract.', 'accepted', '103 443 E 6th St, New York, NY 10009', '104 42 E 20th St, New York, NY 10003', 'c976db74-dcfe-4805-a107-75ccfd0e267c', '7923336a-8de7-488f-86b1-302c9341a70b');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('64a89d15-0f4f-4340-b338-d9bef832e48b', 'Our love deserves to be immortalized as an NFT.', 'pending', '108 136 E 13th St, New York, NY 10003', '109 42 E 20th St, New York, NY 10003', 'c976db74-dcfe-4805-a107-75ccfd0e267c', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('886bd7b7-3cc1-4e7a-a530-76b7418ef304', 'Marry me and lets mint our love.', 'accepted', '113 18 Spring St, New York, NY 10012', '114 18 Spring St, New York, NY 10012', '36469552-ad74-4d0c-aef6-c5541ece28cf', '8b7820dc-c086-4814-9191-08c372746275');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('f1e36f40-8a54-45ab-89a5-38bc425189be', 'Will you be my forever on the blockchain', 'rejected', '118 330 W Broadway, New York, NY 10013', '119 18 Spring St, New York, NY 10012', 'c976db74-dcfe-4805-a107-75ccfd0e267c', '254af6f2-9b37-461c-8056-7c4c7c172ab7');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('33ddf78f-bc28-4b95-b118-65e090c5951c', 'Our love deserves to be immortalized as an NFT.', 'accepted', '123 136 E 13th St, New York, NY 10003', '124 91 Christopher St, New York, NY 10014', '7923336a-8de7-488f-86b1-302c9341a70b', '8b7820dc-c086-4814-9191-08c372746275');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('9ddea969-17ce-4c57-baaa-f58e3d0cfdf7', 'Our love deserves to be immortalized as an NFT.', 'rejected', '128 330 W Broadway, New York, NY 10013', '129 42 E 20th St, New York, NY 10003', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7923336a-8de7-488f-86b1-302c9341a70b');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('01252478-d5db-4550-add0-0c3c7c0252b2', 'Our love deserves to be immortalized as an NFT.', 'rejected', '133 91 Christopher St, New York, NY 10014', '134 18 Spring St, New York, NY 10012', 'c976db74-dcfe-4805-a107-75ccfd0e267c', '8b7820dc-c086-4814-9191-08c372746275');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('e2ec14a0-05ac-4264-bc16-0ac6a19f4f20', 'Lets make our love eternal with a smart contract.', 'accepted', '138 91 Christopher St, New York, NY 10014', '139 91 Christopher St, New York, NY 10014', '8b7820dc-c086-4814-9191-08c372746275', '254af6f2-9b37-461c-8056-7c4c7c172ab7');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('a66cd4da-3e14-4767-bd6a-8a3564b90ea9', 'Will you be my forever on the blockchain', 'pending', '143 443 E 6th St, New York, NY 10009', '144 136 E 13th St, New York, NY 10003', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c976db74-dcfe-4805-a107-75ccfd0e267c');
INSERT INTO "Proposal" ("id", "message", "status", "walletAddressSender", "walletAddressReceiver", "senderId", "receiverId") VALUES ('cb3e805e-fe8e-42bb-ba48-5bb3b1c42a53', 'Lets make our love eternal with a smart contract.', 'pending', '148 42 E 20th St, New York, NY 10003', '149 18 W 29th St, New York, NY 10001', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '36469552-ad74-4d0c-aef6-c5541ece28cf');

INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('2efdfada-96ce-4ff9-b395-349dc264c8a5', 'accepted', '0xabc123', '153 136 E 13th St, New York, NY 10003', '154 430 Lafayette St, New York, NY 10003', '2421b5b3-4662-4269-8065-8d31eec24877', '25d5fddf-1f15-44ec-8f48-668a5ba6efa0', '8b7820dc-c086-4814-9191-08c372746275');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('916632f7-d015-44fe-87e1-261eb3c33528', 'rejected', '0xabc123', '158 430 Lafayette St, New York, NY 10003', '159 136 E 13th St, New York, NY 10003', '886bd7b7-3cc1-4e7a-a530-76b7418ef304', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '18f6e9b7-78e7-4579-826f-e0736f039ef1');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('73ee3a2d-b321-49a2-b62c-df038c788e37', 'cancelled', '0xdef456', '163 91 Christopher St, New York, NY 10014', '164 330 W Broadway, New York, NY 10013', '2421b5b3-4662-4269-8065-8d31eec24877', 'db490221-91c6-41e3-a2e1-23f475ec9ce3', '36469552-ad74-4d0c-aef6-c5541ece28cf');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('3b4725f0-9db8-46c0-8143-12c8eabed74b', 'accepted', '0xdef456', '168 42 E 20th St, New York, NY 10003', '169 91 Christopher St, New York, NY 10014', 'f1e36f40-8a54-45ab-89a5-38bc425189be', '25d5fddf-1f15-44ec-8f48-668a5ba6efa0', '254af6f2-9b37-461c-8056-7c4c7c172ab7');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('16d0253e-f160-4e95-8c63-64b36155c980', 'accepted', '0xmnop345', '173 42 E 20th St, New York, NY 10003', '174 42 E 20th St, New York, NY 10003', '2421b5b3-4662-4269-8065-8d31eec24877', '18f6e9b7-78e7-4579-826f-e0736f039ef1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('819002db-4ea7-4063-b0a6-f9b27a2a98ef', 'pending', '0xmnop345', '178 136 E 13th St, New York, NY 10003', '179 42 E 20th St, New York, NY 10003', 'a66cd4da-3e14-4767-bd6a-8a3564b90ea9', '36469552-ad74-4d0c-aef6-c5541ece28cf', '18f6e9b7-78e7-4579-826f-e0736f039ef1');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('4a375ad5-4db4-4c92-9995-a53924c082c6', 'rejected', '0xdef456', '183 330 W Broadway, New York, NY 10013', '184 42 E 20th St, New York, NY 10003', '01252478-d5db-4550-add0-0c3c7c0252b2', '36469552-ad74-4d0c-aef6-c5541ece28cf', '254af6f2-9b37-461c-8056-7c4c7c172ab7');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('3ce29ed3-9732-4a91-bd13-9e275e27e71a', 'completed', '0xjkl012', '188 18 W 29th St, New York, NY 10001', '189 330 W Broadway, New York, NY 10013', '9ddea969-17ce-4c57-baaa-f58e3d0cfdf7', '7923336a-8de7-488f-86b1-302c9341a70b', '254af6f2-9b37-461c-8056-7c4c7c172ab7');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('d9ea8842-626c-4b67-bd17-f0e3186e25b6', 'rejected', '0xmnop345', '193 430 Lafayette St, New York, NY 10003', '194 18 Spring St, New York, NY 10012', 'e2ec14a0-05ac-4264-bc16-0ac6a19f4f20', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'db490221-91c6-41e3-a2e1-23f475ec9ce3');
INSERT INTO "Marriage" ("id", "status", "certificateTokenId", "walletAddressPartner1", "walletAddressPartner2", "proposalId", "partner1Id", "partner2Id") VALUES ('0b79d6be-02bf-46a9-bdf1-b2565784b979', 'rejected', '0xmnop345', '198 443 E 6th St, New York, NY 10009', '199 330 W Broadway, New York, NY 10013', '9ddea969-17ce-4c57-baaa-f58e3d0cfdf7', '18f6e9b7-78e7-4579-826f-e0736f039ef1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('79870b7c-df21-4e85-ad7e-f38aa63fc7ac', '0x1234567890abcdef1234', 'https://i.imgur.com/YfJQV5z.png?id=202', 'Minted', '0x0987654321098765432109876543210987654321098765432109876543210987', 'd9ea8842-626c-4b67-bd17-f0e3186e25b6');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('aa1b0c60-1c77-42d0-8e87-e94af5dc10f4', '0x0f1e2d3c4b5a69788765', 'https://i.imgur.com/YfJQV5z.png?id=207', 'Failed', '0x1234567890123456789012345678901234567890123456789012345678901234', '2efdfada-96ce-4ff9-b395-349dc264c8a5');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('d56c85fe-b578-49e8-a321-4bce7d5027db', '0x9876543210fedcba9876', 'https://i.imgur.com/YfJQV5z.png?id=212', 'Minted', '0x1234abcd5678efgh1234abcd5678efgh1234abcd5678efgh1234abcd5678efgh', '73ee3a2d-b321-49a2-b62c-df038c788e37');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('66440805-8083-40e9-88fc-e80570302ec6', '0x1a2b3c4d5e6f7g8h9i0j', 'https://i.imgur.com/YfJQV5z.png?id=217', 'Failed', '0x1234567890123456789012345678901234567890123456789012345678901234', '73ee3a2d-b321-49a2-b62c-df038c788e37');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('a366893b-a9d7-4223-bd2f-2080b6206633', '0x1234567890abcdef1234', 'https://i.imgur.com/YfJQV5z.png?id=222', 'Pending', '0x1234abcd5678efgh1234abcd5678efgh1234abcd5678efgh1234abcd5678efgh', '0b79d6be-02bf-46a9-bdf1-b2565784b979');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('b4b8f083-1bb4-4c80-a61c-96ce07f92865', '0x9876543210fedcba9876', 'https://i.imgur.com/YfJQV5z.png?id=227', 'Pending', '0x1234567890123456789012345678901234567890123456789012345678901234', '16d0253e-f160-4e95-8c63-64b36155c980');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('ea8389bd-194a-4c0f-9927-6506b140a938', '0xabcdef1234567890abcd', 'https://i.imgur.com/YfJQV5z.png?id=232', 'Pending', '0x1234abcd5678efgh1234abcd5678efgh1234abcd5678efgh1234abcd5678efgh', '16d0253e-f160-4e95-8c63-64b36155c980');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('ec48be54-9c8f-42ae-b899-a5bc864ce2d1', '0x1a2b3c4d5e6f7g8h9i0j', 'https://i.imgur.com/YfJQV5z.png?id=237', 'Pending', '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef', '4a375ad5-4db4-4c92-9995-a53924c082c6');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('6f1fedda-000c-4b7d-8d70-32e67e1c9c0b', '0x1a2b3c4d5e6f7g8h9i0j', 'https://i.imgur.com/YfJQV5z.png?id=242', 'Minted', '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef', '4a375ad5-4db4-4c92-9995-a53924c082c6');
INSERT INTO "Certificate" ("id", "nftTokenId", "imageUrl", "mintStatus", "transactionHash", "marriageId") VALUES ('30b99665-7eaa-40f7-b9d6-4b688c05554f', '0x1234567890abcdef1234', 'https://i.imgur.com/YfJQV5z.png?id=247', 'Minted', '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef', '73ee3a2d-b321-49a2-b62c-df038c788e37');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })

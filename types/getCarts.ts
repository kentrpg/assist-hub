export const ResultGetCarts = {
  statusCode: 0,
  status: true,
  message: "",
  data: [
    {
      "cartId": 1,
      "name": "鋁製躺式輪椅",
      "description": "外出旅遊輕便輪椅首選車款。",
      "quantity": 2,
      "rent": 3000,
      "deposit": 500,
      "fee": 200,
      "amount": 3500,
      "period": 30,
      "rentDate": "2024-02-02T00:00:00",
      "rentStamp": "2024-02-02",
      "returnDate": "2024-03-03T00:00:00",
      "returnStamp": "2024-03-03",
      "imgSrc": "https://image.com",
      "imgAlt": "鋁製躺式輪椅"
    },
  ],
};

export type ResultGetCartsType = typeof ResultGetCarts;
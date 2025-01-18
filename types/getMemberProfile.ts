export const ResultGetMemberProfile = {
  statusCode: 0,
  status: true,
  message: "",
  data: {
    "name": "王小姐",
    "gender": "女",
    "dobDate": "2011-10-10",
    "dobStamp": "2011-10-10",
    "email": "hexschool@hexschool.com",
    "phone": "0912123456",
    "contactTime": "全天 09：00 - 21：00",
    "addressZip": "812",
    "addressCity": "高雄市",
    "addressDistrict": "小港區",
    "addressDetail": "光耀街12345號",
  },
};

export type ResultGetMemberProfileType = typeof ResultGetMemberProfile;

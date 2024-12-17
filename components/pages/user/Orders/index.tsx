import {
  OrdersContainer,
  Header,
  Tabs,
  Tab,
  Title,
  OrderLists,
  OrderList,
  ListHeader,
  Major,
  Info,
  Type,
  Id,
  Created,
  Price,
  ListMain,
  Finished,
  Status,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  NameHeader,
  Description,
  Product,
  Td,
  Name,
  Feature,
  DetailsBtn,
  BtnContainer,
} from "./styled";

const Orders = () => {
  return (
    <>
      <OrdersContainer>
        <Header>
          <Title>我的訂單</Title>
          <Tabs>
            <Tab>全部訂單</Tab>
            <Tab>已結案</Tab>
            <Tab>租賃中</Tab>
          </Tabs>
        </Header>
        <OrderLists>
          <OrderList>
            <ListHeader $deliveryType="宅配">
              <Major>
                <Type>宅配</Type>
                <Info>
                  <Id>訂單編號 333LHJ</Id>
                  <Created>訂單時間 2024/12/24 7:32 PM</Created>
                </Info>
              </Major>
              <Price>1,700元</Price>
            </ListHeader>
            <ListMain>
              <Finished>預計抵達日期 2025/01/21</Finished>
              <Status $status="租賃中">租賃中</Status>
            </ListMain>
            <Table>
              <Thead>
                <Tr>
                  <NameHeader>輔具名稱</NameHeader>
                  <Th>數量</Th>
                  <Th>租金</Th>
                  <Th>其他費用</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Product>
                    <img
                      src="https://www.karma.com.tw/wp-content/uploads/2018/08/TW-KM-8520X-1050x960-front.png"
                      width={66}
                      height={66}
                      alt=""
                    />
                    <Description>
                      <Name>精品輪椅</Name>
                      <Feature>
                        外出旅遊輕便輪椅首選車款。輕量設計，女性也能輕易搬運。
                      </Feature>
                    </Description>
                  </Product>
                  <Td>X1</Td>
                  <Td>1,000元</Td>
                  <Td>700元</Td>
                  <BtnContainer>
                    <DetailsBtn>查看訂單</DetailsBtn>
                  </BtnContainer>
                </Tr>
              </Tbody>
            </Table>
          </OrderList>
          <OrderList>
            <ListHeader $deliveryType="自取">
              <Major>
                <Type>自取</Type>
                <Info>
                  <Id>訂單編號 356KJL</Id>
                  <Created>訂單時間 2024/11/04 7:32 PM</Created>
                </Info>
              </Major>
              <Price>1,500元</Price>
            </ListHeader>
            <ListMain>
              <Finished>於2024/11/27完成取件</Finished>
              <Status $status="已結案">已結案</Status>
            </ListMain>
            <Table>
              <Thead>
                <Tr>
                  <NameHeader>輔具名稱</NameHeader>
                  <Th>數量</Th>
                  <Th>租金</Th>
                  <Th>其他費用</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Product>
                    <img
                      src="https://www.karma.com.tw/wp-content/uploads/2018/08/TW-KM-8520X-1050x960-front.png"
                      width={66}
                      height={66}
                      alt=""
                    />
                    <Description>
                      <Name>精品輪椅</Name>
                      <Feature>
                        外出旅遊輕便輪椅首選車款。輕量設計，女性也能輕易搬運。
                      </Feature>
                    </Description>
                  </Product>
                  <Td>X1</Td>
                  <Td>1,000元</Td>
                  <Td>700元</Td>
                  <BtnContainer>
                    <DetailsBtn>查看訂單</DetailsBtn>
                  </BtnContainer>
                </Tr>
              </Tbody>
            </Table>
          </OrderList>
        </OrderLists>
      </OrdersContainer>
    </>
  );
};

export default Orders;
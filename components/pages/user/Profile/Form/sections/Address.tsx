import {
  SubTitle,
  Input,
  AddressIcon,
  AddressField,
  AddressInfo,
  AddressInput,
  AddressSelect,
  AddressRight,
  AddressLeft,
  Zip,
  City,
  District,
  Warn,
  Error, // 新增樣式
} from "./styled";
import { MdLocalShipping } from "react-icons/md";
import { FormHooks } from "../data";
import { FC } from "react";

const Address: FC<FormHooks> = ({ register, errors }) => {
  return (
    <AddressField>
      <AddressInfo>
        <AddressLeft>
          {/* 郵遞區號 */}
          <Zip>
            <SubTitle htmlFor="addressZip">
              運送地址<Warn>*</Warn>
            </SubTitle>
            <AddressInput
              type="text"
              id="addressZip"
              placeholder="800"
              {...register("addressZip", {
                required: "請輸入郵遞區號",
                pattern: {
                  value: /^[0-9]{3,5}$/,
                  message: "郵遞區號必須是 3 至 5 位數字",
                },
              })}
            />
            {errors?.addressZip && <Error>{errors.addressZip.message}</Error>}
          </Zip>

          {/* 縣市 */}
          <City>
            <SubTitle htmlFor="addressCity">
              縣市<Warn>*</Warn>
            </SubTitle>
            <AddressSelect
              id="addressCity"
              {...register("addressCity", {
                required: "請選擇縣市",
              })}
            >
              <option value="">請選擇</option>
              <option value="高雄市">高雄市</option>
            </AddressSelect>
            {errors?.addressCity && <Error>{errors.addressCity.message}</Error>}
          </City>

          {/* 鄉鎮區 */}
          <District>
            <SubTitle htmlFor="addressDistrict">
              鄉鎮區<Warn>*</Warn>
            </SubTitle>
            <AddressSelect
              id="addressDistrict"
              {...register("addressDistrict", {
                required: "請選擇鄉鎮區",
              })}
            >
              <option value="">請選擇</option>
              <option value="新興區">新興區</option>
              <option value="苓雅區">苓雅區</option>
              <option value="小港區">小港區</option>
            </AddressSelect>
            {errors?.addressDistrict && (
              <Error>{errors.addressDistrict.message}</Error>
            )}
          </District>
        </AddressLeft>

        {/* 詳細地址 */}
        <AddressRight>
          <SubTitle htmlFor="addressDetail">
            詳細地址<Warn>*</Warn>
          </SubTitle>
          <Input
            type="text"
            id="addressDetail"
            placeholder="民生一路"
            {...register("addressDetail", {
              required: "請輸入詳細地址",
              minLength: {
                value: 5,
                message: "詳細地址至少需要 5 個字",
              },
            })}
          />
          <AddressIcon>
            <MdLocalShipping size={24} color="#103F99" />
          </AddressIcon>
          {errors?.addressDetail && (
            <Error>{errors.addressDetail.message}</Error>
          )}
        </AddressRight>
      </AddressInfo>
    </AddressField>
  );
};

export default Address;

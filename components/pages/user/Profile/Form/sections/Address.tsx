import {
  SubTitle,
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
  Error,
  CityIcon,
  DistrictIcon,
} from "./styled";
import { MdArrowDropDown } from "react-icons/md";
import { FormHooks } from "../data";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

const Address: React.FC<FormHooks> = ({ errors }) => {
  const citySelectRef = useRef<HTMLSelectElement | null>(null);
  const districtSelectRef = useRef<HTMLSelectElement | null>(null);

  const { register, setValue, watch } = useFormContext();

  // 監控表單值
  const addressCity = watch("addressCity");
  const addressDistrict = watch("addressDistrict");

  // 點擊圖標模擬下拉行為
  const handleCityIconClick = () => {
    citySelectRef.current?.focus(); // 聚焦到選單
    const event = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: true,
    });
    citySelectRef.current?.dispatchEvent(event); // 模擬下拉行為
  };

  const handleDistrictIconClick = () => {
    districtSelectRef.current?.focus(); // 聚焦到選單
    const event = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: true,
    });
    districtSelectRef.current?.dispatchEvent(event); // 模擬下拉行為
  };

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
              ref={citySelectRef}
              value={addressCity || ""} // 綁定 Redux 初始值
              onChange={(e) => setValue("addressCity", e.target.value)} // 更新表單值
            >
              <option value="" disabled>
                請選擇
              </option>
              <option value="高雄市">高雄市</option>
            </AddressSelect>
            <CityIcon onClick={handleCityIconClick}>
              <MdArrowDropDown size={24} color="#103F99" />
            </CityIcon>
            {errors?.addressCity && <Error>{errors.addressCity.message}</Error>}
          </City>

          {/* 鄉鎮區 */}
          <District>
            <SubTitle htmlFor="addressDistrict">
              鄉鎮區<Warn>*</Warn>
            </SubTitle>
            <AddressSelect
              id="addressDistrict"
              ref={districtSelectRef}
              value={addressDistrict || ""} // 綁定 Redux 初始值
              onChange={(e) => setValue("addressDistrict", e.target.value)} // 更新表單值
            >
              <option value="" disabled>
                請選擇
              </option>
              <option value="新興區">新興區</option>
              <option value="苓雅區">苓雅區</option>
              <option value="小港區">小港區</option>
            </AddressSelect>
            <DistrictIcon onClick={handleDistrictIconClick}>
              <MdArrowDropDown size={24} color="#103F99" />
            </DistrictIcon>
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
          <AddressInput
            type="text"
            id="addressDetail"
            placeholder="光耀街12345號"
            {...register("addressDetail", {
              required: "請輸入詳細地址",
              minLength: {
                value: 5,
                message: "詳細地址至少需要 5 個字",
              },
            })}
          />
          {errors?.addressDetail && (
            <Error>{errors.addressDetail.message}</Error>
          )}
        </AddressRight>
      </AddressInfo>
    </AddressField>
  );
};

export default Address;

// import {
//   SubTitle,
//   Input,
//   AddressIcon,
//   AddressField,
//   AddressInfo,
//   AddressInput,
//   AddressSelect,
//   AddressRight,
//   AddressLeft,
//   Zip,
//   City,
//   District,
//   Warn,
//   Error,
//   CityIcon,
//   DistrictIcon, // 新增樣式
// } from "./styled";
// import { MdLocalShipping, MdArrowDropDown } from "react-icons/md";
// import { FormHooks } from "../data";
// import { FC } from "react";

// const Address: FC<FormHooks> = ({ register, errors }) => {
//   return (
//     <AddressField>
//       <AddressInfo>
//         <AddressLeft>
//           {/* 郵遞區號 */}
//           <Zip>
//             <SubTitle htmlFor="addressZip">
//               運送地址<Warn>*</Warn>
//             </SubTitle>
//             <AddressInput
//               type="text"
//               id="addressZip"
//               placeholder="800"
//               {...register("addressZip", {
//                 required: "請輸入郵遞區號",
//                 pattern: {
//                   value: /^[0-9]{3,5}$/,
//                   message: "郵遞區號必須是 3 至 5 位數字",
//                 },
//               })}
//             />
//             {errors?.addressZip && <Error>{errors.addressZip.message}</Error>}
//           </Zip>

//           {/* 縣市 */}
//           <City>
//             <SubTitle htmlFor="addressCity">
//               縣市<Warn>*</Warn>
//             </SubTitle>
//             <AddressSelect
//               id="addressCity"
//               {...register("addressCity", {
//                 required: "請選擇縣市",
//               })}
//             >
//               <option value="">請選擇</option>
//               <option value="高雄市">高雄市</option>
//             </AddressSelect>
//             <CityIcon>
//               <MdArrowDropDown size={24} color="#103F99" />
//             </CityIcon>
//             {errors?.addressCity && <Error>{errors.addressCity.message}</Error>}
//           </City>

//           {/* 鄉鎮區 */}
//           <District>
//             <SubTitle htmlFor="addressDistrict">
//               鄉鎮區<Warn>*</Warn>
//             </SubTitle>
//             <AddressSelect
//               id="addressDistrict"
//               {...register("addressDistrict", {
//                 required: "請選擇鄉鎮區",
//               })}
//             >
//               <option value="">請選擇</option>
//               <option value="新興區">新興區</option>
//               <option value="苓雅區">苓雅區</option>
//               <option value="小港區">小港區</option>
//             </AddressSelect>
//             <DistrictIcon>
//               <MdArrowDropDown size={24} color="#103F99" />
//             </DistrictIcon>
//             {errors?.addressDistrict && (
//               <Error>{errors.addressDistrict.message}</Error>
//             )}
//           </District>
//         </AddressLeft>

//         {/* 詳細地址 */}
//         <AddressRight>
//           <SubTitle htmlFor="addressDetail">
//             詳細地址<Warn>*</Warn>
//           </SubTitle>
//           <Input
//             type="text"
//             id="addressDetail"
//             placeholder="民生一路"
//             {...register("addressDetail", {
//               required: "請輸入詳細地址",
//               minLength: {
//                 value: 5,
//                 message: "詳細地址至少需要 5 個字",
//               },
//             })}
//           />
//           <AddressIcon>
//             <MdLocalShipping size={24} color="#103F99" />
//           </AddressIcon>
//           {errors?.addressDetail && (
//             <Error>{errors.addressDetail.message}</Error>
//           )}
//         </AddressRight>
//       </AddressInfo>
//     </AddressField>
//   );
// };

// export default Address;

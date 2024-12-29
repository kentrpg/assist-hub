import { QuickMatchButtonStyle } from "./styled";

const QuickMatchButton = () => {
  return (
    <QuickMatchButtonStyle>
      <object
        type="image/svg+xml"
        data="/images/search-Accessible.svg"
        style={{ width: "30px", height: "30px" }}
        aria-label="搜尋圖示"
      />
      {/* <img
        src="/images/search-Accessible.svg"
        alt="搜尋圖示"
        width={30}
        height={30}
      /> */}
      快速匹配
    </QuickMatchButtonStyle>
  );
};

export default QuickMatchButton;

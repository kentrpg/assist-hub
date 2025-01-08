import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionHeader,
  AccordionContent,
} from "./styled";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        使用說明
        {isOpen ? (
          <MdArrowDropUp color="#103F99" size={24} />
        ) : (
          <MdArrowDropDown color="#103F99" size={24} />
        )}
      </AccordionHeader>
      {isOpen && (
        <AccordionContent>
          <p>
            1. 展開輪椅：將輪椅從摺疊狀態打開，確保座椅完全展開且側邊卡榫扣緊。
          </p>
          <p>
            2.
            煞車使用：在固定位置時，請使用煞車控制柄將後輪鎖住，確保輪椅穩定。
          </p>
          <p>3. 使用安全帶：如需額外固定，可繫上附贈的安全帶，提供更多保護。</p>
          <p>
            4.
            摺疊收納：輕鬆拉起座椅中央的收納帶，輪椅即可快速摺疊，方便攜帶和存放。
          </p>
          <p>
            5.
            清潔保養：請使用濕布擦拭框架與坐墊，不建議直接用水沖洗；定期檢查輪胎與剎車功能，以延長使用壽命。
          </p>
        </AccordionContent>
      )}
    </AccordionContainer>
  );
};

export default Accordion;

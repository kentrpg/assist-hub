import { type FC, useState, useRef, createRef, RefObject } from "react";
import { Container1164 as Container } from "@/styles/container";
import {
  Main,
  Content,
  ToggleIcon,
  QuestionContent,
  QuestionHeader,
  QuestionBadge,
  QuestionItem,
  QuestionList,
  QuestionTitle,
  Question,
  Title,
  Navigation,
  CategoryItem,
  CategoryList,
  Header,
} from "./styled";
import { MdAdd } from "react-icons/md";

type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

type SectionType = {
  id: string;
  title: string;
  questions: QuestionType[];
};

const faqData: SectionType[] = [
  {
    id: "rental",
    title: "租賃流程相關",
    questions: [
      {
        id: 1,
        question: "如何預約看房？",
        answer: "您可以透過網站預約系統或直接撥打客服電話進行預約看房。我們的專業人員會為您安排最適合的時段。",
      },
      {
        id: 2,
        question: "租賃需要提供哪些證明文件？",
        answer: "一般需要提供身分證正反面影本、工作證明或薪資證明、近3個月薪資轉帳記錄等文件。",
      },
    ],
  },
  {
    id: "cost",
    title: "費用相關",
    questions: [
      {
        id: 3,
        question: "轉帳匯款的房租何時會入帳？",
        answer: "一般情況下，轉帳匯款在工作日的24小時內會完成入帳。若遇假日則順延至下一個工作日。",
      },
    ],
  },
  {
    id: "equipment",
    title: "輔具使用相關",
    questions: [
      {
        id: 4,
        question: "什麼是輔具大數據功能分級系統（GMFCS）？",
        answer:
          "GMFCS是一個國際通用的功能分級系統，用於評估使用者的行動能力，以協助選擇最適合的輔具。",
      },
    ],
  },
];

type SectionRefs = {
  [key: string]: RefObject<HTMLDivElement>;
};

const Faq: FC = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  
  const sectionRefs = useRef<SectionRefs>(
    faqData.reduce((acc, section) => ({
      ...acc,
      [section.id]: createRef<HTMLDivElement>(),
    }), {})
  );

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId],
    );
  };

  const scrollToSection = (sectionId: string) => {
    const targetRef = sectionRefs.current[sectionId];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Header>常見問題</Header>
      <Main>
        <Navigation>
          <CategoryList>
            {faqData.map((section) => (
              <CategoryItem 
                key={section.id} 
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </CategoryItem>
            ))}
          </CategoryList>
        </Navigation>
        <Content>
          {faqData.map((section) => (
            <Question 
              key={section.id} 
              id={section.id}
              ref={sectionRefs.current[section.id]}
            >
              <Title>{section.title}</Title>
              <QuestionList>
                {section.questions.map((item) => (
                  <QuestionItem key={item.id}>
                    <QuestionHeader onClick={() => toggleQuestion(item.id)}>
                      <QuestionBadge>Q</QuestionBadge>
                      <QuestionTitle>{item.question}</QuestionTitle>
                      <ToggleIcon $isOpen={openQuestions.includes(item.id)}>
                        <MdAdd size={24} />
                      </ToggleIcon>
                    </QuestionHeader>
                    <QuestionContent $isOpen={openQuestions.includes(item.id)}>
                      {item.answer}
                    </QuestionContent>
                  </QuestionItem>
                ))}
              </QuestionList>
            </Question>
          ))}
        </Content>
      </Main>
    </Container>
  );
};

export default Faq;

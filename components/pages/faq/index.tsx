import { useRef, createRef } from "react";
import { Container1164 as Container } from "@/styles/container";
import {
  Main,
  Content,
  ToggleIcon,
  QuestionHeader,
  QuestionBadge,
  QuestionList,
  QuestionTitle,
  Question,
  Title,
  Navigation,
  CategoryItem,
  CategoryList,
  Header,
  HiddenCheckbox,
  QuestionBody,
  QuestionItem,
  QuestionContent,
} from "./styled";
import { MdAdd } from "react-icons/md";
import { faqData, SectionRefs } from "./data";
import { useRouter } from "next/router";

const Faq: React.FC = () => {
  const router = useRouter();
  const sectionRefs = useRef<SectionRefs>(
    faqData.reduce(
      (acc, section) => ({
        ...acc,
        [section.id]: createRef<HTMLDivElement>(),
      }),
      {},
    ),
  );

  const currentHash = router.asPath.split("#")[1] || "";

  return (
    <Container>
      <Header>常見問題</Header>
      <Main>
        <Navigation>
          <CategoryList>
            {faqData.map((section) => (
              <CategoryItem
                key={section.id}
                href={`/faq/#${section.id}`}
                scroll={false}
                $isActive={currentHash === section.id}
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
                    <HiddenCheckbox type="checkbox" />
                    <QuestionHeader>
                      <QuestionBadge>Q</QuestionBadge>
                      <QuestionTitle>{item.question}</QuestionTitle>
                      <ToggleIcon>
                        <MdAdd size={24} />
                      </ToggleIcon>
                    </QuestionHeader>
                    <QuestionBody>
                      <QuestionContent>{item.answer}</QuestionContent>
                    </QuestionBody>
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

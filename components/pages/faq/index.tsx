import { useRef, createRef, useEffect, useState } from "react";
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
import Link from "next/link";

const Faq: React.FC = () => {
  const router = useRouter();
  const [activeSectionId, setActiveSectionId] = useState(
    router.asPath.split("#")[1] || "",
  );
  const faqSectionRefs = useRef<SectionRefs>(
    faqData.reduce(
      (acc, section) => ({
        ...acc,
        [section.id]: createRef<HTMLDivElement>(),
      }),
      {},
    ),
  );

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (!hash) return;

    const targetRef = faqSectionRefs.current[hash]?.current;
    if (targetRef) {
      setTimeout(() => targetRef.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();

    const targetRef = faqSectionRefs.current[sectionId];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });

      const newPath = `${router.pathname}#${sectionId}`;
      window.history.replaceState(null, "", newPath);
      setActiveSectionId(sectionId);
    }
  };

  return (
    <Container>
      <Header>常見問題</Header>
      <Main>
        <Navigation>
          <CategoryList>
            {faqData.map((section) => (
              <Link
                key={section.id}
                href={`/faq/#${section.id}`}
                legacyBehavior
                passHref
              >
                <CategoryItem
                  onClick={(e) => handleSectionClick(section.id, e)}
                  $isActive={activeSectionId === section.id}
                >
                  {section.title}
                </CategoryItem>
              </Link>
            ))}
          </CategoryList>
        </Navigation>
        <Content>
          {faqData.map((section) => (
            <Question
              key={section.id}
              id={section.id}
              ref={faqSectionRefs.current[section.id]}
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

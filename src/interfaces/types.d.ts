export interface ContactFormDto {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface QuesionnaireFormDto {
  name: string;
  email: string;
  phone?: string;
}

export interface HexagonTileDto {
  label: string;
  image: string;
  description: string;
  demo: boolean;
}

export interface QuestionDto {
  id: string;
  question: string;
  isMultiSelect: boolean;
  isAnswered: boolean;
  contactForm?: boolean;
  answers: AnswerDto[];
}

export interface AnswerDto {
  id: string;
  type: "checkbox" | "input" | "textarea";
  answer: string;
  label?: string;
  tooltip?: string;
}

export interface UserAnswerDto {
  questionId: string;
  selectedAnswers?: string[];
  textAnswer?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  link: string;
  image: {
    url: string;
    formats: {
      large: { url: string };
      medium: { url: string };
      small: { url: string };
      thumbnail: { url: string };
    };
  };
}

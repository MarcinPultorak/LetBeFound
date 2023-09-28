export interface ContactFormDto {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface HexagonTileDto {
  label: string;
  image: string;
  description: string;
  demo: boolean;
}

export interface QuestionnaireDto {
  questionsArray: QuestionDto[];
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
  answer: string;
  label?: string;
}

export interface UserAnswerDto {
  questionId: string;
  selectedAnswers?: string[];
  textAnswer?: string;
}

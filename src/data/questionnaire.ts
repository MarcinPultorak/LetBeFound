import { QuestionnaireDto } from "@/interfaces/types";

export const questionnaireData: QuestionnaireDto = {
  questionsArray: [
    {
      id: "1",
      question: "Jaki typ strony Cię interesuje?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "1a",
          type: "checkbox",
          answer: "Wizytówka, bez dodatkowych podstron tzw. Landing Page",
        },
        {
          id: "1b",
          type: "checkbox",
          answer: "Rozbudowana strona z odnośnikami do poszczególnych podstron",
        },
      ],
    },
    {
      id: "2",
      question:
        "Ilość sekcji (Landing page)/podstron na stronie? (np. Home, O nas, Oferta, Realizacje, Kontakt itp.)",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "2a",
          type: "checkbox",
          answer: "1-5",
        },
        {
          id: "2b",
          type: "checkbox",
          answer: "6-10",
        },
        {
          id: "2c",
          type: "checkbox",
          answer: "11-15",
        },
        {
          id: "2d",
          type: "checkbox",
          answer: "16+",
        },
      ],
    },
    {
      id: "3",
      question:
        "Jakie dodatkowe funkcjonalności chciałbyś dodać do swojej strony?",
      isMultiSelect: true,
      isAnswered: false,
      answers: [
        {
          id: "3a",
          type: "checkbox",
          answer: "Formularz kontaktowy",
        },
        {
          id: "3b",
          type: "checkbox",
          answer: "Mapa z lokalizacją firmy",
        },
        {
          id: "3c",
          type: "checkbox",
          answer: "Wdrożenie Google Analytics",
        },
        {
          id: "3d",
          type: "checkbox",
          answer: "Przewijany slider ze zdjęciami",
        },
        {
          id: "3e",
          type: "checkbox",
          answer: "Galeria zdjęć",
        },
        {
          id: "3f",
          type: "textarea",
          answer: "",
          label: "Inne:",
        },
      ],
    },
    {
      id: "4",
      question: "Czy posiadasz swój projekt graficzny strony?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "4a",
          type: "checkbox",
          answer: "Tak",
        },
        {
          id: "4b",
          type: "checkbox",
          answer: "Nie",
        },
      ],
    },
    {
      id: "5",
      question:
        "Czy potrzebujesz pomocy w przygotowaniu treści na stronę (nagłówki, teksty)?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "5a",
          type: "checkbox",
          answer: "Tak",
        },
        {
          id: "5b",
          type: "checkbox",
          answer: "Nie",
        },
      ],
    },
    {
      id: "6",
      question:
        "Dodatkowe uwagi (możesz tutaj wpisać np. swoje preferencje co do wyglądu strony, podać linki do stron, które Ci się podobają lub opisać bardziej szczegółowo czego oczekujesz na swojej stronie internetowej)",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "6a",
          type: "textarea",
          answer: "",
          label: "Twoje uwagi",
        },
      ],
    },
  ],
};

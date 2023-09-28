import { QuestionnaireDto } from "@/interfaces/types";

export const QuestionnaireData: QuestionnaireDto = {
  currentState: "inProgress",
  questionsArray: [
    {
      id: "1",
      question: "Jakiego typu stronę oczekujesz?",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "a",
          answer: "Wizytówka, bez dodatkowych podstron tzw. Landing Page",
          isSelected: false,
        },
        {
          id: "b",
          answer: "Rozbudowana strona z odnośnikami do poszczególnych podstron",
          isSelected: false,
        },
      ],
    },
    {
      id: "2",
      question:
        "Ilość sekcji/podstron na stronie? (np. Strona główna, O nas, Oferta, Realizacje, Kontakt itp.)",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "a",
          answer: "1-5",
          isSelected: false,
        },
        {
          id: "b",
          answer: "6-10",
          isSelected: false,
        },
        {
          id: "c",
          answer: "11-15",
          isSelected: false,
        },
        {
          id: "d",
          answer: "16+",
          isSelected: false,
        },
      ],
    },
    {
      id: "3",
      question: "Funkcjonalność na stronie",
      isMultiSelect: true,
      isAnswered: false,
      answers: [
        {
          id: "a",
          answer: "Formularz kontaktowy",
          isSelected: false,
        },
        {
          id: "b",
          answer: "Mapa z lokalizacją firmy",
          isSelected: false,
        },
        {
          id: "c",
          answer: "Wdrożenie Google Analytics",
          isSelected: false,
        },
        {
          id: "d",
          answer: "Przewijany slider ze zdjęciami",
          isSelected: false,
        },
        {
          id: "e",
          answer: "Galeria zdjęć",
          isSelected: false,
        },
        {
          id: "d",
          answer: "",
          label: "inne",
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
          id: "a",
          answer: "Tak",
          isSelected: false,
        },
        {
          id: "b",
          answer: "Nie",
          isSelected: false,
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
          id: "a",
          answer: "Tak",
          isSelected: false,
        },
        {
          id: "b",
          answer: "Nie",
          isSelected: false,
        },
      ],
    },
    {
      id: "6",
      question:
        "Dodatkowe uwagi (Możesz tutaj wpisać np. Swoje preferencję co do wyglądu strony, podać linki do stron, które Ci się podobają lub opisać bardziej szczegółowo czego oczekujesz na swojej stronie internetowej)",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "a",
          answer: "",
        },
      ],
    },
    {
      id: "7",
      question: "Dane kontaktowe",
      isMultiSelect: false,
      isAnswered: false,
      answers: [
        {
          id: "a",
          answer: "",
          label: "Imię",
        },
        {
          id: "b",
          answer: "",
          label: "Telefon kontaktowy",
        },
        {
          id: "c",
          answer: "",
          label: "Adres email",
        },
      ],
    },
  ],
};

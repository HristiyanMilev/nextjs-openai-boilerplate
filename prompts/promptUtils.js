// file: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in collaborative study, knowledge sharing, and educational content generation.",
  };
}

export function getUserPrompt(input, type) {
  if (type === 'studyNote') {
    return {
      role: "user",
      content: `Create a detailed study note on the following topic: ${input}.`,
    };
  } else if (type === 'quiz') {
    return {
      role: "user",
      content: `Generate a quiz with 5 multiple-choice questions about ${input}.`,
    };
  } else if (type === 'flashcard') {
    return {
      role: "user",
      content: `Create a flashcard with a question and an answer for the topic: ${input}.`,
    };
  } else if (type === 'discussion') {
    return {
      role: "user",
      content: `Create a discussion thread for the topic: ${input}.`,
    };
  }
}

export function getFunctions() {
  return [
    {
      name: "create_study_note",
      description: "Create a detailed study note for a given topic.",
      parameters: {
        type: "object",
        properties: {
          studyNote: {
            type: "string",
            description: "The generated study note for the topic.",
          },
        },
        "required": ["studyNote"]
      },
    },
    {
      name: "generate_quiz",
      description: "Generate a multiple-choice quiz for a given topic.",
      parameters: {
        type: "object",
        properties: {
          quiz: {
            type: "array",
            description: "The multiple-choice quiz questions and answers.",
            items: {
              type: "object",
              properties: {
                question: {
                  type: "string",
                },
                choices: {
                  type: "array",
                  items: { type: "string" },
                },
                correctAnswer: {
                  type: "string",
                },
              },
            },
          },
        },
        "required": ["quiz"]
      },
    },
    {
      name: "create_flashcard",
      description: "Create a flashcard with a question and answer for a topic.",
      parameters: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The question on the flashcard.",
          },
          answer: {
            type: "string",
            description: "The answer to the flashcard question.",
          },
        },
        "required": ["question", "answer"]
      },
    },
    {
      name: "create_discussion_thread",
      description: "Create a discussion thread for a given topic.",
      parameters: {
        type: "object",
        properties: {
          thread: {
            type: "string",
            description: "The discussion thread text for the topic.",
          },
        },
        "required": ["thread"]
      },
    },
  ];
}

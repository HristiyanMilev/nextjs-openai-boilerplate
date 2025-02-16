import Head from "next/head";
import { useState } from "react";
import TextInput from "@/components/TextInput";
import SubmitButton from "@/components/SubmitButton";
import ResponseDisplay from "@/components/ResponseDisplay";
import StudyNote from "@/components/StudyNote";
import Quiz from "@/components/Quiz";
import Flashcard from "@/components/Flashcard";
import DiscussionThread from "@/components/DiscussionThread";
import useApi from "@/hooks/useApi";
import { getUserPrompt } from "../prompts/promptUtils";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("studyNote"); // Default type is study note
  const { data, error, loading, fetchData } = useApi();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitValue = getUserPrompt(inputValue, type);
    await fetchData("/api/openai", "POST", submitValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Collaborative Study Platform</title>
        <meta name="description" content="A platform for collaborative learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>Collaborative Study Platform</h1>
        <p>Share your study notes, quizzes, flashcards, and discuss topics.</p>
        <form>
          <select onChange={handleSelectChange} value={type}>
            <option value="studyNote">Create Study Note</option>
            <option value="quiz">Create Quiz</option>
            <option value="flashcard">Create Flashcard</option>
            <option value="discussion">Create Discussion</option>
          </select>
          <ResponseDisplay data={data} error={error} loading={loading} />
          {type === "studyNote" && data && <StudyNote note={data.result.studyNote} />}
          {type === "quiz" && data && <Quiz questions={data.result.quiz} />}
          {type === "flashcard" && data && <Flashcard question={data.result.question} answer={data.result.answer} />}
          {type === "discussion" && data && <DiscussionThread thread={data.result.thread} />}
          <TextInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter topic or question"
          />
          <SubmitButton onClick={handleSubmit} disabled={loading} />
        </form>
      </main>
    </>
  );
}

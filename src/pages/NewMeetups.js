import NewMeetupForm from "../Components/layout/Meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://console.firebase.google.com/project/react-project-4a947/database/react-project-4a947-default-rtdb/data/~2F",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return (
    <section>
      <h1>NewMeetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;

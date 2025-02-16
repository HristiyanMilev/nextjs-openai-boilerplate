// file: /components/DiscussionThread.js
const DiscussionThread = ({ thread }) => {
    return (
      <div className="discussion-thread">
        <h3>Discussion Thread:</h3>
        <p>{thread}</p>
      </div>
    );
  };
  
  export default DiscussionThread;
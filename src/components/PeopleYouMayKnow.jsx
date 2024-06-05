import FollowSuggestions from "./FollowSuggestions";

const PeopleYouMayKnow = () => {
  return (
    <>
      <div className="card w-96 border rounded-lg border-base-300 shadow-xl mx-auto mt-5">
        <div className="card-body">
          <h2 className="card-title">Who to follow</h2>
          <FollowSuggestions />
          <FollowSuggestions />
          <FollowSuggestions />
          <FollowSuggestions />
          <FollowSuggestions />
          <FollowSuggestions />
          <FollowSuggestions />
        </div>
      </div>
    </>
  );
};

export default PeopleYouMayKnow;

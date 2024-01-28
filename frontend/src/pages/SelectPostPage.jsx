import SelectExistingPost from "../components/SelectExistingPost";
import CreatePost from "../components/SelectExistingPost";

//this will be the page that allows you to choose or create a post
function SelectPostPage() {
  return (
    <div className="flex md:flex-col justify-center items-center m-5 gap-y-10">
      {/* Steps UI */}
      <ul className="mx-auto items-center steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Select Post Location</li>
        <li className="step">Payment</li>
        <li className="step">Confirm</li>
      </ul>
      <SelectExistingPost />
    </div>
  );
}

export default SelectPostPage;

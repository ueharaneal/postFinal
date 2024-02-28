import React, { useState } from "react";
// Assuming StepOne, StepTwo, and FinalStep are correctly imported
import StepOne from "@/components/selectPostForm/SelectionStepOne";
import StepTwo from "@/components/selectPostForm/SelectionStepTwo";
import FinalStep from "@/components/selectPostForm/SelectionFinalStep";

import SteppedProgress from "@/components/selectPostForm/SteppedProgress";

function AFindPostPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // Placeholder for form data handling

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const handleSubmit = () => {
    // Final form submission logic here
    console.log("Form Data:", formData);
  };

  // This approach ensures that the switch logic is used only to determine the content to be rendered.
  let stepContent;
  switch (currentStep) {
    case 0:
      stepContent = (
        <StepOne nextStep={nextStep} handleFormData={handleFormData} />
      );
      break;
    case 1:
      stepContent = (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleFormData}
        />
      );
      break;
    case 2:
      stepContent = (
        <FinalStep handleSubmit={handleSubmit} prevStep={prevStep} />
      );
      break;
    default:
      stepContent = <div>Invalid step</div>;
      break;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col font-bold text-3xl gap-y-6">
        {/* This will render the current step content */}
        
        <SteppedProgress 
            currentComponent={stepContent}
            currentStep={currentStep}
            onNext={nextStep}
            onPrev={prevStep}
            numSteps={3}
            stepContent={stepContent}
        />
      </div>
    </div>
  );
}

export default AFindPostPage;

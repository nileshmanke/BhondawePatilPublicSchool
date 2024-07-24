import React from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Prepare data for sending via EmailJS
    const templateParams = {
      studentName: formData.get("studentName"),
      gradeRequired: formData.get("gradeRequired"),
      parentName: formData.get("parentName"),
      contactNumber: formData.get("contactNumber"),
      email: formData.get("email"),
      residentialAddress: formData.get("residentialAddress"),
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_zi7vqge",
        "template_mw21uxk",
        templateParams,
        "TCT0ia-ADGvbTjgvD"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });

    // Clear form fields after submission (if needed)
    event.target.reset();
  };

  return (
    <>
      <div className=" flex justify-center p-8 sm:p-0">
        <div className="bg-blue-900  text-[#e5e7eb] sm:text-xl ">
          <div className=" w-full text-sm sm:text-2xl">
            <form onSubmit={handleSubmit}>
              <h1 className=" bg-primary">
                Please fill the Form below to Place Admission Enquiry
              </h1>
              <div className="font-bold text-primary sm:p-10"> 
              <div className="sm:w-[800px]  w-full sm:p-5 p-3">
                <input
                  name="studentName"
                  className="bg-primary sm:w-[600px] sm:text-3xl w-full text-sm font-bold font-mono border-b-2 border-white "
                  type="text"
                  placeholder="Name Of Student"
                />
              </div>

              <div className="sm:w-[800px] w-full sm:p-5 p-3 ">
                <input
                  name="gradeRequired"
                  className="bg-primary sm:w-[600px] sm:text-3xl w-full text-sm font-bold font-mono border-b-2 border-white"
                  type="text"
                  placeholder="Admission Required For Which Grade?"
                />
              </div>

              <div className="sm:w-[800px] w-full sm:p-5 p-3 ">
                <input
                  name="parentName"
                  className=" bg-primary sm:w-[600px] sm:text-3xl w-full text-sm font-bold font-mono border-b-2 border-white "
                  type="text"
                  placeholder="Parent Name"
                />
              </div>

              <div className="sm:w-[800px] w-full sm:p-5 p-3">
                <input
                  name="contactNumber"
                  className=" bg-primary sm:w-[600px] sm:text-3xl w-full text-sm font-bold font-mono border-b-2 border-white"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>

              <div className="sm:w-[800px] w-full  sm:p-5 p-3">
                <input
                  name="email"
                  className="bg-primary sm:w-[600px] sm:text-3xl w-full text-sm font-bold font-mono border-b-2 border-white "
                  type="email"
                  placeholder="Email ID"
                />
              </div>

              <div className="sm:w-[800px] w-full  sm:p-5 p-3">
                <input
                  name="residentialAddress"
                  className="bg-primary sm:w-[600px] sm:text-3xl w-full text-sm font-bold font-mono border-b-2 border-white"
                  type="text"
                  placeholder="Residential Address"
                />
              </div>
              </div>

              <div className=" p-4 my-2 text-center">
                <button 
                  type="submit"
                  className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

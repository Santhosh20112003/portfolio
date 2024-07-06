import React from "react";

function Form() {
  return (
    <section class="pb-10 md:pb-24 pt-10 md:pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
          <div class="lg:max-w-xl hidden md:flex relative rounded-xl w-full h-[550px]  items-center justify-center  bg-cover bg-no-repeat bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/096bc621-fe2b-4266-b44b-0e5b904f54c4/detvbeu-26691a10-6bcb-4346-bca0-efbd6a62012b.png/v1/fit/w_828,h_828,q_70,strp/cyber_spirit_by_autlyxart_detvbeu-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzA5NmJjNjIxLWZlMmItNDI2Ni1iNDRiLTBlNWI5MDRmNTRjNFwvZGV0dmJldS0yNjY5MWExMC02YmNiLTQzNDYtYmNhMC1lZmJkNmE2MjAxMmIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.W8CwqqJn540LutZ9sZDY6itqy5IW4SQZRhsfff8N93U')] ">
            <div className="bg-pink-300 absolute top-5 -left-[3.2rem] px-8 py-2 rounded-md -rotate-45">
              Reach us soon
            </div>
          </div>
          <div class="flex items-center lg:mb-0 mb-10">
            <div class="">
              <h4 class="text-gray-500 text-base font-medium leading-6 mb-4 lg:text-left text-center">
                Contact Us
              </h4>
              <h2 class="text-[#213556] font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                Reach Out To Us
              </h2>
              <form
                action="https://formsubmit.co/santhoshtechnologies22@gmail.com"
                method="POST"
              >
                <input
                  type="text"
                  id="name"
                  required
                  name="Name"
                  class="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-xl md:rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Name"
                />
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  class="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-xl md:rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Email"
                />
                <textarea
                  name="Message"
                  required
                  id="Message"
                  class="w-full h-44 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-5"
                  placeholder="Message Here"
                ></textarea>
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Hello, I am Santhosh Shanmugam from SanTech. Thank you for your submission. To maintain communication, please email me at santhoshtechnologies22@gmail.com."
                />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Form Submission From SanTech Portfolio Website"
                />
                <button type="submit" class="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-xl md:rounded-full bg-[#213556] shadow transition-all duration-700 hover:bg-[#3a5d98]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;

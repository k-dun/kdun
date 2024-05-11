export default function Skills() {

  return (
    <>
      <section id="skills" className="w-[90svw] bg-[#FCFAFF] mx-auto flex flex-col justify-center mt-32 pb-4">
        <h3 className="w-[50svw] text-xl mb-16"><span className="text-[#FF8080]">02.1</span> Tech Skills</h3>

	      <div class="grid w-full divide-y divide-[#FF8080] mx-auto">
		      <div class="py-5">
			      <details class="group">
				      <summary class="flex justify-between items-center cursor-pointer list-none">
					      <span className="justify-start text-lg">FRONTEND</span>
					      <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
				      </summary>
				      <p class="text-[#505050] text-base mt-3">
					      HTML, CSS, TailwindCSS, Javascript, React, Cypress, MaterialUI, ShadCN, DaisyUI
				      </p>
			      </details>
		      </div>

          <div class="py-5">
			      <details class="group">
				      <summary class="flex justify-between items-center cursor-pointer list-none">
					      <span className="justify-start text-lg">BACKEND</span>
					      <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
				      </summary>
				      <p class="text-[#505050] text-base mt-3">
					      Javascript, Node.js, Express.js, Jest, Ruby, RSpec
				      </p>
			      </details>
		      </div>

          <div class="py-5">
			      <details class="group">
				      <summary class="flex justify-between items-center cursor-pointer list-none">
					      <span className="justify-start text-lg">DESIGN/TOOLS</span>
					      <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
				      </summary>
				      <p class="text-[#505050] text-base mt-3">
					      Canva, Figma, Github, VSCode
				      </p>
			      </details>
		      </div>

          <div class="py-5">
			      <details class="group">
				      <summary class="flex justify-between items-center cursor-pointer list-none">
					      <span className="justify-start text-lg">METHODOLOGIES</span>
					      <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
				      </summary>
				      <p class="text-[#505050] text-base mt-3">
					      Agile, Test-Driven Development (TDD), Object-oriented Programming (OOP)
				      </p>
			      </details>
		      </div>
        </div>

        <h3 className="w-[50svw] text-xl my-16"><span className="text-[#FF8080]">02.2</span> Soft Skills</h3>
      </section>
    </>
  );
}
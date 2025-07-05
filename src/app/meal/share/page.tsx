import ImagePicker from "../../../../components/meal/ImagePicker";
import { shareMeal } from "../../../../lib/ServerActions";

export default function ShareMealPage() {
  return (
    <>
      <header
        className="
          gap-12
          my-12 mx-auto mb-20
          w-[90%] max-w-[75rem]
          text-[#ddd6cb]
          text-[1.5rem]
        "
      >
        <h1 className="font-montserrat">
          Share your{" "}
          <span
            className="
              bg-gradient-to-r from-[#f9572a] to-[#ff8a05]
              bg-clip-text text-transparent
              "
          >
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] mx-auto my-12 text-white">
        <form className="max-w-[50rem]" action={shareMeal}>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />

          {/* IMAGE PICKER */}
          <p className="text-right">
            <button
              type="submit"
              className="
                border-0 px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
                text-white rounded-sm cursor-pointer font-inherit text-[1.25rem]
                shadow-[0_2px_5px_rgba(0,0,0,0.3)]
                transition-all duration-300
                hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]
                focus:bg-gradient-to-r focus:from-[#fd4715] focus:to-[#f9b241]
                disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed
              "
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}

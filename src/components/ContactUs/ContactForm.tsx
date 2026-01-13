export default function ContactForm() {
  return (
    <div
      className="
        relative
        w-full
        max-w-xl
        mx-auto
        px-4

        lg:absolute
        lg:right-40
        lg:top-32
        lg:px-0

        z-20
      "
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
        {/* Heading */}
        <h3 className="text-2xl font-bold text-gray-900 mb-11">
          Send Us A Message
        </h3>

        {/* <p className="text-gray-500 text-sm mb-8 max-w-md">
          I'm a Paragraph. Click Here To Add Your Own Text And Edit Me.
          It's Easy. Just Click “Edit Text” Or Double Click Me
        </p> */}

        <form className="space-y-5">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Business Email"
              className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full resize-none rounded-lg border border-blue-200 bg-blue-50 px-4 py-4 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
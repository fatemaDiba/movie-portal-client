import { Helmet } from "react-helmet-async";

const Accessibility = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Accessibility-Movie Portal</title>
      </Helmet>
      <section class="max-w-4xl mx-auto my-10 px-6 mt-28 mb-20">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">
          Accessibility Statement
        </h2>
        <p class="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          At Movie Portal, we are committed to ensuring that our website is
          accessible to everyone, including people with disabilities. We aim to
          meet or exceed the accessibility standards set by the Web Content
          Accessibility Guidelines (WCAG) 2.1 at the AA level.
        </p>

        <p class="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          To help us make our website accessible to all, we have implemented the
          following:
        </p>
        <ul class="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          <li>
            Alt text for images and videos to ensure users with screen readers
            can understand the content.
          </li>
          <li>
            Keyboard navigation support so that all website features are
            accessible without a mouse.
          </li>
          <li>
            High contrast colors and text resizing options for improved
            visibility.
          </li>
          <li>Clear and easy-to-understand language throughout the website.</li>
        </ul>

        <p class="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          If you encounter any accessibility issues or need assistance, please
          contact us, and we will be happy to assist you in making the website
          more accessible.
        </p>
      </section>
    </div>
  );
};

export default Accessibility;

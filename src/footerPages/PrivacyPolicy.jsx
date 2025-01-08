import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Privacy-Policy-Movie Portal</title>
      </Helmet>
      <div>
        <section className="max-w-4xl mx-auto my-10 px-6 mt-28 mb-20">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            <strong>Effective Date:</strong> January 6, 2025
          </p>

          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            At <strong>Movie Portal</strong>, we value and respect the privacy
            of our users. This Privacy Policy outlines how we collect, use,
            disclose, and safeguard your personal information when you visit our
            movie portal website. By using this website, you agree to the
            practices outlined in this policy.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            <li>
              Registration Information: When you sign up for an account, we may
              collect your name, email address, and other necessary details.
            </li>
            <li>
              User Activity: We track your interactions with the website,
              including searches, viewed movies, and preferences.
            </li>
            <li>
              Cookies: Our website uses cookies to enhance your user experience.
              Cookies help us analyze website traffic and personalize content.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            <li>
              To personalize your experience and recommend movies based on your
              preferences.
            </li>
            <li>
              To improve our website and its features based on user feedback.
            </li>
            <li>
              To communicate with you about updates, promotions, or important
              information related to your account.
            </li>
            <li>To process your requests and provide customer support.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            Data Security
          </h2>
          <p className="text-lg text-gray-700 dark:text-white/80 mb-4">
            We implement a variety of security measures to protect your personal
            data. While we strive to protect your information, no method of
            transmission over the internet is 100% secure. By using our site,
            you acknowledge and accept these risks.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            Sharing Your Information
          </h2>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            <li>
              <strong>Service Providers:</strong> We may share information with
              trusted third-party vendors who assist us in operating our
              website, conducting business, or providing services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law or to protect our rights or the
              safety of others.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            Your Rights
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-white/80 mb-4">
            <li>Access the personal data we hold about you.</li>
            <li>Update or correct your information.</li>
            <li>
              Request the deletion of your data (subject to any legal
              obligations).
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            Third-Party Links
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            Our website may contain links to third-party sites. We are not
            responsible for the content or privacy practices of these external
            sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            Children’s Privacy
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            Our website is not intended for children under the age of 13, and we
            do not knowingly collect personal information from children. If we
            become aware of any such information being collected, we will take
            steps to delete it.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            We reserve the right to update this Privacy Policy at any time. When
            we make changes, we will post the updated policy on this page and
            update the "Effective Date."
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
            {" "}
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            If you have any questions regarding this Privacy Policy, please
            contact us at:
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
            <strong>Email: </strong>
            <a
              href="mailto:yourcontactemail@example.com"
              className="text-blue-600"
            >
              movieportal@gmail.com
            </a>
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80">
            <strong>Phone:</strong> [+082663542431]
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

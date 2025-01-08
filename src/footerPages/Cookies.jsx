import { Helmet } from "react-helmet-async";

const Cookies = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Manage Cookies-Movie Portal</title>
      </Helmet>
      <section className="max-w-4xl mx-auto my-10 px-6 mt-28 mb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Manage Cookies
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          At Movie Portal, we use cookies to enhance your user experience and
          analyze site traffic. Cookies are small text files stored on your
          device when you visit our website. These cookies help us provide a
          better and more personalized browsing experience.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Types of Cookies We Use
        </h3>
        <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for
            the website to function properly. They enable core features such as
            secure login and account management.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies help us
            understand how visitors interact with our website by collecting
            information about page visits, time spent on pages, and other data
            to improve site performance.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies allow us to
            remember your preferences and customize the website’s content based
            on your past interactions, such as language preferences and region
            settings.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> These cookies are used to
            deliver personalized advertisements based on your browsing behavior.
            They may also help limit the number of times you see an ad and
            measure the effectiveness of advertising campaigns.
          </li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-4">
          How to Manage Cookies
        </h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          You have control over the cookies placed on your device. You can
          manage your cookie preferences in the following ways:
        </p>
        <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          <li>
            <strong>Browser Settings:</strong> Most browsers allow you to
            control cookies through their settings. You can block all cookies or
            delete cookies already stored on your device. Please refer to your
            browser’s help section for specific instructions on how to manage
            cookie settings.
          </li>
          <li>
            <strong>Cookie Consent Banner:</strong> Upon visiting our website,
            you will be presented with a cookie consent banner. You can click on
            the "Manage Preferences" option to choose which cookies you would
            like to allow or reject. You can update your preferences at any
            time.
          </li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-4">Please Note</h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          Disabling cookies may affect your ability to use certain features of
          our website. For example, if you disable essential cookies, you may
          not be able to log in to your account or access some secure areas of
          the site.
        </p>

        <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-4">
          By using our website, you consent to the use of cookies in accordance
          with this policy. If you do not wish to accept cookies, you can manage
          your preferences as described above.
        </p>
      </section>
    </div>
  );
};

export default Cookies;
